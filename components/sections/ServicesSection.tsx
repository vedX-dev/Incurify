'use client';

import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-medium instrument-serif-regular tracking-wide px-4" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
            <span className="bg-white bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto px-4 mt-3 sm:mt-4">
            Comprehensive Web3 solutions designed to bring your blockchain vision to life. From strategy to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
              number={service.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

