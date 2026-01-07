'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';
import { ParallaxElement } from '@/components/ui/parallax-section';

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
    <section className="min-h-screen w-full bg-transparent relative overflow-visible flex items-center justify-center pt-16 sm:pt-20 md:pt-0 md:-mt-24">
      {/* Azure Depths - Only at Hero Top - Extends upward to cover page padding */}
      <div
        className="absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 left-0 right-0 h-[calc(100vh+3.5rem)] sm:h-[calc(100vh+4rem)] md:h-screen z-0 pointer-events-none"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2A0A4E 100%)",
        }}
      />
      {/* Grid Pattern Background - Extends upward to cover page padding */}
      <div className="absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 left-0 w-full h-[calc(100vh+3.5rem)] sm:h-[calc(100vh+4rem)] md:h-screen pointer-events-none z-[1]">
        <BGPattern variant="grid" mask="fade-edges" fill="rgba(139, 108, 255, 0.4)" size={49} opacity={0.6} />
      </div>





      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10 w-full">
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center w-full">
          {/* Badge */}
          <ParallaxElement speed={0.2} direction="down">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 bg-[#8B6CFF]/10 border border-[#8B6CFF]/30 rounded-full mb-6 sm:mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 sm:w-4 sm:h-4 text-[#8B6CFF]" />
              <span className="text-sm sm:text-sm font-medium text-[#8B6CFF]">
                Growth for Web3 Brands
              </span>
            </div>
          </ParallaxElement>

          {/* Headline */}
          <ParallaxElement speed={0.3} direction="up">
            <h1
              ref={headlineRef}
              className="instrument-serif-regular text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-6 md:mb-6 tracking-tight sm:tracking-wide text-center w-full px-2 sm:px-4 leading-[1.1] sm:leading-[1.1]"
              style={{ fontWeight: 600, WebkitTextStroke: '0px currentColor' } as React.CSSProperties}
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
          </ParallaxElement>

          {/* Subheadline */}
          <ParallaxElement speed={0.25} direction="up">
            <p
              ref={subheadlineRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-10 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed sm:leading-relaxed text-center px-2 sm:px-4"
            >
              Welcome to Incurify, We specialize in blockchain marketing, influencer partnerships, and strategic community growth desgined to solve visibility, adoption, and trust problems.
            </p>
          </ParallaxElement>

          {/* CTA Buttons */}
          <ParallaxElement speed={0.2} direction="down">
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center w-full px-2 sm:px-4"
            >
              <a
                href="#contact"
                className="group w-full sm:w-auto px-8 py-4 sm:px-8 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 flex items-center justify-center gap-2.5 text-base sm:text-base touch-manipulation"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>
          </ParallaxElement>
        </div>
      </div>

      {/* Social Media Button - X (Twitter) - Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <a
          href="#"
          className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#8B6CFF]/30 transition-all duration-300"
          aria-label="Follow us on X (Twitter)"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
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

