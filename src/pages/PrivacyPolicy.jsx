import { Shield, Mail } from 'lucide-react';
import { Container, SectionTitle, Card } from '../components';

/**
 * Privacy Policy Page Component
 * Privacy policy content
 */
const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and any other information you choose to provide.',
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send you updates and marketing communications (with your consent), and analyze how our services are used.',
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    },
    {
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the effective date.',
    },
  ];

  return (
    <main className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
        <Container className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <SectionTitle title="Privacy Policy" subtitle="At Parix.ai, we value your privacy and are committed to protecting your personal information." />
          <p className="text-center text-gray-500">Last updated: December 2024</p>
        </Container>
      </section>

      {/* Policy Content */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <Container size="sm">
          <Card variant="gradient" className="p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-8">
                This Privacy Policy describes how Parix.ai ("we", "us", or "our") collects, uses, and shares your personal information when you use our website and services.
              </p>

              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                  <p className="text-gray-400">{section.content}</p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/30">
                <h3 className="text-lg font-semibold text-white mb-2">Questions?</h3>
                <p className="text-gray-400 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <a href="mailto:privacy@parix.ai" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  privacy@parix.ai
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
};

export default PrivacyPolicy;

