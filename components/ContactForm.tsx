'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={formRef}
      className="relative p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
    >
      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-green-500 font-medium">
            Thank you! Your message has been received.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-[#EEE9FF] font-medium mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 bg-[#0A0612] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] placeholder-[#B7A6FF] focus:outline-none focus:border-[#8B6CFF] transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-[#EEE9FF] font-medium mb-2">
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
            className="w-full px-4 py-3 bg-[#0A0612] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] placeholder-[#B7A6FF] focus:outline-none focus:border-[#8B6CFF] transition-colors"
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
            className="block text-[#EEE9FF] font-medium mb-2"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            {...register('projectType', { required: 'Project type is required' })}
            className="w-full px-4 py-3 bg-[#0A0612] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] focus:outline-none focus:border-[#8B6CFF] transition-colors"
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
          <label htmlFor="budget" className="block text-[#EEE9FF] font-medium mb-2">
            Budget Range *
          </label>
          <select
            id="budget"
            {...register('budget', { required: 'Budget range is required' })}
            className="w-full px-4 py-3 bg-[#0A0612] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] focus:outline-none focus:border-[#8B6CFF] transition-colors"
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
          <label htmlFor="message" className="block text-[#EEE9FF] font-medium mb-2">
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
            className="w-full px-4 py-3 bg-[#0A0612] border border-[#8B6CFF]/20 rounded-lg text-[#EEE9FF] placeholder-[#B7A6FF] focus:outline-none focus:border-[#8B6CFF] transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
