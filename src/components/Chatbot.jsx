import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const BOT_NAME = 'AI Asistent';

const RESPONSES = {
    welcome: {
        text: 'Ahoj! 👋 Jsem AI asistent AImplementace. Jak vám mohu pomoct?',
        quick: ['Jaké nabízíte služby?', 'Kolik to stojí?', 'Máte reference?', 'Chci se spojit'],
    },
    services: {
        text: 'Nabízíme 4 hlavní služby:\n\n🌐 **Weby na míru** — rychlé, designové, SEO-friendly\n🤖 **AI chatbot & leady** — přesně jako tento chat\n⚡ **Automatizace workflow** — propojení CRM, e-mailů, systémů\n💬 **AI podpora zákazníků** — automatické odpovědi na dotazy\n\nO které službě chcete vědět víc?',
        quick: ['Weby na míru', 'AI chatbot', 'Automatizace', 'Kolik to stojí?'],
    },
    weby: {
        text: 'Stavíme weby od základu — žádný WordPress, žádný Wix.\n\n✅ Čistý kód, bleskově rychlé načítání\n✅ SEO optimalizace od prvního dne\n✅ Responzivní na všech zařízeních\n✅ Design na míru vaší značce\n\nWeb je hotový za 2–3 týdny. Chcete nezávaznou konzultaci?',
        quick: ['Chci konzultaci', 'Kolik to stojí?', 'Máte reference?'],
    },
    chatbot_info: {
        text: 'Přesně takový chatbot, jako je tento, můžeme nasadit na váš web. 🤖\n\n✅ Kvalifikuje návštěvníky a sbírá kontakty\n✅ Odpovídá na časté dotazy 24/7\n✅ Předává leady do CRM\n✅ Šetří čas vašeho týmu\n\nTento chat je ukázka — váš by byl přizpůsobený vašemu byznysu.',
        quick: ['Chci chatbota na web', 'Kolik to stojí?', 'Další služby'],
    },
    automatizace: {
        text: 'Propojíme vaše nástroje do jednoho plynulého toku:\n\n✅ CRM, tabulky, e-mail, interní systémy\n✅ Automatické notifikace a reporty\n✅ Méně ručního přepisování dat\n✅ Méně chyb v procesech\n\nŘeknete nám, co vás brzdí — my to zautomatizujeme.',
        quick: ['Chci konzultaci', 'Kolik to stojí?', 'Zpět na služby'],
    },
    pricing: {
        text: 'Každý projekt je individuální, proto cenu vždy řešíme na míru. Orientačně:\n\n🌐 Web na míru — od 15 000 Kč\n🤖 Chatbot — od 8 000 Kč\n⚡ Automatizace — od 10 000 Kč\n📦 Rozjezd podnikání (vše v jednom) — od 25 000 Kč\n\n**Jak to funguje?**\nNabízíme dva modely spolupráce:\n🔹 **Pevná cena** — dohodneme rozsah i cenu předem, bez překvapení\n🔹 **Hodinová sazba** — platíte jen skutečně odpracovaný čas\n\n💡 **První konzultace je zdarma** — probereme, co potřebujete, a navrhneme nejlepší řešení.',
        quick: ['Chci nezávaznou nabídku', 'Jak probíhá spolupráce?', 'Máte reference?'],
    },
    starter: {
        text: 'Balíček **Rozjezd podnikání** je kompletní start:\n\n1️⃣ Registrace domény na vaše jméno\n2️⃣ Firemní e-mail (Google / Outlook)\n3️⃣ Web na míru — design + kód\n4️⃣ SEO základ + analytika\n5️⃣ Automatizace (formulář, CRM, notifikace)\n6️⃣ Zaškolení a předání\n\n⏱️ Hotovo za 2–3 týdny. Vy se staráte o byznys, my o techniku.',
        quick: ['Kolik to stojí?', 'Chci konzultaci', 'Zpět na služby'],
    },
    contact: {
        text: 'Rád se s vámi spojím! 📧\n\n**E-mail:** info@aimplementace.cz\n**Lokace:** Praha / Online\n\nNebo vyplňte formulář přímo na webu 👇 a ozveme se do 24 hodin.\n\nPrvní konzultace je vždy zdarma.',
        quick: ['Otevřít kontaktní formulář', 'Zpět na služby', 'Kolik to stojí?'],
    },
    references: {
        text: 'Naše práce mluví za nás! 🏆\n\n⭐⭐⭐⭐⭐ **Autoškola RED**\n„Díky Lukášovi z AImplementace má moje autoškola web, který nás vystřelil mezi top autoškoly v Česku."\n\n🔗 Podívejte se sami: **autoskola.red**\n\nAktuálně pracujeme na dalších projektech — rádi vám ukážeme víc na osobní konzultaci.',
        quick: ['Chci konzultaci', 'Jaké nabízíte služby?', 'Kolik to stojí?'],
    },
    about_me: {
        text: 'Jsem **Lukáš** z AImplementace 👋\n\nSpecializuji se na tvorbu webů a AI automatizace pro firmy, které chtějí růst. Každý projekt beru osobně — od prvního hovoru až po předání.\n\n🎯 Proč spolupracovat se mnou?\n✅ Osobní přístup — žádný tým 50 lidí, komunikujete přímo se mnou\n✅ Moderní technologie — čistý kód, AI, automatizace\n✅ Férové ceny — jsem nový na trhu, kvalitu ale nedělám na úkor ceny\n✅ Rychlé dodání — web máte za 2–3 týdny\n\nChcete se domluvit na nezávazné konzultaci?',
        quick: ['Chci konzultaci', 'Máte reference?', 'Kolik to stojí?'],
    },
    process: {
        text: 'Spolupráce probíhá jednoduše:\n\n1️⃣ **Nezávazná konzultace** — probereme vaše potřeby (zdarma)\n2️⃣ **Návrh řešení** — připravím nabídku na míru\n3️⃣ **Realizace** — pracuji na projektu, průběžně ukazuji výsledky\n4️⃣ **Předání + zaškolení** — vše vám předám a vysvětlím\n5️⃣ **Podpora** — i po předání jsem tu pro vás\n\n**Modely spolupráce:**\n🔹 **Pevná cena** — jasný rozsah, jasná cena, bez překvapení\n🔹 **Hodinová sazba** — flexibilní, platíte jen reálný čas\n\nVyberte si, co vám víc vyhovuje — rád poradím.',
        quick: ['Chci nezávaznou nabídku', 'Kolik to stojí?', 'Zpět na služby'],
    },
    thanks: {
        text: 'Nemáte zač! 😊 Pokud budete cokoliv potřebovat, jsem tu pro vás. Neváhejte se kdykoliv ozvat.',
        quick: ['Jaké nabízíte služby?', 'Chci se spojit', 'Kolik to stojí?'],
    },
    how_long: {
        text: 'Záleží na rozsahu projektu, ale obecně:\n\n⏱️ **Web na míru** — 2–3 týdny\n⏱️ **Chatbot** — 1–2 týdny\n⏱️ **Automatizace** — 1–2 týdny\n⏱️ **Rozjezd podnikání** (komplet) — 2–3 týdny\n\nVše závisí na složitosti — na konzultaci vám řeknu přesný odhad.',
        quick: ['Chci konzultaci', 'Kolik to stojí?', 'Zpět na služby'],
    },
    seo: {
        text: 'SEO je základ každého webu, který stavíme. 🔍\n\n✅ Technické SEO — rychlost, čistý kód, správné meta tagy\n✅ Responzivní design — Google upřednostňuje mobile-first\n✅ Strukturovaná data — lepší zobrazení ve vyhledávání\n✅ Analytika — napojení na Google Analytics & Search Console\n\nKaždý web od nás je optimalizovaný od prvního dne.',
        quick: ['Chci web', 'Kolik to stojí?', 'Zpět na služby'],
    },
    fallback: {
        text: 'Děkuji za dotaz! Na toto vám nejlépe odpoví Lukáš osobně. Napište nám na info@aimplementace.cz nebo využijte kontaktní formulář — ozveme se do 24 hodin. 🙂',
        quick: ['Chci se spojit', 'Jaké nabízíte služby?', 'Kolik to stojí?'],
    },
};

