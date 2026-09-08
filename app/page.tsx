const programmes = [
  { name:'Bean & Bloom', type:'Coffee', icon:'☕', current:7, total:10, reward:'Free coffee', colour:'green' },
  { name:'The Daily Grind', type:'Cafe', icon:'🥐', current:3, total:8, reward:'$10 voucher', colour:'blue' },
  { name:'Fresh Bowl', type:'Lunch', icon:'🥗', current:5, total:7, reward:'Free lunch', colour:'orange' }
];

export default function Home() {
  return <main>
    <header className="topbar"><div className="logo">Messy<span>Turtule</span></div><button className="btn primary">Sign in</button></header>
    <div className="container">
      <section className="hero">
        <div>
          <div className="eyebrow">Digital loyalty, without the wallet full of cards</div>
          <h1>One app.<br/>All your rewards.</h1>
          <p className="lead">Keep every loyalty programme in one place. Show one QR code, collect stamps wherever you go, unlock rewards and hear from your favourite local businesses.</p>
          <div className="actions"><button className="btn primary">Create free account</button><button className="btn secondary">I’m a business</button></div>
        </div>
        <div className="card qr-card"><div className="meta">Your universal loyalty QR</div><div className="qr">{Array.from({length:81},(_,i)=><i key={i}/>)}</div><strong>Scan once. Stamp anywhere.</strong><p className="meta">Your account connects to every participating programme.</p></div>
      </section>

      <section className="section"><h2>Your loyalty dashboard</h2><div className="grid">{programmes.map(p=><div className="card" key={p.name}><div className="program"><div><div className="icon">{p.icon}</div><h3>{p.name}</h3><div className="meta">{p.type} · Reward: {p.reward}</div></div><strong>{p.current}/{p.total}</strong></div><div className="progress"><b style={{width:`${p.current/p.total*100}%`}}/></div><div className="meta">{p.total-p.current} more {p.total-p.current===1?'stamp':'stamps'} to go</div><div className="stamps">{Array.from({length:p.total},(_,i)=><span className={`stamp ${i<p.current?'on':''}`} key={i}>{i<p.current?'✓':i+1}</span>)}</div></div>)}</div></section>

      <section className="section"><h2>Built for customers and local businesses</h2><div className="grid"><div className="card feature"><div className="icon">📱</div><h3>One customer account</h3><p>Your loyalty identity follows you. No separate cards or apps for every café.</p></div><div className="card feature"><div className="icon">🎁</div><h3>Rewards that matter</h3><p>See your progress, available rewards, history and programme periods at a glance.</p></div><div className="card feature"><div className="icon">📣</div><h3>Stay connected</h3><p>Businesses can send offers and messages to everyone or targeted customer groups.</p></div></div></section>

      <section className="section"><div className="card" style={{textAlign:'center',padding:'38px 22px'}}><div className="eyebrow">For businesses</div><h2>Turn visits into relationships.</h2><p className="lead" style={{margin:'0 auto'}}>Create a loyalty programme, scan the customer QR, issue stamps, manage rewards and send targeted promotions — all from one simple dashboard.</p><div className="actions" style={{justifyContent:'center'}}><button className="btn primary">Start your business</button></div></div></section>
    </div>
  </main>;
}
