import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section" aria-label="O zakladateli">
            <div className="container">
                <div className="about-wrapper reveal">
                    <div className="about-photo-wrap">
                        <img
                            src="/luke.jpeg"
                            alt="Lukáš Červenka — zakladatel AImplementace.cz, webový vývojář a specialista na AI automatizace"
                            className="about-photo"
                            width="280"
                            height="373"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">O <span className="text-gradient">mně</span></h2>
                        <p className="about-lead">
                            Jmenuji se <strong>Lukáš Červenka</strong> a stavím weby, které vidí Google
                            i AI — a automatizace, které firmám šetří reálný čas. Pracuji v Reactu,
                            Make.com, n8n a Zapier. Každý projekt předám s měřitelnými výsledky, ne jen s hezkou prezentací.
                        </p>
                        <p className="about-text">
                            Aktivně nabírám první klienty — to pro vás znamená plnou pozornost, přímou komunikaci
                            a ceny výrazně pod tržním průměrem (průměrný web v ČR stojí 35–40 000 Kč, u mě začínáme od 15 000 Kč).
                            Každý projekt beru jako referenci, na které záleží.
                        </p>
                        <div className="about-points" role="list">
                            <span role="listitem">Weby v Reactu — LCP pod 1s, SEO + GEO strukturovaná data</span>
                            <span role="listitem">Automatizace: Make.com, n8n, Zapier — ušetření 6–10 h/týden</span>
                            <span role="listitem">AI chatboty v souladu s AI Actem 2026</span>
                            <span role="listitem">Osobní přístup, transparentní ceny, NDA na vyžádání</span>
                        </div>
                        <div className="about-links">
                            <a
                                href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-%C4%8Dervenka-86b34399/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-linkedin"
                                aria-label="LinkedIn profil Lukáše Červenky"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
