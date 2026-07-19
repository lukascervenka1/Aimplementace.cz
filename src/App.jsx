import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tech from './components/Tech';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import WhatsApp from './components/WhatsApp';
import LogoMark from './components/LogoMark';
import CTASection from './components/CTASection';
import ScrollReveal from './components/ScrollReveal';
import InteractiveBackground from './components/InteractiveBackground';
import gsap from 'gsap';
import './App.css';

function App() {
  useEffect(() => {
    // 1. Magnetic Elements Effect (GSAP)
    const magneticElements = document.querySelectorAll('.magnetic');
    
    const handleMagneticMove = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMagneticLeave = (el) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    magneticElements.forEach(el => {
      const moveListener = (e) => handleMagneticMove(e, el);
      const leaveListener = () => handleMagneticLeave(el);
      
      el.addEventListener('mousemove', moveListener);
      el.addEventListener('mouseleave', leaveListener);
      
      // Store references on element for cleanup
      el._magneticMove = moveListener;
      el._magneticLeave = leaveListener;
    });

    // 2. Glow Cards Effect — skip entirely on touch devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    // Cache card references once — querySelectorAll on every mousemove is O(n) per frame
    const glowCards = Array.from(document.querySelectorAll('.glow-card'));
    const ctaSection = document.getElementById('cta-final');

    // rAF-throttled: mousemove can fire far above 60 Hz — writing CSS vars
    // (style recalc on every card) more than once per frame is wasted work.
    let glowRaf = 0;
    let lastX = 0, lastY = 0;

    const applyGlow = () => {
      glowRaf = 0;
      glowCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${lastX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${lastY - rect.top}px`);
      });
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        ctaSection.style.setProperty('--mouse-x', `${lastX - rect.left}px`);
        ctaSection.style.setProperty('--mouse-y', `${lastY - rect.top}px`);
      }
    };

    const handleGlowMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!glowRaf) glowRaf = requestAnimationFrame(applyGlow);
    };

    window.addEventListener('mousemove', handleGlowMove, { passive: true });

    // Cleanup
    return () => {
      magneticElements.forEach(el => {
        if (el._magneticMove) el.removeEventListener('mousemove', el._magneticMove);
        if (el._magneticLeave) el.removeEventListener('mouseleave', el._magneticLeave);
      });
      window.removeEventListener('mousemove', handleGlowMove);
      if (glowRaf) cancelAnimationFrame(glowRaf);
    };
  }, []);

  return (
    <div className="App">
      <ScrollReveal />
      <InteractiveBackground />

      {/* Grid texture */}
      <svg id="grid-texture" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>

      {/* Ambient glow orbs */}
      <div className="glow-orb glow-orb-1" aria-hidden="true"></div>
      <div className="glow-orb glow-orb-2" aria-hidden="true"></div>
      <div className="glow-orb glow-orb-3" aria-hidden="true"></div>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Tech />
        <Process />
        <Testimonials />
        <About />
        <Pricing />
        
        <CTASection />
        
        <Contact />
        <FAQ />
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="section-inner footer-inner">
          <div className="footer-top">

            {/* Brand + bio + LinkedIn */}
            <div className="footer-col footer-about">
              <div className="footer-brand">
                <LogoMark size={26} />
                <span className="footer-brand-name">AImplementace.cz</span>
              </div>
              <p className="footer-bio">
                Jsem Lukáš Červenka — webový vývojář a specialista na AI automatizace
                z Prahy. Stavím weby a automatizace na míru pro malé firmy. Vždy osobně,
                žádní prostředníci.
              </p>
              <a
                href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-%C4%8Dervenka-86b34399/"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Contact */}
            <div className="footer-col footer-contact">
              <span className="footer-col-label">Kontakt</span>
              <a href="mailto:info@aimplementace.cz" className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                info@aimplementace.cz
              </a>
              <a href="tel:+420607184090" className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +420 607 184 090
              </a>
              <a href="https://wa.me/420607184090" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.58.94.96-3.49-.22-.36a9.42 9.42 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.77 6.68c0 5.2-4.24 9.44-9.46 9.44zM20.52 3.49A11.78 11.78 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.94-5.35 11.94-11.92 0-3.19-1.24-6.19-3.5-8.4z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* CTA */}
            <div className="footer-col footer-cta-col">
              <span className="footer-cta-title">Máte projekt?</span>
              <p className="footer-cta-text">
                První konzultace je zdarma a nezávazná. Ozvu se do 24 hodin.
              </p>
              <a href="#contact" className="footer-cta-btn magnetic">
                Nezávazná konzultace
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 · Lukáš Červenka · Praha · IČO 29521742</span>
            <a href="/ochrana-osobnich-udaju.html" className="footer-legal-link">
              Ochrana osobních údajů
            </a>
          </div>
        </div>
      </footer>

      <WhatsApp />
    </div>
  );
}

export default App;
