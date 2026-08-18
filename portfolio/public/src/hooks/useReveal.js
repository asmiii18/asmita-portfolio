import { useEffect, useRef } from 'react';

// Adds an "in-view" class to elements with the "fade-up" class when they scroll into view.
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;
    const elements = root.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
