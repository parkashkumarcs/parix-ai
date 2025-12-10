import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Background3D Component
 * Modern 3D illustrations with random motion for light theme
 */
const Background3D = ({ variant = 'default', className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D floating cubes with random motion
      gsap.utils.toArray('.cube-3d').forEach((cube) => {
        gsap.to(cube, {
          y: `random(-40, 40)`,
          x: `random(-30, 30)`,
          rotateX: `random(-20, 20)`,
          rotateY: `random(-25, 25)`,
          rotateZ: `random(-15, 15)`,
          duration: `random(5, 8)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: `random(0, 2)`,
        });
      });

      // Floating spheres with gentle bob
      gsap.utils.toArray('.sphere-float').forEach((sphere) => {
        gsap.to(sphere, {
          y: `random(-35, 35)`,
          x: `random(-20, 20)`,
          scale: `random(0.9, 1.1)`,
          duration: `random(4, 7)`,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: `random(0, 3)`,
        });
      });

      // Spinning rings
      gsap.utils.toArray('.ring-spin').forEach((ring, i) => {
        gsap.to(ring, {
          rotateY: 360,
          rotateX: i % 2 === 0 ? 15 : -15,
          duration: 20 + (i * 5),
          repeat: -1,
          ease: 'none',
        });
        gsap.to(ring, {
          y: `random(-25, 25)`,
          duration: `random(5, 8)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Floating geometric shapes
      gsap.utils.toArray('.geo-float').forEach((geo) => {
        gsap.to(geo, {
          y: `random(-50, 50)`,
          x: `random(-25, 25)`,
          rotate: `random(-30, 30)`,
          duration: `random(6, 10)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: `random(0, 2)`,
        });
      });

      // Parallax orbs on scroll
      gsap.utils.toArray('.orb-parallax').forEach((orb, i) => {
        gsap.to(orb, {
          y: () => window.innerHeight * (0.15 + i * 0.08),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      // Pulsing glow effect
      gsap.utils.toArray('.glow-pulse').forEach((glow) => {
        gsap.to(glow, {
          opacity: `random(0.3, 0.7)`,
          scale: `random(0.95, 1.08)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: `random(0, 2)`,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shapes = {
    default: (
      <>
        {/* Gradient orbs */}
        <div className="orb-parallax absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/50 via-blue-50/30 to-transparent blur-3xl" />
        <div className="orb-parallax absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-sky-100/40 via-blue-50/20 to-transparent blur-3xl" />

        {/* 3D Floating Cubes */}
        <div className="cube-3d absolute top-[20%] left-[10%] w-8 h-8 opacity-20" style={{ perspective: '200px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg" style={{ transform: 'rotateX(15deg) rotateY(-20deg)' }} />
        </div>
        <div className="cube-3d absolute top-[60%] left-[8%] w-6 h-6 opacity-15" style={{ perspective: '150px' }}>
          <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 rounded-md shadow-lg" style={{ transform: 'rotateX(-10deg) rotateY(25deg)' }} />
        </div>
        <div className="cube-3d absolute top-[35%] right-[12%] w-10 h-10 opacity-15" style={{ perspective: '250px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-lg" style={{ transform: 'rotateX(20deg) rotateY(15deg)' }} />
        </div>

        {/* Floating Spheres */}
        <div className="sphere-float absolute top-[45%] right-[8%] w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/40 to-blue-600/20 shadow-lg" />
        <div className="sphere-float absolute bottom-[25%] left-[15%] w-4 h-4 rounded-full bg-gradient-to-br from-sky-400/35 to-sky-600/15 shadow-lg" />

        {/* 3D Ring */}
        <div className="ring-spin absolute top-[30%] right-[25%] w-16 h-16 opacity-20" style={{ perspective: '300px' }}>
          <div className="w-full h-full rounded-full border-2 border-blue-400" style={{ transform: 'rotateX(60deg)' }} />
        </div>
      </>
    ),
    minimal: (
      <>
        <div className="orb-parallax absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl" />
        <div className="orb-parallax absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-50/50 to-transparent blur-3xl" />
        <div className="sphere-float absolute top-[40%] left-[8%] w-4 h-4 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/10 shadow-lg" />
        <div className="sphere-float absolute top-[55%] right-[10%] w-3 h-3 rounded-full bg-gradient-to-br from-sky-400/25 to-sky-600/10 shadow-lg" />
      </>
    ),
    hero: (
      <>
        {/* Gradient orbs with glow */}
        <div className="orb-parallax glow-pulse absolute -top-48 -right-48 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-blue-100/60 via-sky-50/40 to-transparent blur-3xl" />
        <div className="orb-parallax glow-pulse absolute -bottom-64 -left-64 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-sky-100/50 via-blue-50/30 to-transparent blur-3xl" />
        <div className="orb-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-transparent via-blue-50/25 to-transparent blur-3xl opacity-40" />

        {/* 3D Cubes - Left Side */}
        <div className="cube-3d absolute top-[12%] left-[6%] w-10 h-10 opacity-25" style={{ perspective: '250px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl" style={{ transform: 'rotateX(20deg) rotateY(-25deg)' }} />
        </div>
        <div className="cube-3d absolute top-[35%] left-[4%] w-6 h-6 opacity-18" style={{ perspective: '150px' }}>
          <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg shadow-lg" style={{ transform: 'rotateX(-15deg) rotateY(30deg)' }} />
        </div>
        <div className="cube-3d absolute top-[58%] left-[8%] w-8 h-8 opacity-20" style={{ perspective: '200px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl shadow-lg" style={{ transform: 'rotateX(25deg) rotateY(-15deg)' }} />
        </div>
        <div className="cube-3d absolute bottom-[20%] left-[5%] w-5 h-5 opacity-15" style={{ perspective: '120px' }}>
          <div className="w-full h-full bg-gradient-to-br from-sky-300 to-sky-500 rounded-md shadow-lg" style={{ transform: 'rotateX(-20deg) rotateY(20deg)' }} />
        </div>

        {/* 3D Cubes - Right Side */}
        <div className="cube-3d absolute top-[15%] right-[8%] w-8 h-8 opacity-22" style={{ perspective: '200px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl" style={{ transform: 'rotateX(15deg) rotateY(25deg)' }} />
        </div>
        <div className="cube-3d absolute top-[40%] right-[5%] w-12 h-12 opacity-18" style={{ perspective: '300px' }}>
          <div className="w-full h-full bg-gradient-to-br from-sky-300 to-blue-500 rounded-2xl shadow-xl" style={{ transform: 'rotateX(-10deg) rotateY(-20deg)' }} />
        </div>
        <div className="cube-3d absolute top-[65%] right-[10%] w-6 h-6 opacity-20" style={{ perspective: '150px' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-sky-600 rounded-lg shadow-lg" style={{ transform: 'rotateX(30deg) rotateY(15deg)' }} />
        </div>
        <div className="cube-3d absolute bottom-[15%] right-[6%] w-7 h-7 opacity-15" style={{ perspective: '175px' }}>
          <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl shadow-lg" style={{ transform: 'rotateX(-25deg) rotateY(-10deg)' }} />
        </div>

        {/* Floating Spheres */}
        <div className="sphere-float absolute top-[25%] left-[18%] w-6 h-6 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-600/20 shadow-xl blur-[0.5px]" />
        <div className="sphere-float absolute top-[50%] left-[12%] w-4 h-4 rounded-full bg-gradient-to-br from-sky-400/40 to-sky-600/15 shadow-lg" />
        <div className="sphere-float absolute top-[30%] right-[20%] w-5 h-5 rounded-full bg-gradient-to-br from-blue-300/45 to-blue-500/20 shadow-xl blur-[0.5px]" />
        <div className="sphere-float absolute top-[55%] right-[18%] w-4 h-4 rounded-full bg-gradient-to-br from-sky-300/40 to-sky-500/15 shadow-lg" />
        <div className="sphere-float absolute bottom-[30%] left-[22%] w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/35 to-blue-600/15 shadow-lg" />
        <div className="sphere-float absolute bottom-[25%] right-[25%] w-3 h-3 rounded-full bg-gradient-to-br from-sky-400/30 to-sky-600/10 shadow-lg" />

        {/* 3D Spinning Rings */}
        <div className="ring-spin absolute top-[22%] right-[30%] w-20 h-20 opacity-15" style={{ perspective: '400px' }}>
          <div className="w-full h-full rounded-full border-2 border-blue-400/60" style={{ transform: 'rotateX(65deg)' }} />
        </div>
        <div className="ring-spin absolute bottom-[35%] left-[28%] w-16 h-16 opacity-12" style={{ perspective: '350px' }}>
          <div className="w-full h-full rounded-full border-2 border-sky-400/50" style={{ transform: 'rotateX(70deg)' }} />
        </div>
        <div className="ring-spin absolute top-[48%] left-[35%] w-12 h-12 opacity-10" style={{ perspective: '300px' }}>
          <div className="w-full h-full rounded-full border border-blue-300/40" style={{ transform: 'rotateX(55deg)' }} />
        </div>

        {/* Geometric shapes floating */}
        <div className="geo-float absolute top-[18%] left-[30%] opacity-12">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
            <polygon points="12,2 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="geo-float absolute bottom-[28%] right-[32%] opacity-10">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-sky-400">
            <polygon points="10,1 19,7 16,18 4,18 1,7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="geo-float absolute top-[70%] left-[38%] opacity-08">
          <svg width="18" height="18" viewBox="0 0 18 18" className="text-blue-300">
            <rect x="2" y="2" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" rx="2" />
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

