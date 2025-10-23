import { z } from "zod";

export const paymentSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  plan: z.enum(["course", "signals_my_broker", "signals_own_broker"]),
  amount: z.number().positive("Amount must be positive"),
  method: z.enum(["whish", "crypto"]),
  reference: z.string().optional(),
  receipt_url: z.string().url().optional()
});

export const leadSchema = z.object({
  email: z.string().email("Valid email is required"),
  source: z.string().optional()
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
export type LeadFormData = z.infer<typeof leadSchema>;
