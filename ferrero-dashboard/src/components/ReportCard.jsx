import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categoryColors = {
  'Robotics': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-l-purple-500', hover: 'hover:border-purple-300' },
  'AI & Quality': { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-l-pink-500', hover: 'hover:border-pink-300' },
  'Chocolate': { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-l-amber-500', hover: 'hover:border-amber-300' },
  'Bakery': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-l-orange-500', hover: 'hover:border-orange-300' },
  'Packaging': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-l-emerald-500', hover: 'hover:border-emerald-300' },
  'Nut Processing': { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-l-cyan-500', hover: 'hover:border-cyan-300' },
  'Hazelnut': { bg: 'bg-lime-100', text: 'text-lime-700', border: 'border-l-lime-500', hover: 'hover:border-lime-300' },
  'Sterilization': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-l-blue-500', hover: 'hover:border-blue-300' },
  'Sorting': { bg: 'bg-fuchsia-100', text: 'text-fuchsia-700', border: 'border-l-fuchsia-500', hover: 'hover:border-fuchsia-300' },
};

const ReportCard = ({ report, index }) => {
  const colors = categoryColors[report.category] || {
    bg: 'bg-gray-100',
    text: 'text-gray-700',
    border: 'border-l-gray-500',
    hover: 'hover:border-gray-300'
  };

  return (
    <motion.a
      href={report.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group block h-full"
    >
      <div className={`bg-white rounded-xl border border-gray-200 border-l-4 ${colors.border} p-6 h-full min-h-[160px] flex flex-col transition-all duration-300 hover:shadow-xl ${colors.hover}`}>
        {/* Header with category */}
        <div className="flex items-start justify-end mb-4">
          <span className={`px-3 py-1.5 text-xs font-semibold ${colors.bg} ${colors.text} rounded-full`}>
            {report.category}
          </span>
        </div>

        {/* Title - Flex grow to push footer down */}
        <h3 className="text-base font-medium text-gray-800 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors flex-grow">
          {report.title}
        </h3>

        {/* Footer - Always at bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            View Dashboard
          </span>
          <motion.div
            className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default ReportCard;
