'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  number,
  title,
  description,
  index,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20 hover:border-[#8B6CFF]/50 transition-all duration-300"
    >
      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B6CFF]/5 to-[#B7A6FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative z-10">
        {/* Number */}
        <div className="mb-4">
          <span className="text-6xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity">
            {number}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B6CFF] group-hover:to-[#B7A6FF] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-[#B7A6FF] leading-relaxed">{description}</p>
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] group-hover:w-full transition-all duration-500 rounded-t-xl" />
    </div>
  );
}
