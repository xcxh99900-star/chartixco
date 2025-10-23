/*
  # Chartix Mentorship Platform Schema

  ## Overview
  Creates the database structure for a Discord-gated Forex mentorship platform
  with manual payment processing (OMT, Whish Money, Crypto) and coupon system.

  ## New Tables
  
  ### 1. `payments`
  Captures all payment submissions from users (pending verification)
  - `id` (uuid, primary key) - Unique payment identifier
  - `created_at` (timestamptz) - Submission timestamp
  - `full_name` (text) - Payer's full name
  - `email` (text) - Contact email
  - `phone` (text) - WhatsApp/phone for contact
  - `plan` (text) - Selected plan: 'course' | 'signals_my_broker' | 'signals_own_broker'
  - `amount` (numeric) - Payment amount in USD
  - `method` (text) - Payment method: 'omt' | 'whish' | 'crypto'
  - `reference` (text) - Transfer reference or transaction hash
  - `receipt_url` (text) - Uploaded receipt file URL (optional)
  - `status` (text) - Payment status: 'pending' | 'approved' | 'rejected'

  ### 2. `orders`
  Normalized purchase records linked to approved payments
  - `id` (uuid, primary key) - Unique order identifier
  - `created_at` (timestamptz) - Order creation timestamp
  - `email` (text) - Customer email
  - `plan` (text) - Purchased plan
  - `amount` (numeric) - Order amount
  - `payment_id` (uuid) - Reference to payments table
  - `notes` (text) - Additional order notes

  ### 3. `coupons`
  Auto-issued 20% discount coupons for course buyers (can gift to friends)
  - `id` (uuid, primary key) - Unique coupon identifier
  - `created_at` (timestamptz) - Coupon creation timestamp
  - `code` (text, unique) - Coupon code (format: MM20-XXXXXX)
  - `type` (text) - Discount type: 'percent'
  - `value` (numeric) - Discount value (20 for 20%)
  - `issued_to_email` (text) - Original recipient email
  - `used_by_email` (text) - Email of person who redeemed
  - `used_at` (timestamptz) - Redemption timestamp

  ### 4. `leads`
  Email captures from hero CTAs and landing page forms
  - `id` (uuid, primary key) - Unique lead identifier
  - `created_at` (timestamptz) - Capture timestamp
  - `email` (text) - Lead email address
  - `source` (text) - Lead source/page

  ## Security
  - Enable RLS on all tables (restrictive by default)
  - Allow anonymous inserts only (for public payment/lead forms)
  - Allow anonymous reads on coupons (for validation)
  - No update/delete permissions for anonymous users
*/

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  plan text NOT NULL,
  amount numeric NOT NULL,
  method text NOT NULL,
  reference text,
  receipt_url text,
  status text DEFAULT 'pending'
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text NOT NULL,
  plan text NOT NULL,
  amount numeric NOT NULL,
  payment_id uuid REFERENCES payments(id),
  notes text
);

-- Create coupons table
CREATE TABLE IF NOT EXISTS coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  code text UNIQUE NOT NULL,
  type text NOT NULL DEFAULT 'percent',
  value numeric NOT NULL DEFAULT 20,
  issued_to_email text,
  used_by_email text,
  used_at timestamptz
);

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text NOT NULL,
  source text
);

-- Enable Row Level Security
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Payments policies: Allow anonymous inserts only
CREATE POLICY "Anyone can submit payments"
  ON payments FOR INSERT
  WITH CHECK (true);

-- Orders policies: Allow anonymous inserts only
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

-- Coupons policies: Allow anonymous to read and insert
CREATE POLICY "Anyone can view coupons"
  ON coupons FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create coupons"
  ON coupons FOR INSERT
  WITH CHECK (true);

-- Leads policies: Allow anonymous inserts only
CREATE POLICY "Anyone can submit leads"
  ON leads FOR INSERT
  WITH CHECK (true);