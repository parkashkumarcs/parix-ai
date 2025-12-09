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

  // Variant styles
  const variants = {
    default: 'bg-slate-800/50 border border-white/10',
    glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
    solid: 'bg-slate-800',
    gradient: 'bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10',
    dark: 'bg-slate-900 border border-white/10',
  };

  // Hover styles
  const hoverStyles = hoverable
    ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30'
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
  <h3 className={`text-xl font-bold text-white mb-2 ${className}`}>{children}</h3>
);

/**
 * CardDescription - Description for Card
 */
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-400 ${className}`}>{children}</p>
);

/**
 * CardBadge - Badge for Card
 */
export const CardBadge = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-400 ${className}`}>
    {children}
  </span>
);

export default Card;

