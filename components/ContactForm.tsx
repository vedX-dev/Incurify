'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form Data:', data);
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10"
    >
      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-green-500 font-medium">
            Thank you! Your message has been received.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Project Type Field */}
        <div>
          <label
            htmlFor="projectType"
            className="block text-white font-medium mb-2"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            {...register('projectType', { required: 'Project type is required' })}
            className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
          >
            <option value="">Select a project type</option>
            <option value="defi">DeFi Protocol</option>
            <option value="nft">NFT Platform</option>
            <option value="dao">DAO Infrastructure</option>
            <option value="dapp">dApp Development</option>
            <option value="consulting">Web3 Consulting</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-red-400 text-sm">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget Field */}
        <div>
          <label htmlFor="budget" className="block text-white font-medium mb-2">
            Budget Range *
          </label>
          <select
            id="budget"
            {...register('budget', { required: 'Budget range is required' })}
            className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
          >
            <option value="">Select a budget range</option>
            <option value="10k-25k">$10k - $25k</option>
            <option value="25k-50k">$25k - $50k</option>
            <option value="50k-100k">$50k - $100k</option>
            <option value="100k+">$100k+</option>
          </select>
          {errors.budget && (
            <p className="mt-1 text-red-400 text-sm">{errors.budget.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', {
              required: 'Project details are required',
              minLength: {
                value: 20,
                message: 'Please provide at least 20 characters',
              },
            })}
            className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
}
