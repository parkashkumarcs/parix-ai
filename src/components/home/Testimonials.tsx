import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "Parix.ai redefined how our team works. Automations that once took days now run in seconds. Their development and AI expertise is unmatched.",
    author: "Daniel M.",
    role: "Founder & CEO",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The team at Parix.ai delivered beyond our expectations. Our new platform increased conversion by 40% in just two months.",
    author: "Sarah L.",
    role: "Head of Digital",
    company: "GrowthBox",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Working with Parix.ai was a game-changer. They understood our vision perfectly and built a product that our users love.",
    author: "Michael K.",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark-400">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Testimonials"
          title={<>What our <span className="gradient-text">clients say</span></>}
          subtitle="Don't just take our word for it — hear from the companies we've helped transform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all group">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="w-10 h-10 text-pink-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-base mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/30"
                  />
                  <div>
                    <p className="font-semibold text-white text-base">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

