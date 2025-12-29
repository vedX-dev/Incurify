'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
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
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Web3 solutions designed to bring your blockchain vision
            to life. From strategy to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              End-to-End Solutions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We provide comprehensive Web3 services that cover every aspect of
              your project. From initial consultation and strategy development to
              smart contract deployment and ongoing maintenance, our team ensures
              success at every stage.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our integrated approach means you work with a single, cohesive team
              that understands your vision and delivers consistent, high-quality
              results across all disciplines.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Custom Solutions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Every project is unique, and we tailor our services to match your
              specific needs. Whether you're launching a DeFi protocol, building
              an NFT marketplace, or creating a DAO infrastructure, we adapt our
              expertise to your vision.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our flexible engagement models ensure you get exactly what you need,
              when you need it, without paying for services you don't require.
            </p>
          </div>
        </motion.div>

        {/* Process Section */}
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
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We start by understanding your goals, challenges, and vision for the project.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Develop a comprehensive roadmap with clear milestones and deliverables.',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'Build and test your solution using industry best practices and cutting-edge tools.',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'Deploy your project and provide ongoing maintenance and optimization.',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent opacity-30 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ready to Get{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your Web3
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
