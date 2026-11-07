-- Admin-only student directory. It deliberately excludes synthetic emails and auth IDs.
create or replace function public.admin_student_list()
returns table(id uuid, full_name text, user_id text, class smallint, is_active boolean, must_change_password boolean, created_at timestamptz)
language sql stable security definer set search_path=public as $$
  select p.id,p.full_name,p.user_id,p.class,p.is_active,p.must_change_password,p.created_at
  from public.profiles p
  where public.is_admin() and p.role='student'
  order by p.created_at desc;
$$;
revoke all on function public.admin_student_list() from public;
grant execute on function public.admin_student_list() to authenticated;

-- Students may only change settings needed by the app, including acknowledgement of a temporary-password change.
revoke update on public.profiles from authenticated;
grant update (preferred_language, leaderboard_opt_in, must_change_password) on public.profiles to authenticated;
drop policy if exists "students update safe preferences" on public.profiles;
create policy "students update safe preferences" on public.profiles for update to authenticated
  using (auth.uid()=id) with check (auth.uid()=id);
