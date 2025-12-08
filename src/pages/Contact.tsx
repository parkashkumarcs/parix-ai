import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@parix.ai', href: 'mailto:hello@parix.ai' },
  { icon: Phone, label: 'Phone', value: '+1 (xxx) xxx-xxxx', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Location', value: 'Remote, Global', href: null },
];

const services = [
  'Workflow Automation',
  'Web Development',
  'Mobile App Development',
  'AI Integrations',
  'SaaS Development',
  'Branding & UI/UX',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-28">
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Contact Us"
            title={<>Let's Build Something <span className="gradient-text">Powerful</span> Together</>}
            subtitle="Have a project idea? Need automation? Want to scale faster? We're here to help."
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-base font-medium hover:text-pink-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-base font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">Office Hours</h3>
                <p className="text-gray-400 text-base">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                <p className="text-gray-400 text-base">Weekend: By appointment</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="glass rounded-2xl p-10 lg:p-14 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 lg:p-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-3">Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-3">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-base font-medium text-gray-300 mb-3">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        placeholder="Your Company" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-base font-medium text-gray-300 mb-3">Service Needed</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none cursor-pointer">
                        <option value="" className="bg-dark-400">Select a service</option>
                        {services.map((service) => (<option key={service} value={service} className="bg-dark-400">{service}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-3">Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                      placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-pink-500/25 transition-all disabled:opacity-50">
                    {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : (<><Send className="w-5 h-5" />Send Message</>)}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

