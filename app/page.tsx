"use client";

import { useState } from "react";

const projects = [
  { title: "Aether", type: "Digital experience", tone: "violet" },
  { title: "Solace", type: "Brand universe", tone: "orange" },
  { title: "Noma", type: "Editorial commerce", tone: "blue" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0].title);

  return (
    <div id="top">
      <div className="grain" aria-hidden="true" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="Aurum home">
          <span aria-hidden="true">✦</span> AURUM
        </a>
        <nav
          id="site-navigation"
          className={menuOpen ? "links open" : "links"}
          aria-label="Main navigation"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Start a project <i aria-hidden="true">↗</i>
        </a>
        <button
          type="button"
          className="menu"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Independent creative studio · 01—26
            </p>
            <h1>
              We make
              <br />
              <em>the future</em>
              <br />
              feel inevitable.
            </h1>
            <p className="intro">
              Aurum is a creative partner for brands that would rather move
              culture than follow it.
            </p>
            <a href="#work" className="circle-link">
              Explore our orbit <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="orbital-stage" aria-hidden="true">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orb orb-main" />
            <div className="orb orb-small" />
            <div className="star s1">✦</div>
            <div className="star s2">✦</div>
            <div className="star s3">✦</div>
            <p className="stage-label">
              CREATIVE
              <br />
              GRAVITY
            </p>
            <p className="stage-index">( 001 )</p>
          </div>
          <div className="scroll-note" aria-hidden="true">
            SCROLL TO UNFOLD <span>↓</span>
          </div>
        </section>

        <section className="statement" id="approach">
          <p className="section-num">01 / What we believe</p>
          <div className="statement-grid">
            <h2>
              Design is not decoration.
              <br />
              It&apos;s <em>direction.</em>
            </h2>
            <p>
              We build distinct brands and digital worlds for people with
              something real to say. The ones who know that a new perspective is
              a competitive advantage.
            </p>
          </div>
        </section>

        <section className="work-section" id="work" aria-label="Selected work">
          <div className="section-head">
            <p className="section-num">02 / Selected signals</p>
            <p>Three studio concepts.</p>
          </div>
          <div className="work-grid">
            {projects.map(({ title, type, tone }) => {
              const selected = activeProject === title;

              return (
                <button
                  type="button"
                  key={title}
                  onClick={() => setActiveProject(title)}
                  aria-pressed={selected}
                  className={`work-card ${tone}${selected ? " selected" : ""}`}
                >
                  <span className="card-art" aria-hidden="true">
                    <span className="art-ring" />
                    <span className="art-shape" />
                  </span>
                  <span className="card-meta">
                    <span className="card-type">{type}</span>
                    <span className="card-title">{title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="manifesto">
          <div className="manifesto-top">
            <p className="section-num">03 / The Aurum way</p>
            <span>— no borrowed light</span>
          </div>
          <h2>
            Curiosity over
            <br />
            <em>convention.</em>
          </h2>
          <div className="manifesto-bottom">
            <p>
              Strategy, identity, digital, and everything between. One small,
              senior team—from first question to final pixel.
            </p>
            <a href="#approach">
              Our approach <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">
            <span /> Have a bright idea?
          </p>
          <h2>
            Let&apos;s make it
            <br />
            <em>magnetic.</em>
          </h2>
          <a href="mailto:hello@aurum.studio" className="email">
            hello@aurum.studio <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top" aria-label="Aurum home">
          <span aria-hidden="true">✦</span> AURUM
        </a>
        <p>© 2026 Aurum Studio</p>
      </footer>
    </div>
  );
}
