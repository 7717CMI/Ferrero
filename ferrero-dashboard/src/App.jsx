import { motion, AnimatePresence } from 'framer-motion';
import ReportCard from './components/ReportCard';
import Footer from './components/Footer';
import { reports } from './data/reports';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-gray-100">
      {/* Header Bar with Logo and Title */}
      <header className="bg-white border-b border-gray-200 px-10 md:px-16 py-6 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 md:h-14 object-contain"
          />

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Market Analysis Reports
          </h1>

          {/* Empty div for spacing balance */}
          <div className="w-28 md:w-36"></div>
        </div>
      </header>

      {/* Subtitle Section - Centered */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-center max-w-xl mb-4 text-base">
            Comprehensive market analysis for food processing, packaging, and manufacturing technologies
          </p>

          {/* Reports count badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-green-200 shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-green-600">{reports.length}</span> Reports Available
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main content - Reports Section - Flex grow to fill remaining space */}
      <div className="flex-1 px-10 md:px-16 lg:px-24 xl:px-32 py-8">
        {/* Reports Grid - Full width responsive with proper spacing */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full"
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
  );
}

export default App;
