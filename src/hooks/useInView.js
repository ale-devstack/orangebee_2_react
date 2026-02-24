import { useEffect, useRef, useState } from 'react';

/**
 * Devuelve [ref, isVisible].
 * El elemento se marca visible en cuanto entra al viewport y permanece así.
 * Si IntersectionObserver no está disponible, devuelve visible=true directamente.
 */
export function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    typeof window !== 'undefined' && !('IntersectionObserver' in window)
  );

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
