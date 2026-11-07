import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import ChallengeArena from "./components/ChallengeArena";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  BookOpen,
  Trophy,
  ShieldCheck,
  Code2,
  Presentation,
  Sheet,
  Search,
  ChevronRight,
  Flame,
  LockKeyhole,
  LogOut,
  CheckCircle2,
  Star,
  Users,
  LayoutDashboard,
  Keyboard,
  Target,
} from "lucide-react";
import "./styles.css";
import {
  changeTemporaryPassword,
  createStudent,
  getAdminStudents,
  getProfile,
  resetStudentPassword,
  signIn,
  signOut,
} from "./services/dsp";
import { supabase, supabaseConfigured } from "./services/supabase/client";
import TypingPractice from "./components/TypingPractice";
import { leaderboard as getLeaderboard } from "./services/dsp";
import QuizPage from "./components/QuizPage";
import { getQuizCompletions, getTypingCompletions, getAdminLearningStats } from "./services/dsp";

const modules = [
  {
    id: "productivity",
    title: "Typing & Digital Productivity",
    icon: BookOpen,
    color: "#2563eb",
    type: "typing",
    lessons: [
      "Introduction to Computers and Digital Devices",
      "Keyboard and Mouse Basics",
      "Typing Accuracy and Speed",
      "File and Folder Management",
      "Documents and Keyboard Shortcuts",
    ],
  },
  {
    id: "sheets",
    title: "Spreadsheet Skills",
    icon: Sheet,
    color: "#0f9d58",
    type: "video-quiz",
    videoId: "DSQlsvB8J0E",
    videoStart: 0,
    lessons: [],
  },
  {
    id: "presentation",
    title: "Presentation & Creativity",
    icon: Presentation,
    color: "#7c3aed",
    type: "video-quiz",
    videoId: "yiP77i80CZI",
    videoStart: 0,
    lessons: [],
  },
  {
    id: "safety",
    title: "Cybersecurity & Digital Safety",
    icon: ShieldCheck,
    color: "#ea580c",
    type: "video-quiz",
    videoId: "fd0L1IousZU",
    lessons: [],
  },
  {
    id: "coding",
    title: "Coding & Logical Thinking",
    icon: Code2,
    color: "#db2777",
    type: "video-quiz",
    videoId: "VZg5r9i90z0",
    lessons: [],
  },
  {
    id: "research",
    title: "Internet Research & AI Literacy",
    icon: Search,
    color: "#0891b2",
    type: "video-quiz",
    videoId: "CT_WEGUKejQ",
    videoStart: 1550,
    lessons: [],
  },
  {
    id: "english",
    title: "English Speaking & Communication",
    icon: BookOpen,
    color: "#d97706",
    type: "video-quiz",
    videoId: "6XrZCfpLk2w",
    lessons: [],
  },
];

const challenges = [
  [
    "productivity",
    "Timed typing test",
    "Type the sentence accurately before time runs out.",
  ],
  [
    "productivity",
    "Text correction",
    "Choose the correctly corrected sentence.",
  ],
  ["sheets", "Marks calculation", "Find the average of 68, 74 and 88."],
  ["sheets", "Monthly budget", "Choose a balanced budget total."],
  [
    "presentation",
    "Presentation structure",
    "Put title, idea and conclusion in a useful order.",
  ],
  [
    "presentation",
    "Effective slide design",
    "Pick the most readable slide practice.",
  ],
  ["safety", "Spot the phishing message", "Identify the unsafe message."],
  ["safety", "Safe online behaviour", "Choose the safest online action."],
  [
    "coding",
    "Arrange programming logic",
    "Place start, instruction and result in order.",
  ],
  ["coding", "Logic puzzle", "What runs when a condition is true?"],
  ["research", "Reliable source check", "Pick the most trustworthy source."],
  ["research", "Improve an AI prompt", "Choose the most specific prompt."],
].map((c, i) => ({ id: i + 1, module: c[0], title: c[1], description: c[2] }));
const level = (x) =>
  x < 100
    ? ["Beginner", 100]
    : x < 300
      ? ["Explorer", 300]
      : x < 650
        ? ["Skilled Learner", 650]
        : x < 1100
          ? ["Digital Achiever", 1100]
          : ["Digital Expert", 1500];
