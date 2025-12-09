import { Check, ArrowRight } from 'lucide-react';
import { Container, SectionTitle, Button, Card } from '../components';

/**
 * Pricing Page Component
 * 3-tier pricing table
 */
const Pricing = () => {
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
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <SectionTitle
            label="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that best fits your business needs. All plans include our commitment to quality and results."
          />
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-indigo-500 shadow-xl shadow-indigo-500/20 md:scale-105'
                    : 'bg-slate-800/50 border border-white/10'
                }`}
              >
                {/* Badge Area - Always reserve space */}
                <div className="h-8 flex items-end justify-center">
                  {plan.popular && (
                    <div className="px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-semibold whitespace-nowrap translate-y-1/2">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-8 pt-4">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
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
        </Container>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 lg:py-32">
        <Container size="sm">
          <div className="text-center">
            <SectionTitle title="Need a custom solution?" subtitle="We understand that every business is unique. Let's discuss a tailored plan that fits your specific requirements." />
            <Button to="/contact" size="lg">Schedule a Call</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;

