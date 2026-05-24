import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoMark from './LogoMark';
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
                  <div className="about-card-tag">Výsledky, ne prezentace</div>
                  <h3 className="about-card-title">Čísla, která něco znamenají</h3>
                  <p className="about-card-text">
                    Nehraju si na korporátní schůzky a zdlouhavé slajdy. Dodám vám
                    funkční výsledek s jasnými čísly, co se zlepšilo, kolik zákazníků přibylo
                    a kolik hodin ušetřila automatizace.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">Weby na míru</span>
                    <span className="about-card-pill">Automatizace</span>
                    <span className="about-card-pill">PPC reklamy</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Speed & AI-Ready */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Rychlý web, viditelný všude</div>
                  <h3 className="about-card-title">Google vás najde. ChatGPT vás zmíní.</h3>
                  <p className="about-card-text">
                    Weby stavím tak, aby se načetly rychle a Google je miloval. Navíc vás
                    mohou zmínit i ChatGPT nebo Perplexity, kde dnes lidé stále
                    častěji hledají firmy a služby.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">Rychlé načtení</span>
                    <span className="about-card-pill">Viditelný v AI</span>
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
                    Pracujete přímo se mnou, ne s týmem prostředníků. Odpovím
                    do 24 hodin a ke každému projektu přistupuji, jako by byl můj vlastní.
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
              <div className="about-avatar">
                <LogoMark size={26} />
              </div>
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
