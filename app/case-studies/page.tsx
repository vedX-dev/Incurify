'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
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
              Success{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful Web3 projects. From DeFi
            protocols to NFT marketplaces, see how we've helped clients achieve
            their blockchain vision.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              client={study.client}
              title={study.title}
              description={study.description}
              image={study.image}
              metrics={study.metrics}
              category={study.category}
              index={index}
            />
          ))}
        </div>

        {/* Impact Section */}
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
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The numbers tell the story of our success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '$500M+', label: 'Total Value Locked' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '250K+', label: 'Active Users' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 text-center"
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Industries We{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Expertise across multiple Web3 sectors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['DeFi', 'NFT', 'DAO', 'Gaming', 'Metaverse', 'Infrastructure'].map(
              (industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 text-center hover:border-[#8B5CF6]/50 transition-all duration-300"
                >
                  <p className="text-white font-semibold">{industry}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Client{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'Web3Agency transformed our idea into a fully functional DeFi protocol. Their expertise and professionalism are unmatched.',
                author: 'Sarah Chen',
                role: 'CEO, DeFi Protocol',
              },
              {
                quote:
                  'The team delivered beyond our expectations. Our NFT marketplace launched successfully and has seen tremendous growth.',
                author: 'Michael Rodriguez',
                role: 'Founder, NFT Marketplace',
              },
              {
                quote:
                  'Their deep understanding of blockchain technology and commitment to quality made them the perfect partner for our DAO project.',
                author: 'Emily Thompson',
                role: 'CTO, DAO Infrastructure',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
              >
                <p className="text-gray-400 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-[#8B5CF6] text-sm">{testimonial.role}</p>
                </div>
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
              Ready to Join Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Success Stories?
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create the next Web3 success story together. Get in touch to
            discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
