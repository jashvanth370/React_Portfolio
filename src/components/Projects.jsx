import { useState } from 'react';
import Reveal from './Reveal';
import TechPill from './TechPill';
import { projects, projectFilters } from '../data/projects';
import { asset } from '../utils';

function GithubIcon({ size = 22 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="github-svg-icon"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon({ size = 12 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="external-svg-icon"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, hidden }) {
  const isMultiRepo = Boolean(project.github && project.githubBackend);

  return (
    <Reveal className={`project-card${hidden ? ' hide' : ''}`}>
      {/* Image container: on hover, only this image blurs and darkens, showing GitHub repo link(s) */}
      <div className="project-image-wrapper">
        {project.badge && <span className="project-card-badge">{project.badge}</span>}
        {project.image && (
          <img
            src={asset(project.image)}
            alt={project.imageAlt ?? project.title}
            className="project-image"
          />
        )}

        <div className="project-image-overlay">
          {isMultiRepo ? (
            <div className="project-image-hover-content multi-repo">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn project-github-btn--primary"
                aria-label={`${project.title} Frontend Repository`}
                title="Open Frontend Repository on GitHub"
              >
                <div className="github-icon-glow">
                  <GithubIcon size={20} />
                </div>
                <span className="github-btn-label">{project.githubLabel || 'Frontend Repo'}</span>
                <ExternalIcon size={12} />
              </a>

              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn project-github-btn--secondary"
                aria-label={`${project.title} Backend Repository`}
                title="Open Backend Repository on GitHub"
              >
                <div className="github-icon-glow">
                  <GithubIcon size={20} />
                </div>
                <span className="github-btn-label">{project.githubBackendLabel || 'Backend Repo'}</span>
                <ExternalIcon size={12} />
              </a>
            </div>
          ) : (
            <div className="project-image-hover-content single-repo">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn project-github-btn--single"
                aria-label={`View ${project.title} repository on GitHub`}
                title="Open Repository on GitHub"
              >
                <div className="github-icon-glow">
                  <GithubIcon size={24} />
                </div>
                <span className="github-btn-label">{project.githubLabel || 'GitHub Repo'}</span>
                <ExternalIcon size={13} />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Project text and tech stack: always visible and properly readable */}
      <div className="project-info">
        <h3>{project.cardTitle}</h3>
        <p>{project.summary}</p>

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <TechPill key={`${tech.title}-${i}`} title={tech.title} icon={tech.icon} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

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
        {projects.map((project) => {
          const isHidden =
            filter !== 'all' &&
            (Array.isArray(project.category)
              ? !project.category.includes(filter)
              : project.category !== filter);

          return (
            <ProjectCard
              key={project.title}
              project={project}
              hidden={isHidden}
            />
          );
        })}
      </div>
    </section>
  );
}
