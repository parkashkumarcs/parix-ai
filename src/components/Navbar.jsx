import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import gsap from 'gsap';

/**
 * Navbar Component
 * Main navigation component with responsive mobile menu
 * Includes smooth scrolling and active page highlighting
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const hasAnimated = useRef(false);

  // Navigation links configuration
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar entrance animation - only on first mount
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-8 h-8 text-indigo-500 group-hover:text-pink-500 transition-colors" />
            <span className="text-2xl font-bold text-white">
              Parix<span className="text-indigo-500">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-md px-4 py-4 space-y-2 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-3 mt-4 text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

