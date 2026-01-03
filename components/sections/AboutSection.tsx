'use client';

import { stats } from '@/data/stats';

export default function AboutSection() {

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="animate-on-scroll text-center mb-20">
          <h1 className="instrument-serif-regular text-5xl font-black mb-6 tracking-wide" style={{ fontWeight: 500, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}>
            <span className="bg-white to-gray-400 bg-clip-text text-transparent">
              About{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Incurify
            </span>
          </h1>
          <p className="text-xl text-[#B7A6FF] max-w-3xl mx-auto leading-relaxed">
            Leading the Web3 revolution with innovative blockchain solutions and
            cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="instrument-serif-regular text-5xl font-black mb-6 tracking-wide" style={{ fontWeight: 800, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}>
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                About{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Web3Agency
              </span>
            </h2>
            <p className="text-lg text-[#B7A6FF] mb-6 leading-relaxed">
              We are a team of passionate Web3 developers, designers, and
              strategists dedicated to building the decentralized future. With
              years of experience in blockchain technology, we deliver
              cutting-edge solutions that drive innovation and growth.
            </p>
            <p className="text-lg text-[#B7A6FF] mb-8 leading-relaxed">
              Our mission is to empower businesses and individuals to leverage
              the full potential of blockchain technology, creating secure,
              scalable, and user-friendly decentralized applications.
            </p>
          </div>

          <div className="animate-on-scroll grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-[#B7A6FF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-on-scroll p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
            <h2 className="instrument-serif-regular text-3xl font-black mb-4 tracking-wide bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent" style={{ fontWeight: 800, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}>
              Our Mission
            </h2>
            <p className="text-[#B7A6FF] leading-relaxed">
              To empower businesses and individuals to embrace the decentralized
              future by providing world-class Web3 solutions. We strive to make
              blockchain technology accessible, secure, and user-friendly for
              everyone, driving innovation and adoption across the globe.
            </p>
          </div>

          <div className="animate-on-scroll p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
            <h2 className="instrument-serif-regular text-3xl font-black mb-4 tracking-wide bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent" style={{ fontWeight: 800, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}>
              Our Vision
            </h2>
            <p className="text-[#B7A6FF] leading-relaxed">
              To become the leading Web3 agency that shapes the future of
              decentralized technology. We envision a world where blockchain
              powers transparent, efficient, and equitable systems that benefit
              humanity as a whole, and we're committed to making that vision a
              reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