const demo = {
  name: "Aarav Sharma",
  userId: "DSP-1007",
  class: "9",
  xp: 185,
  streak: 4,
  lessons: 3,
  challenges: 1,
  badges: 2,
};
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState([]);
  const [xp, setXp] = useState(0);
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    let alive = true;
    async function restore(session) {
      if (!session) {
        if (alive) {
          setUser(null);
          setLoading(false);
        }
        return;
      }
      const { data } = await getProfile(session.user.id);
      if (alive) {
        setUser(data || null);
        setXp(data?.total_xp || 0);
        setLoading(false);
      }
    }
    supabase.auth.getSession().then(({ data }) => restore(data.session));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, s) => restore(s));
    return () => {
      alive = false;
      subscription.unsubscribe();
    };
  }, []);
  const complete = (id) => {
    if (!progress.includes(id)) {
      setProgress([...progress, id]);
      setToast(
        "Lesson completion needs the published lesson ID from Supabase.",
      );
      setTimeout(() => setToast(""), 3000);
    }
  };
  if (loading)
    return (
      <div className="login">
        <p>Loading your secure session…</p>
      </div>
    );
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route
        path="/student/*"
        element={
          user?.role === "student" ? (
            <Student
              user={user}
              xp={xp}
              progress={progress}
              complete={complete}
              toast={toast}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin"
        element={user?.role === "admin" ? <Admin /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

function Landing() {
  const highlights = [
    { icon: BookOpen, title: "Learn", text: "Simple lessons made for students", color: "#dbeafe" },
    { icon: Trophy, title: "Practise", text: "Fun quizzes and exciting challenges", color: "#fef3c7" },
    { icon: Star, title: "Grow", text: "Earn XP and build your passport", color: "#fce7f3" },
  ];

  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link className="brand" to="/">DSP<span>.</span></Link>
        <nav>
          <a href="#skills">Explore skills</a>
          <a href="#how">How it works</a>
          <Link className="button small" to="/login">Student login <ChevronRight /></Link>
        </nav>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-content">
            <div className="landing-pill">
              <span className="landing-pulse" />
              YOUR DIGITAL JOURNEY STARTS HERE
            </div>

            <h1>
              Don't just use technology.
              <br />
              <span>Learn to master it.</span>
            </h1>

            <p className="landing-description">
              Discover digital skills, solve fun challenges, explore coding
              and AI, and get ready for your future — one skill at a time.
            </p>

            <div className="landing-actions">
              <Link className="landing-primary-btn" to="/login">
                Start your journey <ChevronRight size={19} />
              </Link>
              <a className="landing-secondary-btn" href="#skills">
                Explore skills
              </a>
            </div>

            <div className="landing-trust">
              <ShieldCheck size={17} />
              <span>Made for Class 9 & 10 · School-managed accounts</span>
            </div>
          </div>

          <div className="landing-visual">
            <div className="landing-orbit landing-orbit-one" />
            <div className="landing-orbit landing-orbit-two" />

            <div className="landing-main-card">
              <div className="landing-card-top">
                <span>✦ DIGITAL SKILLS PASSPORT</span>
                <span className="landing-live-dot" />
              </div>

              <div className="landing-avatar">A</div>
              <p className="landing-card-small">YOUR JOURNEY, YOUR PROGRESS</p>
              <h2>Digital Explorer</h2>
              <p className="landing-card-subtitle">Every skill takes you forward.</p>

              <div className="landing-xp-row">
                <div>
                  <span>YOUR XP</span>
                  <strong>185 XP</strong>
                </div>
                <div className="landing-level">LEVEL 02</div>
              </div>

              <div className="landing-progress">
                <span />
              </div>

              <div className="landing-card-bottom">
                <div><strong>07</strong><span>Skill paths</span></div>
                <div><strong>05</strong><span>Quiz levels</span></div>
                <div><strong>∞</strong><span>Possibilities</span></div>
              </div>
            </div>

            <div className="landing-float landing-float-top">
              <span>🏆</span>
              <div><strong>Keep growing!</strong><small>Every challenge counts</small></div>
            </div>

            <div className="landing-float landing-float-bottom">
              <span>⚡</span>
              <div><strong>Level up</strong><small>Learn something new today</small></div>
            </div>
          </div>
        </section>

        <section className="landing-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div style={{ background: item.color }}><Icon size={24} /></div>
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </section>
              </article>
            );
          })}
        </section>

        <section id="skills" className="landing-skills">
          <div className="landing-section-heading">
            <p className="eyebrow">EXPLORE YOUR POTENTIAL</p>
            <h2>Seven skills. Endless possibilities.</h2>
            <p>Build useful skills that will help you in school, life and beyond.</p>
          </div>

          <div className="landing-skill-grid">
            {modules.map((m, index) => {
              const Icon = m.icon;
              return (
                <article className="landing-skill-card" key={m.id}>
                  <div className="landing-skill-icon" style={{ background: `${m.color}18`, color: m.color }}>
                    <Icon size={27} />
                  </div>
                  <span className="landing-skill-number">SKILL PATH 0{index + 1}</span>
                  <h3>{m.title}</h3>
                  <p>Learn, practise and build confidence with practical activities.</p>
                  <Link to="/login" className="landing-skill-link">
                    Start exploring <ChevronRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section id="how" className="landing-how">
          <div className="landing-section-heading">
            <p className="eyebrow">YOUR JOURNEY</p>
            <h2>Three steps to a brighter future.</h2>
            <p>Learning should be simple, practical and fun.</p>
          </div>

          <div className="landing-steps">
            <article>
              <span className="landing-step-number">01</span>
              <div className="landing-step-icon"><BookOpen size={25} /></div>
              <h3>Discover</h3>
              <p>Explore useful digital skills through easy-to-understand learning content.</p>
            </article>
            <article>
              <span className="landing-step-number">02</span>
              <div className="landing-step-icon"><Target size={25} /></div>
              <h3>Take on challenges</h3>
              <p>Test your knowledge with quizzes and interactive activities.</p>
            </article>
            <article>
              <span className="landing-step-number">03</span>
              <div className="landing-step-icon"><Trophy size={25} /></div>
              <h3>Show your growth</h3>
              <p>Track your learning progress and celebrate your achievements.</p>
            </article>
          </div>
        </section>

        <section className="landing-cta">
          <div>
            <p>READY TO LEVEL UP?</p>
            <h2>Your future is full of possibilities.</h2>
            <span>Start building the skills that will take you further.</span>
          </div>
          <Link to="/login" className="landing-cta-btn">
            Enter DSP <ChevronRight size={19} />
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <Link className="brand" to="/">DSP<span>.</span></Link>
        <p>Learn Skills. Complete Challenges. Build Your Future.</p>
        <span>© 2026 Digital Skills Passport</span>
      </footer>
    </div>
  );
}

function Login() {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    if (!id || !pw) return setError("Enter your User ID and password.");
    if (!supabaseConfigured)
      return setError(
        "DSP is not configured yet. Ask your administrator to add Supabase settings.",
      );
    setBusy(true);
    setError("");
    const { data, error: authError } = await signIn(id, pw);
    if (authError) {
      setBusy(false);
      return setError("Your User ID or password is incorrect.");
    }
    const { data: profile, error: profileError } = await getProfile(
      data.user.id,
    );
    setBusy(false);
    if (profileError || !profile?.is_active)
      return setError(
        "This account is unavailable. Please contact your school administrator.",
      );
    nav(profile.role === "admin" ? "/admin" : "/student");
  }
  return (
    <div className="login">
      <Link className="brand" to="/">
        DSP<span>.</span>
      </Link>
      <form onSubmit={submit}>
        <div className="login-icon">
          <LockKeyhole />
        </div>
        <h1>Welcome back</h1>
        <p>Use the credentials given to you by your school.</p>
        <label>
          User ID
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g. DSP-1007"
            autoComplete="username"
          />
        </label>
        <label>
          Password
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button disabled={busy} className="button">
          {busy ? "Signing in…" : "Sign in"} <ChevronRight />
        </button>
        <small>
          Accounts are created by your school. There is no public registration.
        </small>
      </form>
    </div>
  );
}
function Shell({ children, user, xp }) {
  let [l, next] = level(xp);
  return (
    <div className="app">
      <aside>
        <Link className="brand" to="/student">
          DSP<span>.</span>
        </Link>
        <p className="side-title">LEARNING</p>
        <Link to="/student">
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link to="/student/challenges">
          <Star />
          Challenge arena
        </Link>
        <Link to="/student/leaderboard">
          <Trophy />
          Leaderboard
        </Link>
        <Link to="/student/passport">
          <Users />
          My passport
        </Link>
        <button className="back" onClick={() => signOut()}>
          Sign out
        </button>
        <div className="side-level">
          <p>LEVEL</p>
          <b>{l}</b>
          <span>
            {xp} / {next} XP
          </span>
          <div className="bar">
            <i style={{ width: `${Math.min(100, (xp / next) * 100)}%` }} />
          </div>
        </div>
      </aside>
      <div className="mobile-nav">
        <Link to="/student">Home</Link>
        <Link to="/student/challenges">Play</Link>
        <Link to="/student/leaderboard">Ranks</Link>
      </div>
      <section className="workspace">
        <header className="top">
          <div>
            <p>Good morning,</p>
            <h2>
              {user.full_name || user.name} <span>👋</span>
            </h2>
          </div>
          <div className="profile">
            {(user.display_name || user.full_name || "S")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}
function Student({ user, xp, progress, complete, toast }) {
  if (user.must_change_password) return <PasswordChange />;

  return (
    <Shell user={user} xp={xp}>
      <Routes>
        <Route index element={<Dashboard xp={xp} progress={progress} />} />
        <Route path="skill/:mid" element={<SkillPage />} />
        <Route path="quiz/:mid/:level" element={<QuizPage />} />
        <Route path="skills" element={<Skills progress={progress} />} />
        <Route path="typing" element={<TypingPractice />} />
        <Route
          path="lesson/:mid/:lid"
          element={<Lesson complete={complete} progress={progress} />}
        />
        <Route path="challenges" element={<ChallengeArena />} />
        <Route path="leaderboard" element={<Leaderboard user={user} />} />
        <Route path="passport" element={<Passport user={user} xp={xp} />} />
      </Routes>

      {toast && (
        <div className="toast">
          <CheckCircle2 /> {toast}
        </div>
      )}
    </Shell>
  );
}
function PasswordChange() {
  const [password, setPassword] = useState(""),
    [confirm, setConfirm] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    if (password.length < 10) return setError("Use at least 10 characters.");
    if (password !== confirm) return setError("The passwords do not match.");
    setBusy(true);
    const { error } = await changeTemporaryPassword(password);
    setBusy(false);
    if (error) return setError(error.message || "Could not change password.");
    window.location.assign("/student");
  }
  return (
    <div className="login">
      <form onSubmit={submit}>
        <div className="login-icon">
          <LockKeyhole />
        </div>
        <h1>Choose a new password</h1>
        <p>
          This is your first sign-in. Set a private password before continuing.
        </p>
        <label>
          New password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </label>
        <label>
          Confirm password
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button disabled={busy} className="button">
          {busy ? "Saving…" : "Save password"} <ChevronRight />
        </button>
      </form>
    </div>
  );
}
function Dashboard({ xp, progress }) {
  const [quizCompletions, setQuizCompletions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typingCompletions, setTypingCompletions] = useState([]);
  useEffect(() => {
    async function loadDashboardProgress() {
      const [quizResult, typingResult] = await Promise.all([
        getQuizCompletions(),
        getTypingCompletions(),
      ]);

      if (!quizResult.error) {
        setQuizCompletions(quizResult.data || []);
      }

      if (!typingResult.error) {
        setTypingCompletions(typingResult.data || []);
      }

      setLoading(false);
    }

    loadDashboardProgress();
  }, []);

  const completedLevels = quizCompletions.length;

  const totalLevels = 35;

  const overallPercentage = Math.round(
  ((quizCompletions.length + typingCompletions.length) / 35) * 100
);

  return (
    <>
      <div className="page-title">
        <div>
          <p className="eyebrow">YOUR LEARNING SPACE</p>
          <h1>Keep building your future.</h1>
        </div>

        <Link className="button small" to="/student/skills">
          Continue learning <ChevronRight />
        </Link>
      </div>

      <div className="metrics">
        <Metric label="Total XP" value={xp} icon={Star} />
        <Metric
          label="Quiz levels completed"
          value={loading ? "..." : `${completedLevels}/30`}
          icon={BookOpen}
        />
        <Metric
          label="Quiz progress"
          value={loading ? "..." : `${overallPercentage}%`}
          icon={Trophy}
        />
        <Metric
          label="Typing lessons done"
          value={`${typingCompletions.length}/5`}
          icon={Flame}
        />
      </div>

      <article className="panel continue">
        <p className="eyebrow">YOUR OVERALL PROGRESS</p>
        <h2>{overallPercentage}% completed</h2>
        <p>
          You have completed {completedLevels} out of 35 quiz levels. Keep
          learning to unlock the next levels!
        </p>

        <div className="bar">
          <i style={{ width: `${overallPercentage}%` }} />
        </div>

        <Link className="text-link" to="/student/skills">
          Explore your skills <ChevronRight />
        </Link>
      </article>

      <h2 className="section-heading">Your skill paths</h2>

      <div className="module-grid">
        {modules.map((m) => {
          const I = m.icon;

          const done =
            m.id === "productivity"
              ? typingCompletions.length
              : quizCompletions.filter((item) => item.skill_id === m.id).length;

          const total = 5;
          const percentage = Math.min((done / total) * 100, 100);

          return (
            <Link
              className="module"
              to={
                m.id === "productivity"
                  ? "/student/typing"
                  : `/student/skill/${m.id}`
              }
              key={m.id}
            >
              <I style={{ color: m.color }} />

              <div>
                <h3>{m.title}</h3>
                <p>
                  {loading && m.id !== "productivity"
                    ? "Loading progress..."
                    : `${done} of 5 levels complete`}
                </p>

                <div className="bar">
                  <i
                    style={{
                      width: `${percentage}%`,
                      background: m.color,
                    }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
function Metric({ label, value, icon: Icon }) {
  return (
    <article className="metric">
      <Icon />
      <div>
        <p>{label}</p>
        <b>{value}</b>
      </div>
    </article>
  );
}
function Skills({ progress }) {
  return (
    <>
      <div className="page-title">
        <div>
          <p className="eyebrow">LEARNING LIBRARY</p>
          <h1>Choose a skill to grow.</h1>
          <p>
            Every path has simple lessons, practical challenges and a short
            assessment.
          </p>
        </div>
      </div>

      <div className="skill-list">
        {modules.map((m) => {
          const I = m.icon;
          const done = progress.filter((p) => p.startsWith(m.id)).length;

          return (
            <article className="learning-card" key={m.id}>
              <div
                className="module-icon"
                style={{ background: m.color + "18", color: m.color }}
              >
                <I />
              </div>

              <div className="grow">
                <h2>{m.title}</h2>

                <p>
                  {m.id === "productivity"
                    ? "Practise typing with five paragraphs and improve at your own pace."
                    : "Build confidence with five bite-sized lessons and two practical activities."}
                </p>

                <div className="bar">
                  <i
                    style={{
                      width: `${done * 20}%`,
                      background: m.color,
                    }}
                  />
                </div>
              </div>

              <Link
                to={
                  m.id === "productivity"
                    ? "/student/typing"
                    : `/student/skill/${m.id}`
                }
                className="button ghost small"
              >
                {m.id === "productivity" ? "Start typing" : "View lessons"}
                <ChevronRight />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}

function SkillPage() {
  const { mid } = useParams();
  const navigate = useNavigate();

  const skill = modules.find((m) => m.id === mid);

  const [completedLevels, setCompletedLevels] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [progressError, setProgressError] = useState("");

  useEffect(() => {
    async function loadProgress() {
      setLoadingProgress(true);
      setProgressError("");

      const { data, error } = await getQuizCompletions();

      if (error) {
        setProgressError(error.message);
      } else {
        setCompletedLevels(
          (data || [])
            .filter((item) => item.skill_id === mid)
            .map((item) => Number(item.level)),
        );
      }

      setLoadingProgress(false);
    }

    loadProgress();
  }, [mid]);

  if (!skill) {
    return <div className="panel">Skill not found.</div>;
  }

  return (
    <div className="skill-page">
      <button className="back" onClick={() => navigate("/student")}>
        ← Back to Dashboard
      </button>

      <div className="page-title">
        <div>
          <p className="eyebrow">YOUR LEARNING PATH</p>
          <h1>{skill.title}</h1>
          <p>
            Learn step by step and test your knowledge through five quiz levels.
          </p>
        </div>
      </div>

      {skill.videoId ? (
        <section className="panel">
          <h2>Watch and Learn</h2>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <iframe
              title={`${skill.title} learning video`}
              src={`https://www.youtube.com/embed/${skill.videoId}?start=${skill.videoStart || 0}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowFullScreen
            />
          </div>
        </section>
      ) : (
        <section className="panel">
          <h2>Learning video coming soon</h2>
          <p>We will add the learning video for this skill.</p>
        </section>
      )}

      <h2 className="section-heading">Your five quiz levels</h2>

      {loadingProgress ? (
        <div className="panel">Loading your progress...</div>
      ) : progressError ? (
        <div className="panel">
          <p>Could not load your progress: {progressError}</p>
          <button className="button" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      ) : (
        <div className="challenge-grid">
          {[1, 2, 3, 4, 5].map((level) => {
            const completed = completedLevels.includes(level);
            const unlocked = level === 1 || completedLevels.includes(level - 1);

            const levelNames = [
              "Beginner",
              "Basic",
              "Intermediate",
              "Advanced",
              "Master",
            ];

            return (
              <article className="challenge" key={level}>
                <span>LEVEL {level}</span>

                <h2>{levelNames[level - 1]}</h2>

                <p>10 questions to test what you have learned.</p>

                {completed ? (
                  <div className="level-status">
                    <CheckCircle2 size={18} />
                    Completed
                  </div>
                ) : unlocked ? (
                  <Link
                    className="button ghost small"
                    to={`/student/quiz/${mid}/${level}`}
                  >
                    Start Level {level} <ChevronRight />
                  </Link>
                ) : (
                  <div className="level-status locked">
                    <LockKeyhole size={18} />
                    Complete Level {level - 1} first
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Lesson({ complete, progress }) {
  const { mid, lid } = useParams(),
    m = modules.find((x) => x.id === mid),
    i = Number(lid),
    title = m?.lessons[i] || "Lesson";
  const key = `${mid}-${i}`,
    done = progress.includes(key);
  return (
    <article className="lesson">
      <Link to="/student/skills" className="back">
        ← Back to skills
      </Link>
      <p className="eyebrow">
        {m?.title} · LESSON {i + 1} OF 5
      </p>
      <h1>{title}</h1>
      <div className="lesson-progress">
        <span>Lesson progress</span>
        <div className="bar">
          <i style={{ width: done ? "100%" : "55%" }} />
        </div>
      </div>
      <section>
        <h2>What you will learn</h2>
        <ul>
          <li>Understand the basic idea behind {title.toLowerCase()}.</li>
          <li>Use this skill safely in your school work and everyday life.</li>
          <li>Practise one action you can repeat on your own.</li>
        </ul>
      </section>
      <section>
        <h2>Learn by doing</h2>
        <p>
          {title} is a useful building block for confident digital learning.
          Start slowly, look carefully at the information on screen, and try the
          steps yourself. There is no need to memorize everything in one
          day—practise makes it easier.
        </p>
        <aside className="example">
          <b>Example</b>
          <p>
            When working on a school task, pause to check your work, save it
            with a meaningful name, and ask a teacher when a step feels unclear.
          </p>
        </aside>
      </section>
      <section>
        <h2>Practical activity</h2>
        <p>
          Spend five minutes applying this skill to a real school activity.
          Write down one thing that was easier after practising.
        </p>
      </section>
      <section>
        <h2>Knowledge check</h2>
        <p>Which habit helps you learn a digital skill?</p>
        <div className="check">
          <button>Practise in small steps</button>
          <button>Never ask questions</button>
        </div>
      </section>
      <button onClick={() => complete(key)} disabled={done} className="button">
        {done ? "Completed · +10 XP earned" : "Mark as complete"}{" "}
        <CheckCircle2 />
      </button>
    </article>
  );
}
function Challenges() {
  const [active, setActive] = useState(null),
    [answer, setAnswer] = useState(""),
    [result, setResult] = useState("");
  let ch = challenges.find((c) => c.id === active);
  function submit() {
    let ok = answer.trim().length > 2;
    setResult(
      ok
        ? "Great work! You earned 25 XP in the configured Supabase workflow."
        : "Try a slightly more complete answer.",
    );
  }
  return (
    <>
      <div className="page-title">
        <div>
          <p className="eyebrow">CHALLENGE ARENA</p>
          <h1>Put skills into practice.</h1>
          <p>Short activities that feel useful beyond the screen.</p>
        </div>
      </div>
      {!ch ? (
        <div className="challenge-grid">
          {challenges.map((c) => (
            <article className="challenge" key={c.id}>
              <span>CHALLENGE {String(c.id).padStart(2, "0")}</span>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
              <button
                className="button ghost small"
                onClick={() => {
                  setActive(c.id);
                  setResult("");
                  setAnswer("");
                }}
              >
                Start challenge <ChevronRight />
              </button>
            </article>
          ))}
        </div>
      ) : (
        <article className="challenge-play">
          <button className="back" onClick={() => setActive(null)}>
            ← All challenges
          </button>
          <p className="eyebrow">PRACTICAL CHALLENGE</p>
          <h1>{ch.title}</h1>
          <p>{ch.description}</p>
          <div className="interactive">
            <label>
              Your answer
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
              />
            </label>
            <button className="button" onClick={submit}>
              Submit answer
            </button>
            {result && (
              <p className={result.startsWith("Great") ? "success" : "error"}>
                {result}
              </p>
            )}
          </div>
          <small>
            Production scoring and XP validation are handled by the secure
            Supabase Edge Function.
          </small>
        </article>
      )}
    </>
  );
}
function Leaderboard({ user }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      setLoading(true);
      setError("");

      const { data, error } = await getLeaderboard("global", 0);

      if (error) {
        setError(error.message || "Unable to load leaderboard.");
      } else {
        setRows(data || []);
      }

      setLoading(false);
    }

    loadLeaderboard();
  }, []);

  const myName = user?.display_name || user?.full_name || "";
  const myRank = rows.find(
    (r) => myName && r.display_name?.toLowerCase() === myName.toLowerCase(),
  );

  return (
    <>
      <div className="page-title">
        <div>
          <p className="eyebrow">HEALTHY COMPETITION</p>
          <h1>Leaderboard</h1>
          <p>Every step forward counts. Keep learning at your own pace.</p>
        </div>
      </div>

      {myRank && (
        <article className="panel" style={{ marginBottom: 20 }}>
          <p className="eyebrow">YOUR RANK</p>
          <h2>#{myRank.rank}</h2>
          <p>
            {myRank.total_xp} XP · {myRank.badge_count} badges
          </p>
        </article>
      )}

      <article className="panel table">
        <h2>Global Rankings</h2>

        {loading && <p>Loading leaderboard...</p>}

        {error && <p style={{ color: "#dc2626" }}>{error}</p>}

        {!loading && !error && rows.length === 0 && (
          <p>No rankings available yet. Start learning to earn XP!</p>
        )}

        {!loading &&
          !error &&
          rows.map((r) => {
            const isMe =
              myName && r.display_name?.toLowerCase() === myName.toLowerCase();

            return (
              <div className={isMe ? "me" : ""} key={r.rank}>
                <b>#{r.rank}</b>

                <span className="avatar tiny">
                  {r.display_name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>

                <strong>
                  {r.display_name}
                  {isMe && <small>You</small>}
                </strong>

                <span>Class {r.class ?? "-"}</span>

                <b>{r.total_xp} XP</b>
              </div>
            );
          })}
      </article>
    </>
  );
}

function Passport({ user, xp }) {
  const [quizCompletions, setQuizCompletions] = useState([]);
  const [typingCompletions, setTypingCompletions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentLevel] = level(xp);

  useEffect(() => {
    async function loadProgress() {
      const [quiz, typing] = await Promise.all([
        getQuizCompletions(),
        getTypingCompletions(),
      ]);

      if (!quiz.error) setQuizCompletions(quiz.data || []);
      if (!typing.error) setTypingCompletions(typing.data || []);

      setLoading(false);
    }

    loadProgress();
  }, []);

  const completed = quizCompletions.length + typingCompletions.length;

  const badges = [
    {
      icon: "⌨️",
      name: "Typing Starter",
      earned: typingCompletions.length >= 1,
    },
    {
      icon: "🎯",
      name: "Quiz Explorer",
      earned: quizCompletions.length >= 1,
    },
    {
      icon: "🏅",
      name: "Halfway Hero",
      earned: completed >= 18,
    },
    {
      icon: "🌟",
      name: "Digital Expert",
      earned: completed === 35,
    },
  ];

  return (
    <>
      <div className="page-title">
        <div>
          <p className="eyebrow">YOUR DIGITAL IDENTITY</p>
          <h1>Digital Skills Passport</h1>
          <p>Your learning journey and achievements.</p>
        </div>

        <button className="button ghost small" onClick={() => window.print()}>
          Print passport
        </button>
      </div>

      <article className="passport-full">
        <div className="passport-head">
          <div className="avatar big">
            {(user?.full_name || "S").slice(0, 2).toUpperCase()}
          </div>

          <div>
            <p>DIGITAL SKILLS PASSPORT</p>
            <h2>{user?.full_name || user?.display_name || "Student"}</h2>
            <span>
              {user?.user_id || "Student"} · Class {user?.class || "-"}
            </span>
          </div>

          <b>{currentLevel}</b>
        </div>

        <div className="passport-numbers">
          <div>
            <b>{xp}</b>
            <span>Total XP</span>
          </div>

          <div>
            <b>{loading ? "..." : completed}</b>
            <span>Levels completed</span>
          </div>

          <div>
            <b>{loading ? "..." : `${completed}/35`}</b>
            <span>Total progress</span>
          </div>

          <div>
            <b>{badges.filter((b) => b.earned).length}</b>
            <span>Achievements</span>
          </div>
        </div>

        <h3>Skill progress</h3>

        {modules.map((m) => {
          const done =
            m.id === "productivity"
              ? typingCompletions.length
              : quizCompletions.filter((item) => item.skill_id === m.id).length;

          return (
            <div className="passport-skill" key={m.id}>
              <span>{m.title}</span>

              <div className="bar">
                <i
                  style={{
                    width: `${(done / 5) * 100}%`,
                    background: m.color,
                  }}
                />
              </div>

              <small>{loading ? "..." : `${done}/5`}</small>
            </div>
          );
        })}

        <h3>Achievements</h3>

        <div className="badges">
          {badges.map((badge) => (
            <div key={badge.name} className={badge.earned ? "" : "locked"}>
              {badge.icon}
              <span>{badge.name}</span>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
function Admin() {
  const [students, setStudents] = useState([]),
    [loading, setLoading] = useState(true),
    [notice, setNotice] = useState(""),
    [error, setError] = useState(""),
    [form, setForm] = useState({
      fullName: "",
      userId: "",
      class: "9",
      password: "",
    }),
    [reset, setReset] = useState(null),
    [temporaryPassword, setTemporaryPassword] = useState("");
  const load = async () => {
    setLoading(true);
    const { data, error } = await getAdminStudents();
    setLoading(false);
    if (error) setError(error.message);
    else setStudents(data || []);
  };
  useEffect(() => {
    load();
  }, []);
  const totalStudents = students.length;
const activeStudents = students.filter(s => s.is_active).length;
const class9Students = students.filter(s => Number(s.class) === 9).length;
const class10Students = students.filter(s => Number(s.class) === 10).length;
const pendingPasswordChanges = students.filter(
  s => s.must_change_password
).length;
const [learningStats, setLearningStats] = useState({
  quiz_levels_completed: 0,
  typing_lessons_completed: 0
});

const [statsError, setStatsError] = useState('');
useEffect(() => {
  async function loadLearningStats() {
    const { data, error } = await getAdminLearningStats();

    if (error) {
      setStatsError(error.message);
      return;
    }

    setStatsError('');
    setLearningStats(data?.[0] || {
      quiz_levels_completed: 0,
      typing_lessons_completed: 0
    });
  }

  loadLearningStats();

  const timer = setInterval(loadLearningStats, 10000);

  return () => clearInterval(timer);
}, []);
  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  async function addStudent(e) {
    e.preventDefault();
    setError("");
    setNotice("");
    if (form.password.length < 10)
      return setError("Temporary password must have at least 10 characters.");
    const { data, error } = await createStudent({
      ...form,
      class: Number(form.class),
    });
    if (error) return setError(error.message || "Could not create student.");
    setNotice(
      `Account created for ${data?.studentId}. Give the temporary password to the student privately; it will not be shown again.`,
    );
    setForm({ fullName: "", userId: "", class: "9", password: "" });
    load();
  }
  async function submitReset(e) {
    e.preventDefault();
    setError("");
    if (temporaryPassword.length < 10)
      return setError("Temporary password must have at least 10 characters.");
    const { error } = await resetStudentPassword({
      studentId: reset.id,
      password: temporaryPassword,
    });
    if (error) return setError(error.message || "Could not reset password.");
    setNotice(
      `Password reset for ${reset.full_name}. They must choose a new password at next sign-in.`,
    );
    setReset(null);
    setTemporaryPassword("");
    load();
  }
  return (
    <div className="admin">
      <header>
        <Link className="brand" to="/">
          DSP<span>.</span>
        </Link>
        <span>Administrator workspace</span>
        <button className="button small" onClick={() => signOut()}>
          Log out <LogOut />
        </button>
      </header>
      <main>
        <p className="eyebrow">ADMIN OVERVIEW</p>
        <h1>Student management</h1>
        <div className="admin-stats">
  <article className="metric">
    <Users />
    <div>
      <p>Total students</p>
      <b>{loading ? '...' : totalStudents}</b>
    </div>
  </article>

  <article className="metric">
    <CheckCircle2 />
    <div>
      <p>Active accounts</p>
      <b>{loading ? '...' : activeStudents}</b>
    </div>
  </article>

  <article className="metric">
    <BookOpen />
    <div>
      <p>Class 9 students</p>
      <b>{loading ? '...' : class9Students}</b>
    </div>
  </article>

  <article className="metric">
    <Users />
    <div>
      <p>Class 10 students</p>
      <b>{loading ? '...' : class10Students}</b>
    </div>
  </article>

  <article className="metric">
    <LockKeyhole />
    <div>
      <p>First login pending</p>
      <b>{loading ? '...' : pendingPasswordChanges}</b>
    </div>
  </article>
</div>
<div className="admin-stats">
  <article className="metric">
    <BookOpen />
    <div>
      <p>Quiz levels completed</p>
      <b>{learningStats.quiz_levels_completed}</b>
    </div>
  </article>

  <article className="metric">
    <Keyboard />
    <div>
      <p>Typing lessons completed</p>
      <b>{learningStats.typing_lessons_completed}</b>
    </div>
  </article>
</div>

{statsError && (
  <p className="error">
    Learning statistics unavailable: {statsError}
  </p>
)}
        <div className="two-col">
          <article className="panel">
            <h2>Create student account</h2>
            <p>
              Temporary credentials are never stored in the browser after
              submission.
            </p>
            <form className="admin-form" onSubmit={addStudent}>
              <label>
                Full name
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </label>
              <label>
                User ID
                <input
                  required
                  pattern="[A-Za-z0-9-]{3,30}"
                  value={form.userId}
                  onChange={(e) => update("userId", e.target.value)}
                  placeholder="e.g. dsp-1008"
                />
              </label>
              <label>
                Class
                <select
                  value={form.class}
                  onChange={(e) => update("class", e.target.value)}
                >
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </label>
              <label>
                Temporary password
                <input
                  required
                  minLength="10"
                  type="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                />
              </label>
              <button className="button">
                Create student <ChevronRight />
              </button>
            </form>
          </article>
          <article className="panel">
            <h2>Account safety</h2>
            <p>
              Students can sign in only with school-created accounts. Their
              first sign-in requires a new private password.
            </p>
            <p>
              Use a private channel to share a temporary password. Do not
              include it in class groups or email lists.
            </p>
          </article>
        </div>
        {notice && <p className="success">{notice}</p>}
        {error && <p className="error">{error}</p>}
        <article className="panel table">
          <h2>Students</h2>
          {loading ? (
            <p>Loading students…</p>
          ) : students.length === 0 ? (
            <p>No student accounts yet.</p>
          ) : (
            students.map((s) => (
              <div key={s.id}>
                <strong>{s.full_name}</strong>
                <span>{s.user_id}</span>
                <span>Class {s.class}</span>
                <span>
                  {s.is_active ? "Active" : "Inactive"}
                  {s.must_change_password ? " · password change required" : ""}
                </span>
                <button
                  className="button ghost small"
                  onClick={() => {
                    setReset(s);
                    setTemporaryPassword("");
                  }}
                >
                  Reset password
                </button>
              </div>
            ))
          )}
        </article>
        {reset && (
          <div className="login">
            <form onSubmit={submitReset}>
              <h2>Reset password</h2>
              <p>Set a new temporary password for {reset.full_name}.</p>
              <label>
                Temporary password
                <input
                  required
                  minLength="10"
                  type="password"
                  autoComplete="new-password"
                  value={temporaryPassword}
                  onChange={(e) => setTemporaryPassword(e.target.value)}
                />
              </label>
              <button className="button">Reset password</button>
              <button
                type="button"
                className="back"
                onClick={() => setReset(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
