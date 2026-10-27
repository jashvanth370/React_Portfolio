import { useState } from 'react';
import Reveal from './Reveal';
import HashLink from './HashLink';
import TextRotator from './TextRotator';
import { SOCIAL } from '../config';
import { asset } from '../utils';

const ROTATOR_ITEMS = [
  {
    title: 'Software Engineer',
    subtitle: 'Architecting scalable applications and robust digital solutions.',
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Connecting high-performance ASP.NET APIs with reactive modern frontends.',
  },
  {
    title: 'Problem Solver',
    subtitle: 'Transforming complex business needs into clean, maintainable systems.',
  },
];

const HERO_STATS = [
  { value: '1+ Years', label: 'Industry Exp' },
  { value: '10+', label: 'Projects Built' },
  { value: 'Full-Stack', label: 'ASP.NET • React • SQL' },
  { value: 'Agile', label: 'Scrum Workflow' },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = 'balakirushnanjashvanth@gmail.com';
    const markSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(markSuccess)
        .catch(() => {
          try {
            const el = document.createElement('textarea');
            el.value = email;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            markSuccess();
          } catch {
            window.location.href = SOCIAL.email;
          }
        });
    } else {
      try {
        const el = document.createElement('textarea');
        el.value = email;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        markSuccess();
      } catch {
        window.location.href = SOCIAL.email;
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">
        {/* Left Column: Bio & Calls to Action */}
        <Reveal variant="reveal-left" className="hero-left">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-dot-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-text">Available for Opportunities</span>
          </div>

          {/* Primary Heading (Single h1 for SEO & a11y) */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">Balakirushnan Jashvanth</span>
          </h1>

          {/* Dynamic Animated Roles Rotator */}
          <div className="hero-rotator-box">
            <TextRotator items={ROTATOR_ITEMS} />
          </div>

          {/* Impactful 2-Sentence Summary */}
          <p className="hero-description">
            Software Engineering undergraduate with industry experience building scalable web
            applications, robust APIs, and user-centric systems. Driven by clean architecture,
            high performance, and collaborative agile problem solving.
          </p>

          {/* Sleek Action Buttons */}
          <div className="hero-cta-group">
            <HashLink href="#projects" className="hero-btn hero-btn-primary">
              <span>View My Work</span>
              <i className="fa-solid fa-arrow-right" />
            </HashLink>

            <HashLink href="#contact" className="hero-btn hero-btn-secondary">
              <span>Get In Touch</span>
              <i className="fa-regular fa-paper-plane" />
            </HashLink>
          </div>

          {/* Interactive Social & Quick Copy Email */}
          <div className="hero-connect-bar">
            <button
              type="button"
              className="hero-copy-email-btn"
              onClick={handleCopyEmail}
              aria-label="Copy Email address to clipboard"
              title="Click to copy email address"
            >
              <i className="fa-solid fa-envelope" />
              <span className="email-label">balakirushnanjashvanth@gmail.com</span>
              <span className={`copy-badge ${copied ? 'copied' : ''}`}>
                <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </span>
            </button>

            <div className="hero-social-links">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Visual Portrait & Floating Tech Badges */}
        <Reveal variant="reveal-right" className="hero-right">
          <div className="hero-visual-container">
            {/* Ambient Background Glow */}
            <div className="hero-glow-sphere" />

            {/* Portrait Frame */}
            <div className="hero-portrait-card">
              <div className="hero-portrait-inner">
                <img
                  src={asset('assets/WhatsApp Image 2026-10-01 at 09.45.00.jpeg')}
                  alt="Balakirushnan Jashvanth - Software Engineer"
                  className="hero-portrait-img"
                  loading="eager"
                />
              </div>

              {/* Floating Tech Chips */}
              <div className="hero-floating-chip chip-top">
                <span className="chip-icon">⚡</span>
                <span className="chip-text">ASP.NET & React</span>
              </div>

              <div className="hero-floating-chip chip-bottom">
                <span className="chip-icon">🚀</span>
                <span className="chip-text">Full Stack Engineer</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Hero Stats Strip */}
      <Reveal variant="reveal-up" className="hero-stats-wrapper">
        <div className="hero-stats-strip">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
