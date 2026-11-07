import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type, traceparent, tracestate, baggage','Access-Control-Allow-Methods':'POST, OPTIONS'};
const reply = (body: unknown, status = 200) => Response.json(body, {status, headers: corsHeaders});

serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', {headers:corsHeaders});
  if (req.method !== 'POST') return reply({error:'Method not allowed'},405);
  const url=Deno.env.get('SUPABASE_URL'), serviceRole=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !serviceRole) return reply({error:'Server configuration error'},500);
  const token=req.headers.get('Authorization')?.replace(/^Bearer\s+/i,''); if (!token) return reply({error:'Unauthorized'},401);
  const admin=createClient(url,serviceRole); const {data:{user},error:authError}=await admin.auth.getUser(token);
  if(authError||!user)return reply({error:'Unauthorized'},401);
  const {data:actor,error:actorError}=await admin.from('profiles').select('role,is_active').eq('id',user.id).single();
  if(actorError||actor?.role!=='admin'||!actor.is_active)return reply({error:'Forbidden'},403);
  let body:Record<string,unknown>;try{body=await req.json()}catch{return reply({error:'Invalid JSON body'},400)}
  const studentId=typeof body.studentId==='string'?body.studentId:'', password=body.password;
  if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(studentId)||typeof password!=='string'||password.length<10)return reply({error:'Enter a valid student and temporary password (10+ characters).'},400);
  const {data:student,error:studentError}=await admin.from('profiles').select('id').eq('id',studentId).eq('role','student').single();
  if(studentError||!student)return reply({error:'Student not found'},404);
  const {error:passwordError}=await admin.auth.admin.updateUserById(student.id,{password});
  if(passwordError)return reply({error:'Could not reset this password.'},400);
  const {error:profileError}=await admin.from('profiles').update({must_change_password:true}).eq('id',student.id);
  if(profileError)return reply({error:'Password reset, but password-change requirement could not be saved. Contact support.'},500);
  return reply({ok:true});
});
