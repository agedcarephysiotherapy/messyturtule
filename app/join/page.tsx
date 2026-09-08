'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../lib/supabase-browser';

export default function Join() {
  const [id, setId] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('programme');
    if (value) setId(value);
  }, []);

  async function join() {
    setBusy(true);
    setMsg('');
    const s = createClient();
    const { data: u } = await s.auth.getUser();
    if (!u.user) {
      window.location.href = '/login';
      return;
    }

    const { error } = await s.from('programme_memberships').insert({
      programme_id: id.trim(),
      customer_id: u.user.id,
    });

    if (error) {
      setMsg(error.message.includes('duplicate') ? 'You are already in this programme.' : error.message);
    } else {
      setMsg('Joined! Your programme is now on the dashboard.');
      setTimeout(() => (window.location.href = '/dashboard'), 700);
    }
    setBusy(false);
  }

  return (
    <main>
      <header className="topbar">
        <div className="logo">Messy<span>Turtule</span></div>
        <a className="btn secondary" href="/dashboard">Dashboard</a>
      </header>
      <div className="container" style={{ maxWidth: 650 }}>
        <section className="section">
          <div className="eyebrow">Join loyalty</div>
          <h1>Add a programme</h1>
          <p className="lead">Open a business's join link or enter its programme ID.</p>
          <div className="card">
            <label>
              Programme ID
              <input value={id} onChange={e => setId(e.target.value)} placeholder="Programme UUID" />
            </label>
            <button className="btn primary" disabled={!id.trim() || busy} onClick={join}>
              {busy ? 'Joining…' : 'Join programme'}
            </button>
            {msg && <p style={{ marginBottom: 0 }}>{msg}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
