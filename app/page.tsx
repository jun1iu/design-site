"use client";

import { useState } from "react";

const work = [
  { title: "Aether", type: "Digital experience", tone: "violet" },
  { title: "Solace", type: "Brand universe", tone: "orange" },
  { title: "Noma", type: "Editorial commerce", tone: "blue" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <main>
      <div className="grain" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="Aurum home"><span>✦</span> AURUM</a>
        <nav className={menuOpen ? "links open" : "links"}><a href="#work">Work</a><a href="#approach">Approach</a><a href="#journal">Journal</a></nav>
        <a className="nav-cta" href="#contact">Start a project <i>↗</i></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "≡"}</button>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span /> Independent creative studio · 01—26</p><h1>We make<br /><em>the future</em><br />feel inevitable.</h1><p className="intro">Aurum is a creative partner for brands that would rather move culture than follow it.</p><a href="#work" className="circle-link">Explore our orbit <span>↓</span></a></div>
        <div className="orbital-stage" aria-label="Abstract colorful three-dimensional art"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orb orb-main" /><div className="orb orb-small" /><div className="star s1">✦</div><div className="star s2">✦</div><div className="star s3">✦</div><p className="stage-label">CREATIVE<br />GRAVITY</p><p className="stage-index">( 001 )</p></div>
        <div className="scroll-note">SCROLL TO UNFOLD <span>↓</span></div>
      </section>
      <section className="statement" id="approach"><p className="section-num">01 / What we believe</p><div className="statement-grid"><h2>Design is not decoration.<br />It&apos;s <em>direction.</em></h2><p>We build distinct brands and digital worlds for people with something real to say. The ones who know that a new perspective is a competitive advantage.</p></div></section>
      <section className="work-section" id="work"><div className="section-head"><p className="section-num">02 / Selected signals</p><p>Three recent launches<br />from our studio.</p></div><div className="work-grid">{work.map((item, i) => <button key={item.title} onClick={() => setActive(i)} className={`work-card ${item.tone} ${active === i ? "selected" : ""}`}><div className="card-art"><span className="art-ring" /><span className="art-shape" /></div><div className="card-meta"><p>{item.type}</p><h3>{item.title} <b>↗</b></h3></div></button>)}</div></section>
      <section className="manifesto"><div className="manifesto-top"><p className="section-num">03 / The Aurum way</p><span>— no borrowed light</span></div><h2>Curiosity over<br /><em>convention.</em></h2><div className="manifesto-bottom"><p>Strategy, identity, digital, and everything between. One small, senior team—from first question to final pixel.</p><a href="#contact">Our approach <span>→</span></a></div></section>
      <section className="contact" id="contact"><p className="eyebrow"><span /> Have a bright idea?</p><h2>Let&apos;s make it<br /><em>magnetic.</em></h2><a href="mailto:hello@aurum.studio" className="email">hello@aurum.studio <span>↗</span></a></section>
      <footer><a className="brand" href="#top"><span>✦</span> AURUM</a><p>© 2026 / All matter, no noise.</p><div><a href="#journal">Instagram</a><a href="#journal">LinkedIn</a></div></footer>
    </main>
  );
}
