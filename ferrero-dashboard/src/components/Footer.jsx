import { motion } from 'framer-motion';
import { BarChart3, FileText, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="relative py-8 text-center bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-gray-200 backdrop-blur-sm"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

      {/* Icon row */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg"
        >
          <BarChart3 className="w-5 h-5 text-blue-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -360 }}
          transition={{ duration: 0.5 }}
          className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg"
        >
          <FileText className="w-5 h-5 text-purple-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg"
        >
          <TrendingUp className="w-5 h-5 text-emerald-600" />
        </motion.div>
      </div>

      <p className="text-gray-700 text-base font-semibold mb-2">
        Ferrero Market Analysis Dashboard
      </p>
      <p className="text-gray-500 text-sm max-w-md mx-auto">
        Click on any report to view detailed market analysis and insights
      </p>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-gray-400 text-xs"
      >
        © {new Date().getFullYear()} Coherent Market Insights. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
