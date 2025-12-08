import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Workflow, Code, Smartphone, Bot, Rocket, Palette,
  ArrowRight, CheckCircle, Zap
} from 'lucide-react';

import Button from '../components/ui/Button';

const services = [
  {
    id: 'automation',
    icon: Workflow,
    title: 'Workflow Automation',
    tagline: 'Transform the way your business operates.',
    description: 'We automate lead workflows, project management, marketing flows, sales funnels, internal approvals, data syncing, and repetitive tasks.',
    features: ['AI Agents', 'Zapier / Make', 'Custom Integrations', 'Webhooks', 'Python Automation', 'Workflow Engines'],
    outcome: 'Higher efficiency, fewer errors, faster scaling.',
    gradient: 'from-pink-500 to-rose-500',
    path: '/services/automation',
  },
  {
    id: 'web',
    icon: Code,
    title: 'Web Development',
    tagline: 'Modern, scalable, lightning-fast websites.',
    description: 'We build business websites, marketing sites, landing pages, corporate portals, custom UI dashboards, and ecommerce platforms.',
    features: ['React & Next.js', 'WordPress', 'Laravel', 'Node.js', 'Django', 'Tailwind CSS'],
    outcome: 'Beautiful websites built for speed, SEO, and growth.',
    gradient: 'from-purple-500 to-indigo-500',
    path: '/services/web-development',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'High-performing apps for iOS and Android.',
    description: 'We create e-commerce apps, SaaS mobile apps, fitness/health apps, marketplace apps, CRM/ERP dashboards, and custom business tools.',
    features: ['React Native', 'Flutter', 'iOS Native', 'Android Native', 'Cross-Platform', 'App Store Ready'],
    outcome: 'Apps that users love. Smooth, scalable, and feature-rich.',
    gradient: 'from-blue-500 to-cyan-500',
    path: '/services/mobile-development',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Integrations',
    tagline: 'Add intelligence to your business.',
    description: 'AI chatbots & assistants, data extraction, content generation, predictive analytics, custom GPT/LLM integrations, and computer vision.',
    features: ['GPT/LLM Integration', 'AI Chatbots', 'Data Processing', 'Predictive Analytics', 'Computer Vision', 'Custom AI Models'],
    outcome: 'Smarter operations, reduced workload, higher productivity.',
    gradient: 'from-orange-500 to-amber-500',
    path: '/services/ai-integrations',
  },
  {
    id: 'saas',
    icon: Rocket,
    title: 'SaaS Product Development',
    tagline: 'Turn ideas into full-scale platforms.',
    description: 'Product strategy, UX/UI design, full-stack development, dashboard systems, subscription & billing, AI modules, and launch support.',
    features: ['Product Strategy', 'Full-Stack Dev', 'Dashboard Systems', 'Subscription Billing', 'AI Modules', 'Launch & Scaling'],
    outcome: 'Production-ready SaaS built to scale globally.',
    gradient: 'from-green-500 to-emerald-500',
    path: '/services/saas-development',
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & UI/UX Design',
    tagline: 'Design that inspires and converts.',
    description: 'Brand identity, logo systems, UI/UX for apps, design systems, marketing assets, and product visuals.',
    features: ['Brand Identity', 'Logo Design', 'UI/UX Design', 'Design Systems', 'Marketing Assets', 'Product Visuals'],
    outcome: 'A unified brand presence that stands out and converts.',
    gradient: 'from-violet-500 to-purple-500',
    path: '/services/branding',
  },
];

export default function Services() {
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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
          >
            Everything you need to <span className="gradient-text">scale digitally</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From workflow automation to full-stack development, we provide comprehensive solutions that drive real business results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all group"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Left - Icon & Title */}
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">{service.title}</h3>
                      <p className="text-pink-400 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Middle - Description & Features */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-400 text-base mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {service.features.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-pink-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-sm"><Zap className="inline w-5 h-5 text-yellow-400 mr-2" /><span className="text-gray-300">{service.outcome}</span></p>
                      <Link to={service.path} className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium text-base">
                        Learn More <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Ready to transform your business?</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Let's discuss your project and find the perfect solution for your needs.</p>
              <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Get Started Today</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

