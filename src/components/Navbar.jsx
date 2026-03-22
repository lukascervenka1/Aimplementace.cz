import React, { useState, useEffect } from 'react';
import BrandMark from './BrandMark';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo" aria-label="AImplementace.cz">
          <BrandMark />
        </a>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Služby</a>
          <a href="#starter" onClick={closeMenu}>Rozjezd podnikání</a>
          <a href="#about" onClick={closeMenu}>O mně</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" className="btn btn-primary btn-sm" onClick={closeMenu}>Nezávazná konzultace</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
