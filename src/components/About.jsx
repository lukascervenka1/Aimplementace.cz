import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-wrapper reveal">
                    <div className="about-photo-wrap">
                        <img
                            src="/founder-placeholder.svg"
                            alt="Profilová fotografie zakladatele Aimplementace.cz"
                            className="about-photo"
                        />
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">O <span className="text-gradient">mně</span></h2>
                        <p className="about-lead">
                            Jmenuji se Lukas a stavím rychlé weby a AI automatizace, které mají okamžitý dopad na chod firmy.
                            Žádný pomalý Wix, žádný WordPress se šablonou — čistý design, rychlý kód a řešení na míru.
                        </p>
                        <p className="about-text">
                            Jsem nový na trhu a aktivně nabírám první klienty. To pro vás znamená plnou pozornost,
                            osobní přístup a ceny, které vás příjemně překvapí. Každý projekt beru jako referenci,
                            na které záleží.
                        </p>
                        <div className="about-points">
                            <span>Weby bez šablon, rychlé a SEO-friendly</span>
                            <span>AI automatizace s měřitelným dopadem</span>
                            <span>Osobní přístup a férové ceny</span>
                            <span>Důraz na bezpečnost dat a NDA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
