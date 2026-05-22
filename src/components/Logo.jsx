import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Logo.css';

const Logo = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Find all paths and lines
    const paths = svg.querySelectorAll('path, line');
    const nodes = svg.querySelectorAll('circle');
    const letters = textRef.current.querySelectorAll('.logo-char');

    // Reset styles for animation
    paths.forEach(path => {
      const length = path.getTotalLength ? path.getTotalLength() : 100;
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
      });
    });

    gsap.set(nodes, { scale: 0, transformOrigin: 'center center' });
    gsap.set(letters, { opacity: 0, y: 10 });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // 1. Draw paths
    tl.to(paths, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15
    });

    // 2. Pop nodes
    tl.to(nodes, {
      scale: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(2)'
    }, '-=0.6');

    // 3. Stagger reveal characters of wordmark
    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.03
    }, '-=0.4');

  }, []);

  const handleMouseEnter = () => {
    const svg = svgRef.current;
    if (!svg) return;
    
    // Rotate the SVG symbol 360 degrees
    gsap.to(svg.querySelector('.logo-symbol-inner'), {
      rotate: 360,
      duration: 1.0,
      ease: 'power2.inOut',
      overwrite: 'auto'
    });

    // Pulse nodes
    gsap.to(svg.querySelectorAll('circle'), {
      scale: 1.35,
      repeat: 1,
      yoyo: true,
      duration: 0.3,
      stagger: 0.03,
      ease: 'power1.inOut',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    const svg = svgRef.current;
    if (!svg) return;
    
    // Reset rotation back to 0 without jumping
    gsap.to(svg.querySelector('.logo-symbol-inner'), {
      rotate: 0,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    });
    
    // Reset circles size
    gsap.to(svg.querySelectorAll('circle'), {
      scale: 1,
      duration: 0.3,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  };

  // Split rest of text to allow character stagger
  const restText = "mplementace".split("");

  return (
    <a 
      href="#" 
      className="logo-container" 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo-svg-wrapper" ref={svgRef}>
        <svg viewBox="0 0 40 40" className="logo-svg">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
              <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet */}
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g className="logo-symbol-inner" style={{ transformOrigin: '20px 20px' }}>
            {/* Hexagon Outline */}
            <path 
              d="M 20 4 L 34 12 L 34 28 L 20 36 L 6 28 L 6 12 Z" 
              stroke="url(#logoGrad)" 
              strokeWidth="1.5" 
              fill="none" 
              filter="url(#logoGlow)"
            />
            {/* Outer A legs */}
            <path 
              d="M 6 28 L 20 4 L 34 28" 
              stroke="url(#logoGrad)" 
              strokeWidth="2.0" 
              fill="none" 
              filter="url(#logoGlow)"
            />
            {/* Horizontal bar of A */}
            <line 
              x1="13" y1="20" x2="27" y2="20" 
              stroke="url(#logoGrad)" 
              strokeWidth="1.5" 
              filter="url(#logoGlow)"
            />
            {/* Vertical axis of I */}
            <line 
              x1="20" y1="4" x2="20" y2="36" 
              stroke="url(#logoGrad)" 
              strokeWidth="1.5" 
              filter="url(#logoGlow)"
            />
            {/* Nodes */}
            <circle cx="20" cy="4" r="2.5" fill="#06b6d4" />
            <circle cx="6" cy="28" r="2.5" fill="#8b5cf6" />
            <circle cx="34" cy="28" r="2.5" fill="#8b5cf6" />
            <circle cx="20" cy="36" r="2.5" fill="#06b6d4" />
            <circle cx="13" cy="20" r="2" fill="#8b5cf6" />
            <circle cx="27" cy="20" r="2" fill="#8b5cf6" />
            <circle cx="20" cy="20" r="2" fill="#06b6d4" />
          </g>
        </svg>
      </div>
      <div className="logo-text" ref={textRef}>
        <span className="logo-ai">
          <span className="logo-char">A</span>
          <span className="logo-char">I</span>
        </span>
        <span className="logo-rest">
          {restText.map((char, index) => (
            <span key={index} className="logo-char">{char}</span>
          ))}
        </span>
        <span className="logo-dot">
          <span className="logo-char">.</span>
          <span className="logo-char">c</span>
          <span className="logo-char">z</span>
        </span>
      </div>
    </a>
  );
};

export default Logo;
