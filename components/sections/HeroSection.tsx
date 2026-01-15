'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';
import { ParallaxElement } from '@/components/ui/parallax-section';
import { ParticleBackground } from '@/components/ui/particle-background';

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
      {/* Three.js Particle Background */}
      <div className="absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 left-0 w-full h-[calc(100vh+3.5rem)] sm:h-[calc(100vh+4rem)] md:h-screen pointer-events-none z-[1]">
        <ParticleBackground 
          particleCount={800} 
          color="#8B6CFF" 
          speed={0.3} 
          size={1.5}
        />
      </div>





      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10 w-full flex items-center justify-center min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-screen">
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center w-full space-y-4 sm:space-y-6 md:space-y-8">
          {/* Badge */}
          <ParallaxElement speed={0.2} direction="down">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 bg-[#8B6CFF]/10 border border-[#8B6CFF]/30 rounded-full mb-2 sm:mb-4 md:mb-8 -mt-8 sm:-mt-0"
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
  className="font-akira-expanded text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-wide text-center w-full px-3 sm:px-4 md:px-6 leading-[1.05]"
  style={{
    fontWeight: 100,
    WebkitTextStroke: '0px currentColor',
    letterSpacing: '-0.02em',
  } as React.CSSProperties}
>
  <span className="bg-white bg-clip-text text-transparent">
    Web3&apos;s{' '}
  </span>

  <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
    Leading{' '}
  </span>

  <span className="bg-white bg-clip-text text-transparent whitespace-nowrap">
    Growth Partner
  </span>
</h1>

          </ParallaxElement>

          {/* Subheadline */}
          <ParallaxElement speed={0.25} direction="up">
            <p
              ref={subheadlineRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed text-center px-3 sm:px-4 md:px-6 mt-2 sm:mt-3 md:mt-4"
            >
              We work with Web3 teams that are building real products and want them to last. From early execution to ongoing growth, we help projects move forward with structure, clarity, and consistency.
            </p>
          </ParallaxElement>

          {/* CTA Buttons */}
          <ParallaxElement speed={0.2} direction="down">
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center w-full px-3 sm:px-4"
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
    </section>
  );
}

