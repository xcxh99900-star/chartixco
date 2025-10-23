import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[var(--muted)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[var(--text-1)] mb-6">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Chartix Mentorship services, including our
                website, Discord community, educational materials, and trading signals,
                you agree to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                2. Service Description
              </h2>
              <p>
                Chartix Mentorship provides educational services related to Forex
                trading, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Online course materials and training modules</li>
                <li>Trading signals via private Discord community</li>
                <li>Access to mentorship and community support</li>
                <li>Educational resources and market analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                3. Payment and Refunds
              </h2>
              <p>
                All payments for our services are processed manually and are
                non-refundable. Due to the immediate access to digital educational
                content and trading signals, we do not offer refunds once payment is
                verified and access is granted.
              </p>
              <p className="mt-2">
                Payment verification typically takes 24-48 hours. You will receive access
                to our services only after your payment has been successfully verified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                4. User Responsibilities
              </h2>
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and complete payment information</li>
                <li>Maintain the confidentiality of your Discord account</li>
                <li>Not share course materials or signals with non-members</li>
                <li>Respect other community members and mentors</li>
                <li>Take full responsibility for your trading decisions</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content provided through Chartix Mentorship, including course
                materials, videos, signals, and analysis, is protected by intellectual
                property rights. You may not reproduce, distribute, modify, or create
                derivative works from our content without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                6. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided &quot;as is&quot; without any warranties, express or
                implied. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Specific trading results or profits</li>
                <li>The accuracy or completeness of our signals</li>
                <li>Uninterrupted or error-free service</li>
                <li>That our services will meet your specific requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                Chartix Mentorship, its owners, instructors, and affiliates shall not be
                liable for any direct, indirect, incidental, consequential, or punitive
                damages arising from your use of our services, including but not limited
                to trading losses, lost profits, or lost data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to our services
                at any time, without prior notice, for conduct that we believe violates
                these Terms of Service or is harmful to other users, us, or third
                parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                9. Subscription Services
              </h2>
              <p>
                For monthly signal subscriptions, billing occurs on a recurring basis.
                You may cancel your subscription at any time, but you will retain access
                until the end of your current billing period. No partial refunds are
                provided for early cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                10. Community Guidelines
              </h2>
              <p>
                Our Discord community is a professional environment. We expect all
                members to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Be respectful and professional</li>
                <li>Avoid spam or promotional content</li>
                <li>Not share illegal or inappropriate content</li>
                <li>Follow Discord&apos;s Terms of Service</li>
              </ul>
              <p className="mt-2">
                Violation of community guidelines may result in immediate removal without
                refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time.
                Changes will be effective immediately upon posting. Your continued use of
                our services after changes are posted constitutes acceptance of the
                modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                12. Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us
                through our Discord community or website contact form.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
