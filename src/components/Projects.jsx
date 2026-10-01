import { useCallback, useState } from 'react';
import Reveal from './Reveal';
import TechPill from './TechPill';
import ProjectModal from './ProjectModal';
import { projects, projectFilters } from '../data/projects';
import { asset } from '../utils';

function ProjectCard({ project, hidden, onView }) {
  return (
    <Reveal className={`project-card${hidden ? ' hide' : ''}`}>
      {project.image && <img src={asset(project.image)} alt={project.imageAlt ?? project.title} />}
      <div className="project-info">
        <h3>{project.cardTitle}</h3>
        <p>{project.summary}</p>

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <TechPill key={`${tech.title}-${i}`} title={tech.title} icon={tech.icon} />
          ))}
        </div>

        <button className="view-btn" onClick={() => onView(project)}>
          View Details
        </button>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section className="projects" id="projects">
      <Reveal as="h2" className="section-title">
        Projects
      </Reveal>

      <Reveal className="project-filters">
        {projectFilters.map((item) => (
          <button
            key={item.value}
            className={`filter-btn${filter === item.value ? ' active' : ''}`}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </Reveal>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            hidden={filter !== 'all' && project.category !== filter}
            onView={setSelected}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}
