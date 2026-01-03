'use client';

import FeatureCard from '@/components/FeatureCard';
import { features } from '@/data/stats';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Why Choose{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] max-w-2xl mx-auto">
            Experience excellence in every project we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

