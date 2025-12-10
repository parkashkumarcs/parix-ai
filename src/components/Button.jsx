import { Link } from 'react-router-dom';

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * Supports both Link (internal navigation) and button elements
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  // Base styles with enhanced transitions
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.97]';

  // Variant styles with professional hover effects
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 focus:ring-gray-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25 focus:ring-blue-500',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-gray-400',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 hover:-translate-y-0.5 shadow-lg shadow-gray-900/25 hover:shadow-xl focus:ring-gray-600',
    white: 'bg-white text-blue-600 hover:bg-gray-50 hover:-translate-y-0.5 shadow-lg shadow-black/10 hover:shadow-xl focus:ring-blue-500',
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  // Icon rendering
  const renderIcon = () => {
    if (!Icon) return null;
    return <Icon className={`w-5 h-5 ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`} />;
  };

  // Content with icon
  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  // Render as Link for internal navigation
  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  // Render as anchor for external links
  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;

