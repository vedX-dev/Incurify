import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import FontLoader from '@/components/FontLoader';

export const metadata = {
  title: 'Web3 & Blockchain Marketing Agency | Incurify',
  description:
    'Incurify is a Web3 and blockchain marketing agency offering influencer marketing, community building, PR, and data-driven growth strategies.',

  openGraph: {
    title: 'Web3 & Blockchain Marketing Agency | Incurify',
    description:
      'Incurify helps Web3 and blockchain projects scale through influencer marketing, community growth, PR, and strategic execution.',
    url: 'https://incurify.com', // change to your domain
    siteName: 'Incurify',
    images: [
      {
        url: '/images/l',
        width: 1200,
        height: 630,
        alt: 'Incurify – Web3 & Blockchain Marketing Agency',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web3 & Blockchain Marketing Agency | Incurify',
    description:
      'Scale your Web3 project with Incurify — influencer marketing, community building, PR, and blockchain growth strategy.',
    images: ['/images/logo/incurify.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }}>
      <body className="font-onest bg-black text-[#EEE9FF] antialiased">
        <FontLoader />
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
