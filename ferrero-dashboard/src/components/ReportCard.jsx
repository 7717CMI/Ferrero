import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { useState } from 'react';

const categoryColors = {
  'Robotics': { accent: 'bg-purple-500', border: 'border-purple-500', tagBg: 'bg-purple-50', tagText: 'text-purple-700', iconColor: 'text-purple-500' },
  'AI & Quality': { accent: 'bg-pink-500', border: 'border-pink-500', tagBg: 'bg-pink-50', tagText: 'text-pink-700', iconColor: 'text-pink-500' },
  'Chocolate': { accent: 'bg-orange-500', border: 'border-orange-500', tagBg: 'bg-orange-50', tagText: 'text-orange-700', iconColor: 'text-orange-500' },
  'Bakery': { accent: 'bg-amber-500', border: 'border-amber-500', tagBg: 'bg-amber-50', tagText: 'text-amber-700', iconColor: 'text-amber-500' },
  'Packaging': { accent: 'bg-emerald-500', border: 'border-emerald-500', tagBg: 'bg-emerald-50', tagText: 'text-emerald-700', iconColor: 'text-emerald-500' },
  'Nut Processing': { accent: 'bg-cyan-500', border: 'border-cyan-500', tagBg: 'bg-cyan-50', tagText: 'text-cyan-700', iconColor: 'text-cyan-500' },
  'Hazelnut': { accent: 'bg-green-500', border: 'border-green-500', tagBg: 'bg-green-50', tagText: 'text-green-700', iconColor: 'text-green-500' },
  'Sterilization': { accent: 'bg-blue-500', border: 'border-blue-500', tagBg: 'bg-blue-50', tagText: 'text-blue-700', iconColor: 'text-blue-500' },
  'Sorting': { accent: 'bg-fuchsia-500', border: 'border-fuchsia-500', tagBg: 'bg-fuchsia-50', tagText: 'text-fuchsia-700', iconColor: 'text-fuchsia-500' },
};

const ReportCard = ({ report, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = categoryColors[report.category] || {
    accent: 'bg-gray-500',
    border: 'border-gray-500',
    tagBg: 'bg-gray-50',
    tagText: 'text-gray-700',
    iconColor: 'text-gray-500'
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      href={report.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group block h-full"
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative bg-white rounded-xl border-l-4 ${colors.border} border border-gray-200 px-12 py-10 h-full min-h-[180px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-gray-400`}
      >
        {/* Subtle top accent bar */}
        <motion.div
          className={`absolute top-0 left-0 h-1 ${colors.accent}`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />

        {/* Header with category tag and icon */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FileText className={`w-5 h-5 ${colors.iconColor} transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
            </motion.div>
          </div>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1.5 text-xs font-semibold ${colors.tagBg} ${colors.tagText} rounded-full border ${colors.border} border-opacity-30`}
          >
            {report.category}
          </motion.span>
        </div>

        {/* Title - Flex grow to push footer down */}
        <h3 className="relative text-base font-semibold text-gray-700 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors flex-grow text-center px-4">
          {report.title}
        </h3>

        {/* Footer - Always at bottom */}
        <div className="relative flex items-center justify-end gap-3 pt-4 border-t border-gray-200 mt-auto group-hover:border-gray-300 transition-colors">
          <span className={`text-sm font-semibold text-gray-600 group-hover:${colors.iconColor} transition-colors`}>
            View Dashboard
          </span>
          <motion.div
            className={`p-2 rounded-lg ${colors.accent} shadow-md`}
            whileHover={{ scale: 1.15, rotate: 45 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Subtle shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent pointer-events-none"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: isHovered ? '100%' : '-100%', opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Interactive ripple effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 0 : 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gray-200/20 rounded-xl" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default ReportCard;
