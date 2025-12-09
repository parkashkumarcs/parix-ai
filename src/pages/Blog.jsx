import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Container, SectionTitle, Button, Card, CardContent, CardTitle, CardDescription, CardBadge, AnimatedSection } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Blog Page Component
 * Blog listing with categories and featured posts
 */
const Blog = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  // Categories
  const categories = ['All', 'AI & Automation', 'Web Development', 'Product Design', 'SaaS Growth', 'Case Studies'];

  // Blog posts data
  const blogPosts = [
    {
      title: 'A simple guide to retrieving content models using AI',
      excerpt: 'Turn unstructured data into organized, actionable content. Learn how AI can transform your content strategy.',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      author: 'Alex Chen',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      featured: true,
    },
    {
      title: 'How to improve your mobile app experience using visual analytics',
      excerpt: 'Use data to create better user journeys and retention strategies. A deep dive into analytics-driven UX.',
      category: 'Product Design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
      author: 'Sarah Johnson',
      date: 'Dec 3, 2024',
      readTime: '7 min read',
      featured: true,
    },
    {
      title: 'The modern best-practice for building proprietary workflow design',
      excerpt: 'A breakdown of automation frameworks for high-growth teams. Scale your operations efficiently.',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
      author: 'Michael Park',
      date: 'Dec 1, 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      title: 'Building scalable SaaS architectures with React and Node.js',
      excerpt: 'Best practices for creating maintainable and scalable SaaS applications from scratch.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      author: 'Emma Davis',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      featured: false,
    },
    {
      title: 'From zero to launch: A SaaS founder\'s journey',
      excerpt: 'Real lessons from building and scaling a successful SaaS product in today\'s competitive market.',
      category: 'SaaS Growth',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
      author: 'Alex Chen',
      date: 'Nov 25, 2024',
      readTime: '12 min read',
      featured: false,
    },
    {
      title: 'The future of AI in business automation',
      excerpt: 'Exploring how AI is reshaping the way businesses operate and compete in the digital age.',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
      author: 'Michael Park',
      date: 'Nov 22, 2024',
      readTime: '6 min read',
      featured: false,
    },
  ];

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-indigo-500/10" />
        <Container className="relative z-10">
          <div className="blog-hero-content opacity-0">
            <SectionTitle label="Blog" title="Insights, Strategies & Automation Playbooks" subtitle="Explore deep guides, real-world examples, and tutorials on AI, web development, workflow automation, and digital growth." />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-900/50 sticky top-16 z-30 backdrop-blur-lg">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button key={index} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0 ? 'bg-indigo-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32">
        <Container>
          <AnimatedSection animation="stagger" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} variant="gradient" className="group overflow-hidden cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-3">
                      <CardBadge>{post.category}</CardBadge>
                      {post.featured && <span className="text-xs text-pink-400 font-semibold">Featured</span>}
                    </div>
                    <CardTitle className="group-hover:text-indigo-400 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center"><User className="w-4 h-4 mr-1" />{post.author}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Load More */}
          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="text-center mt-12">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">Load More Articles</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
};

export default Blog;

