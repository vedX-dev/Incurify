'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';
import { ParallaxElement } from '@/components/ui/parallax-section';
import { ParticleBackground } from '@/components/ui/particle-background';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const whyChooseUsPoints = [
  {
    id: '01',
    title: 'Ship with Clarity',
    description:
      'We help teams launch with clear positioning, aligned creators, and ready communities.',
  },
  {
    id: '02',
    title: 'Grow Through Adoption',
    description:
      'Growth focused on real users, repeat engagement, and steady momentum.',
  },
  {
    id: '03',
    title: 'Sustain What Works',
    description:
      'Systems designed to keep communities active and relevant over time.',
  },
  {
    id: '04',
    title: 'Long-Term Thinking',
    description:
      'Decisions made for durability, not short-term spikes.',
  },
  {
    id: '05',
    title: 'Practical Execution',
    description:
      'Less theory, more shipping and iteration.',
  },
  {
    id: '06',
    title: 'Native to Web3',
    description:
      'Built around Web3 culture, behavior, and live market conditions.',
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger && sectionRef.current?.contains(trigger.vars.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="why-choose-us"
      ref={sectionRef}
      className="relative w-full bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Three.js Particle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <ParticleBackground 
          particleCount={300} 
          color="#8B6CFF" 
          speed={0.15} 
          size={1}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ParallaxElement speed={0.2} direction="up">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-akira-expanded px-4" style={{ fontWeight: 100, WebkitTextStroke: '0.1px currentColor' } as React.CSSProperties}>
              <TextVerticalSwap as="span" duration={0.3}>
                <span className="bg-white bg-clip-text text-transparent">
                  Why {' '}
                </span>
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                 Incurify?
                </span>
                
              </TextVerticalSwap>
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            Because growth only matters if it holds up over time.
            </p>
          </div>
        </ParallaxElement>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <ParallaxElement key={point.id} speed={0.15 + (index % 3) * 0.05} direction={index % 2 === 0 ? 'up' : 'down'}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 hover:border-[#8B6CFF]/30 transition-all duration-300 hover:scale-[1.02]"
              >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#8B6CFF]/0 via-[#3B1A6E]/0 to-transparent group-hover:from-[#8B6CFF]/10 group-hover:via-[#3B1A6E]/5 group-hover:to-transparent transition-all duration-300 -z-10" />

              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E] mb-4 sm:mb-6 text-white font-bold text-base sm:text-lg shadow-lg shadow-[#8B6CFF]/20">
                {point.id}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#B7A6FF] transition-colors duration-300">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {point.description}
              </p>
            </div>
            </ParallaxElement>
          ))}
        </div>
      </div>
    </section>
  );
}

