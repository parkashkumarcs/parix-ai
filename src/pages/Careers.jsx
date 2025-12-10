import { useEffect, useRef } from 'react';
import { MapPin, Clock, DollarSign, Briefcase, Globe, BookOpen, Calendar, Heart, ArrowRight } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Careers Page Component
 * Job listings and company culture
 */
const Careers = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.careers-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // Benefits
  const benefits = [
    { icon: Globe, title: '100% Remote', description: 'Work from anywhere in the world.' },
    { icon: Briefcase, title: 'Global Projects', description: 'Work on impactful projects with global clients.' },
    { icon: BookOpen, title: 'Learning-focused', description: 'Continuous learning and growth opportunities.' },
    { icon: Calendar, title: 'Flexible Schedule', description: 'Work when you\'re most productive.' },
    { icon: DollarSign, title: 'Competitive Salary', description: 'Fair compensation for your skills.' },
    { icon: Heart, title: 'Great Culture', description: 'Collaborative and supportive team environment.' },
  ];

  // Job openings
  const jobs = [
    { title: 'Frontend Developer', type: 'Full-time', location: 'Remote', department: 'Engineering', description: 'Build beautiful, responsive web applications using React and modern frontend technologies.' },
    { title: 'Backend Developer', type: 'Full-time', location: 'Remote', department: 'Engineering', description: 'Design and implement scalable APIs and server-side systems using Node.js, Python, or Go.' },
    { title: 'Automation Specialist', type: 'Full-time', location: 'Remote', department: 'Automation', description: 'Create intelligent workflow automations using AI, Zapier, Make, and custom integrations.' },
    { title: 'Mobile App Developer', type: 'Full-time', location: 'Remote', department: 'Engineering', description: 'Develop cross-platform mobile applications using React Native or Flutter.' },
    { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote', department: 'Design', description: 'Create stunning user interfaces and experiences for web and mobile applications.' },
    { title: 'Project Manager', type: 'Full-time', location: 'Remote', department: 'Operations', description: 'Lead project delivery and ensure successful client outcomes.' },
  ];

  return (
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <Container className="relative z-10">
          <div className="careers-hero-content opacity-0">
            <SectionTitle label="Careers" title="Join the Parix.ai Team" subtitle="We are building a future where automation and AI power every business. Join a team that values creativity, engineering excellence, and real impact." />
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle title="Why Join Us?" subtitle="We offer more than just a job — we offer a career you'll love." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const cardStyles = [
                  { bg: '#e0f2fe', iconBg: '#0284c7', iconText: 'white', titleColor: '#0c4a6e' }, // Sky Blue
                  { bg: '#dcfce7', iconBg: '#16a34a', iconText: 'white', titleColor: '#14532d' }, // Green
                  { bg: '#fef3c7', iconBg: '#d97706', iconText: 'white', titleColor: '#78350f' }, // Amber
                  { bg: '#fce7f3', iconBg: '#db2777', iconText: 'white', titleColor: '#831843' }, // Pink
                  { bg: '#e0e7ff', iconBg: '#4f46e5', iconText: 'white', titleColor: '#312e81' }, // Indigo
                  { bg: '#f3e8ff', iconBg: '#9333ea', iconText: 'white', titleColor: '#581c87' }, // Purple
                ];
                const style = cardStyles[index % cardStyles.length];
                return (
                  <Card key={index} variant="default" className="p-6 border-0" style={{ backgroundColor: style.bg }}>
                    <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: style.iconBg }}>
                      <benefit.icon className="w-6 h-6" style={{ color: style.iconText }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: style.titleColor }}>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle title="Open Positions" subtitle="Find your next opportunity with us." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="space-y-4">
              {jobs.map((job, index) => {
                const cardStyles = [
                  { bg: '#eef6ff', border: '#bfdbfe' }, // Light Blue
                  { bg: '#f0fdf4', border: '#bbf7d0' }, // Light Green
                  { bg: '#fefce8', border: '#fef08a' }, // Light Yellow
                  { bg: '#fdf4ff', border: '#f5d0fe' }, // Light Pink
                ];
                const style = cardStyles[index % cardStyles.length];
                return (
                <Card
                  key={index}
                  variant="default"
                  className="p-6 hover:shadow-md transition-all cursor-pointer"
                  style={{ backgroundColor: style.bg, borderColor: style.border }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <CardBadge>{job.department}</CardBadge>
                        <span className="text-sm text-gray-500">{job.type}</span>
                        <span className="text-sm text-gray-500 flex items-center"><MapPin className="w-3 h-3 mr-1" />{job.location}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription>{job.description}</CardDescription>
                    </div>
                    <Button to="/contact" variant="outline" icon={ArrowRight} iconPosition="right">Apply Now</Button>
                  </div>
                </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/Marketing Web solution (1).png" alt="Careers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <Container size="sm" className="relative z-10">
          <AnimatedSection animation="scaleIn">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Don't see the right role?</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">We're always looking for talented people. Send us your resume and let's talk.</p>
              <Button to="/contact" size="lg" variant="white">Get in Touch</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Careers;

