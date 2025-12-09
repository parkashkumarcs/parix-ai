import { useEffect, useRef } from 'react';
import { Search, PenTool, Code, TestTube, Rocket, HeartHandshake } from 'lucide-react';
import { Container, SectionTitle, Button, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Process Page Component
 * 6-step process visualization
 */
const Process = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // Process steps data
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'We understand your goals, workflow challenges, and product needs, then craft a strategy that aligns with your business vision.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Concept & UX Design',
      description: 'We design user-friendly interfaces, flows, and prototypes to ensure clarity before development.',
    },
    {
      number: '03',
      icon: Code,
      title: 'Development & AI Integration',
      description: 'Our team builds fast, scalable systems with automation embedded into the core.',
    },
    {
      number: '04',
      icon: TestTube,
      title: 'Testing & Quality Control',
      description: 'We perform deep testing to ensure reliability, security, and smooth user experience.',
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Launch & Optimization',
      description: "We don't just deliver — we monitor performance, optimize workflows, and improve over time.",
    },
    {
      number: '06',
      icon: HeartHandshake,
      title: 'Long-Term Support',
      description: 'Your growth continues, and so does our support. We offer ongoing improvements, maintenance, and expansion.',
    },
  ];

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <div className="process-hero-content opacity-0">
            <SectionTitle
              label="Our Process"
              title="How We Work"
              subtitle="A proven methodology that delivers results. From discovery to ongoing support, we're with you every step of the way."
            />
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-pink-500 to-indigo-500 hidden md:block" />

            {/* Steps */}
            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <AnimatedSection key={index} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={index * 0.1}>
                  <div className={`relative flex flex-col lg:flex-row items-start gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className={`p-8 bg-slate-800/50 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all ${index % 2 === 1 ? 'lg:ml-auto' : ''} max-w-xl`}>
                        <span className="text-5xl font-bold gradient-text">{step.number}</span>
                        <h3 className="text-2xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon - Center */}
                    <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center z-10 hidden md:flex">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-500/20 to-pink-500/20">
        <Container size="sm">
          <AnimatedSection animation="scaleIn">
            <div className="text-center">
              <SectionTitle title="Ready to start your project?" subtitle="Let's work together to bring your vision to life." />
              <Button to="/contact" size="lg">Get Started Today</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Process;

