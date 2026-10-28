import Reveal from './Reveal';
import { asset } from '../utils';

const CV_PATH = 'assets/BalakirushnanJashvanth.pdf';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header-block">
          <Reveal className="about-badge-pill">
            <span className="about-badge-pulse" />
            <i className="fa-solid fa-id-card-clip"></i>
            <span>Professional Profile</span>
          </Reveal>

          <Reveal as="h2" className="section-title">
            About Me
          </Reveal>

          <Reveal className="about-subtitle">
            Driven by curiosity, craft, and a relentless passion for turning real-world problems into meaningful solutions.
          </Reveal>
        </div>

        {/* Master Bento Layout */}
        <div className="about-bento-grid">
          {/* Left Column: Developer Profile Showcase */}
          <Reveal variant="reveal-left" className="about-profile-card">
            <div className="about-photo-wrapper">
              <div className="about-photo-glow" />
              <div className="about-photo-frame">
                <img
                  src={asset('assets/13.jpeg')}
                  alt="Jashvanth Balakirushnan"
                  className="about-avatar-img"
                />
                <div className="about-photo-overlay" />

                {/* Tech Bracket Accents */}
                <span className="frame-bracket frame-tl" />
                <span className="frame-bracket frame-tr" />
                <span className="frame-bracket frame-bl" />
                <span className="frame-bracket frame-br" />
              </div>

              {/* Live Availability Badge */}
              <div className="about-avail-badge">
                <span className="avail-ping" />
                <span className="avail-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="about-profile-info">
              <h3 className="about-profile-name">Jashvanth Balakirushnan</h3>
              <p className="about-profile-title">Software Engineer &amp; Builder</p>

              <div className="about-meta-list">
                <div className="about-meta-item">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <span>B.Sc. (Hons) Software Engineering</span>
                </div>
                <div className="about-meta-item">
                  <i className="fa-solid fa-university"></i>
                  <span>University of Kelaniya, Sri Lanka</span>
                </div>
                <div className="about-meta-item">
                  <i className="fa-solid fa-compass"></i>
                  <span>Net-Centric Specialization</span>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="about-metrics-bar">
                <div className="about-metric">
                  <span className="metric-val">3+</span>
                  <span className="metric-label">Years Dev</span>
                </div>
                <div className="metric-divider" />
                <div className="about-metric">
                  <span className="metric-val">3.45</span>
                  <span className="metric-label">Degree GPA</span>
                </div>
                <div className="metric-divider" />
                <div className="about-metric">
                  <span className="metric-val">15+</span>
                  <span className="metric-label">Projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="about-cta-group">
                <a href={asset(CV_PATH)} className="about-cta-btn btn-primary" download>
                  <i className="fa-solid fa-file-arrow-down"></i>
                  <span>Download CV</span>
                </a>
                <a
                  href={asset(CV_PATH)}
                  className="about-cta-btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Multi-Card Bento Narrative */}
          <div className="about-narrative-bento">
            {/* Bento Card 1: Story & Background */}
            <Reveal variant="reveal-right" className="about-bento-card about-story-card">
              <div className="card-ambient-glow" />

              <div className="about-card-top">
                <div className="about-card-icon-box">
                  <i className="fa-solid fa-compass"></i>
                </div>
                <div>
                  <h3 className="about-card-heading">My Story &amp; Journey</h3>
                  <span className="about-card-sub">Curiosity, purpose, and the passion to build</span>
                </div>
              </div>

              <div className="about-bio-text">
                <p>
                  I am a final-year Software Engineering undergraduate at the <strong>University of Kelaniya</strong>. My journey in technology began with a deep fascination for how software shapes our daily lives and how creative ideas can be brought to life to solve tangible problems. What started as simple curiosity has grown into a lifelong devotion to the craft of building thoughtful, dependable, and meaningful software.
                </p>
                <p>
                  What excites me most is taking complex, ambiguous challenges and breaking them down with patience, structure, and empathy. I believe great engineering is not just about writing code—it is about understanding the people who use what we build, continuously expanding our perspectives, and taking deep personal ownership in everything we create.
                </p>
              </div>

              {/* Personal Strengths / Values Badges */}
              <div className="about-competencies">
                <span className="comp-tag"><i className="fa-solid fa-lightbulb"></i> Problem Solver</span>
                <span className="comp-tag"><i className="fa-solid fa-compass"></i> Curiosity-Driven</span>
                <span className="comp-tag"><i className="fa-solid fa-heart"></i> Empathy &amp; Purpose</span>
                <span className="comp-tag"><i className="fa-solid fa-users"></i> Team Collaborator</span>
                <span className="comp-tag"><i className="fa-solid fa-seedling"></i> Lifelong Learner</span>
                <span className="comp-tag"><i className="fa-solid fa-bullseye"></i> High Ownership</span>
              </div>
            </Reveal>

            {/* Bento Card 2: Three Personal Pillars */}
            <div className="about-pillars-grid">
              <Reveal variant="reveal-right" className="about-pillar-box pillar-orange">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-fire"></i>
                  </div>
                  <h4 className="pillar-name">Curiosity &amp; Drive</h4>
                </div>
                <p className="pillar-summary">
                  Driven by an inquisitive mind that loves exploring the unknown, embracing hard challenges, and finding creative solutions.
                </p>
              </Reveal>

              <Reveal variant="reveal-right" className="about-pillar-box pillar-cyan">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-gem"></i>
                  </div>
                  <h4 className="pillar-name">Craft &amp; Dedication</h4>
                </div>
                <p className="pillar-summary">
                  Believing that quality is born from care and patience. I bring strong attention to detail and high personal standards to all my work.
                </p>
              </Reveal>

              <Reveal variant="reveal-right" className="about-pillar-box pillar-purple">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-people-group"></i>
                  </div>
                  <h4 className="pillar-name">Collaboration &amp; Growth</h4>
                </div>
                <p className="pillar-summary">
                  Thriving in supportive team environments where open dialogue, mutual empathy, and shared enthusiasm elevate everyone.
                </p>
              </Reveal>
            </div>

            {/* Bento Card 3: Philosophy / Quote Banner */}
            <Reveal variant="reveal-right" className="about-quote-card">
              <div className="quote-mark">“</div>
              <p className="quote-text">
                Software is fundamentally about people. The greatest fulfillment comes from understanding real human needs, thinking with empathy, and crafting solutions that leave a lasting positive impact.
              </p>
              <div className="quote-author-row">
                <span className="quote-author">— Balakirushnan Jashvanth</span>
                <div className="quote-hashtags">
                  <span>#LifelongLearner</span>
                  <span>#PurposeDriven</span>
                  <span>#CuriousBuilder</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
