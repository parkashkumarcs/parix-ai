import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

/**
 * Footer Component
 * Main footer with company info, quick links, services, and social media
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Workflow Automation', path: '/services#automation' },
    { name: 'Web Development', path: '/services#web' },
    { name: 'Mobile Apps', path: '/services#mobile' },
    { name: 'AI Integrations', path: '/services#ai' },
    { name: 'SaaS Development', path: '/services#saas' },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/parixai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/parixai', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/parixai', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/parixai', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">
                Parix<span className="text-indigo-500">.ai</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform your operations with AI-powered workflow automation and world-class development. Scale effortlessly with one powerful partner.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@parix.ai" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                hello@parix.ai
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +1 (xxx) xxx-xxxx
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                Remote, Global
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Parix.ai. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-white/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

