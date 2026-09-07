-- ============================================================
--  크놀AD 보안 1단계 — Supabase SQL Editor 에서 그대로 실행
--  · 기존 회원 비밀번호는 그대로 유지(암호화되어 Auth 로 이전)
--  · 관리자 계정: hrcbrand@outlook.com  (아래 [1] 에서 비밀번호만 바꿔 넣으세요)
--  · 되돌리기: security_phase1_rollback.sql
-- ============================================================

-- [1] ★★ 실행 전에 이 두 값만 바꾸세요 ★★
--     관리자 비밀번호 (8자 이상 권장)
create temp table if not exists _cfg(k text primary key, v text);
insert into _cfg values
  ('admin_email','hrcbrand@outlook.com'),
  ('admin_password','여기에_관리자_비밀번호_입력'),   -- ★ 바꾸세요
  ('cs_email','support@whrcompany.com'),
  ('cs_password','여기에_CS_비밀번호_입력')            -- ★ 바꾸세요 (CS 계정 안 쓰면 그대로 둬도 됨: 로그인만 안 될 뿐)
on conflict (k) do update set v=excluded.v;

begin;

-- ------------------------------------------------------------
-- 0. 확장 / 보조 컬럼
-- ------------------------------------------------------------
create extension if not exists pgcrypto;

alter table public.knollad_members add column if not exists user_id uuid;
alter table public.knollad_members alter column password drop not null;
alter table public.knollad_members add column if not exists role text;
alter table public.knollad_members add column if not exists created_at timestamptz default now();

-- ------------------------------------------------------------
-- 1. 헬퍼 함수 (RLS 에서 사용)
-- ------------------------------------------------------------
create or replace function public.knollad_my_email() returns text
language sql stable as $$ select lower(coalesce(auth.jwt()->>'email','')) $$;

create or replace function public.knollad_my_role() returns text
language sql stable security definer set search_path=public as $$
  select role from public.knollad_members where lower(email)=public.knollad_my_email() order by created_at nulls last limit 1
$$;

create or replace function public.knollad_is_admin() returns boolean
language sql stable security definer set search_path=public as $$
  select coalesce(public.knollad_my_role() in ('관리자','CS','CS담당자'), false)
$$;

create or replace function public.knollad_is_superadmin() returns boolean
language sql stable security definer set search_path=public as $$
  select coalesce(public.knollad_my_role() = '관리자', false)
$$;

-- 요청 헤더 X-Consult-Id (비로그인 상담창용)
create or replace function public.knollad_req_consult_id() returns text
language sql stable as $$
  select coalesce((current_setting('request.headers', true))::json->>'x-consult-id','')
$$;

-- ------------------------------------------------------------
-- 2. Auth 사용자 생성 함수 (비밀번호는 bcrypt 로 암호화 저장 · 이미 bcrypt 해시($2…)면 그대로 이전)
-- ------------------------------------------------------------
create or replace function public.knollad_create_auth_user(p_email text, p_password text, p_meta jsonb default '{}'::jsonb)
returns uuid language plpgsql security definer set search_path=public,auth,extensions as $$
declare uid uuid; e text := lower(trim(p_email));
begin
  if e = '' or p_password is null or length(p_password) < 1 then return null; end if;
  select id into uid from auth.users where lower(email)=e limit 1;
  if uid is not null then return uid; end if;
  uid := gen_random_uuid();
  insert into auth.users (instance_id,id,aud,role,email,encrypted_password,email_confirmed_at,
      raw_app_meta_data,raw_user_meta_data,created_at,updated_at,confirmation_token,recovery_token,email_change_token_new,email_change,is_sso_user)
  values ('00000000-0000-0000-0000-000000000000',uid,'authenticated','authenticated',e,(case when p_password like '$2%' then p_password else crypt(p_password, gen_salt('bf')) end),now(),
      '{"provider":"email","providers":["email"]}'::jsonb, coalesce(p_meta,'{}'::jsonb), now(),now(),'','','','',false);
  insert into auth.identities (id,user_id,provider_id,identity_data,provider,last_sign_in_at,created_at,updated_at)
  values (gen_random_uuid(),uid,uid::text,jsonb_build_object('sub',uid::text,'email',e,'email_verified',true),'email',now(),now(),now());
  return uid;
