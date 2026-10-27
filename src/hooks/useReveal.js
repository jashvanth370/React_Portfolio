import { useEffect, useRef, useState } from 'react';

// One shared observer for reveal elements with once: true
const callbacks = new WeakMap();
let sharedObserver;

function getSharedObserver() {
  if (!sharedObserver && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb(true);
              sharedObserver.unobserve(entry.target);
              callbacks.delete(entry.target);
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
  }
  return sharedObserver;
}

/**
 * Returns [ref, active].
 * `once`: whether element stays revealed after first intersection (default: true).
 * Automatically reveals immediately if `prefers-reduced-motion: reduce` is enabled.
 */
export default function useReveal({ once = true } = {}) {
  const ref = useRef(null);
  const [active, setActive] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true);
      return undefined;
    }

    const el = ref.current;
    if (!el) return undefined;

    if (once) {
      const obs = getSharedObserver();
      if (!obs) {
        setActive(true);
        return undefined;
      }
      callbacks.set(el, setActive);
      obs.observe(el);
      return () => {
        obs.unobserve(el);
        callbacks.delete(el);
      };
    }

    // Fallback if once: false
    const individualObserver = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    individualObserver.observe(el);
    return () => individualObserver.disconnect();
  }, [once]);

  return [ref, active];
}
