import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, Globe, BookOpen, Calendar, DollarSign, Code, Smartphone, Bot, Palette, Users, Cog } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const benefits = [
  { icon: Globe, title: '100% Remote', description: 'Work from anywhere in the world' },
  { icon: Briefcase, title: 'Global Projects', description: 'Work on exciting international projects' },
  { icon: BookOpen, title: 'Learning Focused', description: 'Continuous learning and development' },
  { icon: Calendar, title: 'Flexible Schedule', description: 'Work when you\'re most productive' },
  { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation' },
  { icon: Users, title: 'Great Team', description: 'Collaborate with talented professionals' },
];

const openPositions = [
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: Code,
    description: 'Build beautiful, responsive user interfaces using React, Next.js, and modern CSS frameworks.',
    requirements: ['3+ years React experience', 'TypeScript proficiency', 'Tailwind CSS', 'Git workflow'],
  },
  {
    title: 'Backend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: Cog,
    description: 'Design and build scalable APIs and backend systems using Node.js, Python, or Go.',
    requirements: ['3+ years backend experience', 'Database design', 'API development', 'Cloud services'],
  },
  {
    title: 'Automation Specialist',
    department: 'Automation',
    type: 'Full-time',
    location: 'Remote',
    icon: Bot,
    description: 'Create intelligent automation workflows using AI, Zapier, Make, and custom solutions.',
    requirements: ['Automation platforms', 'API integrations', 'Python scripting', 'Problem solving'],
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: Smartphone,
    description: 'Develop cross-platform mobile applications using React Native or Flutter.',
    requirements: ['React Native/Flutter', 'iOS/Android basics', 'App Store experience', 'Performance optimization'],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    icon: Palette,
    description: 'Create stunning user experiences and interfaces for web and mobile applications.',
    requirements: ['Figma expertise', 'User research', 'Design systems', 'Prototyping'],
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    icon: Users,
    description: 'Lead projects from inception to delivery, coordinating between clients and teams.',
    requirements: ['Project management', 'Agile/Scrum', 'Client communication', 'Technical understanding'],
  },
];

export default function Careers() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full text-base font-medium text-pink-400 mb-8">
            Careers
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8">
            Join the <span className="gradient-text">Parix.ai Team</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            We are building a future where automation and AI power every business.
            Join a team that values creativity, engineering excellence, and real impact.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading badge="Why Join Us" title={<>Benefits of working at <span className="gradient-text">Parix.ai</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1 }} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading badge="Open Roles" title={<>Current <span className="gradient-text">Openings</span></>} subtitle="Find your next role and join our growing team." />
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div key={position.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1 }} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <position.icon className="w-7 h-7 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{position.department}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{position.type}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{position.location}</span>
                      </div>
                      <p className="text-gray-400 mt-4 text-base hidden sm:block">{position.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {position.requirements.map((req) => (
                          <span key={req} className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-gray-300">{req}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button href="/contact" variant="secondary" icon={<ArrowRight className="w-5 h-5" />} className="flex-shrink-0">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Don't see your role?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">We're always looking for talented people. Send us your resume and let's talk!</p>
              <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Get in Touch</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

