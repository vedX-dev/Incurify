'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

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
    control,
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
    <div ref={formRef}>
      <Card className="relative mx-auto max-w-lg p-8 shadow-md sm:p-16 bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-green-500 font-medium">
            Thank you! Your message has been received.
          </p>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">Let's get you to the right place</h2>
        <p className="mt-4 text-sm text-white/70">
          Reach out to our team! We're eager to learn more about how you plan to use our services.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
        {/* Name Field */}
        <div className="space-y-3">
          <Label htmlFor="name" className="text-white">
            Full name *
          </Label>
          <Input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
            className="bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 focus-visible:ring-[#8B6CFF]"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-3">
          <Label htmlFor="email" className="text-white">
            Work Email *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="your.email@example.com"
            className="bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 focus-visible:ring-[#8B6CFF]"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Project Type Field */}
        <div className="space-y-3">
          <Label htmlFor="projectType" className="text-white">
            Project Type *
          </Label>
          <Controller
            name="projectType"
            control={control}
            rules={{ required: 'Project type is required' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="bg-[#0A0612] border-[#8B6CFF]/20 text-white focus:ring-[#8B6CFF]">
                  <SelectValue placeholder="Select a project type" />
                </SelectTrigger>
                <SelectContent className="bg-[#0A0612] border-[#8B6CFF]/20 text-white">
                  <SelectItem value="defi" className="text-white focus:bg-[#3B1A6E]">DeFi Protocol</SelectItem>
                  <SelectItem value="nft" className="text-white focus:bg-[#3B1A6E]">NFT Platform</SelectItem>
                  <SelectItem value="dao" className="text-white focus:bg-[#3B1A6E]">DAO Infrastructure</SelectItem>
                  <SelectItem value="dapp" className="text-white focus:bg-[#3B1A6E]">dApp Development</SelectItem>
                  <SelectItem value="consulting" className="text-white focus:bg-[#3B1A6E]">Web3 Consulting</SelectItem>
                  <SelectItem value="other" className="text-white focus:bg-[#3B1A6E]">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.projectType && (
            <p className="text-red-400 text-sm">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget Field */}
        <div className="space-y-3">
          <Label htmlFor="budget" className="text-white">
            Budget Range *
          </Label>
          <Controller
            name="budget"
            control={control}
            rules={{ required: 'Budget range is required' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="bg-[#0A0612] border-[#8B6CFF]/20 text-white focus:ring-[#8B6CFF]">
                  <SelectValue placeholder="Select a budget range" />
                </SelectTrigger>
                <SelectContent className="bg-[#0A0612] border-[#8B6CFF]/20 text-white">
                  <SelectItem value="10k-25k" className="text-white focus:bg-[#3B1A6E]">$10k - $25k</SelectItem>
                  <SelectItem value="25k-50k" className="text-white focus:bg-[#3B1A6E]">$25k - $50k</SelectItem>
                  <SelectItem value="50k-100k" className="text-white focus:bg-[#3B1A6E]">$50k - $100k</SelectItem>
                  <SelectItem value="100k+" className="text-white focus:bg-[#3B1A6E]">$100k+</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget && (
            <p className="text-red-400 text-sm">{errors.budget.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-3">
          <Label htmlFor="message" className="text-white">
            Project Details *
          </Label>
          <Textarea
            id="message"
            rows={5}
            {...register('message', {
              required: 'Project details are required',
              minLength: {
                value: 20,
                message: 'Please provide at least 20 characters',
              },
            })}
            placeholder="Tell us about your project..."
            className="bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 focus-visible:ring-[#8B6CFF] resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] text-white hover:from-[#8B6CFF]/90 hover:to-[#3B1A6E]/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send className="w-4 h-4" />}
          </span>
        </Button>
      </form>
      </Card>
    </div>
  );
}
