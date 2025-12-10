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
  // Base styles - Light Theme
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';

  // Variant styles - Professional Light Theme
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-600',
    white: 'bg-white text-blue-600 hover:bg-gray-100 shadow-md hover:shadow-lg focus:ring-blue-500',
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

