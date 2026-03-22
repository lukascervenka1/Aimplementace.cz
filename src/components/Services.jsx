import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Weby na míru',
        description: 'Designový, bleskově rychlý web bez šablon. Čistý kód v Reactu, SEO optimalizace od základu a responzivní na každém zařízení. Načtení pod 1 sekundu.',
        benefit: 'Přirozená návštěvnost z Google a silná značka od prvního dne.',
        icon: '01'
    },
    {
        title: 'AI chatbot & leady',
        description: 'Chatbot, který návštěvníka kvalifikuje, sbírá kontakt a předává ho do CRM. Funguje 24/7, odpovídá na dotazy a zvyšuje konverze — přesně jako ukázka na tomto webu.',
        benefit: 'Vyšší počet relevantních leadů bez navyšování týmu.',
        icon: '02'
    },
    {
        title: 'Automatizace workflow',
        description: 'Propojíme vaše nástroje (CRM, tabulky, e-mail, interní systémy) do jednoho automatického toku. Využíváme Make.com, Zapier i vlastní řešení.',
        benefit: 'Méně chyb, méně ručního přepisování dat a více času na byznys.',
        icon: '03'
    },
    {
        title: 'AI podpora zákazníků',
        description: 'Automatické odpovědi na opakující se dotazy z e-mailu, webu a helpdesku. AI se učí z vašich dat a odpovídá v tónu vaší značky.',
        benefit: 'Méně tiketů na operátora a rychlejší reakční časy.',
        icon: '04'
    },
];

const Services = () => {
    return (
        <section id="services" className="section services-section" aria-label="Naše služby">
            <div className="container">
                <header className="section-header text-center reveal">
                    <h2 className="section-title">Co <span className="text-gradient">děláme</span></h2>
                    <p className="section-subtitle">
                        Stavíme rychlé weby, které budují značku, a zavádíme AI automatizace,
                        které šetří čas. Každá služba má jasný business cíl a měřitelný dopad.
                    </p>
                </header>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <article key={index} className={`service-card reveal reveal-delay-${index + 1}`}>
                            <span className="service-number" aria-hidden="true">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <p className="service-benefit">{service.benefit}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
