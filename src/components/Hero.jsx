import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#park", label: "Park" },
    { href: "#developer", label: "Shubhlabh Developer" },
    { href: "#location", label: "Location" },
    { href: "#products", label: "Products" },
    { href: "#layout", label: "Layout" }
  ];

  return (
    <section className="hero-section">
      <nav className="navbar container">
        <div className="logo">
          <svg className="logo-icon" viewBox="0 0 24 24" width="28" height="28">
            <path d="M4 6h16v3H4zm0 5h10v3H4zm10 5H4v3h16v-3z" fill="#f47b20" />
          </svg>
          <span className="logo-text">Mangalmurti</span>
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X color="white" size={32} /> : <Menu color="white" size={32} />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}><a href={item.href} onClick={toggleMenu}>{item.label}</a></li>
          ))}
        </ul>
      </div>

      <div className="hero-content">
        <div className="hero-box">
          <h1>Warehousing space with Peace of Mind</h1>
        </div>
      </div>

      <div className="slider-nav">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Hero;
