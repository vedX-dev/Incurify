'use client';

import { TestimonialsSection as TestimonialsMarquee } from '@/components/ui/testimonials-with-marquee';
import { testimonials } from '@/data/testimonials';
import { ParallaxElement } from '@/components/ui/parallax-section';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent relative" style={{ zIndex: 1 }}>
      <ParallaxElement speed={0.2} direction="up">
        <TestimonialsMarquee
          title={
            <>
              <span className="bg-white bg-clip-text text-transparent">
              What it's like to work with {' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
               Incurify{' '}
              </span>
            </>
          }
          description="Feedback from projects we’ve worked with closely."
          testimonials={testimonials}
        />
      </ParallaxElement>
    </section>
  );
}

