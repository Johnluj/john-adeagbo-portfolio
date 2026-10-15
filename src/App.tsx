import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomeView } from './components/home/HomeView';
import { WorkView } from './components/work/WorkView';
import { ServicesView } from './components/services/ServicesView';
import { QuoteWizardView } from './components/wizard/QuoteWizardView';
import { BookingView } from './components/booking/BookingView';
import { AboutView } from './components/about/AboutView';
import { SkillsView } from './components/skills/SkillsView';
import { HireMeView } from './components/hire/HireMeView';
import { TrainingView } from './components/training/TrainingView';
import { ArticlesView } from './components/articles/ArticlesView';
import { ResumeView } from './components/resume/ResumeView';
import { ContactView } from './components/contact/ContactView';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PortfolioAssistant } from './components/ai/PortfolioAssistant';
import { smoothScrollTo } from './utils/smoothScroll';
import { motion, AnimatePresence } from 'motion/react';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'work':
        return <WorkView />;
      case 'services':
        return <ServicesView />;
      case 'quote-wizard':
        return <QuoteWizardView />;
      case 'book':
        return <BookingView />;
      case 'about':
        return <AboutView />;
      case 'skills':
        return <SkillsView />;
      case 'hire-me':
        return <HireMeView />;
      case 'training':
        return <TrainingView />;
      case 'articles':
        return <ArticlesView />;
      case 'resume':
        return <ResumeView />;
      case 'contact':
        return <ContactView />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomeView />;
    }
  };

  const { scrollProgress } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Animated Smooth Scroll To Top Button */}
      {scrollProgress > 12 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={() => {
            smoothScrollTo(0, { duration: 650 });
          }}
          className="fixed bottom-5 left-5 z-40 p-3 bg-white dark:bg-slate-900 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-300 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 transition-all cursor-pointer group"
          aria-label="Scroll to top"
          title="Smooth scroll to top"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      <Footer />
      <PortfolioAssistant />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
