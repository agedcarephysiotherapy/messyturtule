'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../lib/supabase-browser';

export default function BusinessHome() {
  const [email, setEmail] = useState('');
  const [programmes, setProgrammes] = useState<any[]>([]);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => { (async () => {
    const s = createClient(); const { data } = await s.auth.getUser();
    if (!data.user) { window.location.href='/login'; return; }
    setEmail(data.user.email ?? '');
    const { data: memberships } = await s.from('memberships').select('organisation_id,role,organisations(name)').eq('user_id', data.user.id);
    const business = (memberships ?? []).find((m:any) => ['owner','admin','business_admin','staff'].includes(m.role));
    if (!business) { setAllowed(false); return; }
    setAllowed(true);
    const { data: p } = await s.from('loyalty_programmes').select('id,name,description,stamps_required,reward_name,active').eq('organisation_id', business.organisation_id).order('created_at',{ascending:false});
    setProgrammes(p ?? []);
  })(); }, []);

  if (!allowed) return <main className="container"><div className="card"><h2>Business access</h2><p>{email ? 'Your account is not linked to a business yet.' : 'Loading…'}</p><a className="btn secondary" href="/dashboard">Customer dashboard</a></div></main>;
  return <main><header className="topbar"><div className="logo">Messy<span>Turtule</span></div><a className="btn secondary" href="/dashboard">Customer view</a></header><div className="container"><section className="hero"><div><div className="eyebrow">Business console</div><h1>Turn visits into<br/>loyal customers.</h1><p className="lead">Create programmes, scan customers and issue stamps.</p></div><a className="btn primary" href="/business/scan">Open scanner</a></section><section className="section"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h2>Loyalty programmes</h2><a className="btn primary" href="/business/programmes/new">New programme</a></div>{programmes.length===0?<div className="card"><p>No programmes yet.</p><a className="btn primary" href="/business/programmes/new">Create your first programme</a></div>:<div className="grid">{programmes.map((p:any)=><div className="card feature" key={p.id}><div className="meta">{p.active?'ACTIVE':'INACTIVE'}</div><h3>{p.name}</h3><p>{p.description}</p><strong>{p.stamps_required} stamps → {p.reward_name}</strong></div>)}</div>}</section></div></main>;
}
