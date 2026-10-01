import { useEffect, useState } from 'react';

const TITLE_STYLE = { fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', whiteSpace: 'nowrap' };
const SUBTITLE_STYLE = {
  fontSize: '1rem',
  fontWeight: 500,
  opacity: 0.9,
  marginTop: '10px',
  fontFamily: "'Rajdhani', sans-serif",
};

const FIRST_ROTATION_DELAY = 4000; // wait before the first swap
const ROTATION_INTERVAL = 5000; // time between swaps
const LEAVE_DURATION = 600; // letters fly out before the next title appears
const SUBTITLE_DELAY = 800; // subtitle fades in after the title lands
const GLITCH_CHECK_INTERVAL = 3000;
const GLITCH_CHANCE = 0.05;
const GLITCH_DURATION = 200;

function Chars({ text, leaving }) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className={`char${leaving ? ' out' : ''}`}
      style={{ animationDelay: `${i * (leaving ? 0.02 : 0.05)}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}

/** Rotating headline with per-letter fly-in / fly-out and an occasional glitch. */
export default function TextRotator({ items }) {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [glitching, setGlitching] = useState(() => new Set());

  // Rotation timeline
  useEffect(() => {
    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    let index = 0;
    let busy = false;
    let interval;

    later(() => setSubtitleVisible(true), SUBTITLE_DELAY);

    const rotate = () => {
      if (busy) return;
      busy = true;
      setLeaving(true);
      setSubtitleVisible(false);

      later(() => {
        index = (index + 1) % items.length;
        setCurrent(index);
        setLeaving(false);
        later(() => setSubtitleVisible(true), SUBTITLE_DELAY);
        busy = false;
      }, LEAVE_DURATION);
    };

    later(() => {
      interval = setInterval(rotate, ROTATION_INTERVAL);
    }, FIRST_ROTATION_DELAY);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [items.length]);

  // Random glitch
  useEffect(() => {
    const timers = new Set();
    const id = setInterval(() => {
      const hit = new Set();
      items.forEach((_, i) => {
        if (Math.random() > 1 - GLITCH_CHANCE) hit.add(i);
      });
      if (hit.size === 0) return;

      setGlitching(hit);
      const t = setTimeout(() => {
        timers.delete(t);
        setGlitching(new Set());
      }, GLITCH_DURATION);
      timers.add(t);
    }, GLITCH_CHECK_INTERVAL);

    return () => {
      clearInterval(id);
      timers.forEach(clearTimeout);
    };
  }, [items.length]);

  return (
    <div className="text-rotator" style={{ marginTop: 0 }}>
      {items.map((item, i) => {
        const active = i === current;
        const titleStyle = glitching.has(i) ? { ...TITLE_STYLE, animation: 'none' } : TITLE_STYLE;

        return (
          <div key={item.title} className={`text-set${active ? ' active' : ''}`}>
            <h2 className="glitch-text" data-text={item.title} style={titleStyle}>
              {active ? <Chars text={item.title} leaving={leaving} /> : item.title}
            </h2>
            <p className={`subtitle${active && subtitleVisible ? ' visible' : ''}`} style={SUBTITLE_STYLE}>
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
