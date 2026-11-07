# Digital Skills Passport — implementation report

## 1. Project overview

DSP is a mobile-first learning platform for Class 9–10 students: six digital-skills paths, lessons, challenges, assessments, progression and a privacy-conscious ranking option. It uses React 18, Vite, React Router, Lucide, custom CSS, Supabase Auth/PostgreSQL/Edge Functions and `vite-plugin-pwa`. The browser uses only the Supabase publishable key. Sensitive account, score and XP actions run in Edge Functions using the service-role secret held by Supabase.

## 2. Existing work preserved

The landing page, responsive CSS design system, navigation, visual dashboard, PWA setup, starter schema and gamification utility tests were preserved. `src/main.jsx` was changed to use real Supabase sign-in/session restoration rather than accepting arbitrary credentials. The existing demo lesson/challenge display remains a presentation shell until the migrations have been applied; it does not claim to award real XP.

## 3. Functionality status

| Area | Status | Notes |
|---|---|---|
| Landing page / PWA build | Fully implemented and tested | Production build generated a service worker. |
| Authentication | Implemented but not tested against Supabase | Synthetic-email mapping, sign-in, session restoration and sign-out are implemented. |
| Admin accounts | Partially implemented | Secure create/reset Edge Functions exist; admin management UI is still a preview. |
| Student dashboard | Partially implemented | Authenticated identity and XP are real; most cards are still starter UI data. |
| 30 learning lessons | Implemented but not tested | Migration 003 seeds structured, India-relevant English lessons. |
| Challenges | Partially implemented | Secure generic server scoring path exists; 12 distinct mobile interaction UIs are not yet implemented. |
| Assessments | Implemented but not tested | Server evaluates answers and returns explanations only after submission; question seeds/UI remain to do. |
| XP / levels | Implemented but not tested | Atomic, idempotent database award function; level display preserved. |
| Badges / streaks / module bonuses | Not implemented | Tables remain available for badges. |
| Leaderboard | Implemented but not tested | Privacy-filtered RPC provides global/class ranking; weekly/monthly aggregation and UI integration remain. |
| Passport / certificates | Partially implemented | Printable existing passport UI remains; data-backed certificate PDF generation is not implemented. |
| Offline lesson reading | Partially implemented | PWA precaches application assets. Runtime caching/content sync and offline lesson data are not implemented. |

## 4. Database

Apply migrations in numerical order:

1. `001_dsp_schema.sql` creates profiles, content, progress, attempts, XP, badges and certificates.
2. `002_complete_platform.sql` adds schools/classrooms, preference and audit fields, indexes, RLS, `award_xp`, `is_admin` and privacy-safe leaderboard RPC.
3. `003_seed_learning_content.sql` upserts the six modules and thirty structured starter lessons.

Core relationships are profile → progress/attempts/XP/badges/certificates; module → lessons/challenges/questions; and school → classroom → students. RLS confines students to their own private records. Published content is readable by authenticated users. There is no client write policy for XP, attempts or assessment answers.

## 5. Authentication

Students enter User ID plus password; the client maps the ID to `userid@students.dsp.invalid` only for Supabase Auth and never displays the email. Public registration is absent. An authenticated active admin invokes `create-student`, which creates Auth and profile records; `reset-student-password` resets a student password and sets `must_change_password`.

Initial admin setup: create the first Auth user in the Supabase dashboard, then insert an active `profiles` row using that auth UUID with `role='admin'`. Do not add a service-role key to a browser or Cloudflare environment.

## 6. Supabase status

The project now reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` through `src/services/supabase/client.js`; `.env.example` has no credentials. No `.env.local` was available in this checkout, so connection and functions were **not** remotely verified or deployed. Deploy `create-student`, `complete-lesson`, `submit-challenge`, `submit-assessment`, and `reset-student-password` after applying migrations. Set `SUPABASE_SERVICE_ROLE_KEY` only as an Edge Function secret.

## 7. Security

The reward functions validate the authenticated user and use the service role only server-side. `award_xp` is idempotent through the `(student, reference_type, reference_id)` constraint, preventing duplicate lesson/challenge rewards. Assessment correct options never leave the Edge Function before submission. The leaderboard RPC exposes only display name, class, XP and badge count for opted-in active students. Remaining work: add request-rate limiting at the Supabase/Cloudflare edge, routine security review, and a guardian/school consent, retention and incident process. Before enrollment, obtain school/guardian consent and seek qualified advice on the Digital Personal Data Protection Act and applicable child-data requirements in India.

## 8. Testing

Executed on 2026-11-07:

```text
npm test       PASS — 1 file, 2 tests
npm run build  PASS — Vite production build and PWA service worker generated
```

No remote Supabase credentials/database were available, so authentication, RLS, Edge Functions, migrations and end-to-end persistence were not executed. New database logic needs Supabase integration tests before student use.

## 9. Project structure

- `src/main.jsx` — existing visual application shell and secure sign-in/session entry.
- `src/services/supabase/client.js` — guarded Supabase client and health check.
- `src/services/dsp.js` — reusable auth, learning, function and leaderboard calls.
- `supabase/migrations/` — ordered schema/security/content migrations.
- `supabase/functions/` — trusted account, completion, challenge, assessment and reset endpoints.
- `src/utils/gamification.*` — level/reward utility tests.

## 10. Local setup

```powershell
npm install
Copy-Item .env.example .env.local
# set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local
npm run dev
npm test
npm run build
```

## 11. Deployment

Apply each SQL migration in Supabase SQL Editor (or `supabase db push`). Configure Edge Function secrets, deploy the listed functions with the Supabase CLI, and run function/RLS tests with a student and admin account. For Cloudflare Pages, use build command `npm run build`, output `dist`, and set only the two `VITE_` public variables. Never set the service-role secret in Pages.

## 12. Remaining tasks

- Apply and test migrations on the actual Supabase project.
- Bind dashboard, lesson, passport and admin UI to repository services.
- Build twelve challenge-specific mobile interactions and seed challenge configurations.
- Seed module assessment questions and build assessment UX/history.
- Add first-login password-change screen, admin CRUD/CSV/analytics, badge/streak/module-bonus logic.
- Implement weekly/monthly ranking tie-breaks, certificates/PDF verification, runtime offline caching/sync, and end-to-end tests.

## 13. Recommended next step

Apply the three migrations to a non-production Supabase project, deploy Edge Functions, then test student/admin flows end-to-end before connecting remaining UI screens. This validates the security boundary before any real student data is entered.
