import React from 'react';
import './Starter.css';

const included = [
    { icon: '🌍', label: 'Registrace domény na vaše jméno' },
    { icon: '📧', label: 'Firemní e-mail (Google / Outlook)' },
    { icon: '🎨', label: 'Web na míru: design, kód, obsah' },
    { icon: '📱', label: 'Responzivní na mobilu i tabletu' },
    { icon: '🔍', label: 'SEO základ pro Google' },
    { icon: '⚡', label: 'Automatizace (formulář, notifikace, CRM)' },
    { icon: '🔒', label: 'SSL certifikát a zabezpečení' },
    { icon: '🎓', label: 'Zaškolení a kompletní předání' },
];

const workflow = [
    {
        step: 1,
        title: 'Nezávazná konzultace',
        description: 'Zavoláme si a probereme váš záměr. Zjistíme, co děláte, komu prodáváte a jakou značku chcete budovat. Žádné závazky, žádné háčky.',
        duration: '30 min zdarma',
    },
    {
        step: 2,
        title: 'Doména a firemní identita',
        description: 'Vybereme a zaregistrujeme doménu (vašefirma.cz nebo .com). Doména bude na vaše jméno, je to váš majetek, ne náš. Připravíme logo a vizuální styl, pokud ho ještě nemáte.',
        duration: '1–2 dny',
    },
    {
        step: 3,
        title: 'Profesionální e-mail',
        description: 'Napojíme Google Workspace nebo Microsoft 365. Budete mít jmeno@vašefirma.cz. Profesionální dojem od prvního kontaktu. Kalendář, disk a videohovory v ceně.',
        duration: '1 den',
    },
    {
        step: 4,
        title: 'Design a stavba webu',
        description: 'Navrhneme web na míru vaší značce. Žádná šablona, žádný WordPress. Čistý kód, bleskově rychlé načítání a vzhled, který vás odliší od konkurence. Vy schvalujete každý krok.',
        duration: '5–10 dní',
    },
    {
        step: 5,
        title: 'Automatizace a napojení',
        description: 'Připojíme kontaktní formulář s notifikacemi, napojíme CRM nebo tabulku pro správu poptávek. Nastavíme analytiku, abyste věděli, kdo a odkud na web přichází.',
        duration: '2–3 dny',
    },
    {
        step: 6,
        title: 'Předání a zaškolení',
        description: 'Vše otestujeme, předáme kompletní přístupy a provedeme vás celým systémem. Dostanete i krátký návod. Podpora od nás nekončí, jsme tu i po spuštění.',
        duration: 'Hotovo za 2–3 týdny',
    },
];

const Starter = () => {
    return (
        <section id="starter" className="section starter-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="starter-badge">Kompletní balíček</span>
                    <h2 className="section-title">
                        Rozjezd <span className="text-gradient">podnikání</span>
                    </h2>
                    <p className="section-subtitle">
                        Všechno, co potřebujete k profesionálnímu startu: od domény přes web až po
                        první automatizace. Vy se soustředíte na byznys, my vyřešíme techniku.
                    </p>
                </div>

                <div className="starter-included glass reveal">
                    <h3 className="starter-included-title">Co je v balíčku</h3>
                    <div className="included-grid">
                        {included.map((item) => (
                            <div key={item.label} className="included-item">
                                <span className="included-icon">{item.icon}</span>
                                <span className="included-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="starter-workflow reveal">
                    <h3 className="workflow-heading text-center">
                        Jak to celé <span className="text-gradient">probíhá</span>
                    </h3>
                    <p className="workflow-subheading text-center">
                        Žádné technické znalosti nepotřebujete. Provedeme vás krok za krokem.
                    </p>

                    <div className="workflow-timeline">
                        {workflow.map((item) => (
                            <div key={item.step} className={`workflow-step reveal reveal-delay-${item.step}`}>
                                <div className="workflow-number">{item.step}</div>
                                <div className="workflow-card glass">
                                    <div className="workflow-card-header">
                                        <h4 className="workflow-title">{item.title}</h4>
                                        <span className="workflow-duration">{item.duration}</span>
                                    </div>
                                    <p className="workflow-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="starter-cta text-center reveal">
                    <p className="starter-cta-text">
                        Chcete rozjet podnikání a mít od začátku profesionální web i zázemí?
                    </p>
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Chci nezávaznou konzultaci zdarma
                    </a>
                    <p className="starter-cta-note">
                        Ozveme se do 24 hodin. Žádné závazky, žádný nátlak.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Starter;
