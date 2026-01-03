'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        });
      }

      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          delay: 0.2,
        });
      }

      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.3,
        });
      }

      if (subheadlineRef.current) {
        gsap.from(subheadlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.4,
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen w-full bg-transparent relative overflow-hidden flex items-center justify-center">
      {/* Grid Pattern Background - Only on Hero Section */}
      <BGPattern variant="grid" mask="fade-edges" fill="rgba(139, 108, 255, 0.4)" size={49} opacity={0.6} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div ref={heroRef}>
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6CFF]/10 border border-[#8B6CFF]/30 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#8B6CFF]" />
            <span className="text-sm font-medium text-[#8B6CFF]">
              Building the Future of Web3
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="instrument-serif-regular text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-wide"
            style={{ fontWeight: 600, WebkitTextStroke: '0.px currentColor' } as React.CSSProperties}
          >
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Fueling{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Ideas
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Into Adoption.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to Incurify. we specialize in blockchain marketing, influencer partnerships, and strategic community growth desgined to solve visibility, adoption, and trust problems.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

