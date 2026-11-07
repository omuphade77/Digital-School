import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  RotateCcw,
  ExternalLink,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { supabase } from "../services/supabase/client";

const lessons = [
  {
    title: "My School",
    text: "My school is a place where I learn new things every day. I enjoy reading books, playing games and spending time with my friends. My teachers guide me and help me become a better student."
  },
  {
    title: "A Good Habit",
    text: "Reading is one of the best habits a student can develop. It improves our knowledge, vocabulary and imagination. Even reading for fifteen minutes every day can make a big difference."
  },
  {
    title: "Technology in Education",
    text: "Technology has changed the way students learn. Computers and the internet help us find information, attend online classes and develop useful skills. We should always use technology responsibly."
  },
  {
    title: "Protect Our Environment",
    text: "Our environment gives us air, water and food. We must protect nature by planting trees, saving water and avoiding plastic waste. Small actions can create a cleaner and healthier planet."
  },
  {
    title: "Dreams and Hard Work",
    text: "Every student has dreams for the future. Achieving a dream requires patience, practice and hard work. We should learn from our mistakes, stay positive and never stop trying."
  }
];

export default function TypingPractice() {
  const [lesson, setLesson] = useState(0);
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const finishStarted = useRef(false);
  const target = lessons[lesson].text;

  // Load completed lessons and resume at the first unfinished lesson
  useEffect(() => {
    async function loadProgress() {
      const { data, error } = await supabase
        .from("typing_lesson_completions")
        .select("lesson_number");

      if (!error && data) {
        const completed = data.map(item => item.lesson_number);
        setCompletedLessons(completed);

        const nextLesson = lessons.findIndex(
          (_, index) => !completed.includes(index + 1)
        );

        setLesson(nextLesson === -1 ? 4 : nextLesson);
      }

      setLoading(false);
    }

    loadProgress();
  }, []);

  // Show completed state whenever a completed lesson is opened
  useEffect(() => {
    if (completedLessons.includes(lesson + 1)) {
      setFinished(true);
      setStatus("You have already completed this lesson.");
    } else {
      setFinished(false);
      setStatus("");
    }

    setTyped("");
    setStarted(null);
    finishStarted.current = false;
  }, [lesson, completedLessons]);

  const correct = typed.split("").filter(
    (char, i) => char === target[i]
  ).length;

  const errors = typed.split("").filter(
    (char, i) => char !== target[i]
  ).length;

  const accuracy = typed.length
    ? Math.round((correct / typed.length) * 100)
    : 100;

  const elapsed = started
    ? Math.max(1, Math.floor((Date.now() - started) / 1000))
    : 0;

  const wpm = elapsed
    ? Math.round((typed.length / 5) / (elapsed / 60))
    : 0;

  async function finishLesson() {
    if (finishStarted.current) return;

    finishStarted.current = true;
    setFinished(true);
    setSaving(true);
    setStatus("Saving your progress...");

    const { data, error } = await supabase.rpc(
      "complete_typing_lesson",
      { p_lesson_number: lesson + 1 }
    );

    setSaving(false);

    if (error) {
      setStatus("Could not save progress. Please click Retry and try again.");
      finishStarted.current = false;
      return;
    }

    setCompletedLessons(previous =>
      previous.includes(lesson + 1)
        ? previous
        : [...previous, lesson + 1]
    );

    setStatus(
      data
        ? "Congratulations! You earned 10 XP."
        : "Lesson already completed. No duplicate XP awarded."
    );
  }

  function handleTyping(e) {
    const value = e.target.value.slice(0, target.length);

    if (!started && value.length > 0) {
      setStarted(Date.now());
    }

    setTyped(value);

    if (value.length === target.length && value.length > 0) {
      finishLesson();
    }
  }

  function retryLesson() {
    setTyped("");
    setStarted(null);
    setFinished(false);
    setSaving(false);
    setStatus("Try typing the paragraph again!");
    finishStarted.current = false;
  }

  function previousLesson() {
    if (lesson > 0) setLesson(lesson - 1);
  }

  function nextLesson() {
    if (lesson < 4) setLesson(lesson + 1);
  }

  if (loading) {
    return <div className="typing-page">Loading your typing progress...</div>;
  }

  const allCompleted = completedLessons.length === 5;

  return (
    <div className="typing-page">
      <Link to="/student/skills" className="back">
        <ArrowLeft size={18} /> Back to Skills
      </Link>

      <div className="typing-header">
        <p className="eyebrow">TYPING PRACTICE</p>
        <h1>Improve your typing skills.</h1>
        <p>Practise at your own speed. Accuracy and confidence matter.</p>
        <p>
          Completed: <strong>{completedLessons.length}/5 lessons</strong>
        </p>
      </div>

      <div className="typing-card">
        <div className="typing-top">
          <div>
            <span>LESSON {lesson + 1} OF 5</span>
            <h2>{lessons[lesson].title}</h2>
          </div>

          <span className="typing-count">
            {lesson + 1}/5
          </span>
        </div>

        <div className="typing-target">
          {target.split("").map((char, i) => (
            <span
              key={i}
              className={
                i < typed.length
                  ? typed[i] === char
                    ? "correct-char"
                    : "wrong-char"
                  : ""
              }
            >
              {char}
            </span>
          ))}
        </div>

        {!finished ? (
          <textarea
            className="typing-input"
            placeholder="Start typing the paragraph here..."
            value={typed}
            onChange={handleTyping}
            spellCheck="false"
          />
        ) : (
          <div className="typing-result">
            <CheckCircle size={35} color="#16a34a" />

            <h2>
              {completedLessons.includes(lesson + 1)
                ? "Lesson completed!"
                : "Paragraph completed!"}
            </h2>

            <p>{status}</p>

            {saving && <p>Saving...</p>}

            {allCompleted && (
              <p>Excellent! You have completed all five typing lessons.</p>
            )}
          </div>
        )}

        <div className="typing-stats">
          <div><span>WPM</span><strong>{wpm}</strong></div>
          <div><span>Accuracy</span><strong>{accuracy}%</strong></div>
          <div><span>Errors</span><strong>{errors}</strong></div>
          <div><span>Time</span><strong>{elapsed}s</strong></div>
        </div>

        <div className="typing-actions">
          <button
            className="button ghost"
            onClick={previousLesson}
            disabled={lesson === 0 || saving}
          >
            <ChevronLeft size={17} /> Previous
          </button>

          <button
            className="button ghost"
            onClick={retryLesson}
            disabled={saving}
          >
            <RotateCcw size={17} /> Retry
          </button>

          <button
            className="button"
            onClick={nextLesson}
            disabled={lesson === 4 || saving}
          >
            Next <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div className="typing-extra">
        <h3>Want more typing practice?</h3>
        <p>Practise with additional typing exercises.</p>
        <a
          href="https://monkeytype.com/"
          target="_blank"
          rel="noreferrer"
        >
          Try Monkeytype <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}