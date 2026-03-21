import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Weby na míru',
        description: 'Designový, bleskově rychlý web bez šablon. Čistý kód, SEO od základu a responzivní na každém zařízení.',
        benefit: 'Přirozená návštěvnost z Google a silná značka od prvního dne.',
        icon: '01'
    },
    {
        title: 'AI chatbot & leady',
        description: 'Asistent, který návštěvníka kvalifikuje, sbírá kontakt a předává ho do CRM.',
        benefit: 'Vyšší počet relevantních leadů bez navyšování týmu.',
        icon: '02'
    },
    {
        title: 'Automatizace workflow',
        description: 'Propojíme nástroje (CRM, tabulky, e-mail, interní systémy) do jednoho toku.',
        benefit: 'Méně chyb a méně ručního přepisování dat.',
        icon: '03'
    },
    {
        title: 'AI podpora zákazníků',
        description: 'Automatické odpovědi na opakující se dotazy z e-mailu, webu a helpdesku.',
        benefit: 'Méně tiketů na operátora a rychlejší reakční časy.',
        icon: '04'
    },
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">Co <span className="text-gradient">děláme</span></h2>
                    <p className="section-subtitle">
                        Stavíme rychlé weby, které budují značku, a zavádíme AI automatizace,
                        které šetří čas. Každá služba má jasný business cíl.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card reveal reveal-delay-${index + 1}`}>
                            <span className="service-number">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <p className="service-benefit">{service.benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
