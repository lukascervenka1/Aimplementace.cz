import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
        question: 'Kolik stojí web na míru?',
        answer: 'Cena webu na míru začíná od 15 000 Kč a závisí na rozsahu projektu. Nabízíme dva modely spolupráce — pevná cena (rozsah i cena dohodnuty předem, bez překvapení) nebo hodinová sazba (platíte jen skutečně odpracovaný čas). Kompletní balíček Rozjezd podnikání s doménou, e-mailem a automatizací začíná od 25 000 Kč. První konzultace je vždy zdarma — probereme váš projekt a připravíme nabídku na míru.',
    },
    {
        question: 'Jak dlouho trvá tvorba webu?',
        answer: 'Web na míru je hotový za 2–3 týdny od schválení návrhu. Během realizace průběžně ukazujeme výsledky a vy schvalujete každý krok. U jednodušších projektů (landing page, vizitka) to může být i rychlejší. Kompletní balíček Rozjezd podnikání zvládáme za stejný časový rámec — od domény přes e-mail až po spuštěný web s automatizací.',
    },
    {
        question: 'Proč nepoužíváte WordPress nebo Wix?',
        answer: 'Stavíme weby v čistém kódu (React), protože jsou výrazně rychlejší, bezpečnější a lépe optimalizovatelné pro SEO. Web v čistém kódu dosahuje lepších Core Web Vitals — tedy lepší pozice v Google a vyšší konverze. WordPress trpí pomalým načítáním kvůli desítkám pluginů, bezpečnostními riziky a omezeným designem šablon. Náš přístup znamená: načtení pod 1 sekundu, žádné bezpečnostní díry z pluginů a design přesně podle vašich představ.',
    },
    {
        question: 'Co je AI chatbot a jak pomůže mému podnikání?',
        answer: 'AI chatbot je automatický asistent na vašem webu, který komunikuje s návštěvníky 24/7. Kvalifikuje potenciální zákazníky, sbírá kontaktní údaje, odpovídá na časté dotazy a předává leady přímo do CRM. Reálný dopad: méně zmeškaných poptávek, rychlejší odezva zákazníkům a úspora času vašeho týmu. Ukázku chatbota vidíte přímo na tomto webu — vpravo dole.',
    },
    {
        question: 'Jaké automatizace nabízíte?',
        answer: 'Automatizujeme propojení mezi CRM, tabulkami, e-maily a interními systémy. Typické scénáře: automatické notifikace při nové poptávce, přepis dat z formulářů do CRM, generování reportů, propojení nástrojů jako Make.com, Zapier nebo n8n. Z praxe — u jednoho klienta jsme automatizací e-mailových odpovědí ušetřili 8 hodin týdně manuální práce.',
    },
    {
        question: 'Jak probíhá spolupráce?',
        answer: 'Spolupráce má 5 kroků: (1) Nezávazná konzultace zdarma — probereme vaše potřeby. (2) Návrh řešení — připravíme nabídku na míru s jasnou cenou a termínem. (3) Realizace — průběžně ukazujeme výsledky, vy schvalujete. (4) Předání + zaškolení — vše předáme, vysvětlíme a dodáme návod. (5) Podpora — i po spuštění jsme tu pro vás. Komunikujete přímo s Lukášem, žádný tým 50 lidí.',
    },
    {
        question: 'Děláte i SEO optimalizaci?',
        answer: 'Ano, SEO je součástí každého webu, který stavíme. Zajišťujeme technické SEO (rychlost načítání, čistý kód, správné meta tagy, strukturovaná data), responzivní design (Google upřednostňuje mobile-first indexing) a napojení na Google Analytics a Search Console. Díky čistému kódu bez WordPress pluginů dosahujeme výrazně lepšího skóre Core Web Vitals než šablonové weby.',
    },
    {
        question: 'Mohu si vybrat model platby?',
        answer: 'Ano, nabízíme dva modely spolupráce. Pevná cena (fix price) — dohodneme rozsah a cenu předem, víte přesně, kolik zaplatíte, žádná překvapení. Hodinová sazba (time & material) — flexibilní model, platíte jen skutečně odpracovaný čas, ideální pro projekty s měnícím se rozsahem. Na konzultaci vám poradíme, který model je pro váš projekt výhodnější.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section faq-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">Časté <span className="text-gradient">dotazy</span></h2>
                    <p className="section-subtitle">
                        Odpovědi na nejčastější otázky ohledně tvorby webů, AI automatizací a spolupráce.
                        Nenašli jste odpověď? Napište nám — první konzultace je zdarma.
                    </p>
                </div>
                <div className="faq-list reveal">
                    {faqData.map((faq, index) => (
                        <article
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className="faq-question-text">{faq.question}</h3>
                                <span className="faq-icon" aria-hidden="true">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className="faq-answer"
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="faq-cta text-center reveal">
                    <p className="faq-cta-text">Máte jinou otázku?</p>
                    <a href="#contact" className="btn btn-outline">Zeptejte se nás — konzultace zdarma</a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
