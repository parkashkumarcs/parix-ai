import { useEffect, useRef } from 'react';
import { Target, Eye, Lightbulb, Heart, Zap, Users, Rocket, Shield } from 'lucide-react';
import { Container, SectionTitle, Card, CardContent, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * About Page Component
 * Company information, vision, mission, values, and team
 */
const About = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo('.about-hero-title',
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }
      )
      .fromTo('.about-hero-text',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
        '-=0.5'
      )
      .fromTo('.about-hero-belief',
        { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.6 },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // Values data
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Always challenge limitations.' },
    { icon: Target, title: 'Impact', description: 'Build solutions that create measurable change.' },
    { icon: Eye, title: 'Clarity', description: 'Simple experiences, powerful results.' },
    { icon: Shield, title: 'Ownership', description: 'Your success is our responsibility.' },
  ];

  // What makes us different
  const differentiators = [
    { icon: Zap, title: 'Automation-first mindset', description: 'We integrate AI + automation into everything we build.' },
    { icon: Heart, title: 'Human-centered design', description: 'Beautiful, intuitive experiences tailored around real users.' },
    { icon: Rocket, title: 'End-to-end capabilities', description: 'Strategy, design, development, automation, and support.' },
    { icon: Users, title: 'Long-term partnerships', description: 'We grow with you, not just deliver projects.' },
  ];

  // Team members
  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Sarah Johnson', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Michael Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
    { name: 'James Wilson', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
    { name: 'Lisa Chen', role: 'Automation Specialist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' },
  ];

  return (
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="about-hero-title opacity-0">
              <SectionTitle
                label="About Us"
                title="Who We Are"
                subtitle="Parix.ai is a modern digital agency specializing in AI-powered workflow automation, custom development, and digital transformation."
              />
            </div>
            <p className="about-hero-text text-gray-600 text-lg mb-8 opacity-0">
              We help companies eliminate friction, increase productivity, and build digital systems that scale effortlessly.
            </p>
            <div className="about-hero-belief p-6 bg-blue-50 rounded-2xl border border-blue-100 inline-block opacity-0">
              <p className="text-xl font-semibold text-gray-900">Our belief is simple:</p>
              <p className="text-2xl font-bold text-blue-600">Technology should work for you — not slow you down.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="stagger" stagger={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <Card variant="default" className="p-8">
                <div className="w-16 h-16 mb-6 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To become the leading global partner for businesses seeking automation-first digital transformation, empowering teams to operate with speed, clarity, and intelligence.
                </p>
              </Card>

              {/* Mission */}
              <Card variant="default" className="p-8">
                <div className="w-16 h-16 mb-6 bg-cyan-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg mb-4">To build AI-driven systems, apps, and digital solutions that:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Simplify operations</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Automate repetitive tasks</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Enhance customer experiences</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Enable businesses to grow faster than ever</li>
                </ul>
              </Card>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#f0f7ff' }}>
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Why Choose Us" title="What Makes Us Different" />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <Card key={index} variant="default" className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Core Values" title="Our Values" subtitle="The principles that guide everything we do." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const borderColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                const iconColors = ['text-blue-500', 'text-emerald-500', 'text-amber-500', 'text-violet-500'];
                return (
                  <div
                    key={index}
                    className="p-6 bg-white shadow-sm rounded-lg"
                    style={{ borderLeft: `4px solid ${borderColors[index]}` }}
                  >
                    <value.icon className={`w-8 h-8 ${iconColors[index]} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Our Team" title="Meet the Team" subtitle="A passionate team of product thinkers, designers, developers, and automation experts committed to building digital systems that empower businesses." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 rounded-2xl aspect-square shadow-md img-hover-lift">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm transition-colors duration-300 group-hover:text-blue-600">{member.name}</h3>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default About;

