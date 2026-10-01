import { useState } from 'react';
import Reveal from './Reveal';
import { articleTabs, articlePanels } from '../data/articles';

export default function Articles() {
  const [activeTab, setActiveTab] = useState(articleTabs[0].id);

  return (
    <section className="features" id="creations">
      <Reveal as="h2" className="section-title">
        Articles &amp; Research
      </Reveal>

      <div className="features-container">
        <Reveal variant="reveal-left" className="feature-tabs">
          {articleTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal variant="reveal-right" className="feature-content">
          {articlePanels.map((panel) => (
            <div key={panel.id} className={`content-panel${activeTab === panel.id ? ' active' : ''}`} id={panel.id}>
              <h3>{panel.heading}</h3>
              <ul className="feature-list">
                {panel.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <br />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
