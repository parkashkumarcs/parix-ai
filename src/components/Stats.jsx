/**
 * Stats Component
 * Animated statistics display with counter effect
 */
const Stats = ({ stats = [], className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
            {stat.value}
            {stat.suffix && <span className="text-indigo-400">{stat.suffix}</span>}
          </div>
          <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
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
    <div className={`p-6 bg-slate-800/50 border border-white/10 rounded-2xl text-center ${className}`}>
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/20 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

export default Stats;

