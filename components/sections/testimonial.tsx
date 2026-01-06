'use client';

import { TimelineContent } from '@/components/ui/timeline-animation';
import Image from 'next/image';
import { useRef } from 'react';
import { testimonials } from '@/data/testimonials';

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

  return (
    <div className="relative h-full text-white mx-auto rounded-lg py-8 sm:py-12 md:py-14 bg-transparent" ref={testimonialRef}>
      <article className="max-w-screen-md mx-auto text-center space-y-2 mb-6 sm:mb-8 px-4">
        <TimelineContent
          as="h1"
          className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl instrument-serif-regular tracking-wide"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}
        >
          <span className="text-white bg-clip-text text-transparent">
            What {' '}
          </span>
          <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent ">
           teams  {' '}
          </span>
          <span className="text-white bg-clip-text text-transparent ">
          say after working with us.
          </span>

        </TimelineContent>
        <TimelineContent
          as="p"
          className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Let's hear how Incurify client's feels about our service
        </TimelineContent>
      </article>
      <div className="lg:grid lg:grid-cols-3 gap-2 sm:gap-3 flex flex-col w-full lg:py-10 pt-6 sm:pt-8 md:pt-10 pb-4 lg:px-10 px-3 sm:px-4 md:px-6">
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
    </div>
  );
}

export default ClientFeedback;

