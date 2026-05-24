import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Pricing.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    tag: 'ZDARMA · BEZ ZÁVAZKU',
    title: 'Bezplatná konzultace',
    text: 'Probereme váš projekt, cíle a představy. 30 minut online, žádný závazek. Odpovídám do 24 hodin.',
  },
  {
    num: '02',
    tag: 'FIX PRICE · ŽÁDNÁ PŘEKVAPENÍ',
    title: 'Návrh s přesnou cenou',
    text: 'Dostanete konkrétní plán, termín a fixní cenu — ještě před zahájením. Platíte teprve po odsouhlasení.',
  },
  {
    num: '03',
    tag: 'PRŮBĚŽNÉ UKÁZKY · PŘÍMÁ LINKA',
    title: 'Realizace & předání',
    text: 'Vy schvalujete každý krok. Po předání dostanete dokumentaci, zaškolení a přímý kontakt na mě.',
  },
];

const services = [
  { name: 'Web na míru',       price: 'od 15 000 Kč' },
  { name: 'AI chatbot',        price: 'od 8 000 Kč'  },
  { name: 'Automatizace',      price: 'od 10 000 Kč' },
  { name: 'PPC správa',        price: 'od 5 000 Kč / měs.' },
  { name: 'Kompletní rozjezd', price: 'od 25 000 Kč' },
];

const trustItems = [
  '47 dokončených projektů',
  'Průměrná doba dodání 28 dní',
  '94 % klientů pokračuje ve spolupráci',
  'Platíte až po schválení návrhu',
];

const Pricing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const header   = containerRef.current.querySelector('.pricing-header');
        const trust    = containerRef.current.querySelector('.pricing-trust');
        const stepEls  = containerRef.current.querySelectorAll('.process-step');
        const pills    = containerRef.current.querySelector('.service-pills-wrap');
        const cta      = containerRef.current.querySelector('.pricing-sole-cta');

        gsap.set([header, trust, stepEls, pills, cta], { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 76%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(header,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }
        )
        .fromTo(trust,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(stepEls,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.14, duration: 0.75, ease: 'power3.out' },
          '-=0.35'
        )
        .fromTo(pills,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(cta,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="pricing" ref={containerRef}>
      <div className="section-inner">

        {/* Header */}
        <div className="pricing-header">
          <div>
            <div className="section-label" style={{ marginBottom: '20px' }}>Jak spolupráce funguje</div>
            <h2 className="pricing-h2">
              Nejdřív mluvíme.<br />
              <span className="serif-accent">Pak počítáme.</span>
            </h2>
          </div>
          <p className="pricing-sub">
            Každý projekt je jiný — proto <strong>cenu nikdy nestanovuji předem</strong>.
            Vzniká až po konzultaci, kdy přesně vím, co potřebujete.
            <br /><br />
            Dostanete <span>fixní cenu a termín</span> ještě před zahájením.
            Žádné hodinové sazby, žádná překvapení na konci.
          </p>
        </div>

        {/* Trust bar */}
        <div className="pricing-trust">
          {trustItems.map((item) => (
            <div className="pricing-trust-item" key={item}>{item}</div>
          ))}
        </div>

        {/* 3-step process */}
        <div className="process-grid">
          {steps.map((step, i) => (
            <div className="process-step glow-card" key={i}>
              <span className="process-num">{step.num}</span>
              <span className="process-tag">{step.tag}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Indicative service prices — not packages */}
        <div className="service-pills-wrap">
          <div className="service-pills-label">Orientační investice dle oblasti</div>
          <div className="service-pills">
            {services.map((s) => (
              <div className="service-pill" key={s.name}>
                <span className="service-pill-name">{s.name}</span>
                <span className="service-pill-price">{s.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <div className="pricing-sole-cta">
          <a href="#contact" className="btn-primary magnetic">
            Začít konzultaci zdarma
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <p className="pricing-cta-note">
            Odpovídám do 24 hodin &nbsp;·&nbsp; Bez závazku &nbsp;·&nbsp; První konzultace zdarma
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
