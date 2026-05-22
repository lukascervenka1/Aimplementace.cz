import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Kolik stojí tvorba webových stránek na míru?',
    answer: 'Tvorba webu na míru v ČR stojí průměrně 35–40 000 Kč. U nás začínáme od 15 000 Kč — díky efektivnímu procesu a moderním nástrojům. Nabízíme pevnou cenu (rozsah i částka dohodnuty předem) nebo hodinovou sazbu. Balíček Rozjezd podnikání s doménou, e-mailem a automatizací začíná od 25 000 Kč. První konzultace je zdarma.',
  },
  {
    question: 'Jak dlouho trvá tvorba webu?',
    answer: 'Web na míru je hotový za 2–3 týdny od schválení návrhu. Průběžně ukazujeme výsledky a vy schvalujete každý krok. U jednodušších projektů (landing page, vizitka) to může být i 7–10 dní. Balíček Rozjezd podnikání — od domény přes e-mail až po spuštěný web s automatizací — zvládáme za stejný časový rámec.',
  },
  {
    question: 'Proč nepoužíváte WordPress nebo Wix?',
    answer: 'Stavíme weby v čistém kódu (React), protože dosahují LCP pod 1 sekundu, mají lepší Core Web Vitals a jsou bezpečnější (žádné pluginy = žádné zranitelnosti). WordPress trpí průměrným LCP 2–4 sekundy kvůli pluginům, Wix je ještě pomalejší. Navíc weby v čistém kódu lépe podporují strukturovaná data Schema.org, která jsou klíčová pro viditelnost v AI vyhledávačích.',
  },
  {
    question: 'Co je GEO a proč ho váš web potřebuje?',
    answer: 'GEO (Generative Engine Optimization) je optimalizace webu tak, aby ho citovaly AI modely — ChatGPT, Perplexity, Google AI Overviews nebo Claude. V roce 2026 přes 60 % vyhledávání na Googlu zobrazí AI odpověď ještě před klasickými výsledky. Každý web, který stavíme, obsahuje strukturovaná data Schema.org, FAQ bloky a přesné datové body — to jsou faktory, které AI cituje nejčastěji.',
  },
  {
    question: 'Jsou vaše weby viditelné v AI vyhledávačích (ChatGPT, Perplexity)?',
    answer: 'Ano. Každý web implementujeme se strukturovanými daty Schema.org (Organization, Service, FAQ, Review), správnými meta tagy a robots.txt, který explicitně povoluje AI crawlery (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). ChatGPT čerpá 87 % citací z top výsledků Bingu — proto zajišťujeme indexaci i tam. Perplexity preferuje čerstvý obsah s přesnými čísly, což do textů zapracováváme.',
  },
  {
    question: 'Co je AI chatbot a jak pomůže mému podnikání?',
    answer: 'AI chatbot je automatický asistent na webu, který komunikuje s návštěvníky 24/7. Kvalifikuje zákazníky, sbírá kontakty a předává leady do CRM — bez účasti vašeho týmu. Firmy s chatbotem zachytí průměrně 3× více leadů mimo pracovní dobu. Chatbot splňuje požadavky AI Actu 2026 — jasně se představuje jako asistent. Ukázku vidíte na tomto webu vpravo dole.',
  },
  {
    question: 'Jaké automatizace nabízíte a jaké nástroje používáte?',
    answer: 'Automatizujeme propojení CRM, tabulek, e-mailů a interních systémů pomocí Power Automate a automatického testování přes Playwright. Typické výsledky: ušetření 6–10 hodin týdně při zpracování poptávek, automatické notifikace, přepis dat z formulářů do CRM a generování reportů. Podle ČSÚ plánuje 9 z 10 českých firem investovat do AI automatizace v roce 2026.',
  },
  {
    question: 'Jak probíhá spolupráce?',
    answer: 'Spolupráce má 5 kroků: (1) Nezávazná konzultace zdarma — probereme vaše potřeby. (2) Návrh na míru — přesná cena a termín. (3) Realizace — průběžně ukazujeme výsledky, vy schvalujete. (4) Předání + zaškolení — kompletní dokumentace a návod. (5) Podpora po spuštění. Komunikujete přímo s Lukášem — žádný tým prostředníků.',
  },
  {
    question: 'Mohu si vybrat model platby?',
    answer: 'Ano, nabízíme dva modely. Pevná cena (fix price) — dohodneme rozsah a cenu předem, víte přesně, kolik zaplatíte, žádná překvapení. Hodinová sazba (time & material) — flexibilní model, platíte jen skutečně odpracovaný čas, ideální pro projekty s měnícím se rozsahem. Na konzultaci vám poradíme, který model je pro váš projekt výhodnější.',
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
          Nenašli jste odpověď? Napište nám — první konzultace je zdarma.
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
          <a href="#contact" className="faq-footer-link">Zeptejte se — konzultace zdarma</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