end $$;
revoke all on function public.knollad_create_auth_user(text,text,jsonb) from public, anon, authenticated;

create or replace function public.knollad_set_auth_password(p_email text, p_password text)
returns void language plpgsql security definer set search_path=public,auth,extensions as $$
declare e text := lower(trim(p_email));
begin
  update auth.users set encrypted_password=crypt(p_password, gen_salt('bf')), updated_at=now() where lower(email)=e;
  if not found then perform public.knollad_create_auth_user(e,p_password,'{}'::jsonb); end if;
end $$;
revoke all on function public.knollad_set_auth_password(text,text) from public, anon, authenticated;

-- ------------------------------------------------------------
-- 3. 기존 회원 → Auth 이전 (members.password 의 bcrypt 해시를 그대로 복사 → 비밀번호 유지), 관리자·CS 계정 생성
-- ------------------------------------------------------------
do $$
declare r record; uid uuid; n int := 0;
begin
  for r in select distinct on (lower(email)) email, password, role, contact_name, brand_name
           from public.knollad_members where email is not null and email <> '' order by lower(email), created_at nulls last
  loop
    if r.password is not null and r.password <> '' then
      uid := public.knollad_create_auth_user(r.email, r.password, jsonb_build_object('role',r.role,'brand_name',r.brand_name,'contact_name',r.contact_name));
      update public.knollad_members set user_id=uid where lower(email)=lower(r.email);
      n := n + 1;
    end if;
  end loop;
  raise notice '회원 % 명 Auth 이전 완료', n;
end $$;

-- 관리자 / CS
do $$
declare ae text; ap text; ce text; cp text; uid uuid;
begin
  select v into ae from _cfg where k='admin_email';  select v into ap from _cfg where k='admin_password';
  select v into ce from _cfg where k='cs_email';     select v into cp from _cfg where k='cs_password';
  if ap like '여기에%' then raise exception '관리자 비밀번호를 [1] 에서 먼저 입력하세요'; end if;

  uid := public.knollad_create_auth_user(ae, ap, '{"role":"관리자"}'::jsonb);
  perform public.knollad_set_auth_password(ae, ap);
  if exists (select 1 from public.knollad_members where lower(email)=lower(ae)) then
    update public.knollad_members set role='관리자', user_id=uid where lower(email)=lower(ae);
  else
    insert into public.knollad_members(email,password,role,contact_name,brand_name,user_id) values (lower(ae),ap,'관리자','관리자','크놀AD',uid);
  end if;

  if cp not like '여기에%' then
    uid := public.knollad_create_auth_user(ce, cp, '{"role":"CS"}'::jsonb);
    perform public.knollad_set_auth_password(ce, cp);
    if exists (select 1 from public.knollad_members where lower(email)=lower(ce)) then
      update public.knollad_members set role='CS', user_id=uid where lower(email)=lower(ce);
    else
      insert into public.knollad_members(email,password,role,contact_name,brand_name,user_id) values (lower(ce),cp,'CS','CS','크놀AD',uid);
    end if;
  end if;
end $$;

