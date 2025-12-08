import { motion } from 'framer-motion';
import { Users, Code, Palette, Cpu, Linkedin, Twitter, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GradientSphere from '../3d/GradientSphere';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    icon: Cpu,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Sarah Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    icon: Code,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Marcus Johnson',
    role: 'AI Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    icon: Cpu,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Emma Davis',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    icon: Palette,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
];

export default function Team() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <GradientSphere className="w-full h-full" />
      </div>

      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full mb-8">
            <Users className="w-5 h-5 text-pink-400" />
            <span className="text-base text-gray-300">Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            We collaborate closely with{' '}
            <span className="gradient-text">founders, startups, and enterprises</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Working with Parix.ai means working with real people who care about your product as much as you do.
            We transform ideas into production-ready systems with a mix of creativity, clarity, and engineering excellence.
          </p>
        </motion.div>

        {/* Team Section */}
        <SectionHeading
          badge="Our Team"
          title={<>Meet the team behind your <span className="gradient-text">next big leap</span></>}
          subtitle="A passionate group of developers, designers, and AI engineers dedicated to building systems that scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-3 border-pink-500/30 group-hover:border-pink-500 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <member.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 text-base mb-5">{member.role}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                  <a href={member.socials.linkedin} className="text-gray-500 hover:text-pink-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socials.twitter} className="text-gray-500 hover:text-pink-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socials.github} className="text-gray-500 hover:text-pink-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

