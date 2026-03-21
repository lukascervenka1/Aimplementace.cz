import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Starter from './components/Starter';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import BrandMark from './components/BrandMark';
import Chatbot from './components/Chatbot';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

function App() {
    return (
        <div className="App">
            <ScrollReveal />
            {/* Global ambient orbs — not clipped by any section */}
            <div className="ambient-orb ambient-orb-top"></div>
            <div className="ambient-orb ambient-orb-mid"></div>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Starter />
                <About />
                <Contact />
                <Testimonials />
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand-col">
                            <BrandMark className="footer-brand" showTagline />
                            <p className="footer-text">
                                Designové weby a AI automatizace pro firmy, které chtějí růst.
                            </p>
                        </div>
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Navigace</h4>
                            <a href="#hero">Domů</a>
                            <a href="#services">Služby</a>
                            <a href="#starter">Rozjezd podnikání</a>
                            <a href="#about">O mně</a>
                            <a href="#contact">Kontakt</a>
                        </div>
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Služby</h4>
                            <a href="#services">Weby na míru</a>
                            <a href="#services">AI chatbot & leady</a>
                            <a href="#services">Automatizace workflow</a>
                            <a href="#services">AI podpora zákazníků</a>
                        </div>
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Kontakt</h4>
                            <a href="mailto:info@aimplementace.cz">info@aimplementace.cz</a>
                            <span className="footer-text">Praha / Online</span>
                            <span className="footer-text">IČO na vyžádání</span>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} AImplementace.cz — Všechna práva vyhrazena.
                        </p>
                    </div>
                </div>
            </footer>
            <Chatbot />
        </div>
    );
}

export default App;
