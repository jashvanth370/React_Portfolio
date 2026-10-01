import { useEffect, useRef, useState } from 'react';

/** "View Details" popup. Fades in after opening, closes on ×, backdrop click or Esc. */
export default function ProjectModal({ project, onClose }) {
  const open = Boolean(project);
  const [visible, setVisible] = useState(false);

  // Keep the last project so its text doesn't vanish while the modal is hidden.
  const lastProject = useRef(project);
  if (project) lastProject.current = project;
  const shown = lastProject.current;

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return undefined;
    }
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className="project-modal"
      id="projectModal"
      style={{ display: open ? 'flex' : 'none', opacity: visible ? 1 : 0 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <span className="close-modal" onClick={onClose} role="button" aria-label="Close">
          &times;
        </span>
        <h2 id="modalTitle">{shown?.title}</h2>
        <p id="modalDescription">{shown?.description}</p>
        <p>
          <strong>Tech Stack:</strong> <span id="modalTech">{shown?.techList}</span>
        </p>
        <p>
          <strong>Time Period:</strong> <span id="modalPeriod">{shown?.period}</span>
        </p>
        <a id="modalGithub" href={shown?.github ?? '#'} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
