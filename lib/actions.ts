import { supabase } from "@/lib/supabase";

function generateCouponCode(): string {
  const chars = '0123456789ABCDEF';
  let code = 'MM20-';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function createPayment(data: {
  full_name: string;
  email: string;
  phone?: string;
  plan: string;
  amount: number;
  method: string;
  reference?: string;
  receipt_url?: string;
}) {
  const { data: row, error } = await supabase
    .from("payments")
    .insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      plan: data.plan,
      amount: data.amount,
      method: data.method,
      reference: data.reference,
      receipt_url: data.receipt_url,
      status: "pending"
    })
    .select()
    .single();

  if (error) throw error;
  return row;
}

export async function createOrder(fromPayment: {
  id: string;
  email: string;
  plan: string;
  amount: number;
}) {
  const { data, error } = await supabase
    .from("orders")
    .insert({
      email: fromPayment.email,
      plan: fromPayment.plan,
      amount: fromPayment.amount,
      payment_id: fromPayment.id
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function issueCoupon(email: string) {
  const code = generateCouponCode();
  const { data, error } = await supabase
    .from("coupons")
    .insert({
      code,
      issued_to_email: email,
      value: 20,
      type: "percent"
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function captureLead(email: string, source?: string) {
  const { data, error } = await supabase
    .from("leads")
    .insert({
      email,
      source: source || "general"
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}
