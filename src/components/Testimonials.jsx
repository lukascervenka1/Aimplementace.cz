import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        type: 'review',
        quote: 'Díky Lukášovi z AImplementace má moje autoškola web, který nás vystřelil mezi top autoškoly v Česku. Byl ochotný, vstřícný a celý proces proběhl rychle a bez komplikací. Web vypadá skvěle, je rychlý a klienti nás díky němu najdou sami.',
        author: 'Autoškola RED',
        role: 'autoskola.red',
        url: 'https://www.autoskola.red',
    },
];

const projects = [
    {
        type: 'project',
        name: 'Slavíme',
        tagline: 'iOS aplikace pro svátky a narozeniny',
        description: 'Vlastní iOS aplikace publikovaná v App Store. Pomáhá si pamatovat svátky a narozeniny blízkých. Nabízí notifikace, kalendář a přehled na celý rok.',
        platform: 'App Store',
        tech: ['Swift', 'iOS', 'App Store'],
        url: 'https://apps.apple.com/cz/app/slav%C3%ADme/id6761773077?l=cs',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section" aria-label="Reference a realizace">
            <div className="container">
                <header className="section-header text-center reveal">
                    <h2 className="section-title">Reference & <span className="text-gradient">realizace</span></h2>
                    <p className="section-subtitle">
                        Reálné projekty a reference od klientů, se kterými jsem spolupracoval na tvorbě webů, aplikací a automatizacích.
                    </p>
                </header>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <blockquote key={`r-${i}`} className="testimonial-card glass reveal" itemScope itemType="https://schema.org/Review">
                            <span className="testimonial-badge">Klient</span>
                            <div className="testimonial-stars" aria-label="Hodnocení 5 z 5 hvězd">
                                {'★★★★★'}
                            </div>
                            <p className="testimonial-quote" itemProp="reviewBody">&ldquo;{t.quote}&rdquo;</p>
                            <footer className="testimonial-footer">
                                <div className="testimonial-author-info" itemProp="author" itemScope itemType="https://schema.org/Organization">
                                    <cite className="testimonial-author" itemProp="name">{t.author}</cite>
                                    <a
                                        href={t.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="testimonial-role"
                                        itemProp="url"
                                    >
                                        {t.role} ↗
                                    </a>
                                </div>
                            </footer>
                        </blockquote>
                    ))}

                    {projects.map((p, i) => (
                        <article key={`p-${i}`} className="testimonial-card project-card glass reveal">
                            <span className="testimonial-badge testimonial-badge-project">Vlastní projekt</span>
                            <div className="project-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
                                    <rect x="5" y="2" width="14" height="20" rx="2.5" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className="project-name">{p.name}</h3>
                            <p className="project-tagline">{p.tagline}</p>
                            <p className="project-description">{p.description}</p>
                            <div className="project-tech" aria-label="Použité technologie">
                                {p.tech.map((tag) => (
                                    <span key={tag} className="project-tech-tag">{tag}</span>
                                ))}
                            </div>
                            <footer className="testimonial-footer">
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label={`Otevřít ${p.name} v App Store`}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                    </svg>
                                    <span>{p.platform}</span>
                                    <span className="project-arrow">↗</span>
                                </a>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
