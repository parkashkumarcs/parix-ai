import { motion } from 'framer-motion';
import { 
  Cpu, Code, Smartphone, Database, BarChart3, Cloud, 
  ArrowRight, CheckCircle 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const capabilities = [
  { icon: Cpu, label: 'AI-powered workflow automation' },
  { icon: Code, label: 'Custom web development' },
  { icon: Smartphone, label: 'Mobile app development' },
  { icon: Database, label: 'SaaS product engineering' },
  { icon: BarChart3, label: 'Dashboard & analytics systems' },
  { icon: Cloud, label: 'Cloud, DevOps & scaling solutions' },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-dark-400">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              badge="Why Choose Us"
              title={
                <>
                  We build <span className="gradient-text">faster, smarter</span>, and stronger digital ecosystems
                </>
              }
              subtitle="Our team blends engineering, automation, and design expertise to ship reliable, scalable, and future-proof products."
              centered={false}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-300 text-lg mb-8">We help brands accelerate growth with:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {capabilities.map((cap, index) => (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <span className="text-gray-300 text-base">{cap.label}</span>
                  </motion.div>
                ))}
              </div>

              <Button href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                Work With Us
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {[
              {
                title: 'Development',
                description: 'End-to-end website, app, and SaaS development using modern, scalable technologies.',
                features: ['React & Next.js', 'Mobile Apps', 'SaaS Platforms', 'API Development'],
              },
              {
                title: 'Automation',
                description: 'We integrate AI and automation into your workflows to eliminate repetitive tasks and increase efficiency.',
                features: ['AI Agents', 'Workflow Engines', 'Custom Integrations', 'Data Sync'],
              },
              {
                title: 'Brand Strategy',
                description: 'We craft digital experiences that elevate your brand and attract the right customers.',
                features: ['UI/UX Design', 'Brand Identity', 'Marketing Sites', 'Conversion Optimization'],
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-5 text-base">{card.description}</p>
                <div className="flex flex-wrap gap-3">
                  {card.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-pink-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

