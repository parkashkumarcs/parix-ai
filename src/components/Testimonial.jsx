import { Star } from 'lucide-react';

/**
 * Testimonial Component
 * Display customer testimonial with rating
 */
const Testimonial = ({
  quote,
  author,
  role,
  company,
  image,
  rating = 5,
  className = '',
}) => {
  return (
    <div className={`p-8 bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}>
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * TestimonialSlider - Simple testimonial carousel container
 */
export const TestimonialSlider = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
};

export default Testimonial;

