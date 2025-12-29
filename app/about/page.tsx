'use client';

import { motion } from 'framer-motion';
import { Users, Target, Zap, Award } from 'lucide-react';
import { stats } from '@/data/stats';

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

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Web3Agency
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Leading the Web3 revolution with innovative blockchain solutions and
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 text-center"
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-3">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses and individuals to embrace the decentralized
              future by providing world-class Web3 solutions. We strive to make
              blockchain technology accessible, secure, and user-friendly for
              everyone, driving innovation and adoption across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To become the leading Web3 agency that shapes the future of
              decentralized technology. We envision a world where blockchain
              powers transparent, efficient, and equitable systems that benefit
              humanity as a whole, and we're committed to making that vision a
              reality.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Meet Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            A diverse group of blockchain experts, developers, designers, and
            strategists united by a passion for Web3 innovation.
          </p>

          <div className="p-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10">
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Our team consists of 50+ dedicated professionals from around the
              world, each bringing unique expertise in blockchain development,
              smart contracts, tokenomics, UI/UX design, and community
              management. Together, we've delivered over 100 successful projects
              and continue to push the boundaries of what's possible in Web3.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
