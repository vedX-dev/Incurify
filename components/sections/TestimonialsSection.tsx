'use client';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Client{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>
        {/* Placeholder content - to be filled later */}
        <div className="text-center py-20">
          <p className="text-[#B7A6FF] text-lg">Testimonials section coming soon...</p>
        </div>
      </div>
    </section>
  );
}

