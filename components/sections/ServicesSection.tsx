'use client';

import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] max-w-2xl mx-auto">
            Comprehensive Web3 solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              End-to-End Solutions
            </h2>
            <p className="text-[#B7A6FF] leading-relaxed mb-4">
              We provide comprehensive Web3 services that cover every aspect of
              your project. From initial consultation and strategy development to
              smart contract deployment and ongoing maintenance, our team ensures
              success at every stage.
            </p>
            <p className="text-[#B7A6FF] leading-relaxed">
              Our integrated approach means you work with a single, cohesive team
              that understands your vision and delivers consistent, high-quality
              results across all disciplines.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Custom Solutions
            </h2>
            <p className="text-[#B7A6FF] leading-relaxed mb-4">
              Every project is unique, and we tailor our services to match your
              specific needs. Whether you're launching a DeFi protocol, building
              an NFT marketplace, or creating a DAO infrastructure, we adapt our
              expertise to your vision.
            </p>
            <p className="text-[#B7A6FF] leading-relaxed">
              Our flexible engagement models ensure you get exactly what you need,
              when you need it, without paying for services you don't require.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

