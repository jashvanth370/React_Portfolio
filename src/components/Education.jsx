import { useState } from 'react';
import Reveal from './Reveal';
import { education } from '../data/education';
import { asset } from '../utils';

/** School / university logo. Hides itself if the image file is missing. */
function EduLogo({ src, alt, dark }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className={`edu-logo-box${dark ? ' edu-logo-dark' : ''}`}>
      <img src={asset(src)} alt={alt} className="edu-logo" onError={() => setFailed(true)} />
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <Reveal variant="reveal-left" className={`edu-new-card ${item.variant}`}>
      <div className="edu-card-top-row">
        <div className="edu-card-top-left">
          <div className="edu-heading">
            <EduLogo src={item.logo} alt={item.logoAlt} dark={item.logoDark} />
            <div className="edu-heading-text">
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-institution">{item.institution}</p>
            </div>
          </div>

          <div className="edu-meta-row">
            <span className="edu-date">
              <i className="fa-solid fa-calendar-days" /> {item.date}
            </span>
          </div>

          <div className="edu-pills-row">
            {item.pills.map((pill) => (
              <span key={pill.label} className={`edu-pill ${pill.color}`}>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div className="edu-card-top-right">
          <span className="edu-location">
            <i className="fa-solid fa-location-dot" /> {item.location}
          </span>
          <div className="edu-stat-box">
            <span className="edu-stat-label">{item.statLabel}</span>
            <span className="edu-stat-value">{item.statValue}</span>
          </div>
        </div>
      </div>

      <div className="edu-divider" />

      <div className="edu-highlights-grid">
        {item.highlights.map((text) => (
          <div key={text} className="edu-highlight-item">
            <span className="highlight-dot" />
            {text}
          </div>
        ))}
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

      <div className="education-content">
        <div className="education-timeline-container" />
        {education.map((item) => (
          <EducationCard key={item.degree} item={item} />
        ))}
      </div>
    </section>
  );
}
