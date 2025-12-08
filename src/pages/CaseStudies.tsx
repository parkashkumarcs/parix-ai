import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, BarChart3, Smartphone, PieChart } from 'lucide-react';
import Button from '../components/ui/Button';

const caseStudies = [
  {
    title: 'Kaijo Home',
    subtitle: 'Ecommerce Automation',
    description: 'A modern eCommerce platform with automated inventory sync, order routing, and AI-powered customer support that transformed their operations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-rose-500',
    stats: [
      { label: 'Workload Reduced', value: '70%' },
      { label: 'Order Processing', value: '3x Faster' },
      { label: 'Customer Satisfaction', value: '+45%' },
    ],
    tags: ['Ecommerce', 'Automation', 'AI'],
  },
  {
    title: 'Meta Charter',
    subtitle: 'Analytics Dashboard',
    description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and ML-based forecasting that revolutionized decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    icon: BarChart3,
    gradient: 'from-purple-500 to-indigo-500',
    stats: [
      { label: 'Time Saved Weekly', value: '20+ hrs' },
      { label: 'Report Generation', value: 'Instant' },
      { label: 'Data Accuracy', value: '99.9%' },
    ],
    tags: ['Dashboard', 'Analytics', 'ML'],
  },
  {
    title: 'On-Mob Pro',
    subtitle: 'Mobile App',
    description: 'A feature-rich mobile experience for order management, delivery tracking, and daily operations automation that users love.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
    stats: [
      { label: 'Customer Retention', value: '+40%' },
      { label: 'App Store Rating', value: '4.8★' },
      { label: 'Daily Active Users', value: '50K+' },
    ],
    tags: ['Mobile', 'iOS', 'Android'],
  },
  {
    title: 'Brandom Analytics',
    subtitle: 'SaaS Platform',
    description: 'Complete SaaS solution for brand performance analytics with automated workflows, triggers, and comprehensive email reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    icon: PieChart,
    gradient: 'from-orange-500 to-amber-500',
    stats: [
      { label: 'Data Events/Month', value: '1M+' },
      { label: 'Enterprise Clients', value: '200+' },
      { label: 'Uptime', value: '99.99%' },
    ],
    tags: ['SaaS', 'Analytics', 'Automation'],
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full text-base font-medium text-pink-400 mb-8">
            Case Studies
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8">
            Our Work. <span className="gradient-text">Real Results.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            We build digital products that transform operations and drive measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          {caseStudies.map((study, index) => (
            <motion.div key={study.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60`} />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <study.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap gap-3 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-gray-300">{tag}</span>
                    ))}
                  </div>
                  <span className="text-pink-400 text-sm font-medium">{study.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-pink-400 transition-colors">{study.title}</h3>
                  <p className="text-gray-400 text-base mb-6">{study.description}</p>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button href={`/case-studies/${study.title.toLowerCase().replace(' ', '-')}`} variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                    View Full Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Ready to be our next success story?</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Let's discuss how we can transform your business with our proven solutions.</p>
              <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Start Your Project</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

