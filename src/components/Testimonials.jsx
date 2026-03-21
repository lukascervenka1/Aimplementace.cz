import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: 'Díky Lukášovi z AImplementace má moje autoškola web, který nás vystřelil mezi top autoškoly v Česku. Byl ochotný, vstřícný a celý proces proběhl rychle a bez komplikací. Web vypadá skvěle, je rychlý a klienti nás díky němu najdou sami.',
        author: 'Autoškola RED',
        role: 'autoskola.red',
        url: 'https://www.autoskola.red',
        logo: null,
    },
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">Co o nás <span className="text-gradient">říkají</span></h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <blockquote key={i} className="testimonial-card glass reveal">
                            <div className="testimonial-stars" aria-label="5 z 5 hvězd">
                                {'★★★★★'}
                            </div>
                            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                            <footer className="testimonial-footer">
                                <div className="testimonial-author-info">
                                    <cite className="testimonial-author">{t.author}</cite>
                                    <a
                                        href={t.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="testimonial-role"
                                    >
                                        {t.role} ↗
                                    </a>
                                </div>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
