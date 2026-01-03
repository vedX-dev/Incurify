'use client';

import { Users, Target, Zap, Award } from 'lucide-react';
import { stats } from '@/data/stats';

export default function AboutSection() {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description:
        'We believe in building strong communities around every project, fostering engagement and long-term success.',
    },
    {
      icon: Target,
      title: 'Innovation Driven',
      description:
        'Constantly pushing boundaries and exploring new possibilities in the Web3 space.',
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description:
        'Delivering high-quality solutions quickly without compromising on security or performance.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Committed to maintaining the highest standards in every aspect of our work.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="animate-on-scroll text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              About{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Web3Agency
            </span>
          </h1>
          <p className="text-xl text-[#B7A6FF] max-w-3xl mx-auto leading-relaxed">
            Leading the Web3 revolution with innovative blockchain solutions and
            cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
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

        {/* Values Section */}
        <div className="animate-on-scroll mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] text-center mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20 hover:border-[#8B6CFF]/50 transition-all duration-300"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#8B6CFF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#B7A6FF] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="animate-on-scroll text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
              Meet Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-[#B7A6FF] mb-12 max-w-2xl mx-auto">
            A diverse group of blockchain experts, developers, designers, and
            strategists united by a passion for Web3 innovation.
          </p>

          <div className="p-12 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
            <p className="text-lg text-[#B7A6FF] leading-relaxed max-w-3xl mx-auto">
              Our team consists of 50+ dedicated professionals from around the
              world, each bringing unique expertise in blockchain development,
              smart contracts, tokenomics, UI/UX design, and community
              management. Together, we've delivered over 100 successful projects
              and continue to push the boundaries of what's possible in Web3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

