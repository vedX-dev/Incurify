'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ChevronRight } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';
import { ParallaxElement } from '@/components/ui/parallax-section';
import { ParticleBackground } from '@/components/ui/particle-background';
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button';
import { TextAnimate } from '@/components/ui/text-animate';
import { cn } from '@/lib/utils';

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
          duration: 0.6,
          ease: "power2.out",
        });
      }

      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          scale: 0.8,
          y: -30,
          duration: 0.8,
          delay: 0.1,
          ease: "back.out(1.4)",
        });
      }

      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      if (subheadlineRef.current) {
        gsap.from(subheadlineRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: 0.6,
          ease: "power2.out",
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.8,
          delay: 0.9,
          ease: "back.out(1.2)",
        });
      }
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <section id ="hero"className="min-h-screen w-full bg-transparent relative overflow-visible flex items-center justify-center -mt-14 sm:-mt-16 md:mt-0 md:-mt-24">
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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-12 lg:py-16 xl:py-20 relative z-10 w-full flex items-center justify-center min-h-screen md:min-h-screen">
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center w-full space-y-0">
          {/* Badge */}
          <ParallaxElement speed={0.5} direction="down">
            <div
              ref={badgeRef}
              className="group relative mx-auto flex items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-[inset_0_-8px_10px_#8B6CFF1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8B6CFF3f] mb-4 sm:mb-5 md:mb-6 lg:mb-8 bg-black/20 backdrop-blur-sm"
            >
              <span
                className={cn(
                  "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] p-[1px] z-0"
                )}
                style={{
                  background: "linear-gradient(90deg, #8B6CFF 0%, #3B1A6E 25%, #EEE9FF 50%, #B7A6FF 75%, #8B6CFF 100%)",
                  backgroundSize: "300% 100%",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              <div className="relative z-20 flex items-center">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B6CFF]" />
                <hr className="mx-2 h-4 w-px shrink-0 bg-[#8B6CFF]/50" />
                <span
                  className="text-xs sm:text-sm font-medium animate-gradient inline-block"
                  style={{
                    background: "linear-gradient(90deg, #8B6CFF 0%, #3B1A6E 25%, #EEE9FF 50%, #B7A6FF 75%, #8B6CFF 100%)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Growth for Web3 Brands
                </span>
                <ChevronRight className="ml-1 size-3 sm:size-4 stroke-[#8B6CFF] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </div>
          </ParallaxElement>

          {/* Headline */}
          <ParallaxElement speed={0.3} direction="down">
            <h1
              ref={headlineRef}
              className="font-akira-expanded text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-0 tracking-tight text-center w-full leading-[1.1] sm:leading-[1.08] md:leading-[1.05] break-words overflow-hidden"
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

              <span className="bg-white bg-clip-text text-transparent sm:whitespace-nowrap">
                Growth Partner
              </span>
            </h1>
          </ParallaxElement>

          {/* Subheadline */}
          <ParallaxElement speed={0.15} direction="down">
            <div 
              ref={subheadlineRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 mt-4 sm:mt-5 md:mt-6 lg:mt-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed text-center w-full"
            >
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="p"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70"
                delay={0.6}
                duration={1}
                once={true}
              >
                We work with Web3 teams that are building real products and want them to last. From early execution to ongoing growth, we help projects move forward with structure, clarity, and consistency.
              </TextAnimate>
            </div>
          </ParallaxElement>

{/* CTA Buttons */}
<ParallaxElement speed={0.1} direction="down">
<div
  ref={ctaRef}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
>
    <AnimatedShinyButton
      url="#contact"
      className="w-full sm:w-auto text-base sm:text-base font-semibold touch-manipulation !px-8 !py-3.5 sm:!px-8 sm:!py-3.5 md:!px-10 md:!py-4 !text-white"
    >
      Start Your Project
    </AnimatedShinyButton>
</div>
</ParallaxElement>
</div>
</div>
</section>
);
}