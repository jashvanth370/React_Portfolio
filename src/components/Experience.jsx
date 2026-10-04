import Reveal from './Reveal';
import Rich from './Rich';
import TechPill from './TechPill';
import { experience } from '../data/experience';
import { asset } from '../utils';

const COMPANY_LINK_STYLE = {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

const LIST_STYLE = {
  marginTop: '20px',
  marginLeft: '20px',
  color: 'var(--text-color)',
  lineHeight: 1.6,
  opacity: 0.9,
  fontSize: '14px',
};

function ExperienceCard({ item }) {
  const lastIndex = item.bullets.length - 1;

  return (
    <div className="experience-card">
      {/* Left */}
      <Reveal variant="reveal-left" className="experience-left">
        <h3 className="role">{item.role}</h3>
        <a
          href={item.companyUrl}
          className="company-name"
          target="_blank"
          rel="noopener noreferrer"
          style={COMPANY_LINK_STYLE}
        >
          {item.company} <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem' }} />
        </a>

        <ul className="experience-list" style={LIST_STYLE}>
          {item.bullets.map((bullet, i) => (
            <li key={i} style={i === lastIndex ? undefined : { marginBottom: '10px' }}>
              <Rich text={bullet} />
            </li>
          ))}
        </ul>

        <div className="tech-stack">
          {item.tech.map((tech, i) => (
            <TechPill key={`${tech.title}-${i}`} title={tech.title} icon={tech.icon} />
          ))}
        </div>
      </Reveal>

      {/* Right */}
      <Reveal variant="reveal-right" className="experience-right">
        <div className="logo-wrapper">
          <img src={asset(item.logo)} alt="Company Logo" className="company-logo" />
        </div>
        <div className="experience-meta">
          <div className="meta-item">
            <i className="fa-solid fa-calendar" />
            <span>{item.period}</span>
          </div>
          <div className="meta-item">
            <i className="fa-solid fa-location-dot" />
            <span>{item.location}</span>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experience.map((item, i) => (
          <ExperienceCard key={`${item.company}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}
