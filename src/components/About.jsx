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

          {/* Left Column: Profile Card & Bio */}
          <div className="about-left">
            <div className="about-overline">Kdo za tím stojí</div>
            <h2 className="about-statement">
              Nejsem<br />agentura.<br />
              <span className="about-accent">Jsem člověk.</span>
            </h2>

            <p className="about-bio">
              Vystudoval jsem grafický design, který mě zavedl k webu a do světa
              IT. Prošel jsem korporacemi i malými firmami — od vývojáře po
              architekta firemních procesů. Nakonec mi dalo smysl pomáhat malým
              firmám, kde jsou výsledky vidět rychleji.
            </p>

            <div className="about-photo glow-card">
              <img
                src="/luke.jpeg"
                alt="Lukáš Červenka, zakladatel AImplementace.cz"
                width="660"
                height="768"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Key Pillars & Contact */}
          <div className="about-right">
            <div className="about-cards-stack">
              
              {/* Card 1: Origin story */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Jak to začalo</div>
                  <h3 className="about-card-title">Design, korporace a vlastní cesta</h3>
                  <p className="about-card-text">
                    Grafický design mě naučil myslet na lidi, IT kariéra mi ukázala,
                    jak věci fungují pod povrchem. U malých firem má každý výsledek
                    okamžitý dopad.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">Weby na míru</span>
                    <span className="about-card-pill">Automatizace</span>
                    <span className="about-card-pill">PPC reklamy</span>
                  </div>
                </div>
              </div>

              {/* Card 2: The name & mission */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Proč AImplementace</div>
                  <h3 className="about-card-title">A implementace. AI implementace. Obojí.</h3>
                  <p className="about-card-text">
                    Název si každý přečte jinak — a to je záměr. Jako kdysi internet
                    smazal zlaté stránky, dnes AI mění pravidla. Pomáhám firmám, aby
                    na to byly připravené.
                  </p>
                  <div className="about-card-tags-row">
                    <span className="about-card-pill">Rychlé načtení</span>
                    <span className="about-card-pill">Viditelný v AI</span>
                    <span className="about-card-pill">Bezpečnost</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Direct partnership */}
              <div className="about-card glow-card">
                <div className="about-card-inner">
                  <div className="about-card-tag">Spolupráce 1 na 1</div>
                  <h3 className="about-card-title">Přímá linka bez agentury</h3>
                  <p className="about-card-text">
                    Komunikujete přímo se mnou, ne s týmem prostředníků. Vždy
                    s přesnou cenou předem. Průměrně ušetříme 6–10 hodin práce
                    týdně.
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
                <div className="about-sig-role">Zakladatel, AImplementace.cz, Praha</div>
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
