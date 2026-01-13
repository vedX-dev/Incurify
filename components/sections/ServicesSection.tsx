'use client';

import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';
import { ParallaxElement } from '@/components/ui/parallax-section';

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.2} direction="up">
          <div className="animate-on-scroll text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-akira-expanded px-4" style={{ fontWeight: 100, WebkitTextStroke: '0.1px currentColor' } as React.CSSProperties}>
              <TextVerticalSwap as="span" duration={0.3}>
                <span className="bg-white bg-clip-text text-transparent">
                  How we{' '}
                </span>
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                  Help
                </span>
              </TextVerticalSwap>
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto px-4 mt-3 sm:mt-4">
            Every service supports one of three stages: shipping, growing, or sustaining.
            </p>
          </div>
        </ParallaxElement>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <ParallaxElement 
              key={service.id} 
              speed={0.15 + (index % 4) * 0.05} 
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
                number={service.number}
              />
            </ParallaxElement>
          ))}
        </div>
      </div>
    </section>
  );
}

