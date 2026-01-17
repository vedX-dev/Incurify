'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/#hero' },
    { label: 'Why Incurify?', href: '/#why-choose-us' },
    { label: 'How we Help', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
    { label: 'FAQ', href: '/#faq' },
  ],
};

// X (Twitter) icon SVG component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Telegram icon SVG component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.81c-.14.625-.52.78-1.05.485l-2.9-2.14-1.4 1.345c-.155.155-.285.285-.585.285l.21-2.98 5.375-4.855c.235-.21-.05-.325-.365-.12l-6.645 4.19-2.87-.895c-.625-.195-.64-.625.135-.95l11.25-4.33c.52-.195.975.12.81.69z" />
  </svg>
);

// LinkedIn icon SVG component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/Incurify_Web3',
    icon: XIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/rouge_eth',
    icon: TelegramIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/incurify/?viewAsMember=true',
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
    e.preventDefault();
      const hash = href.replace('/', '');
      // Lenis will handle the smooth scroll automatically via the SmoothScroll component
      window.location.hash = hash;
    }
  };

  return (
    <footer className="bg-black border-t border-[#8B6CFF]/20 relative overflow-hidden" style={{ zIndex: 20, isolation: 'isolate', position: 'relative', backgroundColor: '#000000' }}>
      {/* Azure Depths */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2A0A4E 100%)",
          zIndex: 0,
          backgroundColor: '#000000',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-10 sm:mb-12">
          {/* Logo Section - Large and Prominent */}
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 sm:mb-8 group">
              <div className="relative">
                <Image
                  src="/images/logo/incurify.png"
                  alt="Incurify Logo"
                  width={300}
                  height={300}
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6CFF]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-sm mb-6 sm:mb-8">
             Incurify - 
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
              </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200 inline-block"
                  >
                    <TextVerticalSwap as="span" duration={0.3}>
                    {link.label}
                    </TextVerticalSwap>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - Premium Design */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Stay Updated</h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 leading-relaxed">
              Get the latest insights, updates, and Web3 marketing strategies delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3 sm:space-y-4">
              {isSubmitted && (
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl flex items-center gap-2 sm:gap-3 backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-green-400 font-medium">
                    Successfully subscribed! Check your inbox.
                  </p>
                </div>
              )}
              
              <div className="relative">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#8B6CFF]/50 focus:ring-2 focus:ring-[#8B6CFF]/20 transition-all duration-300 disabled:opacity-50"
                />
                {/* Input glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B6CFF]/0 via-[#3B1A6E]/0 to-transparent opacity-0 focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#8B6CFF]/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Incurify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}




