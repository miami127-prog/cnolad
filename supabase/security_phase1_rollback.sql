-- ============================================================
--  크놀AD 보안 1단계 되돌리기 — 문제가 생겼을 때 이것만 실행하면 예전 방식으로 돌아갑니다
--  (Auth 에 만들어진 사용자는 남아 있어도 무해합니다)
-- ============================================================
begin;

-- RLS 해제 + 정책 제거
do $$ declare p record; begin
  for p in select schemaname, tablename, policyname from pg_policies
           where schemaname='public' and tablename in ('knollad_applications','knollad_members','knollad_consults','knollad_showcase','knollad_settings','knollad_activity')
  loop execute format('drop policy if exists %I on %I.%I', p.policyname, p.schemaname, p.tablename); end loop;
end $$;
alter table public.knollad_applications disable row level security;
alter table public.knollad_members disable row level security;
alter table public.knollad_consults disable row level security;
alter table public.knollad_showcase disable row level security;
alter table public.knollad_settings disable row level security;
alter table public.knollad_activity disable row level security;

-- 버킷 정책: 예전처럼 전부 허용
do $$ declare p record; begin
  for p in select policyname from pg_policies where schemaname='storage' and tablename='objects'
           and (coalesce(qual,'') like '%deliverables%' or coalesce(with_check,'') like '%deliverables%')
  loop execute format('drop policy if exists %I on storage.objects', p.policyname); end loop;
end $$;
create policy deliv_all on storage.objects for all to anon, authenticated using (bucket_id='deliverables') with check (bucket_id='deliverables');

-- 회원 수정 가드 제거
drop trigger if exists knollad_members_guard_trg on public.knollad_members;

-- 옛 로그인 RPC 다시 허용
do $$ begin
  execute 'grant execute on function public.knollad_login(text,text) to anon, authenticated';
exception when undefined_function then raise notice 'knollad_login 없음(무시)'; end $$;

commit;
select '되돌리기 완료 — 예전 app.js/app2.js(커밋 이전 버전)로 배포해야 로그인이 예전 방식으로 동작합니다' as note;
