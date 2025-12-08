import { motion } from 'framer-motion';
import { 
  Search, Paintbrush, Code, TestTube, Rocket, HeartHandshake,
  ArrowRight, CheckCircle
} from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We understand your goals, workflow challenges, and product needs, then craft a strategy that aligns with your business vision.',
    details: ['Requirements Analysis', 'Market Research', 'Technical Planning', 'Roadmap Creation'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Concept & UX Design',
    description: 'We design user-friendly interfaces, flows, and prototypes to ensure clarity before development.',
    details: ['Wireframing', 'UI/UX Design', 'Prototyping', 'User Testing'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    number: '03',
    icon: Code,
    title: 'Development & AI Integration',
    description: 'Our team builds fast, scalable systems with automation embedded into the core.',
    details: ['Frontend Development', 'Backend Architecture', 'AI Integration', 'API Development'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Testing & Quality Control',
    description: 'We perform deep testing to ensure reliability, security, and smooth user experience.',
    details: ['Unit Testing', 'Integration Testing', 'Security Audit', 'Performance Testing'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Optimization',
    description: "We don't just deliver — we monitor performance, optimize workflows, and improve over time.",
    details: ['Deployment', 'Performance Monitoring', 'Analytics Setup', 'Continuous Optimization'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Long-Term Support',
    description: 'Your growth continues, and so does our support. We offer ongoing improvements, maintenance, and expansion.',
    details: ['24/7 Support', 'Regular Updates', 'Feature Expansion', 'Scale Planning'],
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function Process() {
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
            Our Process
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
          >
            How We <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A proven methodology that delivers results. From discovery to launch and beyond,
            we follow a structured approach to ensure your success.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 hidden md:block" />

            <div className="space-y-12 lg:space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hidden md:block z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-right' : ''}`}>
                    <div className={`glass rounded-2xl p-8 hover:bg-white/10 transition-all group ${index % 2 === 1 ? 'lg:ml-12' : 'lg:mr-12'}`}>
                      <div className={`flex items-center gap-5 mb-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <span className="text-pink-400 text-sm font-medium">Step {step.number}</span>
                          <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 text-base mb-6">{step.description}</p>
                      <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        {step.details.map((detail) => (
                          <span key={detail} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-pink-400" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual/Empty Space */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`h-full flex items-center ${index % 2 === 1 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                      <span className="text-8xl xl:text-9xl font-bold text-white/5">{step.number}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Ready to start your project?</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Let's work together to bring your vision to life with our proven process.</p>
              <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Start Your Project</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

