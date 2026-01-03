# Web3Agency - Premium Web3 Marketing & Development Agency

A modern single-page application built with Next.js, featuring smooth GSAP animations and integrated backend services.

## Features

- 🎨 **Single-Page Application** with hash-based navigation (#about, #services, #contact)
- ✨ **GSAP Animations** for smooth, performant animations
- 🎯 **Lenis Smooth Scroll** for professional, buttery-smooth scrolling experience
- 📧 **Contact Form** with Supabase and Resend integration
- 📬 **Newsletter Subscription** with email confirmation
- 🎯 **Modern UI** with Tailwind CSS and Radix UI components

## Tech Stack

- **Framework**: Next.js 13.5
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Smooth Scroll**: Lenis (buttery-smooth scrolling)
- **Backend**: Supabase (database) + Resend (email)
- **UI Components**: Radix UI
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)
- Resend account (for email)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Incurify
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend Configuration
RESEND_API_KEY=your_resend_api_key

# Contact Email (where contact form submissions will be sent)
CONTACT_EMAIL=hello@web3agency.com
```

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create the following tables:

**contact_submissions** table:
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**newsletter_subscribers** table:
```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Get your Supabase URL and Service Role Key from Project Settings > API

### Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Verify your domain (or use the default `onboarding@resend.dev` for testing)
4. Update the `from` email in `app/api/contact/route.ts` and `app/api/newsletter/route.ts` with your verified domain

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/        # Contact form API endpoint
│   │   └── newsletter/     # Newsletter subscription API endpoint
│   ├── page.tsx            # Main single-page application
│   └── layout.tsx          # Root layout
├── components/
│   ├── Navigation.tsx      # Navigation with hash links
│   ├── Footer.tsx          # Footer with newsletter
│   ├── ContactForm.tsx     # Contact form component
│   ├── ServiceCard.tsx     # Service card with GSAP animations
│   └── FeatureCard.tsx     # Feature card with GSAP animations
└── data/
    ├── services.ts         # Services data
    └── stats.ts            # Stats and features data
```

## Key Changes from Previous Version

- ✅ Removed Framer Motion, replaced with GSAP
- ✅ Added Lenis for professional smooth scrolling
- ✅ Converted multi-page routing to single-page with hash navigation
- ✅ Removed case studies section and navigation links
- ✅ Integrated Supabase for database storage
- ✅ Integrated Resend for email functionality
- ✅ Updated all components to use GSAP animations
- ✅ Optimized scroll performance with GSAP ScrollTrigger integration

## Environment Variables

See `.env.example` for required environment variables.

## License

Private - All rights reserved
