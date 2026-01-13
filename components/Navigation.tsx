'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/#about', label: 'ABOUT' },
  { href: '/#services', label: 'SERVICES' },
  { href: '/#contact', label: 'CONTACT' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.replace('/', '');
      const element = document.querySelector(hash);
      if (element) {
        // Lenis will handle the smooth scroll automatically via the SmoothScroll component
        window.location.hash = hash;
      } else {
        window.location.href = href;
      }
      setIsOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20, height: 0 },
          { 
            opacity: 1, 
            y: 0, 
            height: 'auto', 
            duration: 0.3,
            ease: 'power2.out'
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          height: 0,
          duration: 0.25,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Calculate progress from 0 to 1 over 100px of scroll
      const progress = Math.min(scrollPosition / 100, 1);
      setScrollProgress(progress);

      // Animate navbar width with GSAP (only on desktop)
      if (navRef.current && window.innerWidth >= 768) {
        const targetWidth = 800 + (1000 - 800) * (1 - progress);
        gsap.to(navRef.current, {
          maxWidth: `${targetWidth}px`,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else if (navRef.current && window.innerWidth < 768) {
        // Ensure full width on mobile
        gsap.set(navRef.current, {
          maxWidth: '100%',
        });
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-2 sm:top-4 left-0 right-0 z-50 w-full max-w-[1000px] mx-auto px-2 sm:px-4">
      {/* Floating Glass Container */}
      <div
        className="bg-black/10 backdrop-blur-md shadow-xl shadow-black/40 border border-white/20 transition-all duration-800 ease-out w-full"
        style={{
          borderColor: `rgba(255, 255, 255, ${scrollProgress * 0.1})`,
          borderRadius: `${12 + (24 - 12) * (1 - scrollProgress)}px`,
        }}
      >
        <div className="px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 min-w-0">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsOpen(false)}>
              <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex-shrink-0">
                <Image
                  src="/images/logo/incurify.png"
                  alt="INCURIFY Logo"
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                  priority
                />
            </div>
          </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                  onClick={(e) => handleHashLink(e, link.href)}
                  className="flex items-center text-white transition-all text-sm lg:text-base"
              >
                  <TextVerticalSwap as="span" duration={0.2}>
                {link.label}
                  </TextVerticalSwap>
                </a>
            ))}
          </div>

            {/* Desktop CTA */}
          <div className="hidden md:block">
              <a
                href="https://calendly.com/rougeincurify/consultation"
                onClick={(e) => handleHashLink(e, 'https://calendly.com/rougeincurify/consultation')}
                className="px-5 lg:px-6 py-2 lg:py-2.5 bg-[#3B1A6E] text-white rounded-xl font-medium transition-all duration-300 text-sm lg:text-base flex items-center"
            >
                <TextVerticalSwap as="span" duration={0.2}>
                  Chat with us
                </TextVerticalSwap>
              </a>
          </div>

            {/* Mobile Toggle */}
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 -mr-1 touch-manipulation flex-shrink-0"
            aria-label="Toggle menu"
              aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden"
            style={{ borderRadius: '0 0 12px 12px' }}
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashLink(e, link.href)}
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-base font-medium touch-manipulation"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/rougeincurify/consultation"
                onClick={(e) => handleHashLink(e, 'https://calendly.com/rougeincurify/consultation')}
                className="block mt-4 text-center px-6 py-3.5 bg-[#3B1A6E] text-white rounded-xl font-medium transition-all duration-300 active:scale-95 touch-manipulation flex items-center justify-center"
              >
                <TextVerticalSwap as="span" duration={0.2}>
                  Chat with us
                </TextVerticalSwap>
              </a>
            </div>
            </div>
        )}
      </div>
    </nav>
  );
}
