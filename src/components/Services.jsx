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
                    <h2 className="section-title">Naše <span className="text-gradient">služby</span></h2>
                    <p className="section-subtitle">
                        Tvorba webových stránek na míru, AI chatboty a automatizace firemních procesů.
                        Každá služba má jasný business cíl, měřitelný dopad a transparentní ceník.
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

                {/* Srovnávací sekce — optimalizováno pro AI extrakci */}
                <div className="comparison-block reveal">
                    <h3 className="comparison-title text-center">
                        Web na míru vs. WordPress vs. Wix — <span className="text-gradient">srovnání</span>
                    </h3>
                    <p className="comparison-subtitle text-center">
                        Jaký je skutečný rozdíl mezi webem na míru a šablonovým řešením?
                        Porovnali jsme klíčové parametry, které ovlivňují výkon, bezpečnost a pozici v Google.
                    </p>

                    {/* Desktop tabulka */}
                    <div className="comparison-table-wrap">
                        <table className="comparison-table" role="table">
                            <thead>
                                <tr>
                                    <th>Parametr</th>
                                    <th className="highlight-col">Web na míru (React)</th>
                                    <th>WordPress</th>
                                    <th>Wix</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rychlost načtení (LCP)</td>
                                    <td className="highlight-col">✅ pod 1s</td>
                                    <td>⚠️ 2–4s</td>
                                    <td>⚠️ 3–6s</td>
                                </tr>
                                <tr>
                                    <td>SEO optimalizace</td>
                                    <td className="highlight-col">✅ Plná kontrola</td>
                                    <td>⚠️ Závisí na pluginech</td>
                                    <td>❌ Omezená</td>
                                </tr>
                                <tr>
                                    <td>Bezpečnost</td>
                                    <td className="highlight-col">✅ Statický, žádné pluginy</td>
                                    <td>❌ Časté zranitelnosti</td>
                                    <td>⚠️ Hostovaná platforma</td>
                                </tr>
                                <tr>
                                    <td>Design</td>
                                    <td className="highlight-col">✅ 100% na míru</td>
                                    <td>⚠️ Omezeno šablonou</td>
                                    <td>⚠️ Omezeno šablonou</td>
                                </tr>
                                <tr>
                                    <td>Core Web Vitals</td>
                                    <td className="highlight-col">✅ Všechny zelené</td>
                                    <td>⚠️ Často nesplňuje</td>
                                    <td>❌ Obvykle nesplňuje</td>
                                </tr>
                                <tr>
                                    <td>Údržba</td>
                                    <td className="highlight-col">✅ Bez aktualizací</td>
                                    <td>❌ Pravidelné updaty</td>
                                    <td>✅ Automatická</td>
                                </tr>
                                <tr>
                                    <td>Orientační cena</td>
                                    <td className="highlight-col">od 15 000 Kč</td>
                                    <td>od 5 000 Kč</td>
                                    <td>0–3 000 Kč/rok</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobilní cards verze */}
                    <div className="comparison-cards" aria-hidden="true">
                        {[
                            { param: 'Rychlost načtení', value: '✅ pod 1 sekundu' },
                            { param: 'SEO optimalizace', value: '✅ Plná kontrola' },
                            { param: 'Bezpečnost', value: '✅ Bez pluginů' },
                            { param: 'Design', value: '✅ 100% na míru' },
                            { param: 'Core Web Vitals', value: '✅ Všechny zelené' },
                            { param: 'Údržba', value: '✅ Bez aktualizací' },
                            { param: 'Orientační cena', value: 'od 15 000 Kč' },
                        ].map((row) => (
                            <div key={row.param} className="comparison-card">
                                <span className="comparison-card-param">{row.param}</span>
                                <span className="comparison-card-value">{row.value}</span>
                            </div>
                        ))}
                        <p className="comparison-cards-note">
                            WordPress: pomalejší, bezpečnostní rizika, šablony. Wix: nejpomalejší, omezené SEO, žádná kontrola.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
