import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Starter from './components/Starter';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BrandMark from './components/BrandMark';
import Chatbot from './components/Chatbot';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

function App() {
    return (
        <div className="App">
            <ScrollReveal />
            {/* Global ambient orbs — not clipped by any section */}
            <div className="ambient-orb ambient-orb-top" aria-hidden="true"></div>
            <div className="ambient-orb ambient-orb-mid" aria-hidden="true"></div>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Starter />
                <About />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand-col">
                            <BrandMark className="footer-brand" showTagline />
                            <p className="footer-text">
                                Designové weby na míru a AI automatizace pro české firmy.
                                Osobní přístup, férové ceny, hotovo za 2–3 týdny.
                            </p>
                            <p className="footer-meta">
                                Založeno 2025 · Praha, Česká republika
                            </p>
                        </div>
                        <nav className="footer-links-col" aria-label="Navigace v patičce">
                            <h4 className="footer-heading">Navigace</h4>
                            <a href="#hero">Domů</a>
                            <a href="#services">Služby</a>
                            <a href="#starter">Rozjezd podnikání</a>
                            <a href="#about">O mně</a>
                            <a href="#testimonials">Reference</a>
                            <a href="#faq">Časté dotazy</a>
                            <a href="#contact">Kontakt</a>
                        </nav>
                        <nav className="footer-links-col" aria-label="Služby v patičce">
                            <h4 className="footer-heading">Služby</h4>
                            <a href="#services">Weby na míru</a>
                            <a href="#services">AI chatbot & leady</a>
                            <a href="#services">Automatizace workflow</a>
                            <a href="#services">AI podpora zákazníků</a>
                            <a href="#starter">Rozjezd podnikání</a>
                        </nav>
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Kontakt</h4>
                            <a href="mailto:info@aimplementace.cz">info@aimplementace.cz</a>
                            <span className="footer-text">Praha / Online celá ČR</span>
                            <a
                                href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-%C4%8Dervenka-86b34399/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} AImplementace.cz — Lukáš Červenka. Všechna práva vyhrazena.
                        </p>
                        <p className="footer-update">Poslední aktualizace: březen 2026</p>
                    </div>
                </div>
            </footer>
            <Chatbot />
        </div>
    );
}

export default App;
