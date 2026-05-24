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

    const handleGlowMove = (e) => {
      glowCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        ctaSection.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        ctaSection.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', handleGlowMove, { passive: true });

    // Cleanup
    return () => {
      magneticElements.forEach(el => {
        if (el._magneticMove) el.removeEventListener('mousemove', el._magneticMove);
        if (el._magneticLeave) el.removeEventListener('mouseleave', el._magneticLeave);
      });
      window.removeEventListener('mousemove', handleGlowMove);
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
        <div className="section-inner">
          <div className="footer-brand">
            <LogoMark size={22} />
            <div className="footer-brand-text">
              <span className="footer-brand-name">AImplementace.cz</span>
              <span className="footer-copy">© 2026 · Lukáš Červenka · Praha</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Ochrana osobních údajů</a>
            <a href="#">Obchodní podmínky</a>
            <a href="mailto:info@aimplementace.cz">info@aimplementace.cz</a>
          </div>
        </div>
      </footer>

      <WhatsApp />
    </div>
  );
}

export default App;
