import { useMemo } from 'react';

const PARTICLE_COUNT = 30;

/** Animated grid, gradient, scanlines, floating shapes and particles. */
export default function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 10 + 15}s`,
      })),
    []
  );

  return (
    <>
      <div className="grid-bg" />
      <div className="gradient-overlay" />
      <div className="scanlines" />

      <div className="shapes-container">
        <div className="shape shape-circle" />
        <div className="shape shape-triangle" />
        <div className="shape shape-square" />
      </div>

      <div id="particles">
        {particles.map((style, i) => (
          <div key={i} className="particle" style={style} />
        ))}
      </div>
    </>
  );
}
