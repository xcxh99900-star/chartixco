"use client";

import PayForm from "@/components/PayForm";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Clock } from "lucide-react";

export default function PayPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <section className="bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand-1)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Your Payment
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Secure payment processing with manual verification
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Process",
              description: "All payments are manually verified for your security",
            },
            {
              icon: Clock,
              title: "Quick Verification",
              description: "Payments verified within 24-48 hours",
            },
            {
              icon: CreditCard,
              title: "Multiple Options",
              description: "Whish Money and Crypto payments accepted",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <item.icon className="w-12 h-12 text-[var(--brand-2)] mx-auto mb-3" />
              <h3 className="font-semibold text-[var(--text-1)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <PayForm />
        </motion.div>
      </section>
    </div>
  );
}
