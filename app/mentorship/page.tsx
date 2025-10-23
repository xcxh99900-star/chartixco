"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DISCORD_INVITE, PLANS } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Users,
  MessageCircle,
  Target,
  Award,
  BarChart,
  Shield,
} from "lucide-react";

export default function Mentorship() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Course",
      description:
        "Step-by-step training covering everything from basics to advanced strategies",
    },
    {
      icon: TrendingUp,
      title: "Live Signals",
      description:
        "Daily Forex signals in our private Discord with real-time market analysis",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join 1,000+ motivated traders sharing insights and growing together",
    },
    {
      icon: MessageCircle,
      title: "Direct Mentorship",
      description:
        "Personal guidance from Mathieu with 3+ years of 6-figure trading experience",
    },
    {
      icon: Target,
      title: "Proven Strategies",
      description:
        "Battle-tested methods that actually work in real market conditions",
    },
    {
      icon: Award,
      title: "Results-Focused",
      description:
        "300+ students earning 4-figures, 100+ earning 5-figures monthly",
    },
  ];

  const curriculum = [
    {
      module: "Module 1",
      title: "Forex Fundamentals",
      topics: [
        "Understanding currency pairs",
        "Market structure and psychology",
        "Risk management essentials",
        "Setting up your trading platform",
      ],
    },
    {
      module: "Module 2",
      title: "Technical Analysis",
      topics: [
        "Chart patterns and indicators",
        "Support and resistance levels",
        "Trend identification",
        "Entry and exit strategies",
      ],
    },
    {
      module: "Module 3",
      title: "Advanced Trading",
      topics: [
        "Multi-timeframe analysis",
        "Position sizing and leverage",
        "Managing winning and losing trades",
        "Building your trading plan",
      ],
    },
    {
      module: "Module 4",
      title: "Signals & Community",
      topics: [
        "Understanding our signal format",
        "How to execute trades properly",
        "Community resources and support",
        "Continuous learning and growth",
      ],
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
              Forex Mentorship Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Transform your trading with comprehensive training, live signals, and
              a supportive community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-4">
            What You Get
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to succeed in Forex trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full border-2 border-slate-200 hover:border-[var(--brand-2)] transition-all">
                <benefit.icon className="w-12 h-12 text-[var(--brand-2)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-1)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--muted)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-slate-600">
              Structured learning path from beginner to profitable trader
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 h-full bg-white">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-[var(--brand-2)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.module}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-1)] flex-1">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-2">
                        <BarChart className="w-4 h-4 text-[var(--brand-2)] mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
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
            Your Investment
          </h2>
          <p className="text-lg text-slate-600">
            Choose the option that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PLANS).map(([key, plan], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                className={`p-6 h-full flex flex-col ${
                  key === "course"
                    ? "border-4 border-[var(--brand-2)] shadow-xl"
                    : "border-2 border-slate-200"
                }`}
              >
                {key === "course" && (
                  <div className="bg-[var(--brand-2)] text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-[var(--text-1)] mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-[var(--brand-2)] mb-4">
                  ${plan.price}
                  {"period" in plan && plan.period && (
                    <span className="text-base text-slate-600">/{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-sm">
                      <Shield className="w-4 h-4 text-[var(--brand-1)] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing">
                  <Button className="w-full bg-[var(--brand-2)] hover:opacity-90 text-white">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-3)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join our Discord community and get immediate access to signals and support
            </p>
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[var(--brand-2)] hover:bg-white/90 px-8 py-6 text-lg">
                Join Discord Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
