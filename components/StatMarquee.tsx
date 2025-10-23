"use client";

import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function StatMarquee() {
  const doubledStats = [...STATS, ...STATS];

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand-1)]">
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -50 * STATS.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {doubledStats.map((stat, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 text-center px-8"
          >
            <div className="text-3xl md:text-4xl font-bold text-white">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-white/90 mt-1 whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
