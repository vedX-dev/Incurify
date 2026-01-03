'use client';

import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on scope and complexity. A simple smart contract might take 2-4 weeks, while a full DeFi protocol could take 3-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and optimization services. We can create a custom support package tailored to your needs.',
    },
    {
      question: 'What blockchain networks do you work with?',
      answer:
        'We have expertise across major blockchain networks including Ethereum, Polygon, Solana, Binance Smart Chain, Avalanche, and more. We help you choose the best network for your specific use case.',
    },
    {
      question: 'How do you ensure smart contract security?',
      answer:
        'Security is our top priority. All smart contracts undergo rigorous internal testing, automated security scans, and can be audited by third-party security firms before deployment.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Get in{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-[#B7A6FF] max-w-3xl mx-auto leading-relaxed">
            Ready to bring your Web3 vision to life? Contact us today and let's
            start building the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="animate-on-scroll space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8B6CFF]" />
                  </div>
                  <div>
                    <h3 className="text-[#EEE9FF] font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@web3agency.com"
                      className="text-[#B7A6FF] hover:text-[#8B6CFF] transition-colors"
                    >
                      hello@web3agency.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#8B6CFF]" />
                  </div>
                  <div>
                    <h3 className="text-[#EEE9FF] font-semibold mb-1">
                      Headquarters
                    </h3>
                    <p className="text-[#B7A6FF]">
                      San Francisco, CA
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#8B6CFF]" />
                  </div>
                  <div>
                    <h3 className="text-[#EEE9FF] font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[#B7A6FF]">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
              <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2">
                Quick Response
              </h3>
              <p className="text-[#B7A6FF] text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please mention it in your
                message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-on-scroll">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Frequently Asked{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] text-center mb-12 max-w-2xl mx-auto">
            Common questions about working with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
              >
                <h3 className="text-lg font-semibold text-[#EEE9FF] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#B7A6FF] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

