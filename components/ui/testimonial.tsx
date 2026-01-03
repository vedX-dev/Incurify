'use client';

import { TimelineContent } from '@/components/ui/timeline-animation';
import Image from 'next/image';
import { useRef } from 'react';

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'power2.out',
      },
    }),
    hidden: {
      filter: 'blur(10px)',
      y: -20,
      opacity: 0,
    },
  };

  const testimonials = [
    {
      id: 1,
      quote: 'Incurify has been a game-changer for us. Their service is top-notch and their team is incredibly responsive.',
      name: 'Guillermo Rauch',
      role: 'CEO of Enigma',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop',
      bgColor: 'bg-[#3B1A6E]',
      textColor: 'text-white',
      hasGrid: true,
    },
    {
      id: 2,
      quote: "We've seen incredible results with Incurify. Their expertise, dedication.",
      name: 'Rika Shinoda',
      role: 'CEO of Kintsugi',
      image: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop',
      bgColor: 'bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E]',
      textColor: 'text-white',
      hasGrid: false,
    },
    {
      id: 3,
      quote: 'Their team is highly professional, and their innovative solutions have truly transformed the way we operate.',
      name: 'Reacher',
      role: 'CEO of OdeaoLabs',
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop',
      bgColor: 'bg-black/60',
      textColor: 'text-white',
      hasGrid: false,
    },
    {
      id: 4,
      quote: "We're extremely satisfied with Incurify. Their expertise and dedication have exceeded our expectations.",
      name: 'John',
      role: 'CEO of Labsbo',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
      bgColor: 'bg-black/60',
      textColor: 'text-white',
      hasGrid: false,
    },
    {
      id: 5,
      quote: 'Their customer support is absolutely exceptional. They are always available, incredibly helpful.',
      name: 'Steven Sunny',
      role: 'CEO of boxefi',
      image: 'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop',
      bgColor: 'bg-black/60',
      textColor: 'text-white',
      hasGrid: false,
    },
    {
      id: 6,
      quote: 'Incurify has been a key partner in our growth journey.',
      name: 'Guillermo Rauch',
      role: 'CEO of OdeaoLabs',
      image: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop',
      bgColor: 'bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E]',
      textColor: 'text-white',
      hasGrid: false,
    },
    {
      id: 7,
      quote: 'Incurify has been a true game-changer for us. Their exceptional service, combined with their deep expertise and commitment to excellence, has made a significant impact on our business.',
      name: 'Paul Brauch',
      role: 'CTO of Spectrum',
      image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop',
      bgColor: 'bg-[#3B1A6E]',
      textColor: 'text-white',
      hasGrid: true,
    },
  ];

  return (
    <section className="relative h-full container text-white mx-auto rounded-lg py-14 bg-transparent" ref={testimonialRef}>
      <article className="max-w-screen-md mx-auto text-center space-y-2">
        <TimelineContent
          as="h1"
          className="xl:text-4xl text-3xl font-medium instrument-serif-regular tracking-wide"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          style={{ fontWeight: 800, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}
        >
          <span className="bg-white to-gray-400 bg-clip-text text-transparent">
            Trusted by {' '}
          </span>
          <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent ">
            Startups {' '}
          </span>
          <span className="bg-white to-gray-400 bg-clip-text text-transparent ">
            and the world's largest companies
          </span>

        </TimelineContent>
        <TimelineContent
          as="p"
          className="mx-auto text-white/70"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Let's hear how Incurify client's feels about our service
        </TimelineContent>
      </article>
      <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
        {/* Column 1 */}
        <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2">
          <TimelineContent
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#3B1A6E] overflow-hidden rounded-lg border border-[#8B6CFF]/20 p-5"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8B6CFF2e_1px,transparent_1px),linear-gradient(to_bottom,#8B6CFF2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-white/90">{testimonials[0].quote}</p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-sm text-white">
                    {testimonials[0].name}
                  </h2>
                  <p className="text-white/70">{testimonials[0].role}</p>
                </div>
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E] text-white overflow-hidden rounded-lg border border-[#8B6CFF]/20 p-5"
          >
            <article className="mt-auto">
              <p className="text-white/90">{testimonials[1].quote}</p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl text-white">{testimonials[1].name}</h2>
                  <p className="text-white/70">{testimonials[1].role}</p>
                </div>
                <Image
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 2 */}
        <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
          <TimelineContent
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-black/60 backdrop-blur-sm text-white overflow-hidden rounded-lg border border-white/5 p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm text-white/90">{testimonials[2].quote}</p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg text-white">{testimonials[2].name}</h2>
                  <p className="lg:text-base text-sm text-white/70">{testimonials[2].role}</p>
                </div>
                <Image
                  src={testimonials[2].image}
                  alt={testimonials[2].name}
                  width={200}
                  height={200}
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-black/60 backdrop-blur-sm text-white overflow-hidden rounded-lg border border-white/5 p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm text-white/90">{testimonials[3].quote}</p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg text-white">{testimonials[3].name}</h2>
                  <p className="lg:text-base text-sm text-white/70">{testimonials[3].role}</p>
                </div>
                <Image
                  src={testimonials[3].image}
                  alt={testimonials[3].name}
                  width={200}
                  height={200}
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-black/60 backdrop-blur-sm text-white overflow-hidden rounded-lg border border-white/5 p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm text-white/90">{testimonials[4].quote}</p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg text-white">{testimonials[4].name}</h2>
                  <p className="lg:text-base text-sm text-white/70">{testimonials[4].role}</p>
                </div>
                <Image
                  src={testimonials[4].image}
                  alt={testimonials[4].name}
                  width={200}
                  height={200}
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 3 */}
        <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
          <TimelineContent
            animationNum={5}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E] text-white overflow-hidden rounded-lg border border-[#8B6CFF]/20 p-5"
          >
            <article className="mt-auto">
              <p className="text-white/90">{testimonials[5].quote}</p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl text-white">{testimonials[5].name}</h2>
                  <p className="text-white/70">{testimonials[5].role}</p>
                </div>
                <Image
                  src={testimonials[5].image}
                  alt={testimonials[5].name}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#3B1A6E] overflow-hidden rounded-lg border border-[#8B6CFF]/20 p-5"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8B6CFF2e_1px,transparent_1px),linear-gradient(to_bottom,#8B6CFF2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-white/90">{testimonials[6].quote}</p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl text-white">{testimonials[6].name}</h2>
                  <p className="text-white/70">{testimonials[6].role}</p>
                </div>
                <Image
                  src={testimonials[6].image}
                  alt={testimonials[6].name}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
      </div>

      <div className="absolute border-b-2 border-[#8B6CFF]/20 bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
        <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-black/40 before:shadow-sm before:border before:border-[#8B6CFF]/20 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-black/40 after:shadow-sm after:border after:border-[#8B6CFF]/20"></div>
      </div>
    </section>
  );
}

export default ClientFeedback;

