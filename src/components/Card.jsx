import { Link } from 'react-router-dom';

/**
 * Card Component
 * Reusable card with multiple variants for projects, services, blog posts, etc.
 */
const Card = ({
  children,
  variant = 'default',
  className = '',
  href,
  to,
  onClick,
  hoverable = true,
  ...props
}) => {
  // Base styles
  const baseStyles = 'rounded-2xl overflow-hidden';

  // Variant styles - Light Theme
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-lg border border-gray-200',
    solid: 'bg-gray-50',
    gradient: 'bg-white border border-gray-200',
    dark: 'bg-gray-50 border border-gray-200',
  };

  // Enhanced hover styles with professional animation
  const hoverStyles = hoverable
    ? 'transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200'
    : '';

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;

  // Render as Link for internal navigation
  if (to) {
    return (
      <Link to={to} className={`block ${combinedStyles}`} {...props}>
        {children}
      </Link>
    );
  }

  // Render as anchor for external links
  if (href) {
    return (
      <a href={href} className={`block ${combinedStyles}`} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  // Render as clickable div
  if (onClick) {
    return (
      <div onClick={onClick} className={`cursor-pointer ${combinedStyles}`} {...props}>
        {children}
      </div>
    );
  }

  // Render as div
  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  );
};

/**
 * CardImage - Image container for Card
 */
export const CardImage = ({ src, alt, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
);

/**
 * CardContent - Content container for Card
 */
export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

/**
 * CardTitle - Title for Card
 */
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>{children}</h3>
);

/**
 * CardDescription - Description for Card
 */
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

/**
 * CardBadge - Badge for Card
 */
export const CardBadge = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 ${className}`}>
    {children}
  </span>
);

export default Card;

