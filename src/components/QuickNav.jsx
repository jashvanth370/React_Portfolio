import { useState, useEffect, useRef } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
  { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
  { id: 'technologies', label: 'Technologies', icon: 'fa-solid fa-layer-group' },
  { id: 'projects', label: 'Work', icon: 'fa-solid fa-laptop-code' },
  { id: 'creations', label: 'Articles', icon: 'fa-solid fa-newspaper' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
];

export default function QuickNav({ activeSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);
  const widgetRef = useRef(null);

  // QuickNav appears as soon as user starts scrolling past the top home section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const homeEl = document.getElementById('home');
      const homeThreshold = homeEl ? Math.min(homeEl.offsetHeight * 0.35, 220) : 180;

      // User has started scrolling past home / hero
      const isPastHome = scrollY > homeThreshold || (activeSection && activeSection !== 'home');
      setIsVisible(isPastHome);
      if (!isPastHome) {
        setMenuOpen(false);
      }

      // Check footer position to dynamically lift QuickNav and prevent overlapping social icons
      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (footerRect.top < windowHeight) {
          // Footer entered viewport: lift capsule above footer
          const overlap = Math.max(0, windowHeight - footerRect.top);
          setFooterOffset(overlap);
        } else {
          setFooterOffset(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeSection]);

  // Close menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const navHeight = 75;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: Math.max(0, targetPos), behavior: 'smooth' });
    }
  };

  return (
    <aside
      ref={widgetRef}
      className={`quick-nav-widget${isVisible ? ' visible' : ''}${menuOpen ? ' menu-active' : ''}`}
      style={{
        transform: isVisible
          ? footerOffset > 0
            ? `translateY(-${footerOffset + 8}px)`
            : 'translateY(0)'
          : 'translateY(20px)',
      }}
      aria-label="Quick section navigation"
      aria-hidden={!isVisible}
    >
      {/* Expanded Quick Jump Popover Menu (No Inner Scrolling) */}
      {menuOpen && isVisible && (
        <div className="quick-nav-popover" role="dialog" aria-modal="true" aria-label="Section selector">
          <div className="quick-popover-header">
            <div className="quick-header-title">
              <i className="fa-solid fa-compass" />
              <span>Quick Navigation</span>
            </div>
            <button
              type="button"
              className="quick-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="quick-popover-list">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  className={`quick-menu-item${isActive ? ' active' : ''}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="item-icon-box">
                    <i className={sec.icon} />
                  </span>
                  <span className="item-name">{sec.label}</span>
                  {isActive && <span className="item-active-dot" />}
                </button>
              );
            })}
          </div>

          <button type="button" className="quick-home-jump-btn" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up" />
            <span>Back to Top / Home</span>
          </button>
        </div>
      )}

      {/* Floating Action Pill Controller in Bottom Right */}
      <div className="quick-nav-capsule">
        {/* Scroll To Top Button */}
        <button
          type="button"
          className="quick-capsule-btn quick-top-btn"
          onClick={scrollToTop}
          title="Scroll back to Top (Home)"
          aria-label="Scroll to top of portfolio"
        >
          <i className="fa-solid fa-arrow-up" />
          <span className="capsule-label">Top</span>
        </button>

        <div className="quick-capsule-sep" />

        {/* Quick Menu Toggle Button */}
        <button
          type="button"
          className={`quick-capsule-btn quick-jump-btn${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          title="Jump directly to any section"
          aria-label="Open jump to section menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-compass'} />
          <span className="capsule-label">Jump</span>
        </button>
      </div>
    </aside>
  );
}
