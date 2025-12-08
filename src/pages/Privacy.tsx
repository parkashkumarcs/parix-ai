import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-28">
      <section className="section-padding">
        <div className="container-custom mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 mb-6">
                <Shield className="w-8 h-8 text-pink-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-lg">Last updated: December 2024</p>
            </div>

            {/* Content */}
            <div className="glass rounded-2xl p-8 lg:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  At Parix.ai, we value your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  We may collect information about you in a variety of ways:
                </p>
                <ul className="space-y-4 text-gray-400 text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and business name when you contact us or submit forms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Device Data:</strong> Browser type, operating system, and device identifiers.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-4 text-gray-400 text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Provide, operate, and maintain our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Improve and personalize your experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Send you updates, newsletters, and marketing communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Analyze usage patterns to improve our website</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your
                  personal information. However, no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Sharing</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  <strong className="text-pink-400">We do not sell your data to third parties.</strong> We may
                  share your information with trusted service providers who assist us in operating our website
                  and conducting our business, subject to confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also
                  opt out of receiving marketing communications from us at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <a href="mailto:privacy@parix.ai" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-lg">
                  <Mail className="w-5 h-5" />
                  privacy@parix.ai
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-500 text-base text-center">
                  By using our website, you agree to our privacy practices as described in this policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

