export const DISCORD_INVITE = process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://discord.gg/your-invite";

export const PLANS = {
  course: {
    name: "Course",
    price: 399.99,
    description: "Complete Forex mastery course with 1 month free signals",
    features: [
      "Full access to all course materials",
      "1 month of free signals included",
      "20% coupon to gift a friend (works on course or signals)",
      "Lifetime access to course content",
      "Private Discord community access"
    ]
  },
  signals_my_broker: {
    name: "Signals (with my broker)",
    price: 39.99,
    period: "month",
    description: "Daily Forex signals using my recommended broker",
    features: [
      "Daily trade signals in Discord",
      "Entry, stop-loss, and take-profit levels",
      "Real-time updates and analysis",
      "Access to private signals channel",
      "Priority support"
    ]
  },
  signals_own_broker: {
    name: "Signals (with your own broker)",
    price: 49.99,
    period: "month",
    description: "Daily Forex signals for any broker of your choice",
    features: [
      "Daily trade signals in Discord",
      "Entry, stop-loss, and take-profit levels",
      "Real-time updates and analysis",
      "Works with any broker",
      "Flexible trading setup"
    ]
  },
};

export const STATS = [
  { value: "1,000+", label: "Students Enrolled" },
  { value: "2", label: "Partner Companies" },
  { value: "500+", label: "5-Star Reviews" },
  { value: "300+", label: "4-Figure Earners" },
  { value: "100+", label: "5-Figure Earners" },
];

export const PAYMENT_METHODS = {
  whish: {
    name: "Whish Money",
    instructions: "Transfer to the following Whish account and enter your reference number below.",
    details: process.env.NEXT_PUBLIC_WHISH_DETAILS || "81 394 607 / Elian Chaaya"
  },
  crypto: {
    name: "Cryptocurrency",
    instructions: "Send USDT (TRC20) to the wallet address below and enter your transaction hash.",
    details: process.env.NEXT_PUBLIC_CRYPTO_WALLET || "USDT-TRC20: TB98b4LLE8fJeSsxpmNWd979XY9FiB3KHN"
  }
};

export const TESTIMONIALS = [
  {
    quote: "This course completely changed my approach to trading. Within 3 weeks I made my investment back.",
    author: "Sarah M.",
    role: "Course Student"
  },
  {
    quote: "The signals are incredibly accurate and the community support is amazing. Best decision I've made.",
    author: "James K.",
    role: "Signals Subscriber"
  },
  {
    quote: "Mathieu's teaching style is clear and practical. No fluff, just real strategies that work.",
    author: "Michael R.",
    role: "Course Graduate"
  }
];
