import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01 / KONZULTACE',
    title: 'Výběr procesu',
    desc: 'Vybereme 1 oblast s nejvyšším potenciálem úspory a nejnižším rizikem. Konzultace zdarma.',
  },
  {
    num: '02 / NÁVRH',
    title: 'Plán & pevná cena',
    desc: 'Navrhneme workflow, metriky úspěchu a konkrétní milníky. Přesná cena a termín předem — žádná překvapení.',
  },
  {
    num: '03 / REALIZACE',
    title: 'Vývoj v provozu',
    desc: 'Nasadíme do reálné práce a ladíme podle zpětné vazby. Průběžně ukazujeme výsledky, vy schvalujete každý krok.',
  },
  {
    num: '04 / PŘEDÁNÍ',
    title: 'Zaškolení & podpora',
    desc: 'Kompletní dokumentace, zaškolení týmu a podpora po spuštění. Komunikujete přímo se mnou — žádní prostředníci.',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx;
    
    // Tiny delay to ensure DOM is fully ready and ScrollTrigger measures correctly
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // 1. Dash-crawling animation for the "kolo" SVG ring (seamless loop for strokeDasharray="6 6")
        gsap.to('.kolo-ring-svg ellipse', {
          strokeDashoffset: -12, // 6px dash + 6px space = 12px pattern repeat
          repeat: -1,
          duration: 0.6,
          ease: 'none'
        });

        // 2. Scroll-bound rotation of the SVG ring (using container-wrapped rotation)
        gsap.to('.kolo-ring-svg', {
          rotation: 180,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5
          }
        });

        // 3. Timeline animation for the steps (Desktop vs Mobile)
        const isDesktop = window.matchMedia('(min-width: 993px)').matches;

        if (isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          });

          // Animate the active progress line
          const activeLine = lineRef.current ? lineRef.current.querySelector('.process-line-active') : null;
          if (activeLine) {
            tl.to(activeLine, {
              width: '100%',
              duration: 1.2,
              ease: 'power2.inOut'
            });
          }

          // Fade in and lift the cards in stagger
          tl.fromTo(cardsRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out'
            },
            '-=0.9' // Start animating cards while the line is still drawing
          );
        } else {
          // Mobile & tablet animation: simple stagger reveal as the section comes into view
          gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      }, sectionRef);
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="process" ref={sectionRef}>
      <div className="section-inner">
        <div className="process-header">
          <div className="reveal">
            <div className="section-label" style={{ marginBottom: '24px' }}>Jak pracujeme</div>
            <h2 className="process-h2">
              Žádné<br />zbytečné<br />
              <span className="kolo-wrapper">
                <span className="serif-accent">kolo</span>
                <span className="kolo-ring-container">
                  <svg className="kolo-ring-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="koloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                      <filter id="koloGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <ellipse cx="60" cy="60" rx="55" ry="18" fill="none" stroke="url(#koloGrad)" strokeWidth="1.5" strokeDasharray="6 6" filter="url(#koloGlow)" />
                  </svg>
                </span>
              </span>
            </h2>
          </div>
          <p className="process-intro reveal reveal-delay-1">
            <strong>Čtyři fáze</strong>, jasné výstupy v každé z nich. Nikdy nezačínáme kódovat,
            dokud nezpochybníme každý předpoklad — to <span>ušetří týdny práce i peněz</span>.
          </p>
        </div>

        <div className="process-steps-container">
          {/* Horizontal connecting line for desktop timeline */}
          <div className="process-line-wrapper" ref={lineRef}>
            <div className="process-line-active" />
          </div>

          <div className="process-steps">
            {steps.map((step, i) => (
              <div 
                className="step" 
                key={step.num}
                ref={el => cardsRef.current[i] = el}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
