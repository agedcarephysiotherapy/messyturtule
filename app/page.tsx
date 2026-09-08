const programmes = [
  { name:'Bean & Bloom', type:'Coffee', icon:'☕', current:7, total:10, reward:'Free coffee' },
  { name:'The Daily Grind', type:'Cafe', icon:'🥐', current:3, total:8, reward:'$10 voucher' },
  { name:'Fresh Bowl', type:'Lunch', icon:'🥗', current:5, total:7, reward:'Free lunch' }
];

export default function Home() {
  return <main>
    <header className="topbar"><div className="logo">Messy<span>Turtule</span></div><div className="actions" style={{margin:0}}><a className="btn secondary" href="/login">Sign in</a><a className="btn primary" href="/login">Get started</a></div></header>
    <div className="container">
      <section className="hero">
        <div>
          <div className="eyebrow">The loyalty app for everywhere</div>
          <h1>Loyalty.<br/><span style={{color:'var(--accent)'}}>Sorted.</span></h1>
          <p className="lead">One account. One QR. Every loyalty programme, reward and offer in one ridiculously simple place.</p>
          <div className="actions"><a className="btn primary" href="/login">Create free account →</a><a className="btn secondary" href="/login">For businesses</a></div>
        </div>
        <div className="card qr-card"><div className="eyebrow">Your universal QR</div><div className="qr">{Array.from({length:81},(_,i)=><i key={i}/>)}</div><strong style={{fontSize:18}}>Scan once. Stamp anywhere.</strong><p className="meta">Your loyalty identity travels with you.</p></div>
      </section>

      <section className="section"><div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:20,marginBottom:20}}><div><div className="eyebrow">Your world</div><h2 style={{marginTop:6}}>All your loyalty. One view.</h2></div><span className="meta">3 active programmes</span></div><div className="grid">{programmes.map(p=><div className="card" key={p.name}><div className="program"><div><div className="icon">{p.icon}</div><h3>{p.name}</h3><div className="meta">{p.type} · {p.reward}</div></div><strong style={{color:'var(--accent)',fontSize:20}}>{p.current}/{p.total}</strong></div><div className="progress"><b style={{width:`${p.current/p.total*100}%`}}/></div><div className="meta">{p.total-p.current} more {p.total-p.current===1?'stamp':'stamps'} to unlock</div><div className="stamps">{Array.from({length:p.total},(_,i)=><span className={`stamp ${i<p.current?'on':''}`} key={i}>{i<p.current?'✓':i+1}</span>)}</div></div>)}</div></section>

      <section className="section"><div className="eyebrow">Why MessyTurtule</div><h2 style={{marginTop:7}}>Less cards. More rewards.</h2><div className="grid"><div className="card feature"><div className="icon">⚡</div><h3>One QR for everything</h3><p>No wallet full of cards. Show your QR and keep collecting.</p></div><div className="card feature"><div className="icon">🎁</div><h3>Never miss a reward</h3><p>See progress, unlocked rewards, offers and your complete history.</p></div><div className="card feature"><div className="icon">📣</div><h3>Businesses stay connected</h3><p>Send smart offers to your customers and turn visits into relationships.</p></div></div></section>

      <section className="section"><div className="card" style={{textAlign:'center',padding:'55px 22px',background:'radial-gradient(circle at 50% 0%,rgba(247,87,0,.18),transparent 55%),linear-gradient(145deg,#111,#090909)'}}><div className="eyebrow">For businesses</div><h2 style={{fontSize:42,margin:'10px 0 12px'}}>Make every visit count.</h2><p className="lead" style={{margin:'0 auto'}}>Create loyalty programmes, scan customers, issue stamps, unlock rewards and send targeted promotions.</p><div className="actions" style={{justifyContent:'center'}}><a className="btn primary" href="/login">Start your business →</a></div></div></section>
    </div>
  </main>;
}
