'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  client: string;
  title: string;
  description: string;
  image: string;
  metrics: Metric[];
  category: string;
  index: number;
}

export default function CaseStudyCard({
  client,
  title,
  description,
  image,
  metrics,
  category,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#8B5CF6]/20 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-full">
          <span className="text-xs font-medium text-[#8B5CF6]">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#06B6D4] text-sm font-medium mb-2">{client}</p>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-xs text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* View Case Study Link */}
        <button className="flex items-center gap-2 text-[#8B5CF6] group-hover:text-[#06B6D4] transition-colors font-medium">
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute -z-10 -bottom-24 -left-24 w-48 h-48 bg-[#06B6D4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
