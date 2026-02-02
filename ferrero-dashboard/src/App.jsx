import { motion, AnimatePresence } from 'framer-motion';
import ReportCard from './components/ReportCard';
import Footer from './components/Footer';
import { reports } from './data/reports';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/20 to-gray-50 p-4 md:p-6 lg:p-8">
      {/* Decorative background elements - subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-indigo-200/15 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/10 to-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-slate-200/10 to-blue-200/10 rounded-full blur-3xl" />
      </div>

      {/* Main content wrapper with rounded corners and margin */}
      <div className="flex-1 flex flex-col bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-gray-200">
        {/* Header Bar with Logo and Title */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 px-8 md:px-16 py-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-12 md:h-16 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent"
            >
              Market Analysis Reports
            </motion.h1>

            {/* Empty div for spacing balance */}
            <div className="w-28 md:w-36"></div>
          </div>
        </motion.header>

        {/* Subtitle Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-r from-blue-50/40 via-indigo-50/30 to-blue-50/40 backdrop-blur-sm border-b border-gray-200 py-8"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-center max-w-2xl mb-5 text-base md:text-lg font-medium px-4"
            >
              Comprehensive market analysis for food processing, packaging, and manufacturing technologies
            </motion.p>

            {/* Reports count badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 animate-ping" />
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium">
                <span className="font-bold text-blue-700">{reports.length}</span> Reports Available
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main content - Reports Section - Flex grow to fill remaining space */}
        <div className="relative flex-1 px-4 md:px-8 lg:px-12 xl:px-16 pt-32 md:pt-36 pb-16">
          {/* Reports Grid - Full width responsive with proper spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            <AnimatePresence mode="popLayout">
              {reports.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
