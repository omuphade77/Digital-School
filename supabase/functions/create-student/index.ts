import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type, traceparent, tracestate, baggage','Access-Control-Allow-Methods':'POST, OPTIONS'};
const reply = (body: unknown, status = 200) => Response.json(body, {status, headers: corsHeaders});

serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', {headers: corsHeaders});
  if (req.method !== 'POST') return reply({error:'Method not allowed'}, 405);
  const url = Deno.env.get('SUPABASE_URL'), serviceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !serviceRole) return reply({error:'Server configuration error'}, 500);
  const token = req.headers.get('Authorization')?.replace(/^Bearer\s+/i, '');
  if (!token) return reply({error:'Unauthorized'}, 401);
  const admin = createClient(url, serviceRole);
  const {data:{user}, error:authError} = await admin.auth.getUser(token);
  if (authError || !user) return reply({error:'Unauthorized'}, 401);
  const {data:actor, error:actorError} = await admin.from('profiles').select('role,is_active').eq('id', user.id).single();
  if (actorError || actor?.role !== 'admin' || !actor.is_active) return reply({error:'Forbidden'}, 403);
  let body: Record<string, unknown>; try { body = await req.json(); } catch { return reply({error:'Invalid JSON body'}, 400); }
  const userId = String(body.userId || '').trim().toLowerCase(), fullName = String(body.fullName || '').trim(), password = body.password, grade = Number(body.class);
  if (!/^[a-z0-9-]{3,30}$/.test(userId) || fullName.length < 2 || fullName.length > 100 || typeof password !== 'string' || password.length < 10 || ![9,10].includes(grade)) return reply({error:'Enter a valid name, User ID, class and temporary password (10+ characters).'}, 400);
  const {data:created, error:createError} = await admin.auth.admin.createUser({email:`${userId}@students.dsp.invalid`, password, email_confirm:true});
  if (createError || !created.user) return reply({error:'Could not create this student account. Check that the User ID is unused.'}, 400);
  const displayName = String(body.displayName || fullName.split(' ')[0]).trim().slice(0,50);
  const {error:profileError} = await admin.from('profiles').insert({id:created.user.id,user_id:userId,full_name:fullName,display_name:displayName,class:grade,school:body.school||null,classroom:body.classroom||null,must_change_password:true});
  if (profileError) { await admin.auth.admin.deleteUser(created.user.id); return reply({error:'Could not finish creating the student account.'}, 500); }
  return reply({studentId:userId}, 201);
});
