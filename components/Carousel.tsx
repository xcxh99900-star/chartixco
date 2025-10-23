"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
        >
          <p className="text-xl md:text-2xl text-[var(--text-1)] mb-6 max-w-2xl italic">
            &ldquo;{TESTIMONIALS[current].quote}&rdquo;
          </p>
          <div>
            <p className="font-semibold text-[var(--text-1)]">
              {TESTIMONIALS[current].author}
            </p>
            <p className="text-sm text-slate-600">{TESTIMONIALS[current].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 flex gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? "bg-[var(--brand-2)] w-8" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
