import { useEffect, useRef } from 'react';
import { Zap, Globe, Smartphone, Brain, Rocket, Palette, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper to get correct image path for GitHub Pages
const getImg = (path) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

/**
 * Services Page Component
 * Comprehensive list of all services offered
 */
const Services = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animation with blur effect
      gsap.fromTo('.services-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // All services data
  const services = [
    {
      id: 'automation',
      icon: Zap,
      title: 'Workflow Automation',
      tagline: 'Transform the way your business operates.',
      description: 'We automate your most time-consuming processes, allowing your team to focus on what matters most.',
      features: ['Lead & customer workflows', 'Project/task management', 'Marketing & email flows', 'Sales funnels', 'Internal approvals', 'Data syncing & reporting', 'Repetitive manual tasks'],
      tools: ['AI Agents', 'Zapier / Make', 'Custom Integrations', 'Webhooks', 'Python automation', 'Workflow engines'],
      outcome: 'Higher efficiency, fewer errors, faster scaling.',
      image: getImg('/images/WorkflowAutomation (1).png'),
      link: '/services/workflow-automation',
    },
    {
      id: 'web',
      icon: Globe,
      title: 'Web Development',
      tagline: 'Modern, scalable, lightning-fast websites designed for performance and conversion.',
      description: 'We build websites that not only look stunning but also drive results.',
      features: ['Business websites', 'Marketing sites', 'Landing pages', 'Corporate portals', 'Custom UI dashboards', 'Ecommerce platforms'],
      tools: ['React', 'Next.js', 'WordPress', 'Laravel', 'Node.js', 'Django', 'Tailwind'],
      outcome: 'Beautiful websites built for speed, SEO, and growth.',
      image: getImg('/images/Web Development (1).png'),
      link: '/services/web-development',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      tagline: 'High-performing mobile applications built for iOS and Android.',
      description: 'We create apps that users love, with smooth experiences and powerful features.',
      features: ['E-commerce apps', 'SaaS mobile apps', 'Fitness/health apps', 'Marketplace apps', 'CRM/ERP mobile dashboards', 'Custom business tools'],
      tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      outcome: 'Apps that users love. Smooth, scalable, and feature-rich.',
      image: getImg('/images/MobileAppBanner (1).png'),
      link: '/services/mobile-development',
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Integrations',
      tagline: 'Add intelligence to your business.',
      description: 'Leverage the power of AI to automate decisions and enhance productivity.',
      features: ['AI chatbots & assistants', 'Data extraction/processing', 'Content generation systems', 'Predictive analytics', 'Custom GPT/LLM integrations', 'AI agents for workflows', 'Computer vision models'],
      tools: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Custom LLMs'],
      outcome: 'Smarter operations, reduced workload, higher productivity.',
      image: getImg('/images/Gemini_Generated_Image_tqurtetqurtetqur.png'),
      link: '/services/ai-integrations',
    },
    {
      id: 'saas',
      icon: Rocket,
      title: 'SaaS Product Development',
      tagline: 'We help founders turn ideas into full-scale SaaS platforms.',
      description: 'End-to-end SaaS development from concept to launch and beyond.',
      features: ['Product strategy', 'UX/UI design', 'Full-stack development', 'Dashboard systems', 'Subscription & billing', 'AI modules', 'Launch & scaling'],
      tools: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker', 'Kubernetes'],
      outcome: 'Production-ready SaaS built to scale globally.',
      image: getImg('/images/Portal (1).png'),
      link: '/services/saas-development',
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Branding & UI/UX Design',
      tagline: 'Design that inspires trust and drives engagement.',
      description: 'We create visual experiences that make your brand unforgettable.',
      features: ['Brand identity', 'Logo systems', 'UI/UX for apps', 'Design systems', 'Marketing assets', 'Product visuals'],
      tools: ['Figma', 'Adobe Creative Suite', 'Framer', 'Webflow', 'After Effects'],
      outcome: 'A unified brand presence that stands out and converts.',
      image: getImg('/images/Landing page (1).png'),
      link: '/services/branding-design',
    },
  ];

  return (
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <Container className="relative z-10">
          <div className="services-hero-content opacity-0">
            <SectionTitle
              label="Our Services"
              title="Comprehensive Solutions for Digital Growth"
              subtitle="From automation to development, we provide end-to-end services to transform your business."
            />
          </div>
        </Container>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Content */}
              <AnimatedSection animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 mb-6 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-xl text-blue-600 mb-4">{service.tagline}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">What we build:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
                  <p className="font-semibold text-blue-600">Outcome:</p>
                  <p className="text-gray-900">{service.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button to={service.link} icon={ArrowRight} iconPosition="right">Learn More</Button>
                  <Button to="/contact" variant="secondary">Get Started</Button>
                </div>
              </AnimatedSection>

              {/* Image & Tech Stack */}
              <AnimatedSection animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'} delay={0.2} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card variant="default" className="overflow-hidden">
                  <div className="aspect-video overflow-hidden img-hover-overlay">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={getImg('/images/Web Development (1).png')} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <Container size="sm" className="relative z-10">
          <AnimatedSection animation="scaleIn">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Ready to transform your business?</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">Let's discuss how we can help you achieve your goals.</p>
              <button onClick={() => window.location.href='/contact'} className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Services;

