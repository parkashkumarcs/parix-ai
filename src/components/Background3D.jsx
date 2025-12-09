import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Background3D Component
 * Animated 3D geometric shapes for modern website backgrounds
 */
const Background3D = ({ variant = 'default', className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating shapes
      gsap.utils.toArray('.shape-3d').forEach((shape, i) => {
        const duration = 15 + (i * 5);
        const delay = i * 0.5;
        
        // Continuous floating animation
        gsap.to(shape, {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          rotationX: 'random(-15, 15)',
          rotationY: 'random(-180, 180)',
          rotationZ: 'random(-10, 10)',
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: delay,
        });
      });

      // Parallax on scroll for shapes
      gsap.utils.toArray('.shape-parallax').forEach((shape, i) => {
        const speed = 0.3 + (i * 0.1);
        gsap.to(shape, {
          y: () => window.innerHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shapes = {
    default: (
      <>
        {/* Large gradient sphere */}
        <div className="shape-3d shape-parallax absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/10 blur-3xl" />
        
        {/* Floating cube wireframe */}
        <div className="shape-3d absolute top-1/4 left-10 w-20 h-20 preserve-3d opacity-30">
          <div className="absolute inset-0 border-2 border-indigo-500/40 rounded-lg transform rotate-45" />
          <div className="absolute inset-2 border border-pink-500/30 rounded-lg transform -rotate-12" />
        </div>
        
        {/* Gradient ring */}
        <div className="shape-3d absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-40 preserve-3d" style={{ borderRadius: '50%' }} />
        
        {/* Small floating orbs */}
        <div className="shape-3d absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-indigo-500/60 blur-sm" />
        <div className="shape-3d absolute top-1/2 right-10 w-6 h-6 rounded-full bg-pink-500/50 blur-sm" />
        <div className="shape-3d absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-500/70 blur-xs" />
        
        {/* Gradient mesh blob */}
        <div className="shape-3d shape-parallax absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/15 to-indigo-600/10 blur-3xl" />
        
        {/* Hexagon shape */}
        <div className="shape-3d absolute top-20 left-1/3 opacity-20 preserve-3d">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-indigo-400">
            <polygon points="30,2 55,17 55,43 30,58 5,43 5,17" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Triangle */}
        <div className="shape-3d absolute bottom-1/4 right-20 opacity-25 preserve-3d">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink-400">
            <polygon points="20,5 35,35 5,35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Dotted circle */}
        <div className="shape-3d absolute top-2/3 left-20 w-16 h-16 rounded-full border-2 border-dashed border-indigo-400/30 preserve-3d" />
      </>
    ),
    minimal: (
      <>
        <div className="shape-3d shape-parallax absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-600/5 blur-3xl" />
        <div className="shape-3d absolute top-1/3 left-10 w-3 h-3 rounded-full bg-indigo-500/50 blur-sm" />
        <div className="shape-3d absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-pink-500/40 blur-sm" />
        <div className="shape-3d shape-parallax absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-pink-500/10 to-indigo-600/5 blur-3xl" />
      </>
    ),
    hero: (
      <>
        {/* Main gradient orb */}
        <div className="shape-3d shape-parallax absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/25 to-purple-700/15 blur-3xl" />
        
        {/* Secondary orb */}
        <div className="shape-3d shape-parallax absolute -bottom-60 -left-60 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-600/20 to-indigo-700/10 blur-3xl" />
        
        {/* Floating geometric shapes */}
        <div className="shape-3d absolute top-1/4 left-[15%] w-24 h-24 preserve-3d opacity-25">
          <div className="absolute inset-0 border-2 border-indigo-400/50 rounded-xl transform rotate-45" />
          <div className="absolute inset-3 border border-pink-400/40 rounded-lg transform -rotate-12" />
        </div>
        
        {/* Glowing orbs */}
        <div className="shape-3d absolute top-[20%] right-[20%] w-8 h-8 rounded-full bg-indigo-500/50 blur-md animate-pulse" />
        <div className="shape-3d absolute bottom-[30%] left-[10%] w-6 h-6 rounded-full bg-pink-500/40 blur-md animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="shape-3d absolute top-[60%] right-[15%] w-4 h-4 rounded-full bg-purple-500/60 blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Hexagon */}
        <div className="shape-3d absolute top-[15%] right-[35%] opacity-20 preserve-3d">
          <svg width="80" height="80" viewBox="0 0 60 60" className="text-indigo-300">
            <polygon points="30,2 55,17 55,43 30,58 5,43 5,17" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Cross/Plus shape */}
        <div className="shape-3d absolute bottom-[20%] right-[25%] opacity-20 preserve-3d">
          <svg width="30" height="30" viewBox="0 0 30 30" className="text-pink-300">
            <line x1="15" y1="5" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Dotted circles */}
        <div className="shape-3d absolute top-[45%] left-[5%] w-20 h-20 rounded-full border-2 border-dashed border-indigo-400/20 preserve-3d" />
        <div className="shape-3d absolute bottom-[15%] right-[10%] w-14 h-14 rounded-full border border-dashed border-pink-400/25 preserve-3d" />
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

