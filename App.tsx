import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

// Static imports for instant navigation
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import GearsPage from './pages/GearsPage';
import SetupPage from './pages/SetupPage';
import BooksPage from './pages/BooksPage';
import MoviesPage from './pages/MoviesPage';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.15 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><BlogsPage /></PageTransition>} />
        <Route path="/blogs/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/gear" element={<PageTransition><GearsPage /></PageTransition>} />
        <Route path="/gears" element={<PageTransition><GearsPage /></PageTransition>} />
        <Route path="/setup" element={<PageTransition><SetupPage /></PageTransition>} />
        <Route path="/books" element={<PageTransition><BooksPage /></PageTransition>} />
        <Route path="/movies" element={<PageTransition><MoviesPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col font-sans selection:bg-zinc-900/10 dark:selection:bg-zinc-100/10 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100">
          <Navbar />
          <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full overflow-x-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  );
};

export default App;