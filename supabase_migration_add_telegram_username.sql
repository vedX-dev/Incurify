-- Add telegram_username column to contact_submissions table
-- Run this SQL query in your Supabase SQL Editor

ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS telegram_username TEXT;

-- Optional: Add a comment to describe the column
COMMENT ON COLUMN contact_submissions.telegram_username IS 'Telegram username (optional field, can be null)';
