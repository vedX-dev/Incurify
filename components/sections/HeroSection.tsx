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
    <section className="min-h-screen w-full bg-transparent relative overflow-visible flex items-center justify-center -mt-24">
      <div
  className="absolute top-0 left-[-100px] w-[900px] h-[900px] pointer-events-none z-0"
  style={{
    background: `
      radial-gradient(
        circle at 5% 0%,
        rgba(139,108,255,0.85) 0%,
        rgba(139,108,255,0.55) 18%,
        rgba(59,26,110,0.35) 35%,
        rgba(20,8,31,0.20) 50%,
        transparent 50%
      )
    `,
    filter: 'blur(200px)',
    mixBlendMode: 'screen',
  }}
/>
      {/* Grid Pattern Background - Starts from top of viewport */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-[1]">
        <BGPattern variant="grid" mask="fade-edges" fill="rgba(139, 108, 255, 0.4)" size={49} opacity={0.6} />
      </div>





      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 w-full">
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center w-full">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#8B6CFF]/10 border border-[#8B6CFF]/30 rounded-full mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B6CFF]" />
            <span className="text-xs sm:text-sm font-medium text-[#8B6CFF]">
            Growth for Web3 Brands
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="instrument-serif-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-6 tracking-wide text-center w-full px-4"
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
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4"
          >
            Welcome to Incurify. we specialize in blockchain marketing, influencer partnerships, and strategic community growth desgined to solve visibility, adoption, and trust problems.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Button - X (Twitter) - Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <a
          href="#"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#8B6CFF]/30 transition-all duration-300"
          aria-label="Follow us on X (Twitter)"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B6CFF]/0 to-transparent group-hover:from-[#8B6CFF]/20 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
}

