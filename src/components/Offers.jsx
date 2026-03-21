import React from 'react';
import './Offers.css';

const offers = [
    {
        name: 'AI Audit (2 týdny)',
        target: 'Pro firmy, které chtějí rychle najít největší příležitosti.',
        deliverables: [
            'Analýza 3 klíčových procesů',
            'Návrh priorit podle ROI',
            'Implementační roadmapa na 90 dní'
        ],
        cta: 'Chci AI audit'
    },
    {
        name: 'Pilot (30 dní)',
        target: 'Pro týmy, které chtějí ověřit výsledek na jednom procesu.',
        deliverables: [
            'Nasazení 1 automatizace',
            'Měření času před/po',
            'Zaškolení týmu a předání'
        ],
        cta: 'Chci pilot'
    },
    {
        name: 'Implementace (3 měsíce)',
        target: 'Pro firmy, které chtějí AI zavést napříč odděleními.',
        deliverables: [
            'Automatizace ve více týmech',
            'Reporting dopadu každý měsíc',
            'Průběžná optimalizace a podpora'
        ],
        cta: 'Chci implementaci'
    }
];

const targetSegments = [
    {
        title: 'B2B služby',
        text: 'Konzultační firmy, agentury, dodavatelé služeb.'
    },
    {
        title: 'E-commerce',
        text: 'Support, objednávky, dostupnost informací a lead management.'
    },
    {
        title: 'Interní operace',
        text: 'HR, back-office a interní znalostní agenda.'
    }
];

const Offers = () => {
    return (
        <section id="offers" className="section offers-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Co si můžete <span className="text-gradient">objednat hned</span></h2>
                    <p className="section-subtitle">
                        Jasně definované balíčky s konkrétním výstupem. Žádné vágní konzultace bez výsledku.
                    </p>
                </div>

                <div className="offers-grid">
                    {offers.map((offer) => (
                        <article key={offer.name} className="offer-card glass">
                            <h3 className="offer-name">{offer.name}</h3>
                            <p className="offer-target">{offer.target}</p>
                            <ul className="offer-list">
                                {offer.deliverables.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-primary btn-block">{offer.cta}</a>
                        </article>
                    ))}
                </div>

                <div className="offer-segments">
                    <h3>Nejčastěji pomáháme</h3>
                    <div className="segments-grid">
                        {targetSegments.map((segment) => (
                            <article key={segment.title} className="segment-card">
                                <h4>{segment.title}</h4>
                                <p>{segment.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
