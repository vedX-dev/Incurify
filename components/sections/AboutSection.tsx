'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/data/stats';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Premium number formatter: converts large numbers to K/M format
function formatStatValue(value: number, prefix: string, suffix: string, useKFormat: boolean = false): string {
  let formatted = '';
  
  if (useKFormat && value >= 1000) {
    if (value >= 1000000) {
      const millions = value / 1000000;
      formatted = millions % 1 === 0 ? `${millions}M` : `${millions.toFixed(1)}M`;
    } else {
      const thousands = value / 1000;
      formatted = thousands % 1 === 0 ? `${thousands}K` : `${thousands.toFixed(1)}K`;
    }
  } else {
    formatted = value.toLocaleString();
  }
  
  return `${prefix}${formatted}${suffix}`;
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const glow = glowRef.current;
    const heading = headingRef.current;
    const body = bodyRef.current;
    const statsContainer = statsRef.current;
    const dividerRef = document.querySelector('.narrative-divider') as HTMLElement;
    const missionVision = missionVisionRef.current;
    const background = backgroundRef.current;
    const zoneRefs = {
      text: document.querySelector('.zone-text') as HTMLElement,
      stats: document.querySelector('.zone-stats') as HTMLElement,
      mission: document.querySelector('.zone-mission') as HTMLElement,
    };

    // Create master timeline for section reveal
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Background glow fades in first
    if (glow) {
      gsap.set(glow, { opacity: 0 });
      masterTimeline.to(glow, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    }

    // 2. Heading: opacity + translateY (subtle)
    if (heading) {
      gsap.set(heading, { opacity: 0, y: 20 });
      masterTimeline.to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    }

    // 3. Paragraph: fade-in (after heading completes)
    if (body) {
      gsap.set(body, { opacity: 0 });
      masterTimeline.to(
        body,
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }

    // 4. Narrative divider: fade in after paragraph
    if (dividerRef) {
      gsap.set(dividerRef, { opacity: 0, scaleX: 0 });
      masterTimeline.to(
        dividerRef,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    // 5. Stats: premium staggered reveal with counter animation
    if (statsContainer) {
      const statCards = statsContainer.querySelectorAll('.stat-card');
      
      // Initial state: subtle entrance setup
      gsap.set(statCards, { 
        opacity: 0, 
        y: 25, 
        scale: 0.96 
      });

      // Card entrance animation: staggered, premium feel
      masterTimeline.to(
        statCards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: {
            amount: 0.4,
            from: 'start',
          },
        },
        '-=0.2'
      );

      // Premium counter animation for each stat card
      statCards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const valueElement = cardElement.querySelector('.stat-value') as HTMLElement;
        const borderElement = cardElement.querySelector('.stat-border') as HTMLElement;

        if (!valueElement) return;

        const targetValue = parseInt(cardElement.dataset.value || '0', 10);
        const prefix = cardElement.dataset.prefix || '';
        const suffix = cardElement.dataset.suffix || '';
        const useKFormat = cardElement.dataset.useKFormat === 'true';

        // Set initial value to 0 with proper formatting
        valueElement.textContent = formatStatValue(0, prefix, suffix, useKFormat);

        // Border/glow highlight setup
        if (borderElement) {
          gsap.set(borderElement, { opacity: 0 });
        }

        // Create ScrollTrigger for counter animation
        ScrollTrigger.create({
          trigger: cardElement,
          start: 'top 85%',
          toggleActions: 'play none none none', // Only animate once on enter
          onEnter: () => {
            // Create a timeline for coordinated animations
            const cardTimeline = gsap.timeline();

            // Subtle scale settle (premium feel)
            cardTimeline.to(
              cardElement,
              {
                scale: 1,
                duration: 0.7,
                ease: 'power3.out',
              },
              0
            );

            // Soft glow reveal
            if (borderElement) {
              cardTimeline.to(
                borderElement,
                {
                  opacity: 1,
                  duration: 1,
                  ease: 'power2.out',
                },
                0.1
              );
            }

            // Premium counter animation
            const counterObj = { value: 0 };
            cardTimeline.to(
              counterObj,
              {
                value: targetValue,
                duration: 2.5,
                ease: 'power3.out',
                onUpdate: function () {
                  const currentValue = Math.floor(this.targets()[0].value);
                  
                  // Format with K/M notation for large numbers if enabled
                  valueElement.textContent = formatStatValue(currentValue, prefix, suffix, useKFormat);
                },
              },
              0.2
            );
          },
        });
      });
    }

    // 6. Mission & Vision: delayed opacity settle
    if (missionVision) {
      const missionVisionCards = missionVision.querySelectorAll('.mission-vision-card');
      gsap.set(missionVisionCards, { opacity: 0.4, y: 20 });

      ScrollTrigger.create({
        trigger: statsContainer,
        start: 'bottom 75%',
        toggleActions: 'play none none none',
        animation: gsap.to(missionVisionCards, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15,
        }),
      });
    }

    // 7. Subtle background parallax
    if (background) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2.5,
        animation: gsap.to(background, {
          y: '-4%',
          ease: 'none',
        }),
      });
    }

    // 8. Zone background variations (subtle)
    Object.entries(zoneRefs).forEach(([key, zone]) => {
      if (zone) {
        const bgElement = zone.querySelector('.zone-bg') as HTMLElement;
        if (bgElement) {
          ScrollTrigger.create({
            trigger: zone,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1,
            onEnter: () => {
              gsap.to(bgElement, {
                opacity: 1,
                duration: 0.5,
              });
            },
            onLeave: () => {
              gsap.to(bgElement, {
                opacity: 0,
                duration: 0.5,
              });
            },
            onEnterBack: () => {
              gsap.to(bgElement, {
                opacity: 1,
                duration: 0.5,
              });
            },
            onLeaveBack: () => {
              gsap.to(bgElement, {
                opacity: 0,
                duration: 0.5,
              });
            },
          });
        }
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars?.trigger === section ||
          trigger.vars?.trigger === statsContainer ||
          (trigger.vars?.trigger && statsContainer?.contains(trigger.vars.trigger as Node))
        ) {
          trigger.kill();
        }
      });
      masterTimeline.kill();
    };
  }, []);

  return (
    <>
      {/* Purple Contrast Section */}
      <section ref={sectionRef} id="about" className="relative overflow-hidden w-full">
        {/* Full-width gradient background with parallax */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 w-full"
          style={{
            background: `
   radial-gradient(
     120% 100% at 50% 0%,
     #4B2A8E 0%,
     #2A0A4E 45%,
     #14081F 75%,
     #000000 100%
   )
 `,
          }}
        />
        
        {/* Additional curved gradient overlay for depth */}
        <div 
          className="absolute inset-0 w-full opacity-60"
          style={{
            background: `
              radial-gradient(
                ellipse 150% 120% at 20% 40%,
                rgba(139, 108, 255, 0.3) 0%,
                rgba(59, 26, 110, 0.2) 40%,
                transparent 70%
              )
            `,
          }}
        />
        
        {/* Subtle Noise Texture - Natural Background Texture */}
        <div className="absolute inset-0 w-full pointer-events-none overflow-hidden z-[1]">
          {/* Primary Noise Layer - Grayscale texture that blends naturally */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='naturalNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer in='noise' result='contrast'%3E%3CfeFuncA type='discrete' tableValues='0 0.2 0.4 0.6 0.8 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23naturalNoise)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
              imageRendering: 'pixelated',
              opacity: 0.2,
              mixBlendMode: 'overlay',
            } as React.CSSProperties}
          />
        </div>
        {/* Subtle vignette for focus */}
        <div
          className="absolute inset-0 pointer-events-none z-[0]"
          style={{
            background: `
              radial-gradient(
                140% 120% at 50% 40%,
                transparent 55%,
                rgba(0,0,0,0.35) 100%
              )
            `,
          }}
        />
        {/* Bottom vignette for smooth section transition */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none z-[0]"
          style={{
            background: `
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.25) 45%,
                rgba(0,0,0,0.55) 75%,
                rgba(0,0,0,0.85) 100%
              )
            `,
          }}
        />

        {/* Content container with improved spacing */}
        <div className="relative z-10 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Background glow - animated */}
              <div 
                ref={glowRef}
                className="absolute -inset-4 sm:-inset-8 md:-inset-12 bg-gradient-to-r from-[#8B6CFF]/15 via-[#3B1A6E]/8 to-transparent blur-3xl rounded-3xl -z-10"
              />
              
              <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
                {/* Text Zone - subtle background variation */}
                <div className="zone-text relative">
                  {/* Subtle zone background */}
                  <div className="zone-bg absolute -inset-2 sm:-inset-4 md:-inset-8 bg-gradient-to-b from-[#8B6CFF]/5 via-transparent to-transparent rounded-2xl opacity-0" />
                  
                  <div className="relative">
                    {/* Headline - enhanced typography */}
                    <div>
                      <h1 
                        ref={headingRef}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black instrument-serif-regular tracking-tight leading-[0.9] mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                        style={{ fontWeight: 500, WebkitTextStroke: '0.5px currentColor' } as React.CSSProperties}
                      >
                        <span className="text-white">About </span>
                        <span className="bg-gradient-to-r from-white via-[#B7A6FF] to-[#8B6CFF] bg-clip-text text-transparent">
                          Incurify.
                        </span>
                      </h1>
                    </div>

                    {/* Body text - narrower width (~60ch) */}
                    <div ref={bodyRef} className="space-y-3 sm:space-y-4 md:space-y-6 max-w-full sm:max-w-[60ch]">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        We are a{' '}
                        <span className="text-[#B7A6FF] font-medium">marketing agency</span> built to solve the real growth
                        challenges in Web3.{' '}
                        We help Web3 projects turn strong{' '}
                        products into recognized brands through strategic marketing, influencer partnerships, and high-quality community growth.
                        We prioritize clarity over noise, strategy over hype, and long-term impact over short-term metrics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Narrative Divider - binds stats to paragraph */}
              <div className="narrative-divider relative -mx-2 sm:-mx-4">
                <div className="h-px bg-gradient-to-r from-transparent via-[#8B6CFF]/20 to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8B6CFF]/30 blur-sm" />
              </div>

              {/* Stats Zone - reduced visual separation */}
              <div ref={statsRef} className="zone-stats grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative">
                {/* Subtle zone background */}
                <div className="zone-bg absolute -inset-2 sm:-inset-4 md:-inset-6 bg-gradient-to-b from-transparent via-[#3B1A6E]/5 to-transparent rounded-2xl opacity-0" />
                {stats.map((stat) => {
                  // Extract numeric value, prefix, and suffix
                  const match = stat.value.match(/(\$?)(\d+)(\+?)/);
                  const prefix = match?.[1] || '';
                  const numericValue = match ? parseInt(match[2], 10) : 0;
                  const suffix = match?.[3] || '';
                  // Use K format for values >= 1000
                  const useKFormat = numericValue >= 1000;
                  
                  return (
                    <div
                      key={stat.id}
                      className="stat-card relative p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 overflow-hidden group"
                      data-value={numericValue}
                      data-prefix={prefix}
                      data-suffix={suffix}
                      data-use-k-format={useKFormat.toString()}
                    >
                      {/* Animated border glow - soft emphasis */}
                      <div className="stat-border absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-[#8B6CFF]/15 via-[#3B1A6E]/8 to-transparent opacity-0 pointer-events-none" />
                      
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                      
                      {/* Stat value - will be animated */}
                      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 stat-value tabular-nums relative z-10 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] flex items-center">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-[#B7A6FF] font-medium relative z-10">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mission & Vision Zone - simplified, declarative */}
              <div ref={missionVisionRef} className="zone-mission grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative">
                {/* Subtle zone background */}
                <div className="zone-bg absolute -inset-2 sm:-inset-4 md:-inset-8 bg-gradient-to-b from-transparent via-[#3B1A6E]/5 to-transparent rounded-2xl opacity-0" />
                
                {/* Animated gradient divider */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8B6CFF]/20 to-transparent -translate-x-1/2" />
                
                <div className="mission-vision-card relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 overflow-hidden group">
                  {/* Gradient accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B6CFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h2 
                    className="instrument-serif-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight text-white"
                    style={{ fontWeight: 500, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}
                  >
                    Our Mission
                  </h2>
                  <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg space-y-2 sm:space-y-3 md:space-y-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <span className="block">
                      To empower businesses and individuals to embrace the{' '}
                      <span className="text-[#B7A6FF]">decentralized future</span>.
                    </span>
                    <span className="block">
                      We provide world-class Web3 solutions that make blockchain technology accessible, secure, and user-friendly.
                    </span>
                  </p>
                </div>

                <div className="mission-vision-card relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 overflow-hidden group">
                  {/* Gradient accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B6CFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h2 
                    className="instrument-serif-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight text-white"
                    style={{ fontWeight: 500, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}
                  >
                    Our Vision
                  </h2>
                  <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg space-y-2 sm:space-y-3 md:space-y-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <span className="block">
                      To become the leading <span className="text-[#B7A6FF]">Web3 agency</span> that shapes the future of decentralized technology.
                    </span>
                    <span className="block">
                      We envision a world where <span className="text-[#B7A6FF]">blockchain</span> powers transparent, efficient, and equitable systems that benefit humanity.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

