
import React, { useState } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Brain,
  Zap,
  Sheet,
  Code2,
  Trophy,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Star,
  Target
} from "lucide-react";

const missions = [
  {
    id: "cyber",
    title: "Cyber Detective",
    subtitle: "Catch online scams before they catch you.",
    category: "Cybersecurity",
    difficulty: "Easy",
    icon: ShieldCheck,
    color: "#ea580c",
    questions: [
      {
        question: "You receive a message saying you won ₹50,000. It asks you to click an unknown link. What should you do?",
        options: [
          "Click the link immediately",
          "Share it with friends",
          "Ignore and report the message",
          "Enter your bank details"
        ],
        answer: 2,
        explanation: "Unexpected prize messages with unknown links are common phishing tricks."
      },
      {
        question: "Which password is the strongest?",
        options: [
          "12345678",
          "password123",
          "Om@123",
          "River!Moon#84Tree"
        ],
        answer: 3,
        explanation: "A long password with mixed characters is harder to guess."
      },
      {
        question: "A stranger online asks for your home address. What is safest?",
        options: [
          "Share your full address",
          "Share your school location",
          "Do not share personal information",
          "Send your phone number"
        ],
        answer: 2,
        explanation: "Keep personal information private, especially when talking to strangers."
      }
    ]
  },
  {
    id: "logic",
    title: "Logic Master",
    subtitle: "Train your brain with clever puzzles.",
    category: "Logical Thinking",
    difficulty: "Easy",
    icon: Brain,
    color: "#7c3aed",
    questions: [
      {
        question: "Find the next number: 2, 4, 8, 16, __",
        options: ["18", "24", "32", "30"],
        answer: 2,
        explanation: "Each number is multiplied by 2. So 16 × 2 = 32."
      },
      {
        question: "A farmer has 12 mangoes and gives away 5. How many remain?",
        options: ["5", "7", "8", "17"],
        answer: 1,
        explanation: "12 − 5 = 7 mangoes remain."
      },
      {
        question: "If all roses are flowers, which statement must be true?",
        options: [
          "All flowers are roses",
          "Some roses are not flowers",
          "Every rose is a flower",
          "No rose is a flower"
        ],
        answer: 2,
        explanation: "This directly follows from the given statement."
      }
    ]
  },
  {
    id: "emergency",
    title: "Digital Emergency",
    subtitle: "Make smart decisions in real-life situations.",
    category: "Digital Safety",
    difficulty: "Medium",
    icon: Zap,
    color: "#0891b2",
    questions: [
      {
        question: "Your friend receives a threatening message from an unknown account. What should they do first?",
        options: [
          "Reply with another threat",
          "Save evidence and tell a trusted adult",
          "Share it publicly",
          "Give the sender personal details"
        ],
        answer: 1,
        explanation: "Save the evidence, block or report the account, and seek help from a trusted adult."
      },
      {
        question: "You find a USB drive outside your classroom. What should you do?",
        options: [
          "Plug it into your laptop",
          "Open every file",
          "Give it to a teacher or IT staff",
          "Take it home"
        ],
        answer: 2,
        explanation: "Unknown USB drives can contain harmful software."
      },
      {
        question: "A website asks for your OTP to give you a free gift. What should you do?",
        options: [
          "Share the OTP",
          "Ask a friend to share theirs",
          "Never share the OTP",
          "Post it in a group"
        ],
        answer: 2,
        explanation: "An OTP is private. Never share it with anyone."
      }
    ]
  },
  {
    id: "spreadsheet",
    title: "Spreadsheet Sprint",
    subtitle: "Solve everyday number challenges.",
    category: "Productivity",
    difficulty: "Medium",
    icon: Sheet,
    color: "#16a34a",
    questions: [
      {
        question: "A student scores 70, 80 and 90. What is the average?",
        options: ["70", "75", "80", "90"],
        answer: 2,
        explanation: "(70 + 80 + 90) ÷ 3 = 80."
      },
      {
        question: "Which spreadsheet formula adds values from A1 to A5?",
        options: [
          "=ADD(A1:A5)",
          "=SUM(A1:A5)",
          "=TOTAL(A1:A5)",
          "=COUNT(A1:A5)"
        ],
        answer: 1,
        explanation: "SUM adds all numeric values in the selected range."
      },
      {
        question: "You want to arrange marks from highest to lowest. Which feature should you use?",
        options: ["Filter colour", "Sort descending", "Merge cells", "Text wrapping"],
        answer: 1,
        explanation: "Descending sorting arranges values from largest to smallest."
      }
    ]
  },
  {
    id: "coding",
    title: "Code Breaker",
    subtitle: "Think like a programmer and crack the code.",
    category: "Coding",
    difficulty: "Hard",
    icon: Code2,
    color: "#db2777",
    questions: [
      {
        question: "What will this code print? let x = 5; console.log(x + 3);",
        options: ["5", "3", "8", "53"],
        answer: 2,
        explanation: "The plus operator adds 5 and 3, producing 8."
      },
      {
        question: "Which programming structure repeats instructions?",
        options: ["Loop", "Variable", "Comment", "String"],
        answer: 0,
        explanation: "Loops repeat a block of instructions while a condition is met."
      },
      {
        question: "What is the result of 10 % 3 in JavaScript?",
        options: ["3", "1", "0", "10"],
        answer: 1,
        explanation: "The remainder after dividing 10 by 3 is 1."
      }
    ]
  }
];