const matchResponse = (input) => {
    const lower = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Poděkování
    if (lower.match(/dik|dekuj|diky|thanks|thank/)) return RESPONSES.thanks;

    // Kdo jsi / kdo za tím stojí / o vás
    if (lower.match(/kdo jsi|kdo jste|kdo za|o vas|o tobe|predstav se|jaky jsi|co jsi|jsi clovek|jsi robot|jsi ai|jsi bot|umela intel/)) return RESPONSES.about_me;

    // Reference
    if (lower.match(/referen|ukazk|portfol|autoskol|klient|zakazni|projekt|ukazat|dokazat|zkusen|praxe|vysledk/)) return RESPONSES.references;

    // Jak probíhá spolupráce / proces
    if (lower.match(/jak prob|jak funguj|jak to chodi|spoluprac|postup|fix.*price|fix.*time|hodin.*sazb|pevna cen|model|faktur/)) return RESPONSES.process;

    // Jak dlouho to trvá
    if (lower.match(/jak dlouh|kdy bude|za jak|termin|dodac|hotov|rychl|casov|deadline|stihn/)) return RESPONSES.how_long;

    // SEO
    if (lower.match(/seo|optimaliz|google|vyhledav|analytics|indexov/)) return RESPONSES.seo;

    // Služby
    if (lower.match(/sluzb|nabiz|co del|co umit|pomoc|pomo[cz]|co vse|co vsechno|s cim|vase|nabid/)) return RESPONSES.services;

    // Weby
    if (lower.match(/web|stranka|stranky|sajt|site|landing|eshop|e-shop|obchod|prezentac/)) return RESPONSES.weby;

    // Chatbot
    if (lower.match(/chatbot|chat bot|robot|lead|konverz|navstevnik|sbir.*kontakt/)) return RESPONSES.chatbot_info;

    // Automatizace
    if (lower.match(/automat|workflow|propoj|crm|integrac|napoj|system|proces|power.automate|playwright|testov/)) return RESPONSES.automatizace;

    // Ceník / pricing
    if (lower.match(/cen[aiy]|cenik|stoj|kolik|drah|levn|slev|rozpoce|budget|financ|investic|plat[i]|uhrad/)) return RESPONSES.pricing;

    // Rozjezd podnikání / starter
    if (lower.match(/rozje|start|zacin|podnik|balic|komplet|zalozen|zaloz|novy byznys|firma|zivnost|prvn/)) return RESPONSES.starter;

    // Kontakt / spojení
    if (lower.match(/kontakt|spoj|email|mail|telefon|zavol|formul|konzult|poptav|schuz|meeting|volat|domluvit|nezavaz|zdarma/)) return RESPONSES.contact;

    // Pozdravy
    if (lower.match(/ahoj|cau|dobr|hej|zdravim|nazdar|cus|zdar|cago|hey|hi\b|hello/)) return RESPONSES.welcome;

    // Navigace
    if (lower.match(/dal|jine|zpet|menu|co dal|jeste nec/)) return RESPONSES.services;

    // Souhlas / zájem
    if (lower.match(/jo\b|jasn|ok\b|okay|super|skvele|dobre|ano|chci|mam zajem|zajem|zni to/)) return RESPONSES.contact;

    return RESPONSES.fallback;
};

