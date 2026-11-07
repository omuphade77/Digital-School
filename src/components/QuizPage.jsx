
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  LoaderCircle,
  LockKeyhole
} from 'lucide-react';

import { quizData } from '../data/quizData';
import {
  completeQuizLevel,
  getQuizCompletions
} from '../services/dsp';

const skillNames = {
  sheets: 'Spreadsheet Skills',
  presentation: 'Presentation & Creativity',
  safety: 'Cybersecurity & Digital Safety',
  coding: 'Coding & Logical Thinking',
  research: 'Internet Research & AI Literacy',
  english: 'English Speaking & Communication'
};

export default function QuizPage() {
  const { mid, level } = useParams();
  const navigate = useNavigate();

  const questions = quizData[mid]?.[level] || [];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);
  const [saveError, setSaveError] = useState('');

  const [accessChecked, setAccessChecked] = useState(false);
  const [levelUnlocked, setLevelUnlocked] = useState(false);
  const [accessError, setAccessError] = useState('');

  const saveAttempted = useRef(false);

  const score = answers.filter(a => a.correct).length;
  const passed = score >= 7;

  // Check whether the student can access this level.
  useEffect(() => {
    let active = true;

    async function checkAccess() {
      setAccessChecked(false);
      setAccessError('');

      const currentLevel = Number(level);

      if (
        !Number.isInteger(currentLevel) ||
        currentLevel < 1 ||
        currentLevel > 5 ||
        !skillNames[mid]
      ) {
        setLevelUnlocked(false);
        setAccessChecked(true);
        return;
      }

      if (currentLevel === 1) {
        setLevelUnlocked(true);
        setAccessChecked(true);
        return;
      }

      try {
        const { data, error } = await getQuizCompletions();

        if (error) throw error;

        const previousCompleted = (data || []).some(
          item =>
            item.skill_id === mid &&
            Number(item.level) === currentLevel - 1
        );

        if (active) {
          setLevelUnlocked(previousCompleted);
        }
      } catch (error) {
        if (active) {
          setLevelUnlocked(false);
          setAccessError(
            error.message || 'Could not verify your quiz access.'
          );
        }
      } finally {
        if (active) setAccessChecked(true);
      }
    }

    checkAccess();

    return () => {
      active = false;
    };
  }, [mid, level]);

  // Save completion and award XP.
  async function saveCompletion() {
    if (saveAttempted.current || !passed) return;

    saveAttempted.current = true;
    setSaving(true);
    setSaveError('');

    try {
      const { data, error } = await completeQuizLevel(
        mid,
        Number(level),
        score
      );

      if (error) throw error;

      setSaved(true);
      setXpAwarded(data === true);
    } catch (error) {
      saveAttempted.current = false;
      setSaveError(
        error.message || 'Could not save your progress.'
      );
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    if (finished && passed) {
      saveCompletion();
    }
  }, [finished, passed]);

  function chooseAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    setAnswers(prev => [
      ...prev,
      { correct: index === questions[current].answer }
    ]);
  }

  function nextQuestion() {
    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent(prev => prev + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
    setSaving(false);
    setSaved(false);
    setXpAwarded(false);
    setSaveError('');
    saveAttempted.current = false;
  }

  // Access loading.
  if (!accessChecked) {
    return (
      <div className="panel">
        <LoaderCircle size={24} />
        <h2>Checking your access...</h2>
      </div>
    );
  }

  // Access verification failed.
  if (accessError) {
    return (
      <div className="panel">
        <h2>Unable to verify access</h2>
        <p>{accessError}</p>

        <button
          className="button"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  }

  // Locked level.
  if (!levelUnlocked) {
    return (
      <div className="panel">
        <LockKeyhole size={40} />

        <h2>Level Locked</h2>

        <p>
          Complete Level {Number(level) - 1} with at least
          7 correct answers to unlock this level.
        </p>

        <button
          className="button"
          onClick={() => navigate(`/student/skill/${mid}`)}
        >
          Back to skill
        </button>
      </div>
    );
  }

  // Missing questions.
  if (!questions.length) {
    return (
      <div className="panel">
        <h2>Quiz coming soon!</h2>
        <p>Questions for this level are being prepared.</p>

        <button
          className="button"
          onClick={() => navigate(`/student/skill/${mid}`)}
        >
          Back to skill
        </button>
      </div>
    );
  }

  // Quiz result.
  if (finished) {
    return (
      <div className="panel quiz-result">
        <Trophy size={48} />

        <p className="eyebrow">LEVEL {level} RESULT</p>

        <h1>
          {passed ? 'Excellent work!' : 'Good effort!'}
        </h1>

        <h2>{score} / {questions.length}</h2>

        <p>
          {passed
            ? 'Congratulations! You passed this level.'
            : 'You need at least 7 correct answers to pass. Try again!'}
        </p>

        {passed && (
          <div className="quiz-save-status">
            {saving && (
              <p>
                <LoaderCircle size={16} />
                Saving your progress...
              </p>
            )}

            {saved && (
              <p>
                <CheckCircle2 size={18} />
                Progress saved successfully!
              </p>
            )}

            {saved && xpAwarded && (
              <p>🎉 You earned 20 XP!</p>
            )}

            {saved && !xpAwarded && (
              <p>
                This level was already completed.
                No duplicate XP awarded.
              </p>
            )}

            {saveError && (
              <>
                <p>{saveError}</p>

                <button
                  className="button"
                  onClick={saveCompletion}
                  disabled={saving}
                >
                  Try saving again
                </button>
              </>
            )}
          </div>
        )}

        {!passed && (
          <button className="button" onClick={restartQuiz}>
            Try again
          </button>
        )}

        <button
          className="button ghost"
          onClick={() => navigate(`/student/skill/${mid}`)}
        >
          Back to skill
        </button>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="quiz-page">
      <button
        className="back"
        onClick={() => navigate(`/student/skill/${mid}`)}
      >
        <ArrowLeft size={16} /> Back to skill
      </button>

      <div className="page-title">
        <div>
          <p className="eyebrow">LEVEL {level} QUIZ</p>
          <h1>{skillNames[mid] || 'Skill Quiz'}</h1>
          <p>
            Question {current + 1} of {questions.length}
          </p>
        </div>
      </div>

      <div className="bar">
        <i
          style={{
            width: `${((current + 1) / questions.length) * 100}%`
          }}
        />
      </div>

      <section className="panel quiz-card">
        <h2>{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            let className = 'quiz-option';

            if (
              selected !== null &&
              index === question.answer
            ) {
              className += ' correct';
            } else if (selected === index) {
              className += ' incorrect';
            }

            return (
              <button
                key={index}
                className={className}
                disabled={selected !== null}
                onClick={() => chooseAnswer(index)}
              >
                {option}

                {selected !== null &&
                  index === question.answer && (
                    <CheckCircle2 size={18} />
                  )}

                {selected === index &&
                  index !== question.answer && (
                    <XCircle size={18} />
                  )}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="quiz-explanation">
            <strong>
              {selected === question.answer
                ? 'Correct!'
                : 'Not quite!'}
            </strong>

            <p>{question.explanation}</p>

            <button className="button" onClick={nextQuestion}>
              {current + 1 === questions.length
                ? 'See result'
                : 'Next question'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
