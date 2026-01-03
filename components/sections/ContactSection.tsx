'use client';

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
          <h1 className="xl:text-4xl text-3xl font-medium instrument-serif-regular tracking-wide" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Get in{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your Web3 vision to life? Contact us today and let's
            start building the future together.
          </p>
        </div>

        <div className="mb-20">
          {/* Contact Form */}
          <div className="animate-on-scroll max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-on-scroll">
          <h2 className="xl:text-4xl text-3xl font-medium instrument-serif-regular tracking-wide" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Frequently Asked{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
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

