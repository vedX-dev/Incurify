'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Hexagon, Twitter, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/#contact' },
  ],
  services: [
    { label: 'Web3 Strategy', href: '/#services' },
    { label: 'Smart Contracts', href: '/#services' },
    { label: 'Brand Design', href: '/#services' },
    { label: 'Security Audits', href: '/#services' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'FAQs', href: '/#contact' },
    { label: 'Support', href: '/#contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'Github' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
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
    <footer className="bg-[#0A0612] border-t border-[#8B6CFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Hexagon className="w-8 h-8 text-[#8B6CFF] fill-[#8B6CFF]/20" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Web3Agency
              </span>
            </Link>
            <p className="text-[#B7A6FF] mb-6 max-w-sm">
              Building the future of Web3 with innovative solutions and
              cutting-edge technology.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <label htmlFor="newsletter-email" className="text-sm text-[#B7A6FF]">
                Subscribe to our newsletter
              </label>
              {isSubmitted && (
                <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-500 text-sm font-medium">
                    Successfully subscribed!
                  </p>
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-[#3B1A6E] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] placeholder-[#B7A6FF] focus:outline-none focus:border-[#8B6CFF] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#EEE9FF] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className="text-[#B7A6FF] hover:text-[#EEE9FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[#EEE9FF] font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className="text-[#B7A6FF] hover:text-[#EEE9FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-[#EEE9FF] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className="text-[#B7A6FF] hover:text-[#EEE9FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#8B6CFF]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B7A6FF] text-sm">
            © 2024 Web3Agency. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[#B7A6FF] hover:text-[#EEE9FF] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
