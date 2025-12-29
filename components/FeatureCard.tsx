'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  number,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300"
    >
      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative z-10">
        {/* Number */}
        <div className="mb-4">
          <span className="text-6xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity">
            {number}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-500 rounded-t-xl" />
    </motion.div>
  );
}
