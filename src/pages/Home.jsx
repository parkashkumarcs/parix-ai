import { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Zap, Globe, Smartphone, Brain, Palette, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge, Testimonial, Stats, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Home Page Component
 * Main landing page with all sections for Parix.ai
 */
const Home = () => {
  // Portfolio projects data
  const projects = [
    { title: 'Kaijo Home', category: 'Ecommerce + Automation', description: 'A modern eCommerce platform integrated with automated inventory sync, order routing, and AI-powered customer support.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
    { title: 'Meta Charter', category: 'Enterprise Dashboard', description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and machine-learning-based forecasting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { title: 'On-Mob Pro', category: 'Mobile App', description: 'A feature-rich mobile experience built to help customers manage orders, track deliveries, and automate daily operations.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
    { title: 'Brandom Analytics', category: 'SaaS Platform', description: 'Complete SaaS solution for brand performance analytics with automated workflows, triggers, and email reporting.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
    { title: 'NutriBox Studio', category: 'Marketing Site', description: 'A high-conversion launching website designed for health brands with drag-and-drop CMS management.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
    { title: 'Talent Illustration', category: 'Hiring + AI', description: 'An AI-enabled hiring portal with automated candidate evaluation, performance scoring, and interview workflows.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80' },
  ];

  // Services data
  const services = [
    { icon: Zap, title: 'Development', description: 'End-to-end website, app, and SaaS development using modern, scalable technologies.' },
    { icon: Brain, title: 'Automation', description: 'We integrate AI and automation into your workflows to eliminate repetitive tasks and increase efficiency.' },
    { icon: Palette, title: 'Brand Strategy', description: 'We craft digital experiences that elevate your brand and attract the right customers.' },
  ];

  // Why work with us features
  const features = [
    'AI-powered workflow automation',
    'Custom web development',
    'Mobile app development',
    'SaaS product engineering',
    'Dashboard & analytics systems',
    'Cloud, DevOps & scaling solutions',
  ];

  // Blog posts data
  const blogPosts = [
    { title: 'A simple guide to retrieving content models using AI', description: 'Turn unstructured data into organized, actionable content.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
    { title: 'How to improve your mobile app experience using visual analytics', description: 'Use data to create better user journeys and retention strategies.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
    { title: 'The modern best-practice for building the perfect proprietary workflow design', description: 'A breakdown of automation frameworks for high-growth teams.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
  ];

  // Team members data
  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Sarah Johnson', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Michael Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  ];

  // Hero animation ref
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation with professional stagger
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
      )
      .fromTo('.hero-title',
        { opacity: 0, y: 60, filter: 'blur(15px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
        '-=0.5'
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo('.hero-trust',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      // Floating background orbs with parallax effect
      gsap.to('.hero-orb-1', {
        y: -30,
        x: 15,
        rotation: 5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.hero-orb-2', {
        y: 25,
        x: -15,
        rotation: -5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Parallax effect on scroll for hero section
      gsap.to('.hero-content-wrapper', {
        y: 100,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-2000">
        {/* 3D Background Effects */}
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <div className="hero-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-glow-pulse" />
        <div className="hero-orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />

        <Container className="relative z-10 py-20">
          <div ref={heroContentRef} className="hero-content-wrapper max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8 opacity-0">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm text-blue-700">Award-winning AI & Development Studio</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 opacity-0">
              Think smarter. Build faster.{' '}
              <span className="text-blue-600">Automate everything.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0">
              At Parix.ai, we help businesses break limits by combining AI-powered workflow automation with world-class web & app development. Transform your operations, scale effortlessly, and unlock your competitive edge.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 opacity-0">
              <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
                Get Started
              </Button>
              <Button to="/contact" variant="secondary" size="lg" icon={Phone}>
                Book a Strategy Call
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="hero-trust text-sm text-gray-500 opacity-0">Trusted by high-growth companies globally.</p>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle
              label="Our Impact"
              title="We help companies grow through automation-driven digital innovation."
              subtitle="From early-stage startups to funded enterprises, Parix.ai builds the systems that power modern businesses."
            />
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
                <div className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">81+</div>
                <p className="text-lg text-gray-700 mb-2">Workflows automated, digital products launched, and systems transformed across North America, Europe, and Asia.</p>
                <p className="text-gray-500">Our work reduces operational cost, boosts productivity, and enables teams to do more with less.</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <Background3D variant="minimal" />
        <Container className="relative z-10">
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Our Work" title="Featured Projects" subtitle="Explore our portfolio of successful digital transformations." />
          </AnimatedSection>

          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} variant="gradient" className="group overflow-hidden">
                  <div className="aspect-video img-hover-overlay">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent>
                    <CardBadge>{project.category}</CardBadge>
                    <CardTitle className="mt-3">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <SectionTitle align="left" label="Why Us" title="We build faster, smarter, and stronger digital ecosystems." subtitle="Our team blends engineering, automation, and design expertise to ship reliable, scalable, and future-proof products." />
              <p className="text-gray-600 mb-6">We help brands accelerate growth with:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button to="/contact" icon={ArrowRight} iconPosition="right">Work With Us</Button>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="aspect-square rounded-3xl bg-blue-50 border border-blue-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-900">Let's build something extraordinary together.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="What We Do" title="Our Core Services" subtitle="Comprehensive solutions to power your digital transformation." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} variant="default" className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <AnimatedSection animation="fadeUp">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle title="We collaborate closely with founders, startups, and enterprises." subtitle="Working with Parix.ai means working with real people who care about your product as much as you do." />
              <p className="text-gray-600 mb-8">We transform ideas into production-ready systems with a mix of creativity, clarity, and engineering excellence.</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Our Team" title="Meet the team behind your next big leap." subtitle="A passionate group of developers, designers, and AI engineers dedicated to building systems that scale." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 rounded-2xl aspect-square shadow-md img-hover-lift">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        <Background3D variant="minimal" />
        <Container className="relative z-10">
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Testimonials" title="What Our Clients Say" />
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Testimonial quote="Parix.ai redefined how our team works. Automations that once took days now run in seconds. Their development and AI expertise is unmatched." author="Daniel M." role="Founder & CEO" rating={5} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="fadeUp">
            <SectionTitle label="Insights" title="Insights that move businesses forward." subtitle="We share strategies, tutorials, and automation frameworks to help you scale faster and smarter." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} to="/blog" variant="default" className="group overflow-hidden">
                  <div className="aspect-video img-hover-bright">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-blue-600">
        <Container size="sm">
          <AnimatedSection animation="fadeUp">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Stay updated. Stay ahead.</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">Join our newsletter to receive automation tips, product updates, and business insights.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <button type="submit" className="px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">Subscribe</button>
              </form>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Home;

