import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, ScrollProgress, PageTransition } from './components';
import {
  Home,
  About,
  Services,
  Process,
  Pricing,
  Contact,
  CaseStudies,
  Blog,
  Careers,
  PrivacyPolicy,
} from './pages';

/**
 * ScrollToTop Component
 * Scrolls to top on route change with smooth behavior
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

/**
 * AppContent Component
 * Contains routes wrapped in PageTransition for animations
 */
const AppContent = () => {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </PageTransition>
  );
};

/**
 * App Component
 * Main application with routing, page transitions, and scroll progress
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
