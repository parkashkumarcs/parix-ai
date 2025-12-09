import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Container, SectionTitle, Button, Card, Input, TextArea, Select } from '../components';

/**
 * Contact Page Component
 * Contact form and company information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const serviceOptions = [
    { value: 'automation', label: 'Workflow Automation' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'ai', label: 'AI Integrations' },
    { value: 'saas', label: 'SaaS Development' },
    { value: 'design', label: 'Branding & UI/UX Design' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be handled by backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <SectionTitle
            label="Contact Us"
            title="Let's Build Something Powerful Together"
            subtitle="Have a project idea? Need automation? Want to scale faster? We're here to help."
          />
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Whether you're looking to automate your workflows, build a new product, or transform your digital presence, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:hello@parix.ai" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      hello@parix.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      +1 (xxx) xxx-xxxx
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Remote, Global</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card variant="gradient" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <Input label="Name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                <Input label="Email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                <Input label="Business Name" name="business" placeholder="Your company name" value={formData.business} onChange={handleChange} />
                <Select label="Services Needed" name="service" options={serviceOptions} value={formData.service} onChange={handleChange} required />
                <TextArea label="Message" name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={5} required />
                <Button type="submit" className="w-full" icon={Send} iconPosition="right">Send Message</Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;