export default function ChallengeArena() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [completed, setCompleted] = useState([]);

  const totalPoints = completed.reduce((sum, item) => sum + item.points, 0);

  function startMission(mission) {
    setActive(mission);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  function chooseAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === active.questions[current].answer) {
      setScore(previous => previous + 1);
    }
  }

  function nextQuestion() {
    if (current < active.questions.length - 1) {
      setCurrent(previous => previous + 1);
      setSelected(null);
    } else {
      setFinished(true);

      const points = score * 10 + (selected === active.questions[current].answer ? 10 : 0);

      setCompleted(previous => {
        const existing = previous.filter(item => item.id !== active.id);
        return [...existing, { id: active.id, points }];
      });
    }
  }

  function resetArena() {
    setActive(null);
    setCurrent(0);
    setSelected(null);
    setFinished(false);
  }

  if (active && finished) {
    const finalScore = score * 10;
    const passed = score >= 2;
    const Icon = active.icon;

    return (
      <div className="arena-page">
        <article className="arena-result">
          <div className="arena-result-icon">
            <Trophy size={42} />
          </div>

          <p className="eyebrow">MISSION COMPLETED</p>
          <h1>{passed ? "Brilliant work!" : "Keep practising!"}</h1>
          <p>{active.title}</p>

          <div className="arena-result-score">
            <strong>{score}/{active.questions.length}</strong>
            <span>Correct answers</span>
          </div>

          <div className="arena-result-points">
            <Star size={20} />
            <strong>{finalScore} practice points</strong>
          </div>

          <p>
            {passed
              ? "You have successfully completed this mission. Keep exploring!"
              : "Try again to improve your score and master this skill."}
          </p>

          <button className="button" onClick={resetArena}>
            <ArrowLeft size={17} /> Back to Challenge Arena
          </button>

          <button
            className="arena-secondary"
            onClick={() => startMission(active)}
          >
            <RotateCcw size={16} /> Try again
          </button>

          <Icon color={active.color} size={24} />
        </article>
      </div>
    );
  }

  if (active) {
    const question = active.questions[current];
    const isCorrect = selected === question.answer;

    return (
      <div className="arena-page">
        <button className="back" onClick={resetArena}>
          <ArrowLeft size={17} /> All missions
        </button>

        <article className="arena-play">
          <div className="arena-play-top">
            <span>{active.category}</span>
            <span>QUESTION {current + 1}/{active.questions.length}</span>
          </div>

          <div className="arena-progress">
            <i style={{ width: `${((current + 1) / active.questions.length) * 100}%` }} />
          </div>

          <div className="arena-question-icon" style={{ color: active.color }}>
            <active.icon size={32} />
          </div>

          <p className="eyebrow">{active.title}</p>
          <h1>{question.question}</h1>

          <div className="arena-options">
            {question.options.map((option, index) => {
              let className = "arena-option";

              if (selected !== null && index === question.answer) {
                className += " correct";
              } else if (selected === index) {
                className += " incorrect";
              }

              return (
                <button
                  key={index}
                  className={className}
                  disabled={selected !== null}
                  onClick={() => chooseAnswer(index)}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}
                  {selected !== null && index === question.answer && (
                    <CheckCircle2 size={19} />
                  )}
                  {selected === index && !isCorrect && (
                    <XCircle size={19} />
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className={`arena-feedback ${isCorrect ? "good" : "bad"}`}>
              <strong>{isCorrect ? "Excellent! Correct answer." : "Not quite! Learn from it."}</strong>
              <p>{question.explanation}</p>
              <button className="button" onClick={nextQuestion}>
                {current === active.questions.length - 1
                  ? "See my result"
                  : "Next question"}
                <ChevronRight size={17} />
              </button>
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="arena-page">
      <div className="arena-hero">
        <div>
          <p className="eyebrow">THE DSP GAME ZONE</p>
          <h1>Challenge Arena <span>⚡</span></h1>
          <p>Think fast. Make smart choices. Become a digital champion.</p>
        </div>

        <div className="arena-score-card">
          <Trophy size={25} />
          <strong>{totalPoints}</strong>
          <span>Practice points</span>
        </div>
      </div>

      <div className="arena-stats">
        <div>
          <Target />
          <strong>{completed.length}/{missions.length}</strong>
          <span>Missions completed</span>
        </div>
        <div>
          <Star />
          <strong>{totalPoints}</strong>
          <span>Session points</span>
        </div>
        <div>
          <Brain />
          <strong>15</strong>
          <span>Questions to explore</span>
        </div>
      </div>

      <div className="arena-section-heading">
        <div>
          <p className="eyebrow">CHOOSE YOUR MISSION</p>
          <h2>Which challenge will you conquer?</h2>
        </div>
      </div>

      <div className="arena-grid">
        {missions.map(mission => {
          const Icon = mission.icon;
          const done = completed.some(item => item.id === mission.id);
          const result = completed.find(item => item.id === mission.id);

          return (
            <article className="arena-mission" key={mission.id}>
              <div
                className="arena-mission-icon"
                style={{ background: `${mission.color}18`, color: mission.color }}
              >
                <Icon size={29} />
              </div>

              <div className="arena-mission-meta">
                <span>{mission.category}</span>
                <span>{mission.difficulty}</span>
              </div>

              <h2>{mission.title}</h2>
              <p>{mission.subtitle}</p>

              <div className="arena-mission-bottom">
                <span>3 questions · 30 points max</span>
                {done && <span className="arena-done"><CheckCircle2 size={15} /> Completed</span>}
              </div>

              <button
                className="button"
                onClick={() => startMission(mission)}
              >
                {done ? "Play again" : "Start mission"}
                <ChevronRight size={17} />
              </button>

              {done && (
                <small className="arena-earned">
                  Best session: {result.points} practice points
                </small>
              )}
            </article>
          );
        })}
      </div>

      <p className="arena-note">
        Practice points are currently session-only. They do not change your official DSP XP or leaderboard.
      </p>
    </div>
  );
}
