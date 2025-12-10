import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Container, SectionTitle, Button, Card, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pricing Page Component
 * 3-tier pricing table
 */
const Pricing = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // Pricing plans data
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Best for small businesses.',
      features: [
        'Basic website or integration',
        'Standard automation',
        '10 hours/month support',
        'Performance monitoring',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for funded startups & scaling companies.',
      features: [
        'Advanced web/app development',
        'Workflow automation',
        'AI integrations',
        '30 hours/month development',
        'Priority support',
        'Weekly strategy calls',
        'Custom dashboards',
      ],
      cta: 'Start Growing',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Built for large-scale businesses.',
      features: [
        'Full product engineering',
        'Complex automation',
        'AI-driven systems',
        'Dedicated team',
        'Unlimited monthly improvements',
        '24/7 support',
        'Custom SLA',
        'On-demand scaling',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  return (
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <Container className="relative z-10">
          <div className="pricing-hero-content opacity-0">
            <SectionTitle
              label="Pricing"
              title="Simple, Transparent Pricing"
              subtitle="Choose the plan that best fits your business needs. All plans include our commitment to quality and results."
            />
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <AnimatedSection animation="stagger" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl ${
                    plan.popular
                      ? 'bg-white border-2 border-blue-600 shadow-xl md:scale-105'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Badge Area - Always reserve space */}
                  <div className="h-8 flex items-end justify-center">
                    {plan.popular && (
                      <div className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-semibold whitespace-nowrap translate-y-1/2">
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-8 pt-4">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-500 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                        <span className="text-gray-500 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button to="/contact" variant={plan.popular ? 'primary' : 'outline'} className="w-full" icon={ArrowRight} iconPosition="right">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 lg:py-32 bg-white">
        <Container size="sm">
          <AnimatedSection animation="fadeUp">
            <div className="text-center">
              <SectionTitle title="Need a custom solution?" subtitle="We understand that every business is unique. Let's discuss a tailored plan that fits your specific requirements." />
              <Button to="/contact" size="lg">Schedule a Call</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;

