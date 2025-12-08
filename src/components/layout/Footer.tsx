import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Workflow Automation', path: '/services/automation' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'AI Integrations', path: '/services/ai-integrations' },
    { name: 'SaaS Development', path: '/services/saas-development' },
    { name: 'Branding & UI/UX', path: '/services/branding' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/parixai' },
  { icon: Linkedin, href: 'https://linkedin.com/company/parixai' },
  { icon: Github, href: 'https://github.com/parixai' },
  { icon: Instagram, href: 'https://instagram.com/parixai' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-400 border-t border-white/5">
      <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
              <span className="text-2xl font-bold text-white">Parix.ai</span>
            </Link>
            <p className="text-gray-400 text-base mb-8 max-w-sm leading-relaxed">
              AI-powered workflow automation and world-class development. Transform your operations and scale effortlessly.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@parix.ai" className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors text-base">
                <Mail className="w-5 h-5" />
                hello@parix.ai
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors text-base">
                <Phone className="w-5 h-5" />
                +1 (xxx) xxx-xxxx
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-base">
                <MapPin className="w-5 h-5" />
                Remote, Global
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-pink-400 transition-colors text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-pink-400 transition-colors text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-base mb-5">Get automation tips and product updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-5 py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-base font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-base">
            © {new Date().getFullYear()} Parix.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.path} className="text-gray-500 hover:text-gray-300 text-base">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-500/20 hover:text-pink-400 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

