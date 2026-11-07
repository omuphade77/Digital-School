# Security model

There is no public registration. Privileged account creation is an Edge Function using the service role, with an authenticated admin-role check. RLS gives a learner access only to their own profile, progress and XP. Frontend role values are never trusted. Passwords are handled by Supabase Auth and are never stored in application tables.
