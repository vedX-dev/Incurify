export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  bgColor: string;
  textColor: string;
  hasGrid: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Incurify has been a game-changer for us. Their service is top-notch and their team is incredibly responsive.',
    name: 'Guillermo Rauch',
    role: 'CEO of XYZ',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop',
    bgColor: 'bg-[#3B1A6E]',
    textColor: 'text-white',
    hasGrid: true,
  },
  {
    id: 2,
    quote: "We've seen incredible results with Incurify. Their expertise, dedication.",
    name: 'Rika Shinoda',
    role: 'CEO of YXZ',
    image: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop',
    bgColor: 'bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E]',
    textColor: 'text-white',
    hasGrid: false,
  },
  {
    id: 3,
    quote: 'Their team is highly professional, and their innovative solutions have truly transformed the way we operate.',
    name: 'Reacher',
    role: 'CEO of XYZ',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop',
    bgColor: 'bg-black/60',
    textColor: 'text-white',
    hasGrid: false,
  },
  {
    id: 4,
    quote: "We're extremely satisfied with Incurify. Their expertise and dedication have exceeded our expectations.",
    name: 'John',
    role: 'CEO of ZYX',
    image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
    bgColor: 'bg-black/60',
    textColor: 'text-white',
    hasGrid: false,
  },
  {
    id: 5,
    quote: 'Their customer support is absolutely exceptional. They are always available, incredibly helpful.',
    name: 'Steven Sunny',
    role: 'CEO of XYZ',
    image: 'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop',
    bgColor: 'bg-black/60',
    textColor: 'text-white',
    hasGrid: false,
  },
  {
    id: 6,
    quote: 'Incurify has been a key partner in our growth journey.',
    name: 'Guillermo Rauch',
    role: 'CEO of XUX',
    image: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop',
    bgColor: 'bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E]',
    textColor: 'text-white',
    hasGrid: false,
  },
  {
    id: 7,
    quote: 'Incurify has been a true game-changer for us. Their exceptional service, combined with their deep expertise and commitment to excellence, has made a significant impact on our business.',
    name: 'Paul Brauch',
    role: 'CTO of ZYX',
    image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop',
    bgColor: 'bg-[#3B1A6E]',
    textColor: 'text-white',
    hasGrid: true,
  },
];

