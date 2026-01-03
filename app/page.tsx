'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Target, Zap, Award, Mail, MapPin, Clock } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import { BGPattern } from '@/components/ui/bg-pattern';
import { services } from '@/data/services';
import { features, stats } from '@/data/stats';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        });
      }

      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          delay: 0.2,
        });
      }

      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.3,
        });
      }

      if (subheadlineRef.current) {
        gsap.from(subheadlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.4,
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.5,
        });
      }

      // Scroll-triggered animations
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
    <div className="pt-24">
      {/* Blue Spotlight Background - Fixed at Center */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(59, 130, 246, 0.12) 0%,
              rgba(59, 130, 246, 0.06) 20%,
              rgba(0, 0, 0, 0.0) 60%
            )
          `,
        }}
      />
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-transparent relative overflow-hidden flex items-center justify-center">
        {/* Grid Pattern Background - Only on Hero Section */}
        <BGPattern variant="grid" mask="fade-edges" fill="rgba(139, 108, 255, 0.5)" size={49} opacity={0.5} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <div ref={heroRef}>
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6CFF]/10 border border-[#8B6CFF]/30 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#8B6CFF]" />
              <span className="text-sm font-medium text-[#8B6CFF]">
                Building the Future of Web3
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="instrument-serif-regular text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-wide"
              style={{ fontWeight: 600, WebkitTextStroke: '0.px currentColor' } as React.CSSProperties}
            >
              <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                Fueling{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
                Into Adoption.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Welcome to Incurify. we specialize in blockchain marketing, influencer partnerships, and strategic community growth desgined to solve visibility, adoption, and trust problems.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] text-[#0A0612] rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B6CFF]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                Our{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-[#B7A6FF] max-w-2xl mx-auto">
              Comprehensive Web3 solutions tailored to your needs
            </p>
          </div>

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
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                End-to-End Solutions
              </h2>
              <p className="text-[#B7A6FF] leading-relaxed mb-4">
                We provide comprehensive Web3 services that cover every aspect of
                your project. From initial consultation and strategy development to
                smart contract deployment and ongoing maintenance, our team ensures
                success at every stage.
              </p>
              <p className="text-[#B7A6FF] leading-relaxed">
                Our integrated approach means you work with a single, cohesive team
                that understands your vision and delivers consistent, high-quality
                results across all disciplines.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Custom Solutions
              </h2>
              <p className="text-[#B7A6FF] leading-relaxed mb-4">
                Every project is unique, and we tailor our services to match your
                specific needs. Whether you're launching a DeFi protocol, building
                an NFT marketplace, or creating a DAO infrastructure, we adapt our
                expertise to your vision.
              </p>
              <p className="text-[#B7A6FF] leading-relaxed">
                Our flexible engagement models ensure you get exactly what you need,
                when you need it, without paying for services you don't require.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="animate-on-scroll mb-20">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                Our{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-[#B7A6FF] text-center mb-12 max-w-2xl mx-auto">
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
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent opacity-30 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[#B7A6FF] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                Why Choose{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-xl text-[#B7A6FF] max-w-2xl mx-auto">
              Experience excellence in every project we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                number={feature.number}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
              {stats.map((stat, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                Get in{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-[#B7A6FF] max-w-3xl mx-auto leading-relaxed">
              Ready to bring your Web3 vision to life? Contact us today and let's
              start building the future together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <div className="animate-on-scroll space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#8B6CFF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EEE9FF] font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hello@web3agency.com"
                        className="text-[#B7A6FF] hover:text-[#8B6CFF] transition-colors"
                      >
                        hello@web3agency.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#8B6CFF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EEE9FF] font-semibold mb-1">
                        Headquarters
                      </h3>
                      <p className="text-[#B7A6FF]">
                        San Francisco, CA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B6CFF]/20 to-[#B7A6FF]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#8B6CFF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EEE9FF] font-semibold mb-1">
                        Business Hours
                      </h3>
                      <p className="text-[#B7A6FF]">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20">
                <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2">
                  Quick Response
                </h3>
                <p className="text-[#B7A6FF] text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please mention it in your
                  message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-[#EEE9FF] to-[#B7A6FF] bg-clip-text text-transparent">
                Frequently Asked{' '}
              </span>
              <span className="bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-[#B7A6FF] text-center mb-12 max-w-2xl mx-auto">
              Common questions about working with us
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: 'What is your typical project timeline?',
                  answer:
                    'Project timelines vary based on scope and complexity. A simple smart contract might take 2-4 weeks, while a full DeFi protocol could take 3-6 months. We provide detailed timelines during our initial consultation.',
                },
                {
                  question: 'Do you provide ongoing support after launch?',
                  answer:
                    'Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and optimization services. We can create a custom support package tailored to your needs.',
                },
                {
                  question: 'What blockchain networks do you work with?',
                  answer:
                    'We have expertise across major blockchain networks including Ethereum, Polygon, Solana, Binance Smart Chain, Avalanche, and more. We help you choose the best network for your specific use case.',
                },
                {
                  question: 'How do you ensure smart contract security?',
                  answer:
                    'Security is our top priority. All smart contracts undergo rigorous internal testing, automated security scans, and can be audited by third-party security firms before deployment.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
                >
                  <h3 className="text-lg font-semibold text-[#EEE9FF] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#B7A6FF] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
