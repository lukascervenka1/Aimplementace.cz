import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Pricing.css';

gsap.registerPlugin(ScrollTrigger);

const launchFeatures = [
  { active: true,  text: 'Strategický audit + plán konverzí' },
  { active: true,  text: 'Profesionální UI/UX design' },
  { active: true,  text: 'Vícesekcový web (5+ stránek)' },
  { active: true,  text: 'Technický SEO základ' },
  { active: true,  text: 'Nasazení na rychlé edge síti' },
  { active: false, text: 'AI integrace' },
  { active: false, text: 'Průběžné reporty a optimalizace' },
];

const scaleFeatures = [
  { active: true, text: 'Vše z Launch' },
  { active: true, text: 'AI asistent nebo chatbot na míru' },
  { active: true, text: 'Automatické e-maily a follow-upy' },
  { active: true, text: 'A/B testování klíčových stránek' },
  { active: true, text: 'Měsíční report s čísly navíc' },
  { active: true, text: 'Priority podpora (reakce do 4 h)' },
  { active: true, text: 'Konverzní optimalizace průběžně' },
];

const partnerFeatures = [
  { active: true, text: 'Vše ze Scale' },
  { active: true, text: 'Vlastní AI modely a agenti' },
  { active: true, text: 'Napojení na CRM a interní systémy' },
  { active: true, text: 'Dedikovaný tým (vývojář + stratég)' },
  { active: true, text: 'SLA 99,9 % uptime' },
  { active: true, text: 'Kvartální strategické review' },
  { active: true, text: 'Google Ads + Sklik v ceně balíčku' },
];

const trustItems = [
  '47 dokončených projektů',
  'Průměrná doba dodání 28 dní',
  '94 % klientů pokračuje ve spolupráci',
  'Platíte až po schválení návrhu',
];

const FeatureList = ({ features }) => (
  <ul className="pricing-features">
    {features.map((f, i) => (
      <li key={i} className={f.active ? 'active' : ''}>{f.text}</li>
    ))}
  </ul>
);

const Pricing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    
    // Tiny delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const header = containerRef.current.querySelector('.pricing-header');
        const trust = containerRef.current.querySelector('.pricing-trust');
        const cards = containerRef.current.querySelectorAll('.pricing-card');

        // Set initial state to prevent flash
        gsap.set([header, trust, cards], { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 76%',
            toggleActions: 'play none none none'
          }
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
        .fromTo(cards,
          { opacity: 0, y: 40, rotationX: -3, transformPerspective: 1000, transformOrigin: 'top center' },
          { opacity: 1, y: 0, rotationX: 0, stagger: 0.14, duration: 0.75, ease: 'power3.out' },
          '-=0.45'
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

        <div className="pricing-header">
          <div>
            <div className="section-label" style={{ marginBottom: '20px' }}>Balíčky služeb</div>
            <h2 className="pricing-h2">
              Transparentní spolupráce,<br /><span className="serif-accent">skutečné výsledky</span>
            </h2>
          </div>
          <p className="pricing-sub">
            <strong>Jasná pravidla</strong>, žádné skryté poplatky ani nepředvídatelné hodinové sazby. 
            Každý projekt naceňujeme individuálně podle vašeho zadání — to vám <span>ušetří peníze i starosti</span>.
            <br /><br />
            Každá spolupráce začíná <strong>bezplatnou konzultací</strong> — platíte teprve tehdy, až odsouhlasíte úvodní návrh.
          </p>
        </div>

        {/* Trust bar */}
        <div className="pricing-trust">
          {trustItems.map((item) => (
            <div className="pricing-trust-item" key={item}>{item}</div>
          ))}
        </div>

        <div className="pricing-grid">

          {/* LAUNCH */}
          <div className="pricing-card glow-card">
            <div className="pricing-tier">Launch</div>
            <div className="pricing-persona">
              Pro firmy, které potřebují reprezentativní a rychlý web — bez kompromisů na kvalitě a rychlosti.
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-price">
              <span className="price-prefix">od </span>
              <span className="currency">Kč</span>
              <span className="price-val">29 900</span>
              <span className="note">*</span>
            </div>
            <div className="pricing-cycle">WEB HOTOVÝ DO 30 DNÍ</div>
            <FeatureList features={launchFeatures} />
            <a href="#cta-final" className="pricing-cta">Chci web do 30 dní</a>
            <p className="pricing-guarantee">
              *Orientační cena pro standardní rozsah.{' '}
              <strong>Konzultace je zdarma</strong> — přesný rozpočet schválíme předem.
            </p>
          </div>

          {/* SCALE — featured */}
          <div className="pricing-card featured glow-card">
            <div className="pricing-badge">Nejčastější volba</div>
            <div className="pricing-tier">Scale</div>
            <div className="pricing-persona">
              Pro firmy, které chtějí bleskový web s integrovaným AI asistentem, automatizací a podporou.
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-price">
              <span className="price-prefix">od </span>
              <span className="currency">Kč</span>
              <span className="price-val">59 900</span>
              <span className="note">*</span>
            </div>
            <div className="pricing-cycle">WEB + AI CHATBOT · 6 MĚSÍCŮ PODPORY</div>
            <FeatureList features={scaleFeatures} />
            <a href="#cta-final" className="pricing-cta">Chci začít se Scale</a>
            <p className="pricing-guarantee">
              <strong>6 měsíců podpory v ceně.</strong> Platíte až po schválení grafického návrhu.
            </p>
          </div>

          {/* PARTNER */}
          <div className="pricing-card glow-card">
            <div className="pricing-tier">Partner</div>
            <div className="pricing-persona">
              Pro rostoucí projekty hledající dlouhodobého technického partnera pro AI, weby a integrace.
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-price pricing-price--custom">Na míru</div>
            <div className="pricing-cycle">DLOUHODOBÝ ROZVOJ & AUTOMATIZACE</div>
            <FeatureList features={partnerFeatures} />
            <a href="#cta-final" className="pricing-cta">Domluvme podmínky</a>
            <p className="pricing-guarantee">
              Nezávazná konzultace —{' '}
              <strong>do 48 hodin se spojíme s konkrétním návrhem</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
