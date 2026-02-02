import { motion, AnimatePresence } from 'framer-motion';
import ReportCard from './components/ReportCard';
import Footer from './components/Footer';
import { reports } from './data/reports';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 p-4 md:p-6 lg:p-8">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-300/20 rounded-full blur-3xl" />
      </div>

      {/* Main content wrapper with rounded corners and margin */}
      <div className="flex-1 flex flex-col bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-white/60">
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
              className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
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
          className="relative bg-gradient-to-r from-blue-50/50 via-white/50 to-indigo-50/50 backdrop-blur-sm border-b border-gray-200/50 py-8"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 text-center max-w-2xl mb-5 text-base md:text-lg font-medium px-4"
            >
              Comprehensive market analysis for food processing, packaging, and manufacturing technologies
            </motion.p>

            {/* Reports count badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-300/50 shadow-lg shadow-green-200/50 backdrop-blur-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium">
                <span className="font-bold text-green-600">{reports.length}</span> Reports Available
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main content - Reports Section - Flex grow to fill remaining space */}
        <div className="relative flex-1 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12">
          {/* Reports Grid - Full width responsive with proper spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 h-full"
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