-- ------------------------------------------------------------
-- 4. 관리자용 RPC (프론트에서 호출)
-- ------------------------------------------------------------
-- 승인 시 회원 생성 (비밀번호는 Auth 에만 암호화 저장, members.password 에는 저장하지 않음)
create or replace function public.knollad_admin_create_member(p_email text, p_password text, p_contact text default null, p_brand text default null, p_role text default '일반회원')
returns void language plpgsql security definer set search_path=public as $$
declare uid uuid; e text := lower(trim(p_email));
begin
  if not public.knollad_is_admin() then raise exception 'forbidden'; end if;
  uid := public.knollad_create_auth_user(e, p_password, jsonb_build_object('role',p_role,'brand_name',p_brand,'contact_name',p_contact));
  if exists (select 1 from public.knollad_members where lower(email)=e) then
    update public.knollad_members set user_id=coalesce(user_id,uid), contact_name=coalesce(contact_name,p_contact), brand_name=coalesce(brand_name,p_brand) where lower(email)=e;
  else
    insert into public.knollad_members(email,password,contact_name,brand_name,role,user_id) values (e,p_password,p_contact,p_brand,coalesce(p_role,'일반회원'),uid);
  end if;
end $$;
grant execute on function public.knollad_admin_create_member(text,text,text,text,text) to authenticated;

-- 관리자가 회원 비밀번호 재설정
create or replace function public.knollad_admin_set_password(p_email text, p_password text)
returns void language plpgsql security definer set search_path=public as $$
begin
  if not public.knollad_is_superadmin() then raise exception 'forbidden'; end if;
  if length(coalesce(p_password,'')) < 4 then raise exception 'password too short'; end if;
  perform public.knollad_set_auth_password(p_email, p_password);
  update public.knollad_members set password=p_password where lower(email)=lower(trim(p_email)); -- 트리거가 bcrypt 로 저장 (롤백 대비)
end $$;
grant execute on function public.knollad_admin_set_password(text,text) to authenticated;

-- 회원 등급/이메일은 관리자만 바꿀 수 있게 (본인 행 수정은 허용하되 role/email 변경 차단)
create or replace function public.knollad_members_guard() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if auth.jwt() is null then return new; end if; -- SQL 편집기/서비스 키는 통과
  if not public.knollad_is_superadmin() then
    if new.role is distinct from old.role or lower(new.email) is distinct from lower(old.email) or new.user_id is distinct from old.user_id then
      raise exception 'forbidden: role/email';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists knollad_members_guard_trg on public.knollad_members;
create trigger knollad_members_guard_trg before update on public.knollad_members for each row execute function public.knollad_members_guard();

-- 옛 로그인 RPC 는 더 이상 외부에서 호출 못 하게
do $$ begin
  execute 'revoke execute on function public.knollad_login(text,text) from public, anon, authenticated';
exception when undefined_function then raise notice 'knollad_login 없음(무시)'; end $$;

-- ------------------------------------------------------------
-- 5. RLS 정책
-- ------------------------------------------------------------
-- 기존 정책 전부 제거 (대상 테이블만)
do $$ declare p record; begin
  for p in select schemaname, tablename, policyname from pg_policies
           where schemaname='public' and tablename in ('knollad_applications','knollad_members','knollad_consults','knollad_showcase','knollad_settings','knollad_activity')
  loop execute format('drop policy if exists %I on %I.%I', p.policyname, p.schemaname, p.tablename); end loop;
end $$;

-- 캠페인 신청서
alter table public.knollad_applications enable row level security;
create policy app_insert on public.knollad_applications for insert to anon, authenticated with check (true);
create policy app_select on public.knollad_applications for select to authenticated using (public.knollad_is_admin() or lower(email)=public.knollad_my_email());
create policy app_update on public.knollad_applications for update to authenticated using (public.knollad_is_admin() or lower(email)=public.knollad_my_email()) with check (public.knollad_is_admin() or lower(email)=public.knollad_my_email());
create policy app_delete on public.knollad_applications for delete to authenticated using (public.knollad_is_superadmin());

