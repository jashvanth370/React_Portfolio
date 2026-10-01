import Reveal from './Reveal';
import { technologies, softSkills } from '../data/technologies';

export default function Skills() {
  return (
    <section className="technologies" id="technologies">
      <Reveal as="h2" className="section-title">
        Technologies &amp; Skills
      </Reveal>

      <div className="tech-container">
        <Reveal className="tech-category">
          <h3 className="category-title">Technologies &amp; Tools</h3>
          <div className="tech-grid">
            {technologies.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="tech-box">
                <img src={tech.icon} alt={tech.alt} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="tech-category">
          <h3 className="category-title">Core Concepts &amp; Soft Skills</h3>
          <div className="skills-tags-container">
            {softSkills.map((skill) => (
              <div key={skill} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
