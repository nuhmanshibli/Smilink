/*
  # Smilink Volunteer and Contact Management

  1. New Tables
    - `volunteer_registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `full_name` (text) - Volunteer's full name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `age` (integer) - Volunteer's age
      - `location` (text) - City/district in Kerala
      - `occupation` (text) - Current occupation or student status
      - `skills` (text) - Skills they can contribute
      - `availability` (text) - Time availability (weekends, weekdays, flexible)
      - `motivation` (text) - Why they want to volunteer
      - `previous_experience` (text) - Previous volunteering experience
      - `created_at` (timestamptz) - Registration timestamp
    
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's name
      - `email` (text) - Contact email address
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (registration forms)
    - Add policies for authenticated admin read access
*/

CREATE TABLE IF NOT EXISTS volunteer_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  age integer,
  location text NOT NULL,
  occupation text,
  skills text,
  availability text NOT NULL,
  motivation text,
  previous_experience text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE volunteer_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit volunteer registration"
  ON volunteer_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view volunteer registrations"
  ON volunteer_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
