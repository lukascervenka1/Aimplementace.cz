import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Weby na míru připravené pro AI',
        description: 'Web v čistém Reactu: LCP pod 1 sekundu, SEO od základu a Schema.org strukturovaná data. Díky tomu vás kromě Googlu citují i ChatGPT a Perplexity. Žádný WordPress, žádné pluginy.',
        benefit: '→ Od 15 000 Kč. Průměr v ČR: 35–40 000 Kč.',
        icon: '01'
    },
    {
        title: 'AI chatbot & kvalifikace leadů',
        description: 'Chatbot na míru, který kvalifikuje návštěvníky, sbírá kontakty a předává leady do CRM. Funguje 24/7 bez zásahu týmu a splňuje AI Act 2026. Živou ukázku vidíte vpravo dole.',
        benefit: '→ 3× více leadů mimo pracovní dobu.',
        icon: '02'
    },
    {
        title: 'Automatizace workflow',
        description: 'Propojíme vaše nástroje (CRM, tabulky, e-mail, interní systémy) do jednoho automatického toku. Pracujeme s Power Automate a automatickým testováním přes Playwright. Typický výsledek: ušetření 6–10 hodin týdně.',
        benefit: '→ 9 z 10 českých firem investuje do AI v roce 2026.',
        icon: '03'
    },
    {
        title: 'AI podpora zákazníků 24/7',
        description: 'Automatické odpovědi na opakující se dotazy z e-mailu, webu i helpdesku. AI komunikuje v tónu vaší značky, složité případy eskaluje na člověka a splňuje AI Act 2026.',
        benefit: '→ Méně tiketů, rychlejší odpovědi, spokojenější zákazníci.',
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
                        Tvorba webových stránek na míru v čistém kódu, AI chatboty a automatizace firemních procesů.
                        Každá služba má jasný business cíl, měřitelný dopad a přesnou cenu předem.
                    </p>
                </header>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <article key={index} className={`service-card reveal reveal-delay-${index + 1}`}>
                            <div className="service-card-body">
                                <span className="service-number" aria-hidden="true">{service.icon}</span>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                            <hr className="service-divider" aria-hidden="true" />
                            <p className="service-benefit">{service.benefit}</p>
                        </article>
                    ))}
                </div>

                {/* Srovnávací sekce — Atomic Answer blok pro AI extrakci */}
                <div className="comparison-block reveal">
                    <h3 className="comparison-title text-center">
                        Web na míru vs. WordPress vs. <span className="text-gradient">Wix</span>
                    </h3>
                    <p className="comparison-subtitle text-center">
                        Web v čistém kódu (React) je rychlejší, bezpečnější a lépe hodnocený AI vyhledávači než šablonové řešení.
                        Průměrná cena webu na míru v ČR je 35–40 000 Kč. U nás začíná od 15 000 Kč.
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
                                    <td className="highlight-col">✅ pod 1 sekundu</td>
                                    <td>⚠️ 2–4 sekundy</td>
                                    <td>⚠️ 3–6 sekund</td>
                                </tr>
                                <tr>
                                    <td>SEO optimalizace</td>
                                    <td className="highlight-col">✅ Plná kontrola</td>
                                    <td>⚠️ Závisí na pluginech</td>
                                    <td>❌ Omezená</td>
                                </tr>
                                <tr>
                                    <td>GEO (viditelnost v AI)</td>
                                    <td className="highlight-col">✅ Schema.org, strukturovaná data</td>
                                    <td>⚠️ Závisí na pluginu</td>
                                    <td>❌ Minimální podpora</td>
                                </tr>
                                <tr>
                                    <td>Bezpečnost</td>
                                    <td className="highlight-col">✅ Statický, žádné pluginy</td>
                                    <td>❌ Časté zranitelnosti</td>
                                    <td>⚠️ Hostovaná platforma</td>
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
                                    <td>Orientační cena (ČR)</td>
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
                            { param: 'Viditelnost v AI', value: '✅ Schema.org' },
                            { param: 'Bezpečnost', value: '✅ Bez pluginů' },
                            { param: 'Core Web Vitals', value: '✅ Všechny zelené' },
                            { param: 'Údržba', value: '✅ Bez aktualizací' },
                            { param: 'Cena od', value: '15 000 Kč' },
                        ].map((row) => (
                            <div key={row.param} className="comparison-card">
                                <span className="comparison-card-param">{row.param}</span>
                                <span className="comparison-card-value">{row.value}</span>
                            </div>
                        ))}
                        <p className="comparison-cards-note">
                            Průměrná cena webu v ČR: 35–40 000 Kč. WordPress: pomalejší, bezpečnostní rizika. Wix: omezené SEO, žádná AI viditelnost.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
