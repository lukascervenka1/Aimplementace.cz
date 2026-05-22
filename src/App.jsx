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
import Chatbot from './components/Chatbot';
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

    // 2. Glow Cards Effect (Vercel/Linear style border glow)
    const handleGlowMove = (e) => {
      const cards = document.querySelectorAll('.glow-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      const ctaSection = document.getElementById('cta-final');
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctaSection.style.setProperty('--mouse-x', `${x}px`);
        ctaSection.style.setProperty('--mouse-y', `${y}px`);
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
        
        <section id="cta-final" className="cta-final-section">
          <div className="cta-glow-orb cta-glow-orb-1" aria-hidden="true"></div>
          <div className="cta-glow-orb cta-glow-orb-2" aria-hidden="true"></div>
          
          <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
            <div className="cta-overline reveal">Připraveni začít?</div>
            <h2 className="cta-h2 reveal reveal-delay-1">
              Váš web může<br />vydělávat <span className="serif-accent">víc.</span>
            </h2>
            <div className="cta-buttons reveal reveal-delay-2">
              <a href="mailto:info@aimplementace.cz" className="btn-primary magnetic">
                Nezávazná konzultace zdarma
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="mailto:info@aimplementace.cz" className="btn-ghost magnetic">info@aimplementace.cz</a>
            </div>
          </div>
        </section>
        
        <Contact />
        <FAQ />
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="section-inner">
          <div className="footer-copy">© 2026 AImplementace.cz · Lukáš Červenka · Praha</div>
          <div className="footer-links">
            <a href="#">Ochrana osobních údajů</a>
            <a href="#">Obchodní podmínky</a>
            <a href="mailto:info@aimplementace.cz">info@aimplementace.cz</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
