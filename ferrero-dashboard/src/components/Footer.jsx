import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="relative py-8 px-8 text-center bg-slate-50/50 border-t border-gray-200"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full" />

      <p className="text-gray-800 text-base font-semibold mb-2 mt-4">
        Ferrero Market Analysis Dashboard
      </p>
      <p className="text-gray-600 text-sm max-w-md mx-auto">
        Click on any report to view detailed market analysis and insights
      </p>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-gray-500 text-xs"
      >
        © {new Date().getFullYear()} Coherent Market Insights. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
