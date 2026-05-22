import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  useEffect(() => {
    let ctx;
    
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach((el) => {
          if (el.classList.contains('gsap-revealed')) return;
          
          let delay = 0;
          if (el.classList.contains('reveal-delay-1')) delay = 0.1;
          else if (el.classList.contains('reveal-delay-2')) delay = 0.2;
          else if (el.classList.contains('reveal-delay-3')) delay = 0.3;
          else if (el.classList.contains('reveal-delay-4')) delay = 0.4;

          gsap.set(el, { opacity: 0, y: 15 });

          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: delay * 0.4, // cut stagger delays even more for instant feeling
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 96%', // trigger even earlier (near bottom of viewport)
              onEnter: () => el.classList.add('gsap-revealed'),
              toggleActions: 'play none none none'
            }
          });
        });
      });
    }, 150);


    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
};

export default ScrollReveal;
