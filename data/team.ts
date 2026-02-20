export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  twitterUrl?: string;
  linkedInUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'RouGe',
    role: 'CEO & Founder',
    image: 'images/team/rouge.png', // Update with actual image paths
    twitterUrl: 'https://x.com/degen_rouge',
    linkedInUrl: 'https://www.linkedin.com/in/workwithakshay/',
  },
  
  // {
  //   id: '5',
  //   name: 'vedXdev',
  //   role: 'Chief Technology Officer',
  //   image: '/images/team/vedxdev.jpg',
  //   twitterUrl: 'https://x.com/vedXdev',
  // },
];

