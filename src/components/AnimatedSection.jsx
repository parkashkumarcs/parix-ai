import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection Component
 * Wrapper component that adds scroll-triggered animations to its children
 *
 * @param {string} animation - Type of animation
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} stagger - Stagger delay for children animations
 * @param {string} className - Additional CSS classes
 * @param {boolean} scrub - Enable scrub animation (tied to scroll position)
 * @param {string} start - ScrollTrigger start position
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
  scrub = false,
  start = 'top 85%',
  end = 'top 20%',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ctx = gsap.context(() => {
      // Animation configurations with professional easing
      const animations = {
        fadeUp: {
          from: { opacity: 0, y: 60, filter: 'blur(10px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' },
        },
        fadeDown: {
          from: { opacity: 0, y: -60, filter: 'blur(10px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' },
        },
        fadeIn: {
          from: { opacity: 0, filter: 'blur(8px)' },
          to: { opacity: 1, filter: 'blur(0px)' },
        },
        scaleIn: {
          from: { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
          to: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        },
        scaleUp: {
          from: { opacity: 0, scale: 0.8, y: 40 },
          to: { opacity: 1, scale: 1, y: 0 },
        },
        slideLeft: {
          from: { opacity: 0, x: -100, filter: 'blur(8px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' },
        },
        slideRight: {
          from: { opacity: 0, x: 100, filter: 'blur(8px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' },
        },
        rotateIn: {
          from: { opacity: 0, rotate: -5, y: 50 },
          to: { opacity: 1, rotate: 0, y: 0 },
        },
        flipIn: {
          from: { opacity: 0, rotateX: 45, y: 40 },
          to: { opacity: 1, rotateX: 0, y: 0 },
        },
        zoomIn: {
          from: { opacity: 0, scale: 0.5 },
          to: { opacity: 1, scale: 1 },
        },
        bounceIn: {
          from: { opacity: 0, scale: 0.3, y: 80 },
          to: { opacity: 1, scale: 1, y: 0 },
          ease: 'elastic.out(1, 0.5)',
        },
      };

      const scrollTriggerConfig = {
        trigger: element,
        start,
        toggleActions: scrub ? undefined : 'play none none none',
        scrub: scrub ? 0.5 : false,
        end: scrub ? end : undefined,
      };

      if (animation === 'stagger' || animation === 'staggerUp') {
        // Stagger animation for children
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 50, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (animation === 'staggerScale') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'back.out(1.7)',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (animation === 'staggerSlide') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else {
        // Single element animation
        const config = animations[animation] || animations.fadeUp;
        const ease = config.ease || 'power3.out';
        gsap.fromTo(element, config.from, {
          ...config.to,
          duration,
          delay,
          ease,
          scrollTrigger: scrollTriggerConfig,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, scrub, start, end]);

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
};

export default AnimatedSection;

