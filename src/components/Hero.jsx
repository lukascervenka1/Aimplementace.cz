import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section" aria-label="Úvodní sekce">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">Weby na míru & AI automatizace — Praha / Online</p>
                    <h1 className="hero-title">
                        Postavíme vám web,<br />
                        který <em className="hero-italic">prodává</em>
                    </h1>
                    <p className="hero-subtitle">
                        Designové weby bez šablon, které se načtou pod sekundu.
                        AI automatizace, které šetří čas a přinášejí leady.
                        Žádný Wix, žádný WordPress — jen čistý kód a měřitelné výsledky.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Chci nezávaznou konzultaci</a>
                        <a href="#starter" className="btn btn-outline">Rozjezd podnikání</a>
                    </div>
                </div>
                <div className="hero-visual" role="presentation">
                    <div className="hero-card hero-card-1">
                        <span className="hero-card-number">2–3</span>
                        <span className="hero-card-label">týdny do spuštění</span>
                    </div>
                    <div className="hero-card hero-card-2">
                        <span className="hero-card-number">0 Kč</span>
                        <span className="hero-card-label">za první konzultaci</span>
                    </div>
                    <div className="hero-card hero-card-3">
                        <span className="hero-card-number">100 %</span>
                        <span className="hero-card-label">na míru, bez šablon</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
