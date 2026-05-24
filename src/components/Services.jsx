import React from 'react';
import './Services.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" strokeLinecap="round" aria-hidden="true">
    <path d="M2 12L12 2M12 2H5M12 2v7" strokeWidth="1.5"/>
  </svg>
);

const services = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 32 32" className="category-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="webGradInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        {/* Device/Browser frame */}
        <rect x="2" y="5" width="28" height="22" rx="4" stroke="url(#webGrad)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
        {/* Header bar */}
        <path d="M2 11H30" stroke="url(#webGrad)" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="6" cy="8" r="1.2" fill="#06b6d4" />
        <circle cx="10" cy="8" r="1.2" fill="#3b82f6" />
        
        {/* Floating Web Card Layer */}
        <rect x="6" y="15" width="10" height="8" rx="2" stroke="url(#webGrad)" strokeWidth="1.2" fill="url(#webGradInner)" />
        <line x1="9" y1="19" x2="13" y2="19" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Visual elements on the right */}
        <path d="M20 15L25 15" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 18H23" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        {/* Success checkmark floating at bottom right */}
        <path d="M20 23.5L22 25.5L26.5 21" stroke="url(#accentGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Weby, které prodávají',
    desc: 'Web postavený přesně pro vás, bez šablon a pomalých doplňků. Načte se rychle, Google ho miluje a zákazníci vás najdou sami. Dokonce vás může zmínit i ChatGPT nebo Perplexity.',
    items: [
      'Návrh a design webu',
      'Rychlý web bez šablon',
      'Viditelnost na Googlu i v ChatGPT',
      'Rychlé načtení na mobilu i počítači',
      'Hotovo za 2–3 týdny, od 15 000 Kč',
    ],
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 32 32" className="category-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="aiGradInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(217, 70, 239, 0.3)" />
          </linearGradient>
        </defs>
        {/* Neural Network Pathways */}
        <path d="M7 16H25" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <path d="M16 7V25" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <path d="M9 9L23 23" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <path d="M23 9L9 23" stroke="url(#aiGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        
        {/* Inner glow circle */}
        <circle cx="16" cy="16" r="6" stroke="url(#aiGrad)" strokeWidth="1.2" fill="url(#aiGradInner)" />
        
        {/* Neural Nodes */}
        <circle cx="7" cy="16" r="2" fill="#8b5cf6" />
        <circle cx="25" cy="16" r="2" fill="#d946ef" />
        <circle cx="16" cy="7" r="2" fill="#8b5cf6" />
        <circle cx="16" cy="25" r="2" fill="#d946ef" />
        <circle cx="9" cy="9" r="1.5" fill="#8b5cf6" opacity="0.7" />
        <circle cx="23" cy="23" r="1.5" fill="#d946ef" opacity="0.7" />
        <circle cx="23" cy="9" r="1.5" fill="#8b5cf6" opacity="0.7" />
        <circle cx="9" cy="23" r="1.5" fill="#d946ef" opacity="0.7" />
        
        {/* Central Sparkling Spark */}
        <path d="M16 11.5C16 14 14.5 16 12.5 16C14.5 16 16 18 16 20.5C16 18 17.5 16 19.5 16C17.5 16 16 14 16 11.5Z" fill="url(#aiGrad)" />
      </svg>
    ),
    title: 'AI implementace',
    desc: 'AI pracuje za vás i o víkendu. Odpovídá zákazníkům, zapisuje poptávky a posílá e-maily automaticky. Průměrně vám ušetří 6 až 10 hodin práce týdně.',
    items: [
      'Poradíme, kde AI opravdu pomůže',
      'Automatické odpovědi a připomínky',
      'Chatbot na webu dostupný nonstop',
      'Automatizace opakujících se úkolů',
      'Napojení na váš stávající systém',
    ],
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 32 32" className="category-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="ppcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="ppcGradInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 139, 250, 0.15)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
          </linearGradient>
          <linearGradient id="trendGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* Target Rings */}
        <circle cx="14" cy="18" r="10" stroke="url(#ppcGrad)" strokeWidth="1.2" fill="url(#ppcGradInner)" />
        <circle cx="14" cy="18" r="6" stroke="url(#ppcGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="14" cy="18" r="2" fill="url(#ppcGrad)" />
        
        {/* Coordinate lines */}
        <line x1="4" y1="18" x2="24" y2="18" stroke="url(#ppcGrad)" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="14" y1="8" x2="14" y2="28" stroke="url(#ppcGrad)" strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Trend line and Growth Arrow */}
        <path d="M5 25L11 19.5L16.5 22.5L25.5 12" stroke="url(#trendGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12H26V18" stroke="url(#trendGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'PPC & online marketing',
    desc: 'Platíte za reklamu, my hlídáme, aby každá koruna přinesla zákazníka. Každý měsíc dostanete report, co reklamy přinesly a co plánujeme dál.',
    items: [
      'Reklamy na Googlu',
      'Reklamy na Skliku (Seznam.cz)',
      'Sledování výsledků a objednávek',
      'Reklama cílená na správné lidi',
      'Měsíční report v češtině',
    ],
  },
];

