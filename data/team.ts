export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  twitterUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akshay',
    role: 'CEO & Founder',
    image: 'images/team/pic1.jpg', // Update with actual image paths
    twitterUrl: 'https://x.com/degen_rouge',
  },
  {
    id: '2',
    name: 'Xeno',
    role: 'Chief Marketing Officer',
    image: '/images/team/pic2.jpg',
    twitterUrl: 'https://x.com/xeno_nft199',
  },
  {
    id: '3',
    name: 'Sanyam',
    role: 'Chief Operations Officer',
    image: '/images/team/pic3.jpg',
    twitterUrl: 'https://x.com/Sanyamfr',
  },
  {
    id: '4',
    name: 'Moonlight',
    role: 'Chief Community Officer',
    image: '/images/team/pic4.jpg',
    twitterUrl: 'https://x.com/moonlight_ops',
  },
];

