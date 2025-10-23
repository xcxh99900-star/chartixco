import Link from "next/link";
import { TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--text-1)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-[var(--brand-2)]" />
              <span className="text-xl font-bold">Chartix Mentorship</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Learn Forex the right way with clear rules, live guidance, and private signals
              that teach you the why, not just the how.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-slate-300 hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-slate-300 hover:text-white transition-colors">
                  Join Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/risk" className="text-slate-300 hover:text-white transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Chartix Mentorship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
