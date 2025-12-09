import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for fade-in animation on scroll
 * @param {Object} options - Animation options
 * @returns {Object} ref - Ref to attach to the element
 */
export const useFadeIn = (options = {}) => {
  const ref = useRef(null);
  const { delay = 0, duration = 0.8, y = 40, start = 'top 85%' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [delay, duration, y, start]);

  return ref;
};

/**
 * Hook for staggered children animation on scroll
 * @param {Object} options - Animation options
 * @returns {Object} ref - Ref to attach to the parent element
 */
export const useStaggerChildren = (options = {}) => {
  const ref = useRef(null);
  const { delay = 0, duration = 0.6, stagger = 0.1, y = 30, start = 'top 85%', childSelector = ':scope > *' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll(childSelector);
    
    gsap.fromTo(
      children,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [delay, duration, stagger, y, start, childSelector]);

  return ref;
};

/**
 * Hook for scale animation on scroll
 * @param {Object} options - Animation options
 * @returns {Object} ref - Ref to attach to the element
 */
export const useScaleIn = (options = {}) => {
  const ref = useRef(null);
  const { delay = 0, duration = 0.8, scale = 0.9, start = 'top 85%' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, scale },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [delay, duration, scale, start]);

  return ref;
};

/**
 * Hook for slide-in animation from left or right
 * @param {Object} options - Animation options
 * @returns {Object} ref - Ref to attach to the element
 */
export const useSlideIn = (options = {}) => {
  const ref = useRef(null);
  const { delay = 0, duration = 0.8, x = 100, direction = 'left', start = 'top 85%' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xValue = direction === 'left' ? -x : x;

    gsap.fromTo(
      element,
      { opacity: 0, x: xValue },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [delay, duration, x, direction, start]);

  return ref;
};

export { gsap, ScrollTrigger };

