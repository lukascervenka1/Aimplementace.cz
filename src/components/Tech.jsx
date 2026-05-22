import React from 'react';
import './Tech.css';

const techStack = [
  { slug: 'react',      color: '61DAFB', name: 'React' },
  { slug: 'nextdotjs',  color: 'FFFFFF', name: 'Next.js' },
  { slug: 'typescript', color: '3178C6', name: 'TypeScript' },
  { slug: 'openai',     color: 'FFFFFF', name: 'OpenAI' },
  { slug: 'anthropic',  color: 'FFFFFF', name: 'Anthropic' },
  { slug: 'vercel',     color: 'FFFFFF', name: 'Vercel' },
  { slug: 'supabase',   color: '3ECF8E', name: 'Supabase' },
  { slug: 'stripe',     color: '6772E5', name: 'Stripe' },
  { slug: 'resend',     color: 'FFFFFF', name: 'Resend' },
];

const Tech = () => {
  return (
    <section id="tech">
      <div className="section-inner">
        <div className="tech-label reveal">Stavíme na ověřených technologiích</div>
        <div className="tech-marquee-wrapper reveal reveal-delay-1">
          <div className="tech-marquee-track">
            {/* First set */}
            {techStack.map((tech) => (
              <div className="tech-logo" key={`${tech.slug}-1`}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  loading="lazy"
                />
                <span>{tech.name}</span>
              </div>
            ))}
            {/* Second set for seamless looping */}
            {techStack.map((tech) => (
              <div className="tech-logo" key={`${tech.slug}-2`}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  loading="lazy"
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
