import { ArrowRight, Phone, Zap, Globe, Smartphone, Brain, Palette, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge, Testimonial, Stats } from '../components';

/**
 * Home Page Component
 * Main landing page with all sections for Parix.ai
 */
const Home = () => {
  // Portfolio projects data
  const projects = [
    { title: 'Kaijo Home', category: 'Ecommerce + Automation', description: 'A modern eCommerce platform integrated with automated inventory sync, order routing, and AI-powered customer support.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
    { title: 'Meta Charter', category: 'Enterprise Dashboard', description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and machine-learning-based forecasting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { title: 'On-Mob Pro', category: 'Mobile App', description: 'A feature-rich mobile experience built to help customers manage orders, track deliveries, and automate daily operations.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
    { title: 'Brandom Analytics', category: 'SaaS Platform', description: 'Complete SaaS solution for brand performance analytics with automated workflows, triggers, and email reporting.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
    { title: 'NutriBox Studio', category: 'Marketing Site', description: 'A high-conversion launching website designed for health brands with drag-and-drop CMS management.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
    { title: 'Talent Illustration', category: 'Hiring + AI', description: 'An AI-enabled hiring portal with automated candidate evaluation, performance scoring, and interview workflows.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80' },
  ];

  // Services data
  const services = [
    { icon: Zap, title: 'Development', description: 'End-to-end website, app, and SaaS development using modern, scalable technologies.' },
    { icon: Brain, title: 'Automation', description: 'We integrate AI and automation into your workflows to eliminate repetitive tasks and increase efficiency.' },
    { icon: Palette, title: 'Brand Strategy', description: 'We craft digital experiences that elevate your brand and attract the right customers.' },
  ];

  // Why work with us features
  const features = [
    'AI-powered workflow automation',
    'Custom web development',
    'Mobile app development',
    'SaaS product engineering',
    'Dashboard & analytics systems',
    'Cloud, DevOps & scaling solutions',
  ];

  // Blog posts data
  const blogPosts = [
    { title: 'A simple guide to retrieving content models using AI', description: 'Turn unstructured data into organized, actionable content.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
    { title: 'How to improve your mobile app experience using visual analytics', description: 'Use data to create better user journeys and retention strategies.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
    { title: 'The modern best-practice for building the perfect proprietary workflow design', description: 'A breakdown of automation frameworks for high-growth teams.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
  ];

  // Team members data
  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Sarah Johnson', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Michael Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-8">
              <Award className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-sm text-indigo-300">Award-winning AI & Development Studio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Think smarter. Build faster.{' '}
              <span className="gradient-text">Automate everything.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              At Parix.ai, we help businesses break limits by combining AI-powered workflow automation with world-class web & app development. Transform your operations, scale effortlessly, and unlock your competitive edge.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
                Get Started
              </Button>
              <Button to="/contact" variant="secondary" size="lg" icon={Phone}>
                Book a Strategy Call
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-gray-500">Trusted by high-growth companies globally.</p>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <SectionTitle
            label="Our Impact"
            title="We help companies grow through automation-driven digital innovation."
            subtitle="From early-stage startups to funded enterprises, Parix.ai builds the systems that power modern businesses."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-3xl border border-white/10">
              <div className="text-6xl md:text-8xl font-bold gradient-text mb-4">81+</div>
              <p className="text-lg text-gray-300 mb-2">Workflows automated, digital products launched, and systems transformed across North America, Europe, and Asia.</p>
              <p className="text-gray-500">Our work reduces operational cost, boosts productivity, and enables teams to do more with less.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <SectionTitle label="Our Work" title="Featured Projects" subtitle="Explore our portfolio of successful digital transformations." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} variant="gradient" className="group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent>
                  <CardBadge>{project.category}</CardBadge>
                  <CardTitle className="mt-3">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 lg:py-32 bg-slate-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle align="left" label="Why Us" title="We build faster, smarter, and stronger digital ecosystems." subtitle="Our team blends engineering, automation, and design expertise to ship reliable, scalable, and future-proof products." />
              <p className="text-gray-400 mb-6">We help brands accelerate growth with:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button to="/contact" icon={ArrowRight} iconPosition="right">Work With Us</Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-indigo-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white">Let's build something extraordinary together.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <Container>
          <SectionTitle label="What We Do" title="Our Core Services" subtitle="Comprehensive solutions to power your digital transformation." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="dark" className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="mb-3">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 lg:py-32 bg-slate-950">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle title="We collaborate closely with founders, startups, and enterprises." subtitle="Working with Parix.ai means working with real people who care about your product as much as you do." />
            <p className="text-gray-400 mb-8">We transform ideas into production-ready systems with a mix of creativity, clarity, and engineering excellence.</p>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-950">
        <Container>
          <SectionTitle label="Our Team" title="Meet the team behind your next big leap." subtitle="A passionate group of developers, designers, and AI engineers dedicated to building systems that scale." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-slate-950">
        <Container>
          <SectionTitle label="Testimonials" title="What Our Clients Say" />
          <div className="max-w-3xl mx-auto">
            <Testimonial quote="Parix.ai redefined how our team works. Automations that once took days now run in seconds. Their development and AI expertise is unmatched." author="Daniel M." role="Founder & CEO" rating={5} />
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-pink-500/10 to-indigo-500/10">
        <Container>
          <SectionTitle label="Insights" title="Insights that move businesses forward." subtitle="We share strategies, tutorials, and automation frameworks to help you scale faster and smarter." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} to="/blog" variant="glass" className="group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <Container size="sm">
          <div className="text-center">
            <SectionTitle title="Stay updated. Stay ahead." subtitle="Join our newsletter to receive automation tips, product updates, and business insights." />
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;

