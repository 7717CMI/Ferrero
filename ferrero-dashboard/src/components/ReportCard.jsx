import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const categoryColors = {
  'Robotics': {
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 via-purple-50 to-violet-50',
    shadow: 'group-hover:shadow-violet-200',
    tag: 'bg-gradient-to-r from-violet-500 to-purple-600'
  },
  'AI & Quality': {
    gradient: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 via-rose-50 to-pink-50',
    shadow: 'group-hover:shadow-pink-200',
    tag: 'bg-gradient-to-r from-pink-500 to-rose-600'
  },
  'Chocolate': {
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 via-orange-50 to-amber-50',
    shadow: 'group-hover:shadow-amber-200',
    tag: 'bg-gradient-to-r from-amber-500 to-orange-600'
  },
  'Bakery': {
    gradient: 'from-yellow-500 to-amber-600',
    bgGradient: 'from-yellow-50 via-amber-50 to-yellow-50',
    shadow: 'group-hover:shadow-amber-200',
    tag: 'bg-gradient-to-r from-yellow-500 to-amber-600'
  },
  'Packaging': {
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 via-teal-50 to-emerald-50',
    shadow: 'group-hover:shadow-emerald-200',
    tag: 'bg-gradient-to-r from-emerald-500 to-teal-600'
  },
  'Nut Processing': {
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 via-blue-50 to-cyan-50',
    shadow: 'group-hover:shadow-cyan-200',
    tag: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  'Hazelnut': {
    gradient: 'from-lime-500 to-green-600',
    bgGradient: 'from-lime-50 via-green-50 to-lime-50',
    shadow: 'group-hover:shadow-lime-200',
    tag: 'bg-gradient-to-r from-lime-500 to-green-600'
  },
  'Sterilization': {
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 via-indigo-50 to-blue-50',
    shadow: 'group-hover:shadow-blue-200',
    tag: 'bg-gradient-to-r from-blue-500 to-indigo-600'
  },
  'Sorting': {
    gradient: 'from-fuchsia-500 to-pink-600',
    bgGradient: 'from-fuchsia-50 via-pink-50 to-fuchsia-50',
    shadow: 'group-hover:shadow-fuchsia-200',
    tag: 'bg-gradient-to-r from-fuchsia-500 to-pink-600'
  },
};

const ReportCard = ({ report, index }) => {
  const colors = categoryColors[report.category] || {
    gradient: 'from-gray-500 to-gray-600',
    bgGradient: 'from-gray-50 to-gray-100',
    shadow: 'group-hover:shadow-gray-200',
    tag: 'bg-gradient-to-r from-gray-500 to-gray-600'
  };

  return (
    <motion.a
      href={report.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group block h-full"
    >
      <div className={`relative bg-white rounded-2xl border border-gray-200 p-6 h-full min-h-[200px] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-300 ${colors.shadow}`}>
        {/* Gradient Background Accent */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${colors.bgGradient} rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500`} />

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-bl-full`} />

        {/* Header with category tag */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 text-transparent bg-gradient-to-r ${colors.gradient} bg-clip-text`} />
          </div>
          <span className={`px-3 py-1.5 text-xs font-bold text-white rounded-full ${colors.tag} shadow-lg`}>
            {report.category}
          </span>
        </div>

        {/* Title - Flex grow to push footer down */}
        <h3 className="relative text-base font-semibold text-gray-800 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors flex-grow">
          {report.title}
        </h3>

        {/* Footer - Always at bottom */}
        <div className="relative flex items-center justify-between pt-4 border-t border-gray-200 mt-auto group-hover:border-gray-300 transition-colors">
          <span className={`text-sm font-semibold text-transparent bg-gradient-to-r ${colors.gradient} bg-clip-text`}>
            View Dashboard
          </span>
          <motion.div
            className={`p-2.5 rounded-full bg-gradient-to-r ${colors.gradient} shadow-md`}
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>
      </div>
    </motion.a>
  );
};

export default ReportCard;
