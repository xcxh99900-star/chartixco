"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DISCORD_INVITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { MessageCircle, UserPlus, Send, CheckCircle2 } from "lucide-react";

export default function DiscordPage() {
  const steps = [
    {
      icon: UserPlus,
      title: "Join Discord",
      description:
        "Click the button below to join our private Discord community with 1,000+ traders",
    },
    {
      icon: Send,
      title: "DM Your Receipt",
      description:
        "Send your payment receipt or reference number to an admin via direct message",
    },
    {
      icon: CheckCircle2,
      title: "Get Your Role",
      description:
        "After verification (24-48 hours), you'll receive your role and full access to all channels",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-[var(--brand-2)] via-[var(--brand-1)] to-[var(--brand-3)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <MessageCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Discord Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connect with 1,000+ successful traders, get live signals, and receive
              personal guidance from Mathieu
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-4">
            How to Get Access
          </h2>
          <p className="text-lg text-slate-600">
            Follow these simple steps to join the community
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="p-6 border-2 border-slate-200 hover:border-[var(--brand-2)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-2)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-6 h-6 text-[var(--brand-2)]" />
                      <h3 className="text-xl font-bold text-[var(--text-1)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[var(--brand-2)] hover:opacity-90 text-white px-12 py-6 text-lg">
              Join Discord Now
            </Button>
          </a>
        </motion.div>
      </section>

      <section className="bg-[var(--muted)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-4">
              What You Get in Discord
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Daily Signals",
                description:
                  "Get real-time Forex signals with entry, stop-loss, and take-profit levels",
              },
              {
                title: "Live Market Analysis",
                description:
                  "Regular updates on market conditions and trading opportunities",
              },
              {
                title: "Personal Mentorship",
                description:
                  "Direct access to Mathieu for questions and guidance",
              },
              {
                title: "Community Support",
                description:
                  "Connect with 1,000+ traders sharing insights and strategies",
              },
              {
                title: "Course Materials",
                description:
                  "Access to all training modules and educational resources",
              },
              {
                title: "Success Stories",
                description:
                  "Learn from students who are already earning 4 and 5 figures",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-2 border-slate-200 hover:border-[var(--brand-1)] transition-all">
                  <h3 className="text-lg font-bold text-[var(--text-1)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand-1)] text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Haven&apos;t Made a Payment Yet?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              You can still join Discord to see the community, but you&apos;ll need to
              complete payment to access signals and course materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[var(--brand-2)] hover:bg-white/90 px-8 py-3">
                  Join Discord
                </Button>
              </a>
              <Button
                onClick={() => (window.location.href = "/pricing")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-2)] px-8 py-3"
              >
                View Pricing
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
