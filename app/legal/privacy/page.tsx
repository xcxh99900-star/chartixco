import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--muted)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[var(--text-1)] mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use Chartix Mentorship services, we collect the following types
                of information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone
                  number, payment information
                </li>
                <li>
                  <strong>Account Information:</strong> Discord username and ID when you
                  join our community
                </li>
                <li>
                  <strong>Payment Information:</strong> Transaction references, payment
                  method details, receipt information
                </li>
                <li>
                  <strong>Usage Information:</strong> How you interact with our website
                  and Discord community
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process and verify your payments</li>
                <li>Provide access to our course materials and signals</li>
                <li>Communicate with you about your account and services</li>
                <li>Send trading signals and educational content via Discord</li>
                <li>Improve our services and user experience</li>
                <li>Respond to your questions and support requests</li>
                <li>Send promotional offers and updates (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                3. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Service Providers:</strong> With Supabase for database
                  services and Discord for community management
                </li>
                <li>
                  <strong>Payment Processing:</strong> With payment providers to verify
                  transactions
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to
                  protect our rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures
                to protect your personal information against unauthorized access, loss,
                destruction, or alteration. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mt-2">Our security measures include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Encrypted data transmission</li>
                <li>Secure database storage with Supabase</li>
                <li>Regular security audits</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide
                our services and fulfill the purposes outlined in this Privacy Policy. We
                will retain and use your information to comply with legal obligations,
                resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us through our Discord community
                or website contact form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                7. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve
                your experience. You can control cookie settings through your browser,
                but disabling cookies may limit your ability to use certain features of
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                8. Third-Party Services
              </h2>
              <p>
                Our services integrate with third-party platforms including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Discord:</strong> For community management and communication
                </li>
                <li>
                  <strong>Supabase:</strong> For secure data storage
                </li>
                <li>
                  <strong>Payment Processors:</strong> For transaction verification
                </li>
              </ul>
              <p className="mt-2">
                These third-party services have their own privacy policies, and we
                encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do
                not knowingly collect personal information from children. If we become
                aware that we have collected information from a child, we will take steps
                to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                10. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other
                than your country of residence. These countries may have different data
                protection laws. By using our services, you consent to the transfer of
                your information to these countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                11. Changes to Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you
                of significant changes by posting the new policy on our website and
                updating the &quot;Last Updated&quot; date. Your continued use of our services after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-1)] mb-3">
                12. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data
                practices, please contact us through:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Our Discord community</li>
                <li>Website contact form</li>
                <li>Direct message to an admin</li>
              </ul>
            </section>

            <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Your Privacy Matters
              </h3>
              <p className="text-blue-800">
                We are committed to protecting your privacy and handling your personal
                information responsibly. If you have any questions about how we collect,
                use, or protect your data, please don&apos;t hesitate to reach out.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
