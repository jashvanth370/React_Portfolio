import { useEffect, useState } from 'react';

/**
 * Tracks which section is under the top of the viewport and whether the page
 * has scrolled past 50px (navbar "scrolled" style). Mirrors the original logic.
 */
export default function useScrollSpy(sectionIds) {
  const [state, setState] = useState({ active: sectionIds[0] ?? null, scrolled: false });

  useEffect(() => {
    const update = () => {
      const position = window.pageYOffset + 100;
      let matched = null;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) {
          matched = id;
        }
      });

      const scrolled = window.scrollY > 50;
      setState((prev) => {
        const active = matched ?? prev.active;
        return prev.active === active && prev.scrolled === scrolled ? prev : { active, scrolled };
      });
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, [sectionIds]);

  return state;
}
