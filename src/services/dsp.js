import { supabase } from './supabase/client';

function client() { if (!supabase) throw new Error('DSP is not configured.'); return supabase; }
export const syntheticEmail = userId => `${String(userId).trim().toLowerCase()}@students.dsp.invalid`;
export async function signIn(userId, password) { return client().auth.signInWithPassword({ email: syntheticEmail(userId), password }); }
export async function signOut() { return client().auth.signOut(); }
export async function getProfile(id) { return client().from('profiles').select('*').eq('id', id).single(); }
export async function getLearningData() { return client().from('modules').select('*, lessons(*)').eq('is_published', true).order('position').order('position', { foreignTable: 'lessons' }); }
export async function getProgress() { return client().from('lesson_progress').select('lesson_id, completed_at'); }
export async function completeLesson(lessonId) { return client().functions.invoke('complete-lesson', { body: { lessonId } }); }
export async function submitChallenge(challengeId, payload) { return client().functions.invoke('submit-challenge', { body: { challengeId, payload } }); }
export async function submitAssessment(moduleId, answers) { return client().functions.invoke('submit-assessment', { body: { moduleId, answers } }); }
export async function createStudent(input) { return client().functions.invoke('create-student', { body: input }); }
export async function resetStudentPassword(input) { return client().functions.invoke('reset-student-password', { body: input }); }
export async function getAdminStudents() { return client().rpc('admin_student_list'); }
export async function changeTemporaryPassword(password) {
  return client().auth.updateUser({ password });
}
export async function leaderboard(scope = 'global', page = 0) { return client().rpc('leaderboard', { ranking_scope: scope, page_offset: page * 20 }); }
export async function getQuizCompletions() {
  return client()
    .from('quiz_level_completions')
    .select('skill_id, level, score, completed_at');
}

export async function completeQuizLevel(skillId, level, score) {
  return client().rpc('complete_quiz_level', {
    p_skill_id: skillId,
    p_level: level,
    p_score: score
  });
}

export async function getTypingCompletions() {
  return client()
    .from('typing_lesson_completions')
    .select('lesson_number, completed_at');
}
export async function getAdminLearningStats() {
  return client().rpc('admin_learning_stats');
}