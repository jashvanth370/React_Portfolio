import Reveal from './Reveal';
import Rich from './Rich';
import TechPill from './TechPill';
import { experience } from '../data/experience';
import { asset } from '../utils';

function ExperienceTimelineCard({ item, index }) {
  const isCurrent = item.status === 'Active' || item.period?.includes('Present');

  return (
    <div className={`experience-roadmap-item${isCurrent ? ' current-role' : ''}`}>
      {/* Center/Left Timeline Node */}
      <div className="roadmap-node">
        <div className="node-marker">
          <div className="node-inner-pulse" />
          <span className="node-icon">💼</span>
        </div>
        <div className="node-line" />
      </div>

      {/* Main Experience Card */}
      <Reveal variant={index % 2 === 0 ? 'reveal-left' : 'reveal-right'} className="experience-glass-card">
        {/* Top Header */}
        <div className="exp-card-header">
          <div className="exp-company-block">
            <div className="exp-logo-frame">
              <img src={asset(item.logo)} alt={`${item.company} logo`} className="exp-company-logo" />
            </div>
            <div className="exp-title-meta">
              <div className="exp-badges-row">
                <span className={`exp-status-badge${isCurrent ? ' active' : ''}`}>
                  {isCurrent && <span className="status-ping" />}
                  {item.status || (isCurrent ? 'Current' : 'Completed')}
                </span>
                <span className="exp-type-badge">{item.type || 'Internship'}</span>
              </div>
              <h3 className="exp-role-title">{item.role}</h3>
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-company-link"
                title={`Visit ${item.company}`}
              >
                <span>{item.company}</span>
                <svg className="exp-ext-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="exp-time-location">
            <div className="exp-meta-pill exp-period">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{item.period}</span>
            </div>
            <div className="exp-meta-pill exp-location">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {item.summary && <p className="exp-summary">{item.summary}</p>}

        {/* Key Responsibilities & Bullet Achievements */}
        <div className="exp-bullets-container">
          <span className="exp-subheading">Key Contributions &amp; Achievements</span>
          <ul className="exp-bullets-list">
            {item.bullets.map((bullet, idx) => (
              <li key={idx} className="exp-bullet-item">
                <span className="bullet-chevron">▹</span>
                <span className="bullet-content">
                  <Rich text={bullet} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Employed */}
        <div className="exp-tech-section">
          <span className="exp-subheading">Technologies &amp; Frameworks</span>
          <div className="exp-tech-pills">
            {item.tech.map((tech, i) => (
              <TechPill key={`${tech.title}-${i}`} title={tech.title} icon={tech.icon} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <Reveal as="h2" className="section-title">
        Experience
      </Reveal>

      <div className="experience-roadmap">
        {experience.map((item, index) => (
          <ExperienceTimelineCard key={`${item.company}-${index}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
