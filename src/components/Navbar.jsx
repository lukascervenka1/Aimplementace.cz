import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="main-nav" className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      <Logo />
      <ul className="nav-links">
        <li><a href="#services">Služby</a></li>
        <li><a href="#process">Proces</a></li>
        <li><a href="#pricing">Ceník</a></li>
        <li><a href="#proof">Reference</a></li>
      </ul>
      <a href="#contact" className="nav-cta magnetic">Nezávazná konzultace</a>
    </nav>
  );
};

export default Navbar;
