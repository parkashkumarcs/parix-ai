import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection Component
 * Wrapper component that adds bidirectional scroll-triggered animations
 *
 * @param {string} animation - Type of animation
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} stagger - Stagger delay for children animations
 * @param {string} className - Additional CSS classes
 * @param {boolean} scrub - Enable scrub animation (tied to scroll position)
 * @param {string} start - ScrollTrigger start position
 * @param {boolean} once - Only animate once (no reverse on scroll up)
 * @param {React.ReactNode} children - Child elements
 */
const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  stagger = 0.08,
  className = '',
  as: Component = 'div',
  scrub = false,
  start = 'top 88%',
  end = 'top 20%',
  once = false,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ctx = gsap.context(() => {
      // Animation configurations with smooth professional easing
      const animations = {
        fadeUp: {
          from: { opacity: 0, y: 50, filter: 'blur(6px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' },
        },
        fadeDown: {
          from: { opacity: 0, y: -50, filter: 'blur(6px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' },
        },
        fadeIn: {
          from: { opacity: 0, filter: 'blur(5px)' },
          to: { opacity: 1, filter: 'blur(0px)' },
        },
        scaleIn: {
          from: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
          to: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        },
        scaleUp: {
          from: { opacity: 0, scale: 0.85, y: 30 },
          to: { opacity: 1, scale: 1, y: 0 },
        },
        slideLeft: {
          from: { opacity: 0, x: -80, filter: 'blur(5px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' },
        },
        slideRight: {
          from: { opacity: 0, x: 80, filter: 'blur(5px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' },
        },
        rotateIn: {
          from: { opacity: 0, rotate: -3, y: 40 },
          to: { opacity: 1, rotate: 0, y: 0 },
        },
        flipIn: {
          from: { opacity: 0, rotateX: 30, y: 30 },
          to: { opacity: 1, rotateX: 0, y: 0 },
        },
        zoomIn: {
          from: { opacity: 0, scale: 0.6 },
          to: { opacity: 1, scale: 1 },
        },
        bounceIn: {
          from: { opacity: 0, scale: 0.5, y: 60 },
          to: { opacity: 1, scale: 1, y: 0 },
          ease: 'elastic.out(1, 0.6)',
        },
        slideUp: {
          from: { opacity: 0, y: 40 },
          to: { opacity: 1, y: 0 },
        },
        reveal: {
          from: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          to: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
        },
      };

      // Bidirectional toggle actions: play on enter, reverse on leave
      const toggleActions = once ? 'play none none none' : 'play reverse play reverse';

      const scrollTriggerConfig = {
        trigger: element,
        start,
        toggleActions: scrub ? undefined : toggleActions,
        scrub: scrub ? 0.8 : false,
        end: scrub ? end : 'bottom 15%',
      };

      if (animation === 'stagger' || animation === 'staggerUp') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 40, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (animation === 'staggerScale') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, scale: 0.85, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'back.out(1.4)',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (animation === 'staggerSlide') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (animation === 'staggerFade') {
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else {
        const config = animations[animation] || animations.fadeUp;
        const ease = config.ease || 'power2.out';
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
  }, [animation, delay, duration, stagger, scrub, start, end, once]);

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
};

export default AnimatedSection;

