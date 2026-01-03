import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import FontLoader from '@/components/FontLoader';

export const metadata: Metadata = {
  title: 'Web3Agency - Premium Web3 Marketing & Development',
  description:
    'Building the future of Web3 with innovative solutions, smart contracts, and cutting-edge technology. Your trusted partner for blockchain development.',
  keywords: ['Web3', 'Blockchain', 'Smart Contracts', 'DeFi', 'NFT', 'DAO'],
  openGraph: {
    title: 'Web3Agency - Premium Web3 Marketing & Development',
    description:
      'Building the future of Web3 with innovative solutions and cutting-edge technology.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3Agency - Premium Web3 Marketing & Development',
    description:
      'Building the future of Web3 with innovative solutions and cutting-edge technology.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  other: {
    'preconnect-googleapis': 'https://fonts.googleapis.com',
    'preconnect-gstatic': 'https://fonts.gstatic.com',
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
