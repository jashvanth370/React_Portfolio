import { useEffect, useState } from 'react';

const FIRST_ROTATION_DELAY = 4000;
const ROTATION_INTERVAL = 5000;
const LEAVE_DURATION = 500;
const SUBTITLE_DELAY = 600;

function Chars({ text, leaving }) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className={`rotator-char${leaving ? ' out' : ''}`}
      style={{ animationDelay: `${i * (leaving ? 0.02 : 0.035)}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}

/** Rotating headline with per-letter fly-in / fly-out */
export default function TextRotator({ items }) {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

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

  return (
    <div className="hero-rotator">
      {items.map((item, i) => {
        const active = i === current;

        return (
          <div
            key={item.title}
            className={`rotator-slide${active ? ' active' : ''}`}
            aria-hidden={!active}
          >
            <h2 className="rotator-title">
              {active ? <Chars text={item.title} leaving={leaving} /> : item.title}
            </h2>
            <p className={`rotator-subtitle${active && subtitleVisible ? ' visible' : ''}`}>
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
