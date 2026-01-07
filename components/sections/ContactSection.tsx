'use client';

import ContactForm from '@/components/ContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';
import { ParallaxElement } from '@/components/ui/parallax-section';

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
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.2} direction="up">
          <div className="animate-on-scroll text-center mb-12 sm:mb-16 md:mb-20 relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-medium instrument-serif-regular tracking-wide px-4" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
              <TextVerticalSwap as="span" duration={0.3}>
                <span className="text-white bg-clip-text text-transparent">
                  Get in{' '}
                </span>
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent ">
                  Touch
                </span>
              </TextVerticalSwap>
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              Ready to bring your Web3 vision to life? Contact us today and let's
              start building the future together.
            </p>
          </div>
        </ParallaxElement>

        <ParallaxElement speed={0.15} direction="down">
          <div className="mb-12 sm:mb-16 md:mb-20">
            {/* Contact Form */}
            <div className="animate-on-scroll max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </ParallaxElement>

        {/* FAQ Section */}
        <ParallaxElement speed={0.2} direction="up">
          <div className="animate-on-scroll mx-auto w-full max-w-3xl space-y-6 sm:space-y-7 pt-12 sm:pt-16 px-4">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-medium instrument-serif-regular tracking-wide" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
                <TextVerticalSwap as="span" duration={0.3}>
                  <span className="text-white bg-clip-text text-transparent">
                    Frequently Asked{' '}
                  </span>
                  <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                    Questions
                  </span>
                </TextVerticalSwap>
              </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4">
              Here are some common questions and answers that you might encounter when working with us. If
              you don't find the answer you're looking for, feel free to reach out.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] dark:bg-black/40 w-full -space-y-px rounded-lg border border-[#8B6CFF]/20"
            defaultValue="item-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="relative border-x border-[#8B6CFF]/20 first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
              >
                <AccordionTrigger className="px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-[15px] leading-6 hover:no-underline text-white hover:text-[#8B6CFF] transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-white/70 pb-3 sm:pb-4 px-3 sm:px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-sm sm:text-base text-white/70 text-center">
            Can't find what you're looking for?{' '}
            <a href="#contact" className="text-[#8B6CFF] hover:text-[#B7A6FF] hover:underline transition-colors">
              Contact our support team
            </a>
          </p>
          </div>
        </ParallaxElement>
      </div>
    </section>
  );
}

