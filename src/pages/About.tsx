import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Rocket, Shield, Zap } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import GradientSphere from '../components/3d/GradientSphere';

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Always challenge limitations.' },
  { icon: Target, title: 'Impact', description: 'Build solutions that create measurable change.' },
  { icon: Eye, title: 'Clarity', description: 'Simple experiences, powerful results.' },
  { icon: Shield, title: 'Ownership', description: 'Your success is our responsibility.' },
];

const differentiators = [
  { title: 'Automation-first mindset', description: 'We integrate AI + automation into everything we build.' },
  { title: 'Human-centered design', description: 'Beautiful, intuitive experiences tailored around real users.' },
  { title: 'End-to-end capabilities', description: 'Strategy, design, development, automation, and support.' },
  { title: 'Long-term partnerships', description: 'We grow with you, not just deliver projects.' },
];

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] opacity-30 pointer-events-none">
          <GradientSphere className="w-full h-full" />
        </div>

        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full text-base font-medium text-pink-400 mb-8"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
            >
              Who <span className="gradient-text">We Are</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-400 leading-relaxed"
            >
              Parix.ai is a modern digital agency specializing in AI-powered workflow automation,
              custom development, and digital transformation. We help companies eliminate friction,
              increase productivity, and build digital systems that scale effortlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-8 glass rounded-2xl"
            >
              <p className="text-lg text-gray-300 italic">
                Our belief is simple: <span className="text-pink-400 font-semibold">Technology should work for you — not slow you down.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-base">
                To become the leading global partner for businesses seeking automation-first digital transformation,
                empowering teams to operate with speed, clarity, and intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-base">To build AI-driven systems, apps, and digital solutions that:</p>
              <ul className="space-y-3 text-gray-400 text-base">
                <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-pink-400 flex-shrink-0" /> Simplify operations</li>
                <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-pink-400 flex-shrink-0" /> Automate repetitive tasks</li>
                <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-pink-400 flex-shrink-0" /> Enhance customer experiences</li>
                <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-pink-400 flex-shrink-0" /> Enable faster growth</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Our Edge"
            title={<>What makes us <span className="gradient-text">different</span></>}
            subtitle="We're not just another agency. Here's what sets us apart."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group h-full flex flex-col"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-5" />
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading badge="Our Values" title={<>Principles that <span className="gradient-text">guide us</span></>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col items-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <Users className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Meet the Team</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A passionate team of product thinkers, designers, developers, and automation experts
                committed to building digital systems that empower businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

