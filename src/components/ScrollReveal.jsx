import { useEffect } from 'react';

const ScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );

        // Observe initial elements
        const observe = () => {
            document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
                observer.observe(el);
            });
        };

        // Observe after initial render and on any DOM changes
        observe();
        const timer = setTimeout(observe, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    return null;
};

export default ScrollReveal;
