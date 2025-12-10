/**
 * Stats Component
 * Animated statistics display with counter effect
 */
const Stats = ({ stats = [], className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
            {stat.value}
            {stat.suffix && <span className="text-blue-500">{stat.suffix}</span>}
          </div>
          <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

/**
 * StatCard Component
 * Individual stat card with icon
 */
export const StatCard = ({ icon: Icon, value, label, className = '' }) => {
  return (
    <div className={`p-6 bg-white border border-gray-200 rounded-2xl text-center shadow-sm ${className}`}>
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{value}</div>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

export default Stats;

