import { motion } from 'framer-motion';

const Header = ({ totalReports }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* Title Section - Centered */}
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2"
        >
          Market Analysis Reports
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-xl mx-auto mb-4"
        >
          Comprehensive market analysis for food processing, packaging, and manufacturing technologies
        </motion.p>

        {/* Reports count badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">{totalReports}</span> Reports Available
          </span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
