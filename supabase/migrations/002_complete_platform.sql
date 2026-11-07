-- DSP production completion migration. Apply after 001_dsp_schema.sql.
create table if not exists public.schools (id uuid primary key default gen_random_uuid(), name text not null, created_at timestamptz not null default now());
create table if not exists public.classrooms (id uuid primary key default gen_random_uuid(), school_id uuid references public.schools(id) on delete cascade, name text not null, grade smallint check (grade in (9,10)), unique(school_id,name));
create table if not exists public.classroom_students (classroom_id uuid references public.classrooms(id) on delete cascade, student_id uuid references public.profiles(id) on delete cascade, primary key(classroom_id,student_id));
alter table public.challenge_attempts add column if not exists response jsonb not null default '{}'::jsonb;
alter table public.challenge_attempts add column if not exists feedback text;
alter table public.challenge_attempts add column if not exists awarded_xp integer not null default 0;
alter table public.assessment_attempts add column if not exists answers jsonb not null default '{}'::jsonb;
alter table public.assessment_attempts add column if not exists feedback jsonb not null default '[]'::jsonb;
create table if not exists public.leaderboard_preferences (student_id uuid primary key references public.profiles(id) on delete cascade, opted_in boolean not null default false, updated_at timestamptz not null default now());
create index if not exists challenge_attempts_student_challenge_idx on public.challenge_attempts(student_id,challenge_id,submitted_at desc);
create index if not exists assessment_attempts_student_module_idx on public.assessment_attempts(student_id,module_id,submitted_at desc);

-- Role helper is used by all policies and is never writable by learners.
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin' and is_active) $$;
revoke all on function public.is_admin() from public; grant execute on function public.is_admin() to authenticated;
create or replace function public.award_xp(p_student uuid,p_amount integer,p_reason text,p_reference_type text,p_reference_id uuid)
returns boolean language plpgsql security definer set search_path=public as $$
begin
  insert into xp_transactions(student_id,amount,reason,reference_type,reference_id) values(p_student,p_amount,p_reason,p_reference_type,p_reference_id);
  update profiles set total_xp=total_xp+p_amount,updated_at=now() where id=p_student;
  return true;
exception when unique_violation then return false;
end $$;
revoke all on function public.award_xp(uuid,integer,text,text,uuid) from public;

alter table public.challenges enable row level security; alter table public.questions enable row level security; alter table public.challenge_attempts enable row level security; alter table public.assessment_attempts enable row level security; alter table public.badges enable row level security; alter table public.student_badges enable row level security; alter table public.certificates enable row level security; alter table public.leaderboard_preferences enable row level security;
drop policy if exists "read challenges" on public.challenges; create policy "read published challenges" on public.challenges for select to authenticated using(is_published);
drop policy if exists "students read own challenges" on public.challenge_attempts; create policy "students read own challenges" on public.challenge_attempts for select to authenticated using(student_id=auth.uid());
drop policy if exists "students read assessments" on public.assessment_attempts; create policy "students read assessments" on public.assessment_attempts for select to authenticated using(student_id=auth.uid());
drop policy if exists "read badges" on public.badges; create policy "read badges" on public.badges for select to authenticated using(true);
drop policy if exists "students read own badges" on public.student_badges; create policy "students read own badges" on public.student_badges for select to authenticated using(student_id=auth.uid());
drop policy if exists "students read own certificates" on public.certificates; create policy "students read own certificates" on public.certificates for select to authenticated using(student_id=auth.uid());
drop policy if exists "students manage leaderboard opt in" on public.leaderboard_preferences; create policy "students manage leaderboard opt in" on public.leaderboard_preferences for all to authenticated using(student_id=auth.uid()) with check(student_id=auth.uid());
create or replace function public.leaderboard(ranking_scope text default 'global', page_offset integer default 0)
returns table(rank bigint,display_name text,class smallint,total_xp integer,badge_count bigint) language sql stable security definer set search_path=public as $$
with ranked as (select p.display_name,p.class,p.total_xp,(select count(*) from student_badges sb where sb.student_id=p.id) badge_count,rank() over(order by p.total_xp desc, p.created_at asc) rank from profiles p where p.role='student' and p.is_active and p.leaderboard_opt_in and (ranking_scope not in ('class9','class10') or p.class=right(ranking_scope,1)::smallint)) select * from ranked order by rank offset greatest(page_offset,0) limit 20 $$;
revoke all on function public.leaderboard(text,integer) from public; grant execute on function public.leaderboard(text,integer) to authenticated;
