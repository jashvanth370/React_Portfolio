import { useState } from 'react';
import HashLink from './HashLink';
import { NAV_LINKS } from '../config';

function Logo() {
  return (
    <svg className="logo-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF5E00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00B2FF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="20,2 38,14 38,26 20,38 2,26 2,14"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />
      <polygon points="20,8 32,16 32,24 20,32 8,24 8,16" fill="url(#logoGradient)" opacity="0.3" />
      <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
    </svg>
  );
}

export default function Navbar({ activeSection, scrolled, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <HashLink href="#home" className="logo-link" onClick={closeMenu}>
          <Logo />
          <span className="logo-text">baLkiJash</span>
        </HashLink>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <HashLink
                href={`#${link.id}`}
                className={`nav-link${activeSection === link.id ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        <button
          id="theme-toggle"
          className="nav-link theme-toggle"
          aria-label="Toggle Dark/Light Theme"
          onClick={onToggleTheme}
        >
          <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`} />
        </button>

        <div
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          id="menuToggle"
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setMenuOpen((open) => !open);
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
