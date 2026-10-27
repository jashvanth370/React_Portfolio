import { useState } from 'react';
import Reveal from './Reveal';
import { technologies, technologyCategories, engineeringPillars } from '../data/technologies';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTechnologies =
    activeTab === 'all'
      ? technologies
      : technologies.filter((tech) => tech.category === activeTab);

  return (
    <section className="technologies" id="technologies">
      <Reveal as="h2" className="section-title">
        Technologies &amp; Skills
      </Reveal>

      {/* Category Tabs Switcher */}
      <Reveal className="tech-filter-tabs">
        {technologyCategories.map((tab) => {
          const count =
            tab.id === 'all'
              ? technologies.length
              : technologies.filter((t) => t.category === tab.id).length;

          return (
            <button
              key={tab.id}
              className={`tech-tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              <span className="tab-count">{count}</span>
            </button>
          );
        })}
      </Reveal>

      {/* Interactive Tech Grid */}
      <div className="tech-matrix-grid">
        {filteredTechnologies.map((tech) => (
          <div key={tech.name} className="tech-matrix-card">
            <div className="tech-card-glow-bg" />
            <div className="tech-icon-container">
              <img src={tech.icon} alt={tech.alt ?? tech.name} className="tech-matrix-icon" loading="lazy" />
            </div>
            <div className="tech-matrix-info">
              <span className="tech-matrix-name">{tech.name}</span>
              {tech.tag && <span className="tech-matrix-tag">{tech.tag}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Core Engineering Pillars & Principles */}
      <Reveal className="engineering-pillars-section">
        <div className="pillars-header">
          <span className="pillars-pre-title">Foundation &amp; Mindset</span>
          <h3 className="pillars-title">Core Engineering Principles</h3>
        </div>

        <div className="pillars-grid">
          {engineeringPillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card">
              <div className="pillar-icon-box">{pillar.icon}</div>
              <h4 className="pillar-name">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
              <div className="pillar-tags">
                {pillar.skills.map((skill) => (
                  <span key={skill} className="pillar-tag-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
