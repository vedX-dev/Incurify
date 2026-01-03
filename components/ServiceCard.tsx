'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LucideIcon } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
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
        {/* Icon */}
        <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#8B6CFF] group-hover:text-[#B7A6FF] transition-colors" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B6CFF] group-hover:to-[#B7A6FF] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-[#B7A6FF] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
