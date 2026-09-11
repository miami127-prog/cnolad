-- 회원별 알림 설정 기록용 컬럼 (관리자 회원DB에서 확인)
alter table public.knollad_members
  add column if not exists noti_sound boolean,
  add column if not exists noti_desktop boolean,
  add column if not exists noti_perm text,
  add column if not exists noti_tone text,
  add column if not exists noti_vol smallint,
  add column if not exists noti_client text,
  add column if not exists noti_updated_at timestamptz;

-- 활동 기록(로그인·페이지 방문) 저장 권한: 로그인 사용자도 기록 가능하게
drop policy if exists act_insert on public.knollad_activity;
create policy act_insert on public.knollad_activity
  for insert to anon, authenticated with check (true);

select count(*) as activity_rows,
       count(*) filter (where created_at > now() - interval '2 days') as last_2days
from public.knollad_activity;
