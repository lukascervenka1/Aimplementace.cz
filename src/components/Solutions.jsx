import React from 'react';
import './Solutions.css';

const cases = [
    {
        id: '01',
        category: 'Zákaznická podpora',
        title: 'Modelový scénář: AI asistent pro opakující se dotazy',
        setup: 'Typicky nasazujeme na FAQ, objednávky, reklamace a stav služby.',
        result: 'Cíl pilotu: zrychlit první odpověď a odlehčit operátorům od rutinních dotazů.',
        timeline: 'Pilot: 3-4 týdny'
    },
    {
        id: '02',
        category: 'Sales & Marketing',
        title: 'Modelový scénář: kvalifikace leadů z webu',
        setup: 'Chatbot klade kvalifikační otázky a předává pouze relevantní poptávky.',
        result: 'Cíl pilotu: zvýšit počet kvalitních leadů a zkrátit čas obchodníka.',
        timeline: 'Pilot: 2-3 týdny'
    },
    {
        id: '03',
        category: 'Interní procesy',
        title: 'Modelový scénář: interní znalostní asistent',
        setup: 'AI hledá odpovědi v interních směrnicích, manuálech a školících materiálech.',
        result: 'Cíl pilotu: zrychlit onboarding a snížit opakované dotazy na seniorní kolegy.',
        timeline: 'Pilot: 3 týdny'
    }
];

const Solutions = () => {
    return (
        <section id="solutions" className="section solutions-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Příklady <span className="text-gradient">řešení</span></h2>
                    <p className="section-subtitle">
                        Následující scénáře vychází z nejčastějších poptávek. Před nasazením vždy nastavujeme
                        vstupní metriky a vyhodnocujeme reálný dopad.
                    </p>
                </div>
                <div className="solutions-list">
                    {cases.map((item) => (
                        <div key={item.id} className="solution-item">
                            <div className="solution-id">{item.id}</div>
                            <div className="solution-content">
                                <span className="solution-category">{item.category}</span>
                                <h3 className="solution-title">{item.title}</h3>
                                <p className="solution-setup">{item.setup}</p>
                                <p className="solution-result">{item.result}</p>
                                <p className="solution-timeline">{item.timeline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
