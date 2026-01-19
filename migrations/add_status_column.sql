-- Add status column to consultations table
-- Run this SQL in Supabase SQL Editor

ALTER TABLE consultations
ADD COLUMN IF NOT EXISTS status TEXT CHECK (status IN ('pending', 'in_progress', 'completed'));

-- Update existing data: is_completed = true -> status = 'completed', is_completed = false -> status = 'pending'
UPDATE consultations
SET status = CASE
  WHEN is_completed = true THEN 'completed'
  ELSE 'pending'
END
WHERE status IS NULL;
