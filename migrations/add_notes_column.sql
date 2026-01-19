-- Add notes column to consultations table
-- Run this SQL in Supabase SQL Editor

ALTER TABLE consultations
ADD COLUMN IF NOT EXISTS notes TEXT;
