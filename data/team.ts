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
    name: 'RouGe',
    role: 'CEO & Founder',
    image: 'images/team/rouge.png', // Update with actual image paths
    twitterUrl: 'https://x.com/degen_rouge',
  },
  {
    id: '2',
    name: 'Xeno',
    role: 'Chief Marketing Officer',
    image: '/images/team/xeno.jpg',
    twitterUrl: 'https://x.com/xeno_nft199',
  },
  {
    id: '3',
    name: 'Sanyam',
    role: 'Chief Operations Officer',
    image: '/images/team/sanyam.jpg',
    twitterUrl: 'https://x.com/Sanyamfr',
  },
  {
    id: '4',
    name: 'Moonlight',
    role: 'Chief Community Officer',
    image: '/images/team/moonlight.jpg',
    twitterUrl: 'https://x.com/moonlight_ops',
  },
];

