import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

/**
 * PageTransition Component
 * Adds smooth enter/exit animations for page transitions
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(page, { opacity: 1, y: 0 });
      return;
    }

    // Page enter animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        page,
        {
          opacity: 0,
          y: 30,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }, page);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;

