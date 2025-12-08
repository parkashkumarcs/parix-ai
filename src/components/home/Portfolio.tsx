import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, BarChart3, Smartphone, PieChart, Palette, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const projects = [
  {
    title: 'Kaijo Home',
    category: 'Ecommerce + Automation',
    description: 'A modern eCommerce platform integrated with automated inventory sync, order routing, and AI-powered customer support.',
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Meta Charter',
    category: 'Enterprise Dashboard',
    description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and machine-learning-based forecasting.',
    icon: BarChart3,
    gradient: 'from-purple-500 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'On-Mob Pro',
    category: 'Mobile App',
    description: 'A feature-rich mobile experience built to help customers manage orders, track deliveries, and automate daily operations.',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  },
  {
    title: 'Brandom Analytics',
    category: 'SaaS Platform',
    description: 'Complete SaaS solution for brand performance analytics with automated workflows, triggers, and email reporting.',
    icon: PieChart,
    gradient: 'from-orange-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'NutriBox Studio',
    category: 'Marketing Site',
    description: 'A high-conversion launching website designed for health brands with drag-and-drop CMS management.',
    icon: Palette,
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop',
  },
  {
    title: 'Talent Illustration',
    category: 'Hiring + AI',
    description: 'An AI-enabled hiring portal with automated candidate evaluation, performance scoring, and interview workflows.',
    icon: Users,
    gradient: 'from-violet-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Our Work"
          title={<>Projects that <span className="gradient-text">transform businesses</span></>}
          subtitle="From eCommerce to enterprise dashboards, we deliver solutions that drive real results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-pink-400 font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button href="/case-studies" variant="secondary">
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

