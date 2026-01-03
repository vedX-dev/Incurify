'use client';

import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="xl:text-4xl text-3xl font-medium instrument-serif-regular tracking-wide" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
            <span className="bg-gradient-to-r from-gray-400 to-white  bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive Web3 solutions designed to bring your blockchain vision to life. From strategy to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

