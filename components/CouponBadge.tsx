import { Gift } from "lucide-react";

export default function CouponBadge() {
  return (
    <div className="mt-4 p-3 bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-3)] rounded-lg text-white">
      <div className="flex items-start gap-2">
        <Gift className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold mb-1">Bonus Gift</p>
          <p className="text-white/90 leading-relaxed">
            Get a 20% coupon after purchase. Gift it to a friend for the course or use it on signals yourself!
          </p>
        </div>
      </div>
    </div>
  );
}
