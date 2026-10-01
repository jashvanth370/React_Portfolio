import { useEffect, useRef, useState } from 'react';

// One shared observer for every reveal element, same settings as the original script.js.
const callbacks = new WeakMap();
let observer;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
  }
  return observer;
}

/** Returns [ref, active]. `active` follows whether the element is on screen. */
export default function useReveal() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = getObserver();
    callbacks.set(el, setActive);
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return [ref, active];
}
