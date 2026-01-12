'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';
import { ParallaxElement } from '@/components/ui/parallax-section';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// X (Twitter) icon SVG component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function TeamSection() {
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
          y: 30,
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
    <section
      ref={sectionRef}
      id="team"
      className="relative w-full bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ParallaxElement speed={0.2} direction="up">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-medium instrument-serif-regular tracking-wide px-4" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
              <TextVerticalSwap as="span" duration={0.3}>
                <span className="bg-white bg-clip-text text-transparent">
                  Meet the{' '}
                </span>
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                  Team
                </span>
              </TextVerticalSwap>
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              The people behind Incurify
            </p>
          </div>
        </ParallaxElement>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 ">
          {teamMembers.map((member, index) => (
            <ParallaxElement
            key={member.id}
            speed={0.15 + (index % 4) * 0.05}
            direction="up"
          >
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative flex items-center gap-5 rounded-2xl border border-white/10 bg-[rgb(20,20,20)] px-5 py-4"
            >
              {/* Left: Profile Picture */}
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white/40">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                )}
              </div>
          
              {/* Right: Text Content */}
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <h3 className="truncate text-base font-semibold text-white">
                  {member.name}
                </h3>
          
                <p className="mt-0.5 text-sm text-white/60">
                  {member.role}
                </p>
          
                {/* Social Icons */}
                {member.twitterUrl && (
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={member.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on X`}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <XIcon className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ParallaxElement>
          
          ))}
        </div>
      </div>
    </section>
  );
}

