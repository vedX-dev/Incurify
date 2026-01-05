'use client';

import ClientFeedback from '@/components/sections/testimonial';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientFeedback />
      </div>
    </section>
  );
}

