import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import SmoothScroll from '@/components/SmoothScroll';
import FontLoader from '@/components/FontLoader';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  title: 'Incurify - Web3 Marketing Agency',
  description:
    'Incurify is a Web3 growth partner helping projects build and sustain traction from launch to scale.',
  icons:{
    icon:'/icons/icon.png', 
  },
  openGraph: {
    title: 'Web3 Marketing Agency | Incurify',
    description:
      'Incurify is a Web3 growth partner helping projects build and sustain traction from launch to scale.',
    url: '', // change to your domain
    siteName: 'Incurify',
    images: [
      {
        url: '/images/metadata/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Incurify – Web3 Marketing Agency',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web3 & Blockchain Marketing Agency | Incurify',
    description:
      'Scale your Web3 project with Incurify — influencer marketing, community building, PR, and blockchain growth strategy.',
    images: ['/images/metadata/opengraph.jpg'],
      },
  other: {
    'font-display': 'swap',
  },

  whatsapp: {
    card: 'summary_large_image',
    title: 'Web3 Marketing Agency | Incurify',
    description:
      'Incurify is a Web3 growth partner helping projects build and sustain traction from launch to scale.',
    images: ['/images/metadata/opengraph.jpg'],
  },
  facebook: {
    card: 'summary_large_image',
    title: 'Web3 Marketing Agency | Incurify',
  },
  instagram: {
    card: 'summary_large_image',
    title: 'Web3 Marketing Agency | Incurify',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading - Critical for preventing FOUC */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load fonts with font-display: swap to prevent FOUC */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Onest:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Calendly Widget Script */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className="font-onest bg-black text-[#EEE9FF] antialiased" suppressHydrationWarning>
        {/* Blue Spotlight Background - Fixed at Center for entire website */}
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
        <FontLoader />
        <SmoothScroll>
        <Navigation />
          <PageTransition>
        <main className="min-h-screen">{children}</main>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
