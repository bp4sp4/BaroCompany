-- Remove industry column from consultations table
-- Run this SQL in Supabase SQL Editor

ALTER TABLE consultations
DROP COLUMN IF EXISTS industry;
