'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10, height: 0 },
          { opacity: 1, y: 0, height: 'auto', duration: 0.25 }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -10,
          height: 0,
          duration: 0.25,
        });
      }
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-[1000px]">
      {/* Floating Glass Container */}
      <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl shadow-black/40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-[75px] h-[75px] flex-shrink-0">
                <Image
                  src="/images/logo/incurify.png"
                  alt="INCURIFY Logo"
                  width={75}
                  height={75}
                  className="object-contain w-full h-full"
                  priority
                />
                
              </div>
              {/* <span className="text-xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                INCURIFY
              </span> */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashLink(e, link.href)}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleHashLink(e, '/#contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/40 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl rounded-b-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashLink(e, link.href)}
                  className="block text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleHashLink(e, '/#contact')}
                className="block text-center px-6 py-3 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-white rounded-xl font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
