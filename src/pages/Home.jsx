import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Zap, Globe, Smartphone, Brain, Palette, Award, Users, TrendingUp, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge, Testimonial, Stats, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Counter component with scroll-triggered counting animation
const CounterAnimation = ({ target, duration = 2, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const animateCount = () => {
      if (hasAnimated.current) {
        // Reset and re-animate
        setCount(0);
      }
      hasAnimated.current = true;

      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: duration,
        ease: 'power2.out',
        onUpdate: () => {
          setCount(Math.floor(obj.value));
        },
      });
    };

    const resetCount = () => {
      setCount(0);
      hasAnimated.current = false;
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: animateCount,
      onEnterBack: animateCount,
      onLeave: resetCount,
      onLeaveBack: resetCount,
    });

    return () => scrollTrigger.kill();
  }, [target, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

/**
 * Home Page Component
 * Main landing page with all sections for Parix.ai
 */
const Home = () => {
  // Portfolio projects data
  const projects = [
    { title: 'Kaijo Home', category: 'Ecommerce + Automation', description: 'A modern eCommerce platform integrated with automated inventory sync, order routing, and AI-powered customer support.', image: '/images/Ecomerceweb (1).png' },
    { title: 'Meta Charter', category: 'Enterprise Dashboard', description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and machine-learning-based forecasting.', image: '/images/Custom UI dashboards (1).png' },
    { title: 'On-Mob Pro', category: 'Mobile App', description: 'A feature-rich mobile experience built to help customers manage orders, track deliveries, and automate daily operations.', image: '/images/MobileAppBanner (1).png' },
    { title: 'Brandom Analytics', category: 'SaaS Platform', description: 'Complete SaaS solution for brand performance analytics with automated workflows, triggers, and email reporting.', image: '/images/Portal (1).png' },
    { title: 'NutriBox Studio', category: 'Marketing Site', description: 'A high-conversion launching website designed for health brands with drag-and-drop CMS management.', image: '/images/Marketing Web solution (1).png' },
    { title: 'Talent Illustration', category: 'Hiring + AI', description: 'An AI-enabled hiring portal with automated candidate evaluation, performance scoring, and interview workflows.', image: '/images/Lead & Workflow (1).png' },
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
    { title: 'A simple guide to retrieving content models using AI', description: 'Turn unstructured data into organized, actionable content.', image: '/images/data_sync (1).png' },
    { title: 'How to improve your mobile app experience using visual analytics', description: 'Use data to create better user journeys and retention strategies.', image: '/images/mobileappbann.png' },
    { title: 'The modern best-practice for building the perfect proprietary workflow design', description: 'A breakdown of automation frameworks for high-growth teams.', image: '/images/WorkflowAutomation (1).png' },
  ];

  // Team members data
  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Sarah Johnson', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Michael Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Parix.ai redefined how our team works. Automations that once took days now run in seconds. Their development and AI expertise is unmatched.",
      author: "Daniel M.",
      role: "Founder & CEO",
      company: "TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
      rating: 5
    },
    {
      quote: "The team at Parix.ai delivered our SaaS platform ahead of schedule. Their attention to detail and commitment to quality exceeded our expectations.",
      author: "Sarah Williams",
      role: "Product Manager",
      company: "CloudScale",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
      rating: 5
    },
    {
      quote: "Working with Parix.ai was a game-changer. They automated our entire workflow, saving us 40+ hours per week. Highly recommended!",
      author: "James Rodriguez",
      role: "Operations Director",
      company: "Nexus Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
      rating: 5
    },
    {
      quote: "From concept to launch, Parix.ai was with us every step. Their mobile app development skills are top-notch and the support is exceptional.",
      author: "Emily Chen",
      role: "Startup Founder",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      rating: 5
    }
  ];

  // Testimonial slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

      {/* Banner Section */}
      <section className="w-full overflow-hidden">
        <AnimatedSection animation="fadeIn" start="top 95%" duration={0.8}>
          <div className="w-full">
            <img
              src="/images/Home_Banner.png"
              alt="Parix.ai - AI & Development Studio"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-32 bg-blue-50 overflow-hidden">
        <Container>
          <AnimatedSection animation="fadeUp" start="top 85%" duration={0.7}>
            <SectionTitle
              label="Our Impact"
              title="We help companies grow through automation-driven digital innovation."
              subtitle="From early-stage startups to funded enterprises, Parix.ai builds the systems that power modern businesses."
            />
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.15} start="top 85%" duration={0.7}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center p-8 md:p-12 rounded-3xl shadow-xl" style={{ backgroundColor: '#121212' }}>
                <div className="text-6xl md:text-8xl font-bold text-blue-400 mb-4">
                  <CounterAnimation target={81} duration={2} suffix="+" />
                </div>
                <p className="text-lg text-white mb-2">Workflows automated, digital products launched, and systems transformed across North America, Europe, and Asia.</p>
                <p className="text-gray-300">Our work reduces operational cost, boosts productivity, and enables teams to do more with less.</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <Background3D variant="minimal" />
        <Container className="relative z-10">
          <AnimatedSection animation="fadeUp" start="top 85%">
            <SectionTitle label="Our Work" title="Featured Projects" subtitle="Explore our portfolio of successful digital transformations." />
          </AnimatedSection>

          <AnimatedSection animation="stagger" stagger={0.08} start="top 85%">
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
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft" start="top 85%">
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
            <AnimatedSection animation="slideRight" delay={0.15} start="top 85%">
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
      <section className="py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#fff7ed' }}>
        <Container>
          <AnimatedSection animation="fadeUp" start="top 85%">
            <SectionTitle label="What We Do" title="Our Core Services" subtitle="Comprehensive solutions to power your digital transformation." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1} start="top 85%">
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
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <AnimatedSection animation="fadeUp" start="top 85%">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle title="We collaborate closely with founders, startups, and enterprises." subtitle="Working with Parix.ai means working with real people who care about your product as much as you do." />
              <p className="text-gray-600 mb-8">We transform ideas into production-ready systems with a mix of creativity, clarity, and engineering excellence.</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
        <Container>
          <AnimatedSection animation="fadeUp" start="top 85%">
            <SectionTitle label="Our Team" title="Meet the team behind your next big leap." subtitle="A passionate group of developers, designers, and AI engineers dedicated to building systems that scale." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.08} start="top 85%">
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
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#e0a6f5' }}>
        <Background3D variant="minimal" />
        <Container className="relative z-10">
          <AnimatedSection animation="fadeUp" start="top 85%">
            <SectionTitle label="Testimonials" title="What Our Clients Say" />
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.15} start="top 85%">
            <div className="max-w-4xl mx-auto">
              {/* Slider Container */}
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Testimonial Card */}
                <div className="overflow-hidden px-2">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
                          {/* Rating Stars */}
                          <div className="flex space-x-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Author */}
                          <div className="flex items-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 border-blue-100"
                            />
                            <div>
                              <p className="font-semibold text-gray-900">{testimonial.author}</p>
                              <p className="text-sm text-gray-500">
                                {testimonial.role}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
        <Container>
          <AnimatedSection animation="fadeUp" start="top 85%">
            <SectionTitle label="Insights" title="Insights that move businesses forward." subtitle="We share strategies, tutorials, and automation frameworks to help you scale faster and smarter." />
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.08} start="top 85%">
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
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/Web Development (1).png" alt="Newsletter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <Container size="sm" className="relative z-10">
          <AnimatedSection animation="fadeUp" start="top 85%">
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

