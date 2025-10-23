import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DISCORD_INVITE } from "@/lib/constants";
import { TrendingUp } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-[var(--brand-2)]" />
            <span className="text-xl font-bold text-[var(--text-1)]">
              Chartix Mentorship
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[var(--text-1)] hover:text-[var(--brand-2)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/mentorship"
              className="text-[var(--text-1)] hover:text-[var(--brand-2)] transition-colors"
            >
              Mentorship
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--text-1)] hover:text-[var(--brand-2)] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/pay"
              className="text-[var(--text-1)] hover:text-[var(--brand-2)] transition-colors"
            >
              Pay
            </Link>
            <Link
              href="/discord"
              className="text-[var(--text-1)] hover:text-[var(--brand-2)] transition-colors"
            >
              Discord
            </Link>
          </nav>

          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[var(--brand-2)] hover:opacity-90 text-white">
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
