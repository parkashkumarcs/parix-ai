import { Target, Eye, Lightbulb, Heart, Zap, Users, Rocket, Shield } from 'lucide-react';
import { Container, SectionTitle, Card, CardContent } from '../components';

/**
 * About Page Component
 * Company information, vision, mission, values, and team
 */
const About = () => {
  // Values data
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Always challenge limitations.' },
    { icon: Target, title: 'Impact', description: 'Build solutions that create measurable change.' },
    { icon: Eye, title: 'Clarity', description: 'Simple experiences, powerful results.' },
    { icon: Shield, title: 'Ownership', description: 'Your success is our responsibility.' },
  ];

  // What makes us different
  const differentiators = [
    { icon: Zap, title: 'Automation-first mindset', description: 'We integrate AI + automation into everything we build.' },
    { icon: Heart, title: 'Human-centered design', description: 'Beautiful, intuitive experiences tailored around real users.' },
    { icon: Rocket, title: 'End-to-end capabilities', description: 'Strategy, design, development, automation, and support.' },
    { icon: Users, title: 'Long-term partnerships', description: 'We grow with you, not just deliver projects.' },
  ];

  // Team members
  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Sarah Johnson', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Michael Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
    { name: 'James Wilson', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
    { name: 'Lisa Chen', role: 'Automation Specialist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' },
  ];

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              label="About Us"
              title="Who We Are"
              subtitle="Parix.ai is a modern digital agency specializing in AI-powered workflow automation, custom development, and digital transformation."
            />
            <p className="text-gray-400 text-lg mb-8">
              We help companies eliminate friction, increase productivity, and build digital systems that scale effortlessly.
            </p>
            <div className="p-6 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-2xl border border-white/10 inline-block">
              <p className="text-xl font-semibold text-white">Our belief is simple:</p>
              <p className="text-2xl font-bold gradient-text">Technology should work for you — not slow you down.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card variant="gradient" className="p-8">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg">
                To become the leading global partner for businesses seeking automation-first digital transformation, empowering teams to operate with speed, clarity, and intelligence.
              </p>
            </Card>

            {/* Mission */}
            <Card variant="gradient" className="p-8">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 text-lg mb-4">To build AI-driven systems, apps, and digital solutions that:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />Simplify operations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />Automate repetitive tasks</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />Enhance customer experiences</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />Enable businesses to grow faster than ever</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-32">
        <Container>
          <SectionTitle label="Why Choose Us" title="What Makes Us Different" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} variant="glass" className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <Container>
          <SectionTitle label="Core Values" title="Our Values" subtitle="The principles that guide everything we do." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 border-l-4 border-indigo-500 bg-slate-800/50">
                <value.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-950">
        <Container>
          <SectionTitle label="Our Team" title="Meet the Team" subtitle="A passionate team of product thinkers, designers, developers, and automation experts committed to building digital systems that empower businesses." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <h3 className="font-semibold text-white text-sm">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;

