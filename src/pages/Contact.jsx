import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Container, SectionTitle, Button, Card, Input, TextArea, Select, AnimatedSection, Background3D } from '../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Page Component
 * Contact form and company information
 */
const Contact = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero-content',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);
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
    <main className="bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden perspective-2000">
        <Background3D variant="hero" />
        <div className="absolute inset-0 bg-blue-50/50" />
        <Container className="relative z-10">
          <div className="contact-hero-content opacity-0">
            <SectionTitle
              label="Contact Us"
              title="Let's Build Something Powerful Together"
              subtitle="Have a project idea? Need automation? Want to scale faster? We're here to help."
            />
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="slideLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to automate your workflows, build a new product, or transform your digital presence, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:hello@parix.ai" className="text-gray-600 hover:text-blue-600 transition-colors">
                      hello@parix.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (xxx) xxx-xxxx
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Remote, Global</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slideRight" delay={0.2}>
              <Card variant="default" className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <Input label="Name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  <Input label="Email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  <Input label="Business Name" name="business" placeholder="Your company name" value={formData.business} onChange={handleChange} />
                  <Select label="Services Needed" name="service" options={serviceOptions} value={formData.service} onChange={handleChange} required />
                  <TextArea label="Message" name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={5} required />
                  <Button type="submit" className="w-full" icon={Send} iconPosition="right">Send Message</Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;

