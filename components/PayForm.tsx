"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, type PaymentFormData } from "@/lib/validate";
import { createPayment, createOrder, issueCoupon } from "@/lib/actions";
import { PLANS, PAYMENT_METHODS, DISCORD_INVITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

export default function PayForm() {
  const [selectedMethod, setSelectedMethod] = useState<"whish" | "crypto">("whish");
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof PLANS>("course");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormData) => {
    setIsSubmitting(true);
    try {
      const paymentData = {
        ...data,
        plan: selectedPlan,
        amount: PLANS[selectedPlan].price,
        method: selectedMethod,
      };

      const payment = await createPayment(paymentData);

      if (selectedPlan === "course") {
        await createOrder(payment);
        const coupon = await issueCoupon(data.email);
        setCouponCode(coupon.code);
      }

      setSuccess(true);
    } catch (error) {
      console.error("Payment submission error:", error);
      alert("There was an error submitting your payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Card className="max-w-2xl mx-auto p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-[var(--brand-1)] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[var(--text-1)] mb-4">
          Payment Submitted Successfully!
        </h2>
        <p className="text-slate-600 mb-6">
          Your payment is being verified. This usually takes 24-48 hours.
        </p>
        {couponCode && (
          <div className="bg-[var(--muted)] p-4 rounded-lg mb-6">
            <p className="text-sm text-slate-700 mb-2">
              Your 20% coupon code:
            </p>
            <p className="text-2xl font-bold text-[var(--brand-2)] tracking-wider">
              {couponCode}
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Gift this to a friend for the course or use it on signals!
            </p>
          </div>
        )}
        <div className="space-y-4">
          <p className="text-[var(--text-1)] font-semibold">Next Steps:</p>
          <ol className="text-left space-y-2 text-slate-700">
            <li>1. Join our Discord community</li>
            <li>2. DM your payment receipt/reference to an admin</li>
            <li>3. Get your role and start learning!</li>
          </ol>
          <Link href="/discord">
            <Button className="w-full bg-[var(--brand-2)] hover:opacity-90 text-white mt-4">
              Join Discord Now
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-4">
          Select Plan
        </h3>
        <RadioGroup
          value={selectedPlan}
          onValueChange={(value) => setSelectedPlan(value as keyof typeof PLANS)}
        >
          {Object.entries(PLANS).map(([key, plan]) => (
            <div key={key} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors">
              <RadioGroupItem value={key} id={key} />
              <Label htmlFor={key} className="flex-1 cursor-pointer">
                <span className="font-semibold text-[var(--text-1)]">{plan.name}</span>
                <span className="ml-2 text-slate-600">
                  ${plan.price.toFixed(2)}{"period" in plan && plan.period ? `/${plan.period}` : ""}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-4">
          Personal Information
        </h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="full_name">Full Name *</Label>
            <Input
              id="full_name"
              {...register("full_name")}
              placeholder="John Doe"
            />
            {errors.full_name && (
              <p className="text-sm text-red-500 mt-1">{errors.full_name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">WhatsApp / Phone</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-[var(--text-1)] mb-4">
          Payment Method
        </h3>
        <RadioGroup
          value={selectedMethod}
          onValueChange={(value) => setSelectedMethod(value as "whish" | "crypto")}
        >
          {Object.entries(PAYMENT_METHODS).map(([key, method]) => (
            <div key={key} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors">
              <RadioGroupItem value={key} id={key} />
              <Label htmlFor={key} className="cursor-pointer font-semibold text-[var(--text-1)]">
                {method.name}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-6 p-4 bg-[var(--muted)] rounded-lg">
          <p className="text-sm text-[var(--text-1)] font-semibold mb-2">
            {PAYMENT_METHODS[selectedMethod].instructions}
          </p>
          <p className="text-sm text-slate-700 font-mono bg-white p-3 rounded border border-slate-200">
            {PAYMENT_METHODS[selectedMethod].details}
          </p>
        </div>

        <div className="mt-4">
          <Label htmlFor="reference">
            {selectedMethod === "crypto" ? "Transaction Hash *" : "Reference Number"}
          </Label>
          <Input
            id="reference"
            {...register("reference")}
            placeholder={selectedMethod === "crypto" ? "0x..." : "REF123456"}
          />
        </div>
      </Card>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--brand-2)] hover:opacity-90 text-white py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          `Submit Payment ($${PLANS[selectedPlan].price.toFixed(2)})`
        )}
      </Button>
    </form>
  );
}
