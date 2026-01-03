# Setup Verification Checklist

## ✅ Environment Variables

Make sure your `.env.local` file contains:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_email@yourdomain.com
CLIENT_EMAIL=hello@web3agency.com
```

## ✅ Database Schema

Your Supabase database should have:

1. **contact_submissions** table with columns:
   - id (UUID, primary key)
   - name (TEXT)
   - email (TEXT)
   - project_type (TEXT)
   - budget (TEXT)
   - message (TEXT)
   - created_at (TIMESTAMPTZ)
   - updated_at (TIMESTAMPTZ)

2. **newsletter_subscriptions** table with columns:
   - id (UUID, primary key)
   - email (TEXT, UNIQUE)
   - subscribed_at (TIMESTAMPTZ)
   - is_active (BOOLEAN)
   - unsubscribed_at (TIMESTAMPTZ, nullable)
   - updated_at (TIMESTAMPTZ)

## ✅ API Routes

- `/api/contact` - Handles contact form submissions
- `/api/newsletter` - Handles newsletter subscriptions

## ✅ Features

- ✅ Contact form saves to Supabase and sends email via Resend
- ✅ Newsletter subscription saves to Supabase and sends confirmation email
- ✅ Handles duplicate email subscriptions (reactivates if inactive)
- ✅ Proper error handling and validation
- ✅ GSAP animations throughout
- ✅ Hash-based navigation (#about, #services, #contact)

## Testing

1. **Test Contact Form:**
   - Fill out the contact form at `/#contact`
   - Check Supabase `contact_submissions` table for new entry
   - Check your email (CLIENT_EMAIL) for notification

2. **Test Newsletter:**
   - Subscribe via footer newsletter form
   - Check Supabase `newsletter_subscriptions` table for new entry
   - Check subscriber's email for confirmation

3. **Test Navigation:**
   - Click navigation links (About, Services, Contact)
   - Verify smooth scroll to sections
   - Verify hash URLs update in browser

## Troubleshooting

### Contact form not working?
- Check browser console for errors
- Verify Supabase RLS policies allow service_role
- Check Resend API key is valid
- Verify CLIENT_EMAIL is set correctly

### Newsletter not working?
- Check if email already exists in database
- Verify Resend domain is verified
- Check RESEND_FROM_EMAIL matches verified domain

### Database errors?
- Verify RLS policies are set correctly
- Check service_role key has proper permissions
- Ensure tables match the schema exactly