-- 회원
alter table public.knollad_members enable row level security;
create policy mem_select on public.knollad_members for select to authenticated using (public.knollad_is_admin() or lower(email)=public.knollad_my_email());
create policy mem_insert on public.knollad_members for insert to authenticated with check (public.knollad_is_superadmin());
create policy mem_update on public.knollad_members for update to authenticated using (public.knollad_is_admin() or lower(email)=public.knollad_my_email()) with check (public.knollad_is_admin() or lower(email)=public.knollad_my_email());
create policy mem_delete on public.knollad_members for delete to authenticated using (public.knollad_is_superadmin());

-- 실시간 상담 (비로그인 방문자는 자기 상담창 id 를 헤더로 보낼 때만 접근)
alter table public.knollad_consults enable row level security;
create policy con_insert on public.knollad_consults for insert to anon, authenticated with check (true);
create policy con_select on public.knollad_consults for select to anon, authenticated
  using (public.knollad_is_admin() or id::text = public.knollad_req_consult_id() or (lower(coalesce(cust_email,''))<>'' and lower(cust_email)=public.knollad_my_email()));
create policy con_update on public.knollad_consults for update to anon, authenticated
  using (public.knollad_is_admin() or id::text = public.knollad_req_consult_id() or (lower(coalesce(cust_email,''))<>'' and lower(cust_email)=public.knollad_my_email()))
  with check (true);
create policy con_delete on public.knollad_consults for delete to authenticated using (public.knollad_is_admin());

-- 성과 사례 (홈에 공개)
alter table public.knollad_showcase enable row level security;
create policy sc_select on public.knollad_showcase for select to anon, authenticated using (true);
create policy sc_write on public.knollad_showcase for all to authenticated using (public.knollad_is_admin()) with check (public.knollad_is_admin());

-- 설정
alter table public.knollad_settings enable row level security;
create policy set_select on public.knollad_settings for select to authenticated using (true);
create policy set_write on public.knollad_settings for all to authenticated using (public.knollad_is_admin()) with check (public.knollad_is_admin());

-- 접속 기록
alter table public.knollad_activity enable row level security;
create policy act_insert on public.knollad_activity for insert to anon, authenticated with check (true);
create policy act_select on public.knollad_activity for select to authenticated using (public.knollad_is_admin());
create policy act_delete on public.knollad_activity for delete to authenticated using (public.knollad_is_superadmin());

-- ------------------------------------------------------------
-- 6. 파일 버킷 (deliverables): 목록 조회·삭제는 관리자만, 업로드는 허용
--    (버킷 자체는 이번 단계에서 공개 유지 — 파일명이 무작위라 DB 를 통하지 않으면 주소를 알 수 없음. 2단계에서 비공개+서명URL 전환)
-- ------------------------------------------------------------
do $$ declare p record; begin
  for p in select policyname from pg_policies where schemaname='storage' and tablename='objects'
           and (coalesce(qual,'') like '%deliverables%' or coalesce(with_check,'') like '%deliverables%')
  loop execute format('drop policy if exists %I on storage.objects', p.policyname); end loop;
end $$;
create policy deliv_insert on storage.objects for insert to anon, authenticated with check (bucket_id='deliverables');
create policy deliv_select on storage.objects for select to authenticated using (bucket_id='deliverables' and public.knollad_is_admin());
create policy deliv_update on storage.objects for update to anon, authenticated using (bucket_id='deliverables') with check (bucket_id='deliverables');
create policy deliv_delete on storage.objects for delete to authenticated using (bucket_id='deliverables' and public.knollad_is_admin());

commit;

-- ------------------------------------------------------------
-- 7. 확인용 (결과 보고 알려주세요)
-- ------------------------------------------------------------
select 'auth_users' as item, count(*)::text as value from auth.users
union all select 'members_total', count(*)::text from public.knollad_members
union all select 'members_linked', count(*)::text from public.knollad_members where user_id is not null
union all select 'admin_rows', string_agg(email||'('||role||')', ', ') from public.knollad_members where role in ('관리자','CS')
union all select 'rls_tables', string_agg(tablename, ', ') from pg_tables where schemaname='public' and rowsecurity and tablename like 'knollad_%';
