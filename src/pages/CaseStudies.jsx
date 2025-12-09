import { ArrowRight, TrendingUp, Clock, Users, Zap } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge } from '../components';

/**
 * Case Studies Page Component
 * Showcase of successful projects with results
 */
const CaseStudies = () => {
  // Case studies data
  const caseStudies = [
    {
      title: 'Kaijo Home',
      category: 'Ecommerce Automation',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      description: 'A modern eCommerce platform integrated with automated inventory sync, order routing, and AI-powered customer support.',
      challenge: 'Manual inventory management and order processing were causing delays and errors.',
      solution: 'Implemented end-to-end automation for inventory sync, order routing, and customer support.',
      results: [
        { icon: TrendingUp, value: '70%', label: 'Reduced manual workload' },
        { icon: Clock, value: '50%', label: 'Faster order processing' },
        { icon: Users, value: '40%', label: 'Improved customer satisfaction' },
      ],
    },
    {
      title: 'Meta Charter',
      category: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'A data-driven analytics dashboard with real-time insights, custom reporting, and ML-based forecasting.',
      challenge: 'Teams spent hours manually compiling reports from multiple data sources.',
      solution: 'Built a unified dashboard with automated data aggregation and AI-powered forecasting.',
      results: [
        { icon: Clock, value: '20+ hrs', label: 'Saved per week' },
        { icon: Zap, value: '95%', label: 'Report accuracy' },
        { icon: TrendingUp, value: '3x', label: 'Faster decisions' },
      ],
    },
    {
      title: 'On-Mob Pro',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      description: 'A feature-rich mobile experience for order management, delivery tracking, and daily operations automation.',
      challenge: 'Customer engagement was low due to fragmented mobile experience.',
      solution: 'Created a unified mobile app with push notifications and personalized workflows.',
      results: [
        { icon: Users, value: '40%', label: 'Increased retention' },
        { icon: TrendingUp, value: '60%', label: 'Higher engagement' },
        { icon: Zap, value: '2x', label: 'Order frequency' },
      ],
    },
    {
      title: 'Brandom Analytics',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Complete SaaS solution for brand performance analytics with automated workflows and email reporting.',
      challenge: 'Brand managers lacked visibility into performance metrics across channels.',
      solution: 'Delivered a scalable SaaS platform with real-time analytics and automated alerts.',
      results: [
        { icon: Zap, value: '1M+', label: 'Data events/month' },
        { icon: Users, value: '500+', label: 'Active users' },
        { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
      ],
    },
  ];

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <SectionTitle label="Case Studies" title="Our Work. Real Results." subtitle="We build digital products that transform operations and drive measurable impact." />
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <CardBadge className="mb-4">{study.category}</CardBadge>
                  <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                  <p className="text-gray-400 mb-6">{study.description}</p>

                  <div className="space-y-4 mb-6">
                    <div><span className="text-indigo-400 font-semibold">Challenge:</span> <span className="text-gray-400">{study.challenge}</span></div>
                    <div><span className="text-pink-400 font-semibold">Solution:</span> <span className="text-gray-400">{study.solution}</span></div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center p-4 bg-slate-800/50 rounded-xl">
                        <result.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold gradient-text">{result.value}</div>
                        <div className="text-xs text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-500/20 to-pink-500/20">
        <Container size="sm">
          <div className="text-center">
            <SectionTitle title="Ready to be our next success story?" subtitle="Let's discuss how we can help transform your business." />
            <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">Start Your Project</Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CaseStudies;

