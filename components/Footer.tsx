'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/#hero' },
    { label: 'Why Choose Us', href: '/#why-choose-us' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
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

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: '#',
    icon: XIcon,
    hoverColor: 'hover:text-white',
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
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 ${social.hoverColor} hover:border-[#8B6CFF]/30 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <div className="relative z-10">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B6CFF]/0 to-transparent group-hover:from-[#8B6CFF]/20 transition-opacity duration-300" />
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
          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-right">
            <span>site by</span>{' '}
            <span className="underline">VedXdev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}




