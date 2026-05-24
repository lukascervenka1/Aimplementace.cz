import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Kolik stojí tvorba webu na míru?',
    answer: 'Jinde za web na míru zaplatíte průměrně 35 až 40 tisíc Kč. U nás to začíná od 15 000 Kč. Vždy domluvíme přesnou cenu a rozsah ještě před začátkem, takže na konci žádná překvapení. První konzultace je zdarma.',
  },
  {
    question: 'Jak dlouho trvá tvorba webu?',
    answer: 'Web na míru bývá hotový za 2 až 3 týdny od schválení návrhu. U jednodušší stránky, třeba vizitka nebo landing page, to zvládneme i za 7 až 10 dní. Průběžně ukazuji výsledky, takže vždy víte, co vzniká.',
  },
  {
    question: 'Proč nepoužíváte WordPress nebo Wix?',
    answer: 'WordPress a Wix jsou šablonovací systémy plné doplňků, které web zpomalují. Průměrný WordPress web se načte za 2 až 4 sekundy. Naše weby se načtou do 1 sekundy, protože jsou postavené na míru bez zbytečného balastu. A Google rychlé weby odměňuje vyšší pozicí ve výsledcích vyhledávání.',
  },
  {
    question: 'Může mě zmínit ChatGPT nebo Google AI?',
    answer: 'Ano, a je to čím dál důležitější. Dnes přes 60 % lidí dostane odpověď od AI ještě před tím, než klikne na výsledky vyhledávání. Každý web stavíme tak, aby ho AI dokázala pochopit a doporučit. Jde o to, jak web technicky popíšeme, aby mu AI rozuměla.',
  },
  {
    question: 'Jsou vaše weby viditelné v ChatGPT a Perplexity?',
    answer: 'Ano. Každý web nastavíme tak, aby ho mohly procházet AI nástroje jako ChatGPT, Perplexity nebo Google AI. ChatGPT nejčastěji doporučuje weby, které jsou vidět i na Bingu, proto zajistíme indexaci i tam.',
  },
  {
    question: 'Co je AI chatbot a jak pomůže mé firmě?',
    answer: 'AI chatbot je automatický asistent na vašem webu, který odpovídá zákazníkům i v noci nebo o víkendu. Zachytí poptávku, zapíše kontakt a pošle ho vám. Firmy s chatbotem průměrně zachytí třikrát více zákazníků mimo pracovní dobu.',
  },
  {
    question: 'Co všechno lze automatizovat?',
    answer: 'Automatizujeme věci, které vám opakovaně berou čas: přepis poptávek do tabulky nebo systému, odesílání potvrzovacích e-mailů, upozornění při nové objednávce nebo třeba generování měsíčních reportů. Průměrně ušetříme 6 až 10 hodin práce týdně.',
  },
  {
    question: 'Jak probíhá spolupráce?',
    answer: 'Spolupráce má 5 kroků. Nejdřív si provoláme vaše potřeby, zdarma a bez závazků. Pak dostanete návrh s přesnou cenou a termínem. Pak přichází realizace s průběžnými ukázkami. Po spuštění vám vše vysvětlím a předám dokumentaci. A jsem dostupný i dál. Komunikujete přímo se mnou, žádný tým prostředníků.',
  },
  {
    question: 'Jak se platí?',
    answer: 'Nabízím dva přístupy. Pevná cena: domluvíme rozsah a cenu předem, víte přesně co zaplatíte. Hodinová sazba: platíte jen odpracovaný čas, hodí se pro projekty kde rozsah ještě není jasný. Na konzultaci vám poradím, co je pro vás výhodnější.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="section-inner">
        <h2 className="faq-heading reveal">
          Časté <span className="serif-accent">dotazy</span>
        </h2>
        <p className="faq-subheading reveal reveal-delay-1">
          Odpovědi na nejčastější otázky o tvorbě webů, AI automatizacích, cenách a spolupráci.
          Nenašli jste odpověď? Napište nám, první konzultace je zdarma.
        </p>
        <div className="faq-list reveal">
          {faqData.map((faq, index) => (
            <article
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
              >
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="faq-footer reveal">
          <p className="faq-footer-text">Máte jinou otázku?</p>
          <a href="#contact" className="faq-footer-link">Zeptejte se, konzultace zdarma</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
