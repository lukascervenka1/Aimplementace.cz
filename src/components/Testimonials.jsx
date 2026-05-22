import React from 'react';
import './Testimonials.css';

const row1 = [
  {
    type: 'testimonial',
    stars: 5,
    quote: '"Díky Lukášovi z AImplementace má moje autoškola web, který nás vystřelil mezi top autoškoly v Česku. Byl ochotný, vstřícný a celý proces proběhl rychle a bez komplikací. Web vypadá skvěle, je rychlý a klienti nás díky němu najdou sami."',
    avatar: 'AR',
    name: 'Autoškola RED',
    role: 'autoskola.red ↗',
    link: 'https://www.autoskola.red'
  },
  {
    type: 'testimonial',
    stars: 5,
    quote: '"Díky Lukášovi a jeho AI skillu jsem svoji tvorbu posunula na kilometr daleko."',
    avatar: 'GF',
    name: 'GetFit',
    role: 'getfit.cz'
  },
  {
    type: 'testimonial',
    stars: 5,
    quote: '"Lukáše znám skrz autoškolu red, oslovil jsem s přáním automatizovat vnitřní procesy, chvilku nám trvalo vydefinovat co vlastně chceme, ale dneska je to bomba, nemusíme tolik klikat a já se mohu věnovat autoškole."',
    avatar: 'AC',
    name: 'Autoškola Czech',
    role: 'autoskolaczech.cz'
  }
];

const row2 = [
  {
    type: 'testimonial',
    stars: 5,
    quote: '"Když jsme potřebovali automatizaci na sledování objednávek, Lukáš ji navrhnul a do 3 týdnů implementoval. Běží do dneška, určitě s Lukášem a Aimplementací budeme pokračovat dál."',
    avatar: 'GD',
    name: 'GTR Data',
    role: 'gtrdata.cz'
  },
  {
    type: 'project',
    tag: 'Vlastní projekt',
    title: 'Aplikace „Slavíme“',
    desc: 'iOS aplikace pro svátky a narozeniny publikovaná v App Store. Notifikace, kalendář, přehled na celý rok.',
    tags: ['Swift', 'iOS', 'App Store'],
    avatar: '📱',
    name: 'App Store',
    role: 'Otevřít v App Store ↗',
    link: 'https://apps.apple.com/cz/app/slav%C3%ADme/id6761773077?l=cs'
  },
  {
    type: 'cta',
    tag: 'Váš projekt',
    quote: '"Mohl byste to být vy."',
    desc: 'Aktivně nabírám nové klienty — to pro vás znamená plnou pozornost a přímou komunikaci.',
    link: '#cta-final'
  }
];

// Helper to repeat items to guarantee seamless looping on large/ultra-wide screens
const repeatArray = (arr, targetLength = 8) => {
  const result = [];
  while (result.length < targetLength) {
    result.push(...arr);
  }
  return result;
};

const row1Repeated = repeatArray(row1, 8);
const row2Repeated = repeatArray(row2, 8);

const Testimonials = () => {
  const renderCard = (item, key) => {
    const cardContent = () => {
      if (item.type === 'testimonial') {
        return (
          <>
            <div>
              <div className="testimonial-stars" aria-label={`${item.stars} hvězdiček`}>
                {'★'.repeat(item.stars)}
              </div>
              <p className="testimonial-quote">
                {item.quote}
              </p>
            </div>
            <div className="testimonial-meta">
              <div className="testimonial-avatar">{item.avatar}</div>
              <div>
                <div className="testimonial-name">{item.name}</div>
                <div className="testimonial-role">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.role}
                    </a>
                  ) : (
                    item.role
                  )}
                </div>
              </div>
            </div>
          </>
        );
      } else if (item.type === 'project') {
        return (
          <>
            <div>
              <div className="testimonial-tag">{item.tag}</div>
              <p className="testimonial-project-title">{item.title}</p>
              <p className="testimonial-project-desc">{item.desc}</p>
              <div className="testimonial-tags-row">
                {item.tags.map((tag) => (
                  <span className="testimonial-pill" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="testimonial-meta">
              <div className="testimonial-avatar">{item.avatar}</div>
              <div>
                <div className="testimonial-name">{item.name}</div>
                <div className="testimonial-role">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.role}
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      } else if (item.type === 'cta') {
        return (
          <>
            <div className="testimonial-tag">{item.tag}</div>
            <p className="testimonial-cta-quote">{item.quote}</p>
            <p className="testimonial-cta-text">{item.desc}</p>
            <a href={item.link} className="testimonial-cta-btn">
              Začít spolupráci →
            </a>
          </>
        );
      }
    };

    return (
      <div 
        className={`testimonial glow-card ${item.type === 'project' ? 'testimonial-project' : ''} ${item.type === 'cta' ? 'testimonial-cta' : ''}`}
        key={key}
      >
        <div className="testimonial-inner">
          {cardContent()}
        </div>
      </div>
    );
  };

  return (
    <section id="proof">
      <div className="section-inner">
        <div className="proof-header">
          <h2 className="proof-h2 reveal">
            Co říkají<br /><span className="serif-accent">klienti</span>
          </h2>
          <div className="proof-line reveal reveal-delay-1"></div>
        </div>
      </div>

      <div className="marquee-container reveal reveal-delay-2">
        {/* Row 1: Scrolls Left */}
        <div className="marquee-track">
          <div className="marquee-content marquee-left">
            {row1Repeated.map((item, idx) => renderCard(item, `r1-${idx}`))}
            {row1Repeated.map((item, idx) => renderCard(item, `r1-dup-${idx}`))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-track">
          <div className="marquee-content marquee-right">
            {row2Repeated.map((item, idx) => renderCard(item, `r2-${idx}`))}
            {row2Repeated.map((item, idx) => renderCard(item, `r2-dup-${idx}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
