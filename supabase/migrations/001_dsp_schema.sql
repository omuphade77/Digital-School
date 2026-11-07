-- Digital Skills Passport core schema. Run in a new Supabase project before deploying functions.
create type public.user_role as enum ('admin','student');
create table public.profiles (
 id uuid primary key references auth.users(id) on delete cascade, user_id text unique not null check (user_id = lower(user_id)), full_name text not null, display_name text not null,
 role public.user_role not null default 'student', class smallint check (class in (9,10)), school text, classroom text,
 is_active boolean not null default true, must_change_password boolean not null default true, preferred_language text not null default 'en',
 leaderboard_opt_in boolean not null default false, total_xp integer not null default 0 check(total_xp>=0), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.modules (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, description text, icon text, is_published boolean default false, position smallint not null);
create table public.lessons (id uuid primary key default gen_random_uuid(), module_id uuid not null references public.modules(id) on delete cascade, title text not null, content jsonb not null default '{}', position smallint not null, is_published boolean default false, unique(module_id,position));
create table public.challenges (id uuid primary key default gen_random_uuid(), module_id uuid not null references public.modules(id) on delete cascade, title text not null, config jsonb not null default '{}', xp_reward smallint not null default 25, is_published boolean default false);
create table public.questions (id uuid primary key default gen_random_uuid(), module_id uuid not null references public.modules(id) on delete cascade, prompt text not null, options jsonb not null, correct_option smallint not null check(correct_option between 0 and 3), explanation text not null);
create table public.lesson_progress (student_id uuid references public.profiles(id) on delete cascade, lesson_id uuid references public.lessons(id) on delete cascade, completed_at timestamptz, primary key(student_id,lesson_id));
create table public.challenge_attempts (id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id), challenge_id uuid not null references public.challenges(id), score numeric not null, submitted_at timestamptz default now(), awarded boolean not null default false);
create table public.assessment_attempts (id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id), module_id uuid not null references public.modules(id), score numeric not null, passed boolean not null, submitted_at timestamptz default now());
create table public.xp_transactions (id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id), amount integer not null check(amount>0), reason text not null, reference_type text not null, reference_id uuid, created_at timestamptz default now(), unique(student_id,reference_type,reference_id));
create table public.badges (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, description text not null, icon text not null, criteria jsonb not null default '{}');
create table public.student_badges (student_id uuid references public.profiles(id) on delete cascade, badge_id uuid references public.badges(id) on delete cascade, earned_at timestamptz default now(), primary key(student_id,badge_id));
create table public.certificates (id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id), module_id uuid references public.modules(id), certificate_code text unique not null, issued_at timestamptz default now());
create index xp_transactions_student_date on public.xp_transactions(student_id,created_at desc);
create index profiles_leaderboard on public.profiles(total_xp desc) where leaderboard_opt_in and is_active;
-- Called only by trusted server-side code after an idempotent XP transaction insert.
create or replace function public.increment_xp(student uuid, points integer)
returns void
language sql
security definer
set search_path = public
as $$
  update public.profiles
  set total_xp = total_xp + points, updated_at = now()
  where id = student and points > 0;
$$;
revoke all on function public.increment_xp(uuid, integer) from public;
alter table public.profiles enable row level security; alter table public.lesson_progress enable row level security; alter table public.xp_transactions enable row level security;
create policy "students see own profile" on public.profiles for select using(auth.uid()=id);
create policy "students update safe preferences" on public.profiles for update using(auth.uid()=id) with check(auth.uid()=id and role=(select role from public.profiles where id=auth.uid()) and total_xp=(select total_xp from public.profiles where id=auth.uid()));
create policy "students read own progress" on public.lesson_progress for select using(auth.uid()=student_id);
create policy "students read own xp" on public.xp_transactions for select using(auth.uid()=student_id);
-- Content is public to signed-in users only after publication; admins use service role functions.
alter table public.modules enable row level security; alter table public.lessons enable row level security;
create policy "read published modules" on public.modules for select to authenticated using(is_published);
create policy "read published lessons" on public.lessons for select to authenticated using(is_published);
