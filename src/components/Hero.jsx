import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // ── GSAP MOUNT ANIMATIONS ──
    const eyebrow = document.querySelector('.hero-eyebrow-inner');
    const headlineLines = document.querySelectorAll('.headline-line-inner');
    const description = document.querySelector('.hero-description-inner');
    const actions = document.querySelector('.hero-actions');
    const stats = document.querySelectorAll('.stat-item');
    const mockupWindow = document.querySelector('.mockup-window');
    const floatingCards = document.querySelectorAll('.floating-card');
    const scrollLine = document.querySelector('.scroll-line');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    // Set initial GSAP states programmatically to prevent CSS flickering
    gsap.set([eyebrow, headlineLines, description, actions, stats, mockupWindow, floatingCards, scrollLine], { opacity: 0 });

    tl.fromTo(eyebrow, 
      { y: '100%', opacity: 0 }, 
      { y: '0%', opacity: 1, delay: 0.05 }
    )
    .fromTo(headlineLines, 
      { y: '110%', opacity: 0 }, 
      { y: '0%', opacity: 1, stagger: 0.06 }, 
      '-=0.65'
    )
    .fromTo(description, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7 }, 
      '-=0.6'
    )
    .fromTo(actions, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7 }, 
      '-=0.6'
    )
    .fromTo(stats, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.7 }, 
      '-=0.6'
    )
    .fromTo(mockupWindow,
      { y: 40, scale: 0.96, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo(floatingCards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.6'
    )
    .fromTo(scrollLine, 
      { scaleY: 0, opacity: 0 }, 
      { scaleY: 1, opacity: 0.4, duration: 0.5 }, 
      '-=0.4'
    );
  }, []);

  return (
    <section id="hero">

      <div className="hero-container">
        {/* Left Column: Content & Actions */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-inner">
              Tvorba webů na míru &amp; AI automatizace · Praha a celá ČR
            </div>
          </div>

          <h1 className="hero-headline">
            <span className="headline-line">
              <span className="headline-line-inner">WEB, KTERÝ</span>
            </span>
            <span className="headline-line">
              <span className="headline-line-inner">VYDĚLÁVÁ</span>
            </span>
            <span className="headline-line">
              <span className="headline-line-inner serif">automaticky.</span>
            </span>
          </h1>

          <div className="hero-description">
            <div className="hero-description-inner">
              Pomáhám firmám růst a šetřit čas tam, kde je to nejvíc pálí. Ať už potřebujete
              nový moderní web, který sám získává zákazníky, efektivní PPC kampaně, nebo
              chytré AI automatizace, které za vás odpracují rutinní úkoly – navrhnu a dodám
              řešení na míru vašim cílům.
            </div>
          </div>

          <div className="hero-actions">
            <a href="#cta-final" className="hero-cta-primary magnetic">
              Chci výsledky
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#process" className="hero-cta-secondary magnetic">Jak to funguje →</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">94<em>%</em></div>
              <div className="stat-label">klientů obnovuje spolupráci</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3.7<em>×</em></div>
              <div className="stat-label">průměrný růst konverzí</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockup (Wow effect) */}
        <div className="hero-visual">
          <div className="hero-mockup-wrapper">
            {/* Main Dashboard Window */}
            <div className="mockup-window glow-card">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-address">aimplementace.cz/dashboard</div>
              </div>
              <div className="window-body">
                {/* Speed Badge */}
                <div className="mockup-badge speed-badge">
                  <div className="badge-icon">⚡</div>
                  <div className="badge-text-group">
                    <span className="badge-title">Google PageSpeed</span>
                    <span className="badge-val">100/100</span>
                  </div>
                  <span className="pulse-green"></span>
                </div>

                {/* Main Graph Card */}
                <div className="mockup-graph-card">
                  <div className="graph-header-group">
                    <span className="graph-label">Růst konverzí (Conversion Rate)</span>
                    <span className="graph-val">+370%</span>
                  </div>
                  <div className="graph-svg-container">
                    <svg viewBox="0 0 200 85" className="sparkline" width="100%" height="100%">
                      <defs>
                        <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="sparkline-stroke" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="var(--accent-secondary)" />
                          <stop offset="50%" stopColor="var(--accent)" />
                          <stop offset="100%" stopColor="var(--accent-secondary)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 5 75 Q 30 70 55 45 T 105 50 T 155 20 T 195 10"
                        fill="none"
                        stroke="url(#sparkline-stroke)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 5 75 Q 30 70 55 45 T 105 50 T 155 20 T 195 10 L 195 85 L 5 85 Z"
                        fill="url(#sparkline-grad)"
                      />
                      <circle cx="195" cy="10" r="4.5" fill="var(--white-pure)" />
                      <circle cx="195" cy="10" r="9.5" fill="var(--accent-secondary)" opacity="0.45" className="ping" />
                    </svg>
                  </div>
                </div>

                {/* Chatbot Bubble Interface */}
                <div className="mockup-chat-widget">
                  <div className="chat-title-bar">
                    <span className="chat-avatar-status"></span>
                    <span className="chat-title-text">AI Asistent (Aktivní)</span>
                  </div>
                  <div className="chat-messages">
                    <div className="chat-bubble bot">
                      <span className="bot-avatar">🤖</span>
                      <div className="bubble-text">Ahoj! Získal jsem novou poptávku z webu.</div>
                    </div>
                    <div className="chat-bubble bot success">
                      <span className="bot-avatar">⚡</span>
                      <div className="bubble-text">Zapsáno do CRM a schůzka rezervována!</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Mini-Card */}
                <div className="mockup-metric-pill">
                  <span className="pill-status"></span>
                  <span className="pill-text">Automatizace aktivní · Ušetřeno 14 hod/týden</span>
                </div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="floating-card float-lcp">
              <div className="float-icon">🚀</div>
              <div className="float-info">
                <span className="float-label">LCP Rychlost</span>
                <span className="float-val">0.4s</span>
              </div>
            </div>

            <div className="floating-card float-leads">
              <div className="float-icon">📈</div>
              <div className="float-info">
                <span className="float-label">Nové Poptávky</span>
                <span className="float-val">+24/den</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-line" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
