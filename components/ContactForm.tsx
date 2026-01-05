'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
  } = useForm<ContactFormData>({
    mode: 'onBlur', // Validate on blur (when user clicks and leaves field)
  });

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      const card = formRef.current?.querySelector('.contact-card') as HTMLElement;
      const formGroups = formRef.current?.querySelectorAll('.form-group') as NodeListOf<HTMLElement>;
      const submitButton = formRef.current?.querySelector('button[type="submit"]') as HTMLElement;
      const trustText = formRef.current?.querySelector('.trust-microcopy') as HTMLElement;

      // Card animation: fade in + translate Y (10-15px)
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 12,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Form groups: stagger in from bottom with subtle opacity + Y movement
      if (formGroups.length > 0) {
        gsap.from(formGroups, {
          opacity: 0,
          y: 15,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: 0.2,
        });
      }

      // Submit button: subtle entrance
      if (submitButton) {
        gsap.from(submitButton, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: 0.5,
        });
      }

      // Trust microcopy: fade in
      if (trustText) {
        gsap.from(trustText, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: 0.7,
        });
      }

      // Subtle pulse animation for button (every 6-8 seconds)
      if (submitButton) {
        const pulseTimeline = gsap.timeline({ repeat: -1, repeatDelay: 6 });
        pulseTimeline.to(submitButton, {
          scale: 1.01,
          duration: 0.8,
          ease: 'power1.inOut',
        });
        pulseTimeline.to(submitButton, {
          scale: 1,
          duration: 0.8,
          ease: 'power1.inOut',
        });
      }
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
    <div ref={formRef} className="relative">
      {/* Ambient Glow Behind Card */}
      <div 
        className="absolute inset-0 -z-10 blur-3xl opacity-[0.1]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 108, 255, 0.4) 0%, transparent 70%)',
        }}
      />

      <Card className="contact-card relative mx-auto max-w-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20 overflow-hidden">
        {/* Inner Vignette - Soft edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.15) 100%)',
          }}
        />

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-green-500 font-medium">
              Thank you! Your message has been received.
            </p>
          </div>
        )}

        <div className="mb-6 sm:mb-8 relative z-10">
          <h2 className="text-xl font-semibold text-white">Let's get you to the right place</h2>
          <p className="mt-3 sm:mt-4 text-sm text-white/70">
            Reach out to our team! We're eager to learn more about how you plan to use our services.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 relative z-10">
        {/* First Row: Full name and Work Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Name Field */}
          <div className="form-group space-y-2.5">
            <Label htmlFor="name" className="text-white">
              Full name *
            </Label>
            <Input
              id="name"
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
              placeholder="Your name"
              className="premium-input bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 transition-all duration-300 focus:border-[#8B6CFF]/50 focus:bg-[#0F0718] focus:shadow-[0_0_0_3px_rgba(139,108,255,0.1)] focus-visible:ring-0"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group space-y-2.5">
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
                  message: 'Please provide a valid email address',
                },
              })}
              placeholder="your.email@example.com"
              className="premium-input bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 transition-all duration-300 focus:border-[#8B6CFF]/50 focus:bg-[#0F0718] focus:shadow-[0_0_0_3px_rgba(139,108,255,0.1)] focus-visible:ring-0"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Second Row: Project Type and Budget Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Project Type Field */}
          <div className="form-group space-y-2.5">
            <Label htmlFor="projectType" className="text-white">
              Project Type *
            </Label>
            <Controller
              name="projectType"
              control={control}
              rules={{ required: 'Project type is required' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="premium-input bg-[#0A0612] border-[#8B6CFF]/20 text-white transition-all duration-300 focus:border-[#8B6CFF]/50 focus:bg-[#0F0718] focus:shadow-[0_0_0_3px_rgba(139,108,255,0.1)] focus:ring-0">
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
          <div className="form-group space-y-2.5">
            <Label htmlFor="budget" className="text-white">
              Budget Range *
            </Label>
            <Controller
              name="budget"
              control={control}
              rules={{ required: 'Budget range is required' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="premium-input bg-[#0A0612] border-[#8B6CFF]/20 text-white transition-all duration-300 focus:border-[#8B6CFF]/50 focus:bg-[#0F0718] focus:shadow-[0_0_0_3px_rgba(139,108,255,0.1)] focus:ring-0">
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
        </div>

        {/* Third Row: Project Details (Full Width) */}
        <div className="form-group space-y-2.5">
          <Label htmlFor="message" className="text-white">
            Project Details *
          </Label>
          <Textarea
            id="message"
            rows={5}
            {...register('message', {
              required: 'Project details are required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
            placeholder="Tell us about your project..."
            className="premium-input bg-[#0A0612] border-[#8B6CFF]/20 text-white placeholder:text-white/50 transition-all duration-300 focus:border-[#8B6CFF]/50 focus:bg-[#0F0718] focus:shadow-[0_0_0_3px_rgba(139,108,255,0.1)] focus-visible:ring-0 resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="space-y-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] text-white hover:from-[#9B7CFF] hover:to-[#4B2A7E] hover:shadow-lg hover:shadow-[#8B6CFF]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none relative overflow-hidden"
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              {isSubmitting ? 'Sending...' : 'Start the Conversation'}
              {!isSubmitting && (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </span>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B6CFF]/20 via-[#3B1A6E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Button>

          {/* Trust Microcopy */}
          <p className="trust-microcopy text-xs text-white/40 text-center">
            We usually respond within 24 hours.
          </p>
        </div>
      </form>
      </Card>
    </div>
  );
}
