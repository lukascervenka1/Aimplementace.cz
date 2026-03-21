import React from 'react';
import './Process.css';

const steps = [
    {
        title: 'Konzultace a výběr procesu',
        content: 'Vybereme 1 proces, kde je nejvyšší potenciál úspory času a nejnižší riziko implementace.'
    },
    {
        title: 'Návrh řešení a pilotní plán',
        content: 'Navrhneme workflow, datové zdroje, metriky úspěchu a konkrétní milníky pilotu.'
    },
    {
        title: 'Implementace a test v provozu',
        content: 'Řešení nasadíme do reálné práce týmu a ladíme podle zpětné vazby uživatelů.'
    },
    {
        title: 'Vyhodnocení a škálování',
        content: 'Porovnáme výsledky před/po a rozhodneme, jestli škálovat do dalších oddělení.'
    }
];

const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Jak <span className="text-gradient">spolupráce probíhá</span></h2>
                    <p className="section-subtitle">Krátký, transparentní proces s měřitelným cílem od prvního týdne.</p>
                </div>
                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-text">{step.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
