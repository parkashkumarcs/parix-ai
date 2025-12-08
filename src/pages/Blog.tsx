import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const categories = ['All', 'AI & Automation', 'Web Development', 'Product Design', 'SaaS Growth', 'Case Studies'];

const blogPosts = [
  {
    title: 'A simple guide to retrieving content models using AI',
    excerpt: 'Turn unstructured data into organized, actionable content with modern AI techniques and best practices.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'AI & Automation',
    readTime: '5 min read',
    author: 'Alex Chen',
    date: 'Dec 1, 2024',
    slug: 'content-models-using-ai',
    featured: true,
  },
  {
    title: 'How to improve your mobile app experience using visual analytics',
    excerpt: 'Use data to create better user journeys and retention strategies for mobile applications.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    category: 'Product Design',
    readTime: '7 min read',
    author: 'Sarah Kim',
    date: 'Nov 28, 2024',
    slug: 'mobile-visual-analytics',
    featured: true,
  },
  {
    title: 'The modern best-practice for building proprietary workflow design',
    excerpt: 'A breakdown of automation frameworks for high-growth teams looking to scale efficiently.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    category: 'AI & Automation',
    readTime: '8 min read',
    author: 'Marcus Johnson',
    date: 'Nov 25, 2024',
    slug: 'proprietary-workflow-design',
    featured: false,
  },
  {
    title: 'Building scalable SaaS applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest Next.js features to build production-ready SaaS platforms.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Web Development',
    readTime: '10 min read',
    author: 'Emma Davis',
    date: 'Nov 20, 2024',
    slug: 'nextjs-saas-guide',
    featured: false,
  },
  {
    title: 'From idea to launch: A founder\'s guide to MVP development',
    excerpt: 'Strategic insights on building and launching your minimum viable product effectively.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    category: 'SaaS Growth',
    readTime: '6 min read',
    author: 'Alex Chen',
    date: 'Nov 15, 2024',
    slug: 'mvp-development-guide',
    featured: false,
  },
  {
    title: 'Design systems that scale: A practical approach',
    excerpt: 'How to build and maintain design systems that grow with your organization.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'Product Design',
    readTime: '9 min read',
    author: 'Emma Davis',
    date: 'Nov 10, 2024',
    slug: 'scalable-design-systems',
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Our Blog"
            title={<>Insights, Strategies & <span className="gradient-text">Automation Playbooks</span></>}
            subtitle="Explore deep guides, real-world examples, and tutorials on AI, web development, workflow automation, and digital growth."
          />

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search articles..."
                className="w-full pl-14 pr-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-12">
          <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                      <div className="relative h-56 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 flex gap-3">
                          <span className="px-4 py-1.5 bg-pink-500/80 backdrop-blur-md rounded-full text-sm font-medium text-white">Featured</span>
                          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white">{post.category}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-gray-400 text-base mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="section-padding bg-dark-400">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute top-4 left-4 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm text-white">{post.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-gray-400 text-base mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

