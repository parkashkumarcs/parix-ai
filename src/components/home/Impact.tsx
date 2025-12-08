import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  {
    icon: Zap,
    value: 81,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Workflows automated & products launched',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Startups to enterprises served',
  },
  {
    icon: Globe,
    value: 15,
    suffix: '+',
    label: 'Countries',
    description: 'Global reach across continents',
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
  },
];

export default function Impact() {
  return (
    <section className="section-padding bg-gradient-to-b from-dark-500 to-dark-400">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Our Impact"
          title={
            <>
              We help companies grow through{' '}
              <span className="gradient-text">automation-driven</span> digital innovation
            </>
          }
          subtitle="From early-stage startups to funded enterprises, Parix.ai builds the systems that power modern businesses."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-pink-400" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>

                {/* Description */}
                <p className="text-gray-400 text-base">{stat.description}</p>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our work reduces operational cost, boosts productivity, and enables teams to do more with less.
            Serving clients across <span className="text-pink-400">North America</span>, <span className="text-purple-400">Europe</span>, and <span className="text-blue-400">Asia</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

