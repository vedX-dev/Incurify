'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GrowthEngineSection from '@/components/sections/GrowthEngineSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
