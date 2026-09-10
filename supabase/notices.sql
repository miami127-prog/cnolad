-- 공지사항 테이블 · 전 회원(로그인) 열람, 관리자만 작성/수정/삭제
create table if not exists public.knollad_notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null default '',
  pinned boolean not null default false,
  author text,
  created_at timestamptz not null default now(),
  updated_at timestamptz
);
alter table public.knollad_notices enable row level security;
drop policy if exists notices_select on public.knollad_notices;
drop policy if exists notices_write on public.knollad_notices;
create policy notices_select on public.knollad_notices for select to authenticated using (true);
create policy notices_write  on public.knollad_notices for all to authenticated using (public.knollad_is_admin()) with check (public.knollad_is_admin());
grant select on public.knollad_notices to authenticated;
grant insert, update, delete on public.knollad_notices to authenticated;
select count(*) as notices from public.knollad_notices;
