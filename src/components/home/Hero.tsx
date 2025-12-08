import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import Button from '../ui/Button';
import FloatingShapes from '../3d/FloatingShapes';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* 3D Background */}
      <FloatingShapes />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-500/50 to-dark-500 pointer-events-none" />

      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-left max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full mb-10"
          >
            <Sparkles className="w-6 h-6 text-pink-400" />
            <span className="text-lg text-gray-300">Award-winning AI & Development Studio</span>
          </motion.div>

          {/* Main Heading */}
          <div ref={textRef} className="overflow-hidden mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="hero-word inline-block text-white">Think smarter.</span>{' '}
              <span className="hero-word inline-block gradient-text">Build faster.</span>
              <br />
              <span className="hero-word inline-block text-white">Automate</span>{' '}
              <span className="hero-word inline-block gradient-text">everything.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mb-12"
          >
            At Parix.ai, we help businesses break limits by combining AI-powered workflow automation
            with world-class web & app development. Transform your operations, scale effortlessly,
            and unlock your competitive edge.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start gap-5"
          >
            <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get Started
            </Button>
            <Button href="/contact" variant="secondary" size="lg" icon={<Phone className="w-5 h-5" />} iconPosition="left">
              Book a Strategy Call
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 text-gray-500 text-base"
          >
            Trusted by high-growth companies globally
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center pt-3">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-pink-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

