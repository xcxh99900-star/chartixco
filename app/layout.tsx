import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chartix Mentorship - Learn Forex Trading',
  description: 'Master Forex trading with clear rules, live guidance, and private signals. Join 1,000+ students building financial freedom.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.83/build/spline-viewer.js"
          async
          suppressHydrationWarning
        />
      </head>
      <body className={`${inter.className} bg-white text-[var(--text-1)]`} suppressHydrationWarning>
        <div className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-4 py-2 text-center sticky top-0 z-50">
          Trading involves risk. Past results do not guarantee future returns. Trade responsibly.
        </div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
