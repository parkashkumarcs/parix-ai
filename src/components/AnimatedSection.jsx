import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection Component
 * Wrapper component that adds scroll-triggered animations to its children
 * 
 * @param {string} animation - Type of animation: 'fadeUp', 'fadeIn', 'scaleIn', 'slideLeft', 'slideRight', 'stagger'
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements
 */
const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ctx = gsap.context(() => {
      // Initial state based on animation type
      const animations = {
        fadeUp: {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          from: { opacity: 0, scale: 0.9 },
          to: { opacity: 1, scale: 1 },
        },
        slideLeft: {
          from: { opacity: 0, x: -80 },
          to: { opacity: 1, x: 0 },
        },
        slideRight: {
          from: { opacity: 0, x: 80 },
          to: { opacity: 1, x: 0 },
        },
      };

      if (animation === 'stagger') {
        // Stagger animation for children
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        // Single element animation
        const { from, to } = animations[animation] || animations.fadeUp;
        gsap.fromTo(element, from, {
          ...to,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger]);

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
};

export default AnimatedSection;

