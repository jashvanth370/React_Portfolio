import { useState } from 'react';
import Reveal from './Reveal';
import { education } from '../data/education';
import { asset } from '../utils';

function EducationLogo({ src, alt, dark }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className={`edu-bento-logo-box${dark ? ' edu-logo-dark' : ''}`}>
      <img src={asset(src)} alt={alt} className="edu-bento-logo" onError={() => setFailed(true)} />
    </div>
  );
}

function EducationBentoCard({ item, index }) {
  const isUniversity = item.degree.toLowerCase().includes('bsc') || item.variant === 'uni-card';

  return (
    <Reveal variant={index % 2 === 0 ? 'reveal-left' : 'reveal-right'} className={`edu-bento-card ${item.variant}`}>
      {/* Decorative background watermark */}
      <div className="edu-bento-watermark">
        {isUniversity ? '🎓' : '🔬'}
      </div>

      {/* Top Banner Row */}
      <div className="edu-bento-top">
        <div className="edu-bento-header">
          <EducationLogo src={item.logo} alt={item.logoAlt} dark={item.logoDark} />
          <div className="edu-bento-title-group">
            <div className="edu-tier-badge">
              <span>{isUniversity ? 'Higher Education' : 'Advanced Secondary Education'}</span>
            </div>
            <h3 className="edu-bento-degree">{item.degree}</h3>
            <h4 className="edu-bento-institution">{item.institution}</h4>
          </div>
        </div>

        {/* Academic Stat Meter / Ribbon */}
        <div className="edu-bento-stat-ribbon">
          <div className="stat-ribbon-badge">
            <span className="stat-ribbon-label">{item.statLabel}</span>
            <span className="stat-ribbon-value">{item.statValue}</span>
          </div>
          <div className="edu-meta-location-date">
            <span className="edu-info-chip">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {item.date}
            </span>
            <span className="edu-info-chip">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* Course Modules / Grade Tokens Section */}
      <div className="edu-bento-modules-section">
        <span className="edu-bento-section-label">
          {isUniversity ? 'Specialized Focus Areas' : 'Key Subject Performance'}
        </span>
        <div className="edu-pills-matrix">
          {item.pills.map((pill) => (
            <div key={pill.label} className={`edu-matrix-pill ${pill.color}`}>
              <span className="pill-indicator-dot" />
              <span className="pill-text">{pill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights & Key Takeaways */}
      <div className="edu-bento-highlights-section">
        <span className="edu-bento-section-label">Milestones &amp; Academic Foundation</span>
        <div className="edu-bento-highlights-grid">
          {item.highlights.map((highlight, idx) => (
            <div key={idx} className="edu-bento-highlight-item">
              <span className="highlight-icon-check">✓</span>
              <p className="highlight-text">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section className="education" id="education">
      <Reveal as="h2" className="section-title">
        Education
      </Reveal>

      <div className="edu-bento-showcase">
        {education.map((item, index) => (
          <EducationBentoCard key={item.degree} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
