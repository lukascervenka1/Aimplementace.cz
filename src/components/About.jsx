import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const leftContent = document.querySelector('.about-left');
    const cards = document.querySelectorAll('.about-card');
    const signature = document.querySelector('.about-signature');

    // Programmatically set initial states to prevent FOUC
    gsap.set([leftContent, cards, signature], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 78%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(leftContent, 
      { opacity: 0, x: -40 }, 
      { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out' }
    )
    .fromTo(cards, 
      { opacity: 0, x: 50, y: 15 }, 
      { opacity: 1, x: 0, y: 0, stagger: 0.16, duration: 0.85, ease: 'power3.out' },
      '-=0.65'
    )
    .fromTo(signature,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-layout">

          {/* Left Column: Profile Card & Core Philosophy */}
          <div className="about-left">
            <div className="about-overline">Kdo za tím stojí</div>
            <h2 className="about-statement">
              Nejsem<br />agentura.<br />
              <span className="serif-accent">Jsem člověk.</span>
            </h2>
            
            <div className="about-photo glow-card">
              <img
                src="/luke.jpeg"
                alt="Lukáš Červenka — zakladatel AImplementace.cz"
              />
            </div>
          </div>

          {/* Right Column: Key Pillars & Contact */}
          <div className="about-right">
            <div className="about-cards-stack">
              
              {/* Card 1: Results & Dev */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Vývoj &amp; Výsledky</div>
                  <h3 className="about-card-title">Měřitelný dopad místo prezentací</h3>
                  <p className="about-card-text">
                    Nehraju si na korporátní schůzky a zdlouhavé slajdy. Každý projekt dodávám 
                    s čistým a optimalizovaným kódem, který má jasné a měřitelné výsledky pro vaše podnikání.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">React</span>
                    <span className="about-card-pill">Power Automate</span>
                    <span className="about-card-pill">Playwright</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Speed & AI-Ready */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Rychlost &amp; AI-Ready SEO</div>
                  <h3 className="about-card-title">SEO &amp; AI indexace od prvního dne</h3>
                  <p className="about-card-text">
                    Stavím weby s bleskovým načítáním (LCP pod 1 sekundu) bez těžkých redakčních systémů. 
                    Díky Schema.org strukturovaným datům váš web snadno najdou a citují i AI vyhledávače 
                    jako ChatGPT, Perplexity či Google AI Overviews.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">LCP &lt; 1.0s</span>
                    <span className="about-card-pill">Schema.org</span>
                    <span className="about-card-pill">Bezpečnost</span>
                  </div>
                </div>
              </div>

              {/* Card 3: 1-on-1 Partnership */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Spolupráce 1-na-1</div>
                  <h3 className="about-card-title">Přímá linka bez prostředníků</h3>
                  <p className="about-card-text">
                    Dostanete moji plnou pozornost a flexibilitu bez nutnosti platit drahé týmy a projektové 
                    manažery. Rychlá implementace a transparentní cena již od 15 000 Kč – každý projekt beru 
                    jako svou vizitku.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">Od 15 000 Kč</span>
                    <span className="about-card-pill">Přímá linka</span>
                    <span className="about-card-pill">Konzultace zdarma</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Signature Block */}
            <div className="about-signature">
              <div className="about-avatar">LČ</div>
              <div className="about-sig-info">
                <div className="about-sig-name">Lukáš Červenka</div>
                <div className="about-sig-role">Zakladatel · AImplementace.cz · Praha</div>
              </div>
              <a
                href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-%C4%8Dervenka-86b34399/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-linkedin magnetic"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
