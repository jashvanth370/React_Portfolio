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
            Bridging scalable software architecture, clean code principles, and intuitive user experiences.
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
              <p className="about-profile-title">Full-Stack Software Engineer</p>

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
                  <i className="fa-solid fa-microchip"></i>
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
                  <i className="fa-solid fa-code"></i>
                </div>
                <div>
                  <h3 className="about-card-heading">Engineering Journey</h3>
                  <span className="about-card-sub">Crafting resilient, high-impact software</span>
                </div>
              </div>

              <div className="about-bio-text">
                <p>
                  I am a final-year Software Engineering undergraduate at the <strong>University of Kelaniya</strong>, specializing in <strong>Net-Centric Software Engineering</strong>. My focus is on architecting high-performance backend systems with <strong>ASP.NET Core</strong> and <strong>Node.js</strong>, seamlessly united with responsive, dynamic frontend experiences built using <strong>React</strong> and <strong>Angular</strong>.
                </p>
                <p>
                  Beyond writing code, I am dedicated to clean architecture, SOLID design principles, and comprehensive database design with <strong>PostgreSQL</strong>. I thrive on translating intricate business logic into maintainable, elegant solutions that deliver speed, security, and exceptional user delight.
                </p>
              </div>

              {/* Core Competencies Badges */}
              <div className="about-competencies">
                <span className="comp-tag"><i className="fa-solid fa-check"></i> Clean Architecture</span>
                <span className="comp-tag"><i className="fa-solid fa-check"></i> REST &amp; WebSockets</span>
                <span className="comp-tag"><i className="fa-solid fa-check"></i> Relational Modeling</span>
                <span className="comp-tag"><i className="fa-solid fa-check"></i> Responsive SPAs</span>
                <span className="comp-tag"><i className="fa-solid fa-check"></i> Agile &amp; DevOps</span>
              </div>
            </Reveal>

            {/* Bento Card 2: Three Engineering Pillars */}
            <div className="about-pillars-grid">
              <Reveal variant="reveal-right" className="about-pillar-box pillar-orange">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <h4 className="pillar-name">Full-Stack Craft</h4>
                </div>
                <p className="pillar-summary">
                  End-to-end fluency connecting slick user interfaces to secure, robust API backends and optimized persistence layers.
                </p>
              </Reveal>

              <Reveal variant="reveal-right" className="about-pillar-box pillar-cyan">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-cubes-stacked"></i>
                  </div>
                  <h4 className="pillar-name">Clean Architecture</h4>
                </div>
                <p className="pillar-summary">
                  Writing decoupled, testable, and self-documenting code built around SOLID patterns and maintainable design systems.
                </p>
              </Reveal>

              <Reveal variant="reveal-right" className="about-pillar-box pillar-purple">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h4 className="pillar-name">Growth Mindset</h4>
                </div>
                <p className="pillar-summary">
                  Continuously mastering modern cloud ecosystems, performance profiling, and agile development methodologies.
                </p>
              </Reveal>
            </div>

            {/* Bento Card 3: Philosophy / Quote Banner */}
            <Reveal variant="reveal-right" className="about-quote-card">
              <div className="quote-mark">“</div>
              <p className="quote-text">
                Writing software isn&apos;t just about making things work—it&apos;s about building solutions that are reliable, maintainable, and engineered to scale gracefully.
              </p>
              <div className="quote-author-row">
                <span className="quote-author">— Balakirushnan Jashvanth</span>
                <div className="quote-hashtags">
                  <span>#CleanCode</span>
                  <span>#ContinuousLearning</span>
                  <span>#SystemsDesign</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
