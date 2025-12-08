import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const blogPosts = [
  {
    title: 'A simple guide to retrieving content models using AI',
    excerpt: 'Turn unstructured data into organized, actionable content with modern AI techniques.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'AI & Automation',
    readTime: '5 min read',
    author: 'Alex Chen',
    slug: 'content-models-using-ai',
  },
  {
    title: 'How to improve your mobile app experience using visual analytics',
    excerpt: 'Use data to create better user journeys and retention strategies for mobile applications.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    category: 'Mobile Development',
    readTime: '7 min read',
    author: 'Sarah Kim',
    slug: 'mobile-visual-analytics',
  },
  {
    title: 'The modern best-practice for building the perfect proprietary workflow design',
    excerpt: 'A breakdown of automation frameworks for high-growth teams looking to scale efficiently.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    category: 'Workflow Automation',
    readTime: '8 min read',
    author: 'Marcus Johnson',
    slug: 'proprietary-workflow-design',
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Our Blog"
          title={<>Insights that move <span className="gradient-text">businesses forward</span></>}
          subtitle="We share strategies, tutorials, and automation frameworks to help you scale faster and smarter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-pink-500/80 backdrop-blur-md rounded-full text-sm font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-5 line-clamp-2">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button href="/blog" variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

