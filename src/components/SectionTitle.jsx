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
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
          {label}
        </span>
      )}

      {/* Title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          gradient ? 'gradient-text' : 'text-white'
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-lg md:text-xl text-gray-400 max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

