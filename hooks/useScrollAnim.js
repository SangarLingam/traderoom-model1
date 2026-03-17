import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with
 * .afu / .afi / .asr / .asl classes and adds the "vis" class
 * when they scroll into view.
 *
 * Call this hook inside any component that renders animated elements.
 */
export function useScrollAnim() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        });
      },
      { threshold: 0.09 }
    );

    document.querySelectorAll('.afu, .afi, .asr, .asl').forEach((el) =>
      obs.observe(el)
    );

    return () => obs.disconnect();
  });
}

/**
 * Animates a number from 0 → target when `visible` becomes true.
 */
export function useCountUp(target, visible) {
  const { useState, useEffect, useRef } = require('react');
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    let cur = 0;
    const steps = 60;
    const dur = 2000;
    const step = target / steps;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(iv); }
      else setN(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(iv);
  }, [visible, target]);

  return n;
}
