import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Characters used during the scramble — mix of Latin + Czech diacritics
 * so the scramble feels native to the language.
 */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáčďéěíňóřšťúůýž';

const phrases = [
  { main: 'Váš web může vydělávat',   accent: 'víc.' },
  { main: 'Vaše podnikání může růst', accent: 'rychleji.' },
  { main: 'Zasloužíte si víc',        accent: 'času.' },
  { main: 'Zasloužíte si být',        accent: 'vidět.' },
  { main: 'Nechte AI pracovat',       accent: 'za vás.' },
];

/**
 * Scrambles element text into `target`.
 * Characters lock in left-to-right as progress advances.
 * Spaces are always preserved so words stay legible during the effect.
 */
const scrambleTo = (el, target, duration = 0.72) =>
  new Promise((resolve) => {
    const obj = { p: 0 };
    gsap.killTweensOf(obj);
    gsap.to(obj, {
      p: 1,
      duration,
      ease: 'power2.inOut',
      onUpdate() {
        const locked = Math.floor(target.length * obj.p);
        let out = '';
        for (let i = 0; i < target.length; i++) {
          if (i < locked || target[i] === ' ') {
            out += target[i];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        el.textContent = out;
      },
      onComplete() {
        el.textContent = target;
        resolve();
      },
    });
  });

const CTASection = () => {
  const mainRef   = useRef(null);
  const accentRef = useRef(null);
  const idxRef    = useRef(0);

  useEffect(() => {
    let iv;

    const cycle = () => {
      idxRef.current = (idxRef.current + 1) % phrases.length;
      const { main, accent } = phrases[idxRef.current];

      // Main line scrambles first; accent follows 180 ms later
      scrambleTo(mainRef.current, main, 0.72);
      setTimeout(() => scrambleTo(accentRef.current, accent, 0.52), 180);
    };

    // Give the ScrollReveal entrance animation time to finish before first swap
    const boot = setTimeout(() => {
      iv = setInterval(cycle, 4000);
    }, 2800);

    return () => {
      clearTimeout(boot);
      clearInterval(iv);
    };
  }, []);

  return (
    <section id="cta-final" className="cta-final-section">
      <div className="cta-glow-orb cta-glow-orb-1" aria-hidden="true" />
      <div className="cta-glow-orb cta-glow-orb-2" aria-hidden="true" />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cta-overline reveal">Připraveni začít?</div>

        <h2 className="cta-h2 reveal reveal-delay-1">
          {/* min-height prevents layout shifts when phrase lengths differ */}
          <span ref={mainRef} className="cta-main-line">
            {phrases[0].main}
          </span>
          <br />
          <span ref={accentRef} className="serif-accent cta-accent-word">
            {phrases[0].accent}
          </span>
        </h2>

        <div className="cta-buttons reveal reveal-delay-2">
          <a href="#contact" className="btn-primary magnetic">
            Nezávazná konzultace zdarma
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="mailto:info@aimplementace.cz" className="btn-ghost magnetic">
            info@aimplementace.cz
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
