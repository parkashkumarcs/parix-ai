import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, ScrollProgress } from './components';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

/**
 * App Component
 * Main application with routing and scroll progress indicator
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
