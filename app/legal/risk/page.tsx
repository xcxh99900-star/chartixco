import { Card } from "@/components/ui/card";

export default function RiskDisclaimer() {
  return (
    <div className="min-h-screen bg-[var(--muted)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[var(--text-1)] mb-6">
            Risk Disclaimer
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Important Notice
              </h2>
              <p>
                Trading foreign exchange (Forex) on margin carries a high level of risk
                and may not be suitable for all investors. The high degree of leverage
                can work against you as well as for you. Before deciding to trade foreign
                exchange you should carefully consider your investment objectives, level
                of experience, and risk appetite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Risk of Loss
              </h2>
              <p>
                The possibility exists that you could sustain a loss of some or all of
                your initial investment and therefore you should not invest money that
                you cannot afford to lose. You should be aware of all the risks
                associated with foreign exchange trading and seek advice from an
                independent financial advisor if you have any doubts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                No Guarantees
              </h2>
              <p>
                Past performance is not indicative of future results. No representation
                is being made that any account will or is likely to achieve profits or
                losses similar to those discussed on our website or in our educational
                materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Educational Purpose
              </h2>
              <p>
                The information provided through our mentorship program, signals, and
                community is for educational purposes only and should not be considered
                as financial advice. All trading signals and strategies are provided as
                educational examples and are not recommendations to buy or sell any
                financial instruments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Trading Signals
              </h2>
              <p>
                Trading signals provided in our Discord community are based on technical
                analysis and market research. However, there is no guarantee that these
                signals will result in profitable trades. You should conduct your own
                analysis and make your own trading decisions. We are not responsible for
                any losses incurred from following our signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Your Responsibility
              </h2>
              <p>
                By participating in our mentorship program and using our signals, you
                acknowledge that you are solely responsible for your trading decisions
                and any consequences thereof. You understand and accept all risks
                associated with Forex trading and agree that Chartix Mentorship and its
                instructors shall not be held liable for any losses you may incur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Regulatory Information
              </h2>
              <p>
                Chartix Mentorship is an educational service and is not a registered
                investment advisor, broker, or dealer. We do not provide personalized
                investment advice or recommendations tailored to your specific financial
                situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                Risk Management
              </h2>
              <p>
                We strongly encourage all students to implement proper risk management
                strategies including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Never risk more than 1-2% of your account per trade</li>
                <li>Always use stop-loss orders to limit potential losses</li>
                <li>Diversify your trading portfolio</li>
                <li>Only trade with money you can afford to lose</li>
                <li>Start with a demo account before trading with real money</li>
              </ul>
            </section>

            <section className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <h2 className="text-xl font-bold text-red-900 mb-2">
                Warning
              </h2>
              <p className="text-red-800">
                Trading Forex involves substantial risk of loss and is not suitable for
                every investor. The valuation of Forex currencies may fluctuate, and
                clients may lose more than their original investment. We cannot and do
                not guarantee profits or protection from losses.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
