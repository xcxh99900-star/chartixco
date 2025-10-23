"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CouponBadge from "@/components/CouponBadge";
import { PLANS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function Pricing() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Whish Money and Cryptocurrency (USDT-TRC20). All payments are manually verified within 24-48 hours.",
    },
    {
      question: "How do I get access after payment?",
      answer:
        "After submitting your payment, join our Discord and DM your receipt/reference to an admin. You'll receive your role and access within 24-48 hours after verification.",
    },
    {
      question: "What is the 20% coupon for course buyers?",
      answer:
        "When you purchase the course, you automatically receive a 20% discount coupon. You can gift it to a friend for the course or use it yourself on signals subscriptions.",
    },
    {
      question: "Can I cancel my signals subscription?",
      answer:
        "Signals are billed monthly. You can cancel anytime, and you'll retain access until the end of your current billing period.",
    },
    {
      question: "Do I need trading experience to join?",
      answer:
        "No! The course is designed for complete beginners. We cover everything from the basics to advanced strategies. Many successful students started with zero experience.",
    },
    {
      question: "How often are signals posted?",
      answer:
        "Signals are posted daily in our private Discord channel. Each signal includes entry price, stop-loss, and take-profit levels with detailed analysis.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Due to the nature of digital products and immediate access to course materials and signals, all sales are final. We recommend reviewing all information before purchasing.",
    },
    {
      question: "What's the difference between signal plans?",
      answer:
        "Signals with 'my broker' ($39.99/mo) requires using our recommended broker. 'Your own broker' ($49.99/mo) gives you flexibility to use any broker you prefer.",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand-1)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your Path
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Invest in your financial future with transparent, straightforward pricing
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(PLANS).map(([key, plan], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card
                className={`p-8 h-full flex flex-col relative ${
                  key === "course"
                    ? "border-4 border-[var(--brand-2)] shadow-2xl scale-105"
                    : "border-2 border-slate-200"
                }`}
              >
                {key === "course" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--brand-1)] text-white text-sm font-bold px-6 py-2 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Best Value
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[var(--text-1)] mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-bold text-[var(--brand-2)] mb-2">
                    ${plan.price}
                  </div>
                  {"period" in plan && plan.period && (
                    <div className="text-slate-600">per {plan.period}</div>
                  )}
                  {key === "course" && (
                    <div className="text-sm text-[var(--brand-1)] font-semibold mt-2">
                      + 1 month free signals included
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-center mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[var(--brand-1)] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {key === "course" && <CouponBadge />}

                <Link href="/pay" className="mt-6">
                  <Button
                    className={`w-full py-6 text-lg ${
                      key === "course"
                        ? "bg-[var(--brand-2)] hover:opacity-90 text-white"
                        : "bg-[var(--brand-1)] hover:opacity-90 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-[var(--muted)] border-none">
            <p className="text-[var(--text-1)] text-lg">
              All plans include access to our private Discord community with{" "}
              <span className="font-semibold">1,000+ traders</span> and direct support
              from Mathieu
            </p>
          </Card>
        </motion.div>
      </section>

      <section className="bg-[var(--muted)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know before getting started
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left text-[var(--text-1)] font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join hundreds of successful traders building their financial freedom
          </p>
          <Link href="/pay">
            <Button className="bg-[var(--brand-2)] hover:opacity-90 text-white px-12 py-6 text-lg">
              Proceed to Payment
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
