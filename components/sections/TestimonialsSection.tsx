'use client';

import ClientFeedback from '@/components/sections/testimonial';
import { ParallaxElement } from '@/components/ui/parallax-section';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.2} direction="up">
          <ClientFeedback />
        </ParallaxElement>
      </div>
    </section>
  );
}

