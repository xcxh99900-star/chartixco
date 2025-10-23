"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SplineHero from "@/components/SplineHero";
import SplineMid from "@/components/SplineMid";
import StatMarquee from "@/components/StatMarquee";
import Carousel from "@/components/Carousel";
import { PLANS, DISCORD_INVITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle2, Users, TrendingUp, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <SplineHero />

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="overflow-visible">
              <motion.h1
                className="hero-heading text-5xl md:text-6xl lg:text-7xl relative"
                data-text="Learn Forex the right way"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2
                }}
              >
                Learn Forex the right way
              </motion.h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto mt-4 drop-shadow-lg">
                Clear rules, live guidance, and private signals that teach you the{" "}
                <span className="font-semibold text-white">why</span>, not just the how.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mt-4 drop-shadow-lg">
                This mentorship program gives you everything you need to trade Forex with confidence
                and grow your account—even if you&apos;re starting from zero. When you join, you&apos;ll also
                get free Forex signals on my private Discord, so you can learn and profit at the same time.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto mt-4 drop-shadow-lg">
                Many students start seeing results within their first month, combining proven strategies
                with real-time guidance.
              </p>
              <p className="text-base md:text-lg text-white font-semibold max-w-2xl mx-auto mt-4 drop-shadow-lg">
                Enrollment is now open for a limited group. Click below to join and start your journey
                to financial freedom.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[var(--brand-2)] hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg">
                  Join the Discord
                </Button>
              </a>
              <Link href="/pricing">
                <Button className="w-full sm:w-auto bg-[var(--brand-2)] hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <StatMarquee />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-6">
            About the Mentor
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-[var(--muted)] border-none shadow-lg">
              <p className="text-lg text-[var(--text-1)] leading-relaxed space-y-4">
                <span className="block">
                  Hi, I&apos;m <span className="font-bold">Mathieu Maatouk</span>—a Forex trader with over
                  3 years of experience in the market.
                </span>
                <span className="block">
                  In this time, I&apos;ve grown my account to 6 figures by mastering strategies that actually work.
                </span>
                <span className="block">
                  I know how overwhelming trading can feel when you&apos;re just starting out. That&apos;s why I created
                  this course—to simplify the process and share what truly delivers results.
                </span>
                <span className="block">
                  My goal is to help you avoid years of trial and error and fast-track your success.
                </span>
                <span className="block font-semibold">
                  This isn&apos;t just about trading; it&apos;s about creating real financial freedom.
                </span>
                <span className="block">
                  If you&apos;re ready to take control of your future, this course is your starting point.
                </span>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, value: "1,000+", label: "Students" },
              { icon: TrendingUp, value: "6 Figures", label: "Account Growth" },
              { icon: Award, value: "3+ Years", label: "Experience" },
              { icon: CheckCircle2, value: "500+", label: "5-Star Reviews" },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center border-2 border-[var(--brand-2)]/20 hover:border-[var(--brand-2)] transition-colors">
                <stat.icon className="w-10 h-10 text-[var(--brand-2)] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[var(--text-1)]">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#00031A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="w-full h-[500px] lg:h-[600px]">
                <SplineMid />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My Life-Changing Offer
              </h2>
              <div className="space-y-4 text-lg text-white leading-relaxed">
                <p>
                  When you join my course, you&apos;re not just getting training—you&apos;re gaining access
                  to my private Discord community.
                </p>
                <p>
                  Inside, I&apos;ll be sharing free Forex signals exclusively for my students, along with tips,
                  strategies, and updates to help you maximize profits.
                </p>
                <p>
                  This isn&apos;t just about signals—it&apos;s about building a supportive community where we grow
                  together. You&apos;ll be surrounded by motivated traders who share insights and push each
                  other to succeed.
                </p>
                <p>
                  On top of that, I&apos;ll be personally active inside the Discord, guiding you with the same
                  methods I used to grow my account to 6 figures.
                </p>
                <p className="font-semibold text-white">
                  My mission is simple: give you the knowledge and tools to trade with confidence and move
                  closer to financial freedom.
                </p>
              </div>
            </motion.div>
          </div>
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
            What Students Say
          </h2>
          <p className="text-lg text-slate-600">
            Join hundreds of successful traders who transformed their lives
          </p>
        </motion.div>

        <Carousel />
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
            Start Your Journey Today
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your needs
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
              <Card className="p-6 h-full flex flex-col border-2 hover:border-[var(--brand-2)] transition-all hover:shadow-xl">
                <h3 className="text-xl font-bold text-[var(--text-1)] mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-[var(--brand-2)] mb-4">
                  ${plan.price}
                  {"period" in plan && plan.period && <span className="text-base text-slate-600">/{plan.period}</span>}
                </div>
                <p className="text-sm text-slate-600 mb-6">{plan.description}</p>
                <Link href="/pricing" className="mt-auto">
                  <Button className="w-full bg-[var(--brand-2)] hover:opacity-90 text-white">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand-1)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join our Discord community today and start your journey to financial freedom
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
