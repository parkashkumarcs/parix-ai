import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
  WorkflowAutomation,
  WebDevelopment,
  MobileDevelopment,
  AIIntegrations,
  BrandingDesign,
  SaaSDevelopment,
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
 * RedirectHandler Component
 * Handles GitHub Pages 404 redirect for SPA routing
 */
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

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
        <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-development" element={<MobileDevelopment />} />
        <Route path="/services/ai-integrations" element={<AIIntegrations />} />
        <Route path="/services/branding-design" element={<BrandingDesign />} />
        <Route path="/services/saas-development" element={<SaaSDevelopment />} />
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
    <Router basename="/parix-ai">
      <ScrollToTop />
      <RedirectHandler />
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
