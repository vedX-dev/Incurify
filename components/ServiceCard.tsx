'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  number?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  index,
  number,
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
      className="group relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-[#8B6CFF]/30 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-[#8B6CFF]/10"
    >
      {/* Number in top right corner */}
      {number && (
        <div className="absolute top-4 right-4 text-2xl font-bold text-white/10 group-hover:text-[#8B6CFF]/30 transition-colors duration-300">
          {number}
        </div>
      )}

      {/* Premium gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B6CFF]/0 via-[#8B6CFF]/0 to-[#8B6CFF]/0 group-hover:from-[#8B6CFF]/5 group-hover:via-[#8B6CFF]/3 group-hover:to-[#8B6CFF]/5 transition-all duration-300 rounded-xl" />

      {/* Subtle inner glow */}
      <div className="absolute inset-[1px] bg-gradient-to-br from-black/60 to-black/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Service Icon Image */}
        <div className="mb-4 w-12 h-12 relative group-hover:scale-110 transition-transform duration-300">
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-300">
          {title}
        </h3>
        <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}
