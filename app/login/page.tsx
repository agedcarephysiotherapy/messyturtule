'use client';

import { FormEvent, useState } from 'react';
import { createClient } from '../../lib/supabase-browser';

export default function LoginPage() {
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [mode,setMode]=useState<'login'|'signup'>('login'); const [message,setMessage]=useState(''); const [loading,setLoading]=useState(false);
  async function submit(e:FormEvent){e.preventDefault();setLoading(true);setMessage('');const supabase=createClient();const result=mode==='login'?await supabase.auth.signInWithPassword({email,password}):await supabase.auth.signUp({email,password});setLoading(false);if(result.error){setMessage(result.error.message);return;}window.location.href='/dashboard';}
  return <main className="container" style={{maxWidth:520,paddingTop:70}}><div className="card"><div className="eyebrow">MessyTurtule</div><h1 style={{fontSize:42,letterSpacing:-2}}>{mode==='login'?'Welcome back':'Create your account'}</h1><p className="meta">{mode==='login'?'Sign in to see your loyalty programmes.':'Start with one account for all your loyalty cards.'}</p><form onSubmit={submit}><label>Email</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} style={input}/><label>Password</label><input required minLength={6} type="password" value={password} onChange={e=>setPassword(e.target.value)} style={input}/><button className="btn primary" disabled={loading} style={{width:'100%',marginTop:8}}>{loading?'Please wait…':mode==='login'?'Sign in':'Create account'}</button></form>{message&&<p style={{marginTop:16}}>{message}</p>}<button className="btn secondary" onClick={()=>setMode(mode==='login'?'signup':'login')} style={{width:'100%',marginTop:10}}>{mode==='login'?'Create a new account':'I already have an account'}</button></div></main>;
}
const input={display:'block',width:'100%',padding:13,margin:'7px 0 16px',border:'1px solid #e4e7e1',borderRadius:10,fontSize:16,background:'#fff'};
