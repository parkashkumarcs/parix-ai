import { useEffect, useRef } from 'react';
import { Zap, CheckCircle, ArrowRight, Clock, TrendingUp, Users, Cog, Mail, Database } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, AnimatedSection, Background3D } from '../../components';
import gsap from 'gsap';

// Helper to get correct image path for GitHub Pages
const getImg = (path) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

/**
 * Workflow Automation Service Page
 */
const WorkflowAutomation = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Cog, title: 'Lead & Customer Workflows', description: 'Automate lead capture, nurturing, and customer onboarding processes.', image: getImg('/images/Lead & Workflow (1).png') },
    { icon: Clock, title: 'Task Management', description: 'Streamline project and task assignments with intelligent automation.', image: getImg('/images/Project_Tasks (1).png') },
    { icon: Mail, title: 'Email & Marketing Flows', description: 'Create automated email sequences and marketing campaigns.', image: getImg('/images/Marketing (1).png') },
    { icon: TrendingUp, title: 'Sales Funnels', description: 'Build automated sales pipelines that convert leads into customers.', image: getImg('/images/Sales (1).png') },
    { icon: Users, title: 'Internal Approvals', description: 'Speed up approval workflows with automated routing and notifications.', image: getImg('/images/Internal Approval (1).png') },
    { icon: Database, title: 'Data Syncing', description: 'Keep your systems in sync with real-time data automation.', image: getImg('/images/data_sync (1).png') },
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without adding headcount',
    'Free up your team for strategic work',
    '24/7 automated operations',
    'Real-time monitoring and alerts',
  ];

  const tools = ['AI Agents', 'Zapier', 'Make (Integromat)', 'n8n', 'Custom APIs', 'Webhooks', 'Python Scripts', 'Node.js'];

  return (
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/50" />
        <Container className="relative z-10">
          <div className="service-hero-content opacity-0">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <SectionTitle
              label="Workflow Automation"
              title="Transform How Your Business Operates"
              subtitle="We automate your most time-consuming processes, allowing your team to focus on what matters most — growth and innovation."
            />
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#ecfeff' }}>
        <Container>
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-cyan-900 mb-4">What We Automate</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">From simple tasks to complex workflows, we build automation that scales with your business.</p>
          </AnimatedSection>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} variant="default" className="group overflow-hidden">
                  <div className="aspect-video overflow-hidden img-hover-overlay">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 -mt-8 relative z-10 shadow-lg border-4 border-white">
                      <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Benefits & Tools */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Automate?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools We Use</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <p className="font-semibold text-blue-600 mb-2">Expected Outcome</p>
                <p className="text-gray-900">Higher efficiency, fewer errors, and the ability to scale your operations faster than ever.</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/WorkflowAutomation (1).png" alt="Workflow Automation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <Container size="sm" className="relative z-10">
          <AnimatedSection animation="scaleIn">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Ready to Automate Your Workflows?</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">Let's discuss how automation can transform your business operations.</p>
              <Button to="/contact" variant="white" icon={ArrowRight} iconPosition="right">Start Your Automation Journey</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default WorkflowAutomation;

