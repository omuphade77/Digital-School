import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfigured = Boolean(url && key);
export const supabase = supabaseConfigured
  ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
  : null;

export async function verifyConnection() {
  if (!supabase) return { ok: false, error: 'Supabase is not configured.' };
  const { error } = await supabase.from('modules').select('id', { head: true, count: 'exact' }).limit(1);
  return error ? { ok: false, error: error.message } : { ok: true };
}
