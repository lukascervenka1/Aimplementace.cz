import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section" aria-label="O zakladateli">
            <div className="container">
                <div className="about-wrapper reveal">
                    <div className="about-photo-wrap">
                        <img
                            src="/founder-placeholder.svg"
                            alt="Lukáš Červenka — zakladatel AImplementace.cz, webový vývojář a specialista na AI automatizace"
                            className="about-photo"
                            width="280"
                            height="280"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">O <span className="text-gradient">mně</span></h2>
                        <p className="about-lead">
                            Jmenuji se <strong>Lukáš Červenka</strong> a pomáhám firmám růst prostřednictvím
                            rychlých webů na míru a AI automatizací. Specializuji se na čistý kód v Reactu,
                            SEO optimalizaci a integraci AI nástrojů do firemních procesů.
                        </p>
                        <p className="about-text">
                            Jsem nový na trhu a aktivně nabírám klienty. To pro vás znamená plnou pozornost,
                            osobní přístup a ceny, které vás příjemně překvapí. Každý projekt beru jako referenci,
                            na které záleží. Komunikujete přímo se mnou — žádný tým prostředníků.
                        </p>
                        <div className="about-points" role="list">
                            <span role="listitem">Weby v čistém kódu — React, rychlost, SEO od základu</span>
                            <span role="listitem">AI automatizace s měřitelným dopadem na byznys</span>
                            <span role="listitem">Osobní přístup, férové ceny, transparentní komunikace</span>
                            <span role="listitem">Důraz na bezpečnost dat a ochrana NDA</span>
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
