import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="py-6 text-center bg-white border-t border-gray-200"
    >
      <p className="text-gray-500 text-sm">
        Ferrero Market Analysis Dashboard
      </p>
      <p className="mt-1 text-gray-400 text-xs">
        Click on any report to view detailed market analysis
      </p>
    </motion.footer>
  );
};

export default Footer;
