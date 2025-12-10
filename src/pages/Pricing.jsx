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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => {
              const cardStyles = [
                { bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', badgeBg: 'bg-white/20', priceColor: 'text-white', titleColor: 'text-white', descColor: 'text-emerald-100', featureColor: 'text-white', checkColor: 'text-emerald-200', btnVariant: 'white' },
                { bg: 'bg-gradient-to-br from-blue-600 to-indigo-700', badgeBg: 'bg-white', priceColor: 'text-white', titleColor: 'text-white', descColor: 'text-blue-100', featureColor: 'text-white', checkColor: 'text-blue-200', btnVariant: 'white' },
                { bg: 'bg-gradient-to-br from-purple-600 to-violet-700', badgeBg: 'bg-white/20', priceColor: 'text-white', titleColor: 'text-white', descColor: 'text-purple-100', featureColor: 'text-white', checkColor: 'text-purple-200', btnVariant: 'white' },
              ];
              const style = cardStyles[index];

              const cardContent = (
                <div
                  className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${style.bg} ${
                    plan.popular ? 'h-full' : ''
                  }`}
                >
                  {/* Badge Area - Always reserve space */}
                  <div className="h-8 flex items-end justify-center">
                    {plan.popular && (
                      <div className={`px-4 py-1.5 ${style.badgeBg} text-blue-600 rounded-full text-sm font-semibold whitespace-nowrap translate-y-1/2`}>
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-8 pt-4">
                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold ${style.titleColor} mb-2`}>{plan.name}</h3>
                      <p className={`${style.descColor} mb-4`}>{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl font-bold ${style.priceColor}`}>{plan.price}</span>
                        <span className={`${style.descColor} ml-1`}>{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className={`flex items-center ${style.featureColor}`}>
                          <Check className={`w-5 h-5 ${style.checkColor} mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button to="/contact" variant="ghost" className="w-full !bg-white/15 border-2 border-white/40 !text-white hover:!bg-white hover:!text-gray-900 hover:border-white" icon={ArrowRight} iconPosition="right">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              );

              // Wrap popular card with gradient border
              if (plan.popular) {
                return (
                  <AnimatedSection key={index} animation="scaleIn" delay={index * 0.15} once={false}>
                    <div className="md:scale-105 p-[3px] rounded-[20px] bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300">
                      {cardContent}
                    </div>
                  </AnimatedSection>
                );
              }

              return (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 0.15} once={false}>
                  {cardContent}
                </AnimatedSection>
              );
            })}
          </div>
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