const renderServiceVisual = (number) => {
  if (number === '01') {
    return (
      <div className="service-visual visual-browser" aria-hidden="true">
        <div className="visual-browser-header">
          <div className="visual-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="visual-address">aimplementace.cz</div>
        </div>
        <div className="visual-browser-body">
          <div className="browser-speed-meter">
            <svg viewBox="0 0 100 100" className="speed-circle-svg">
              <circle cx="50" cy="50" r="40" className="speed-circle-bg" />
              <circle cx="50" cy="50" r="40" className="speed-circle-fill" />
            </svg>
            <div className="speed-circle-value">100</div>
          </div>
          <div className="browser-speed-badge">
            <span className="badge-bullet"></span>
            <span className="badge-title">LCP Rychlost</span>
            <span className="badge-value">0.4s</span>
          </div>
        </div>
      </div>
    );
  }
  if (number === '02') {
    return (
      <div className="service-visual visual-chat" aria-hidden="true">
        <div className="chat-window-header">
          <div className="chat-avatar-status active"></div>
          <span className="chat-window-title">AI Integration</span>
        </div>
        <div className="chat-bubble-container">
          <div className="chat-msg bot animate-msg-1">
            <span className="avatar">🤖</span>
            <div className="msg-content">
              <span className="msg-text">Získán nový kontakt z webu.</span>
            </div>
          </div>
          <div className="chat-msg bot success animate-msg-2">
            <span className="avatar">⚡</span>
            <div className="msg-content">
              <span className="msg-text">Zapsáno do CRM, odeslán e-mail.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (number === '03') {
    return (
      <div className="service-visual visual-marketing" aria-hidden="true">
        <div className="marketing-header">
          <span className="marketing-title">Měsíční report konverzí</span>
          <span className="marketing-roi">+420% ROI</span>
        </div>
        <div className="marketing-chart">
          <div className="chart-bar-wrapper">
            <div className="chart-bar bar-1"></div>
            <span className="bar-label">Březen</span>
          </div>
          <div className="chart-bar-wrapper">
            <div className="chart-bar bar-2"></div>
            <span className="bar-label">Duben</span>
          </div>
          <div className="chart-bar-wrapper">
            <div className="chart-bar bar-3"></div>
            <span className="bar-label">Květen</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const Services = () => {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="section-label reveal">Co pro vás uděláme</div>
        <div className="services-layout">
          {services.map((svc, i) => (
            <div className={`service-card glow-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={svc.number}>
              <div className="service-card-inner">
                <div className="service-number">{svc.number}</div>
                <div className="service-icon">{svc.icon}</div>
                <div className="service-title">{svc.title}</div>
                <div className="service-desc">{svc.desc}</div>
                <ul className="service-items">
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {renderServiceVisual(svc.number)}
              </div>
              <div className="service-arrow">
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
