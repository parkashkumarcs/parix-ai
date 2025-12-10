import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Background3D Component
 * Professional animated geometric shapes for light theme backgrounds
 */
const Background3D = ({ variant = 'default', className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth floating animation for dots
      gsap.utils.toArray('.dot-float').forEach((dot, i) => {
        gsap.to(dot, {
          y: 'random(-20, 20)',
          x: 'random(-15, 15)',
          duration: 4 + (i * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });

      // Rotate geometric lines slowly
      gsap.utils.toArray('.line-rotate').forEach((line, i) => {
        gsap.to(line, {
          rotation: 360,
          duration: 30 + (i * 10),
          repeat: -1,
          ease: 'none',
        });
      });

      // Parallax for gradient orbs
      gsap.utils.toArray('.orb-parallax').forEach((orb, i) => {
        gsap.to(orb, {
          y: () => window.innerHeight * (0.2 + i * 0.1),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });

      // Pulse animation for accent shapes
      gsap.utils.toArray('.shape-pulse').forEach((shape, i) => {
        gsap.to(shape, {
          scale: 1.1,
          opacity: 0.6,
          duration: 2 + (i * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: i * 0.4,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shapes = {
    default: (
      <>
        {/* Soft gradient orbs */}
        <div className="orb-parallax absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/60 via-blue-50/40 to-transparent blur-3xl" />
        <div className="orb-parallax absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-sky-100/50 via-blue-50/30 to-transparent blur-3xl" />

        {/* Floating dots grid */}
        <div className="dot-float absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-blue-400/30" />
        <div className="dot-float absolute top-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-blue-300/40" />
        <div className="dot-float absolute top-[45%] left-[5%] w-2.5 h-2.5 rounded-full bg-sky-400/25" />
        <div className="dot-float absolute top-[65%] left-[12%] w-2 h-2 rounded-full bg-blue-500/20" />
        <div className="dot-float absolute bottom-[20%] left-[8%] w-1.5 h-1.5 rounded-full bg-blue-400/35" />

        <div className="dot-float absolute top-[20%] right-[10%] w-2 h-2 rounded-full bg-blue-400/25" />
        <div className="dot-float absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-sky-300/40" />
        <div className="dot-float absolute top-[55%] right-[8%] w-2 h-2 rounded-full bg-blue-500/30" />
        <div className="dot-float absolute bottom-[30%] right-[12%] w-2.5 h-2.5 rounded-full bg-blue-400/20" />

        {/* Thin accent lines */}
        <div className="line-rotate absolute top-[30%] left-[20%] w-24 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        <div className="line-rotate absolute bottom-[40%] right-[25%] w-32 h-px bg-gradient-to-r from-transparent via-sky-300/25 to-transparent" />

        {/* Subtle ring */}
        <div className="shape-pulse absolute top-[40%] right-[30%] w-16 h-16 rounded-full border border-blue-200/20" />
      </>
    ),
    minimal: (
      <>
        <div className="orb-parallax absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl" />
        <div className="dot-float absolute top-[30%] left-[10%] w-2 h-2 rounded-full bg-blue-400/30" />
        <div className="dot-float absolute top-[50%] right-[15%] w-1.5 h-1.5 rounded-full bg-sky-400/25" />
        <div className="orb-parallax absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-50/50 to-transparent blur-3xl" />
      </>
    ),
    hero: (
      <>
        {/* Primary gradient orbs */}
        <div className="orb-parallax absolute -top-48 -right-48 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-blue-100/70 via-sky-50/50 to-transparent blur-3xl" />
        <div className="orb-parallax absolute -bottom-64 -left-64 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-transparent blur-3xl" />
        <div className="orb-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-transparent via-blue-50/30 to-transparent blur-3xl opacity-50" />

        {/* Professional dot pattern - left side */}
        <div className="dot-float absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-blue-400/35" />
        <div className="dot-float absolute top-[18%] left-[10%] w-1.5 h-1.5 rounded-full bg-blue-300/45" />
        <div className="dot-float absolute top-[28%] left-[3%] w-2 h-2 rounded-full bg-sky-400/30" />
        <div className="dot-float absolute top-[40%] left-[8%] w-2.5 h-2.5 rounded-full bg-blue-500/25" />
        <div className="dot-float absolute top-[55%] left-[4%] w-1.5 h-1.5 rounded-full bg-blue-400/40" />
        <div className="dot-float absolute top-[70%] left-[10%] w-2 h-2 rounded-full bg-sky-300/35" />
        <div className="dot-float absolute bottom-[15%] left-[6%] w-2 h-2 rounded-full bg-blue-400/30" />

        {/* Professional dot pattern - right side */}
        <div className="dot-float absolute top-[12%] right-[8%] w-2 h-2 rounded-full bg-blue-400/30" />
        <div className="dot-float absolute top-[22%] right-[4%] w-1.5 h-1.5 rounded-full bg-sky-400/40" />
        <div className="dot-float absolute top-[35%] right-[10%] w-2.5 h-2.5 rounded-full bg-blue-300/35" />
        <div className="dot-float absolute top-[48%] right-[5%] w-2 h-2 rounded-full bg-blue-500/25" />
        <div className="dot-float absolute top-[62%] right-[9%] w-1.5 h-1.5 rounded-full bg-sky-400/35" />
        <div className="dot-float absolute top-[78%] right-[6%] w-2 h-2 rounded-full bg-blue-400/30" />
        <div className="dot-float absolute bottom-[10%] right-[12%] w-2 h-2 rounded-full bg-blue-300/40" />

        {/* Elegant thin lines */}
        <div className="line-rotate absolute top-[25%] left-[18%] w-40 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent origin-center" />
        <div className="line-rotate absolute top-[45%] right-[22%] w-32 h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent origin-center" style={{ animationDelay: '5s' }} />
        <div className="line-rotate absolute bottom-[35%] left-[25%] w-28 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent origin-center" style={{ animationDelay: '10s' }} />

        {/* Subtle accent rings */}
        <div className="shape-pulse absolute top-[20%] right-[25%] w-20 h-20 rounded-full border border-blue-200/15" />
        <div className="shape-pulse absolute bottom-[25%] left-[20%] w-16 h-16 rounded-full border border-sky-200/20" style={{ animationDelay: '1s' }} />
        <div className="shape-pulse absolute top-[60%] right-[35%] w-12 h-12 rounded-full border border-blue-300/10" style={{ animationDelay: '2s' }} />

        {/* Cross accents */}
        <div className="dot-float absolute top-[30%] left-[30%] opacity-15">
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="dot-float absolute bottom-[35%] right-[28%] opacity-15">
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-sky-400">
            <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </>
    ),
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {shapes[variant] || shapes.default}
    </div>
  );
};

export default Background3D;

