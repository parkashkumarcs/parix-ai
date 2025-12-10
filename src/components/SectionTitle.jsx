/**
 * SectionTitle Component
 * Reusable section header with title, subtitle, and optional label
 */
const SectionTitle = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  gradient = true,
}) => {
  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 lg:mb-16 ${alignStyles[align]} ${className}`}>
      {/* Label */}
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
          {label}
        </span>
      )}

      {/* Title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          gradient ? 'text-blue-600' : 'text-gray-900'
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-lg md:text-xl text-gray-600 max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

