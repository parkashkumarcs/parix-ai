import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Best for small businesses getting started with digital transformation.',
    icon: Zap,
    features: [
      'Basic website or integration',
      'Standard automation setup',
      '10 hours/month support',
      'Performance monitoring',
      'Email support',
      'Basic analytics',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$1,499',
    period: '/month',
    description: 'Ideal for funded startups & scaling companies needing advanced solutions.',
    icon: Sparkles,
    features: [
      'Advanced web/app development',
      'Complex workflow automation',
      'AI integrations included',
      '30 hours/month development',
      'Priority support',
      'Advanced analytics & reporting',
      'Dedicated project manager',
      'Weekly strategy calls',
    ],
    gradient: 'from-pink-500 to-purple-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Built for large-scale businesses with complex requirements.',
    icon: Crown,
    features: [
      'Full product engineering',
      'Complex automation systems',
      'AI-driven custom solutions',
      'Dedicated development team',
      'Unlimited monthly improvements',
      '24/7 premium support',
      'Custom SLA agreements',
      'On-demand scaling',
    ],
    gradient: 'from-orange-500 to-amber-500',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full text-base font-medium text-pink-400 mb-8"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
          >
            Simple, <span className="gradient-text">transparent</span> pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We offer flexible pricing built for businesses at any stage. Choose the plan that fits your needs.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-medium text-white z-10">
                    Most Popular
                  </div>
                )}
                <div className={`glass rounded-2xl p-8 h-full transition-all hover:bg-white/10 flex flex-col ${plan.popular ? 'border-2 border-pink-500/50' : ''}`}>
                  {/* Header */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-base">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-base mb-8">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      href="/contact"
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Have questions?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Our team is here to help you find the perfect solution. Let's discuss your project requirements.</p>
            <Button href="/contact" variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Contact Us</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