const formatMessage = (text) => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br/>');
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const addBotMessage = (response, delay = 600) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                { from: 'bot', text: response.text, quick: response.quick },
            ]);
        }, delay);
    };

    const handleOpen = () => {
        setIsOpen(true);
        if (!hasGreeted) {
            setHasGreeted(true);
            addBotMessage(RESPONSES.welcome, 400);
        }
    };

    const handleSend = (text) => {
        if (!text.trim()) return;
        setInput('');

        setMessages((prev) => [
            ...prev.map((m) => ({ ...m, quick: undefined })),
            { from: 'user', text: text.trim() },
        ]);

        const response = matchResponse(text);
        addBotMessage(response);
    };

    const handleQuickReply = (text) => {
        if (text === 'Otevřít kontaktní formulář') {
            setIsOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        handleSend(text);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(input);
        }
    };

    return (
        <>
            {/* Floating trigger button */}
            <button
                className={`chatbot-trigger ${isOpen ? 'hidden' : ''}`}
                onClick={handleOpen}
                aria-label="Otevřít chat"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="chatbot-trigger-label">Chat</span>
            </button>

            {/* Chat window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <div className="chatbot-avatar">
                            <svg viewBox="0 0 36 36" fill="none" className="chatbot-avatar-icon">
                                <path d="M10 27 L18 9 L26 27" stroke="url(#chatGrad)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <line x1="13" y1="21" x2="23" y2="21" stroke="url(#chatGrad)" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="18" cy="5.5" r="2" fill="#f6bc7c" />
                                <defs>
                                    <linearGradient id="chatGrad" x1="10" y1="27" x2="26" y2="9">
                                        <stop offset="0%" stopColor="#d9eafa" />
                                        <stop offset="100%" stopColor="#f6bc7c" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <span className="chatbot-header-name">{BOT_NAME}</span>
                            <span className="chatbot-header-status">Online</span>
                        </div>
                    </div>
                    <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Zavřít chat">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                            <div
                                className="chatbot-bubble"
                                dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                            />
                            {msg.quick && (
                                <div className="chatbot-quick-replies">
                                    {msg.quick.map((q) => (
                                        <button key={q} className="chatbot-quick-btn" onClick={() => handleQuickReply(q)}>
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chatbot-msg chatbot-msg-bot">
                            <div className="chatbot-bubble chatbot-typing">
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input-area">
                    <input
                        ref={inputRef}
                        type="text"
                        className="chatbot-input"
                        placeholder="Napište zprávu..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="chatbot-send"
                        onClick={() => handleSend(input)}
                        disabled={!input.trim()}
                        aria-label="Odeslat"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
