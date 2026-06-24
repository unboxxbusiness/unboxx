import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Unboxx Business",
  description: "Refund & Cancellation Policy explaining payments, cancellations, and billing for Unboxx Business services.",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPolicy() {
  const sections = [
    { id: "1", title: "1. How our services are billed" },
    { id: "2", title: "2. Setup and onboarding fees" },
    { id: "3", title: "3. Recurring service fees" },
    { id: "4", title: "4. No guaranteed-results refunds" },
    { id: "5", title: "5. Refunds for service errors" },
    { id: "6", title: "6. Third-party and platform fees" },
    { id: "7", title: "7. How to request cancellation" },
    { id: "8", title: "8. Changes to this policy" },
    { id: "9", title: "9. Contact us" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-12 text-text-muted bg-bg-cream">
      
      {/* Back to Home Link */}
      <div>
        <Link
          href="/"
          className="group inline-flex items-center space-x-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <section className="flex flex-col space-y-4 pt-6 border-b border-stone-200/80 pb-8">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight">
          Refund & Cancellation Policy
        </h1>
        <div className="flex items-center space-x-2 text-xs text-text-muted/65">
          <Clock className="h-4 w-4 text-brand-orange" />
          <span>Last updated: June 24, 2026</span>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-3 sticky top-28 hidden lg:block bg-white p-6 rounded-2xl border border-stone-200/80 space-y-4 shadow-sm">
          <h4 className="text-xs font-bold text-text-charcoal uppercase tracking-wider mb-2">Sections</h4>
          <nav className="flex flex-col space-y-2 text-xs font-medium">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#section-${sec.id}`}
                className="text-text-muted/75 hover:text-brand-orange transition-colors"
              >
                {sec.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Section */}
        <main className="lg:col-span-9 space-y-10 text-sm md:text-base text-text-muted/95 leading-relaxed max-w-3xl">
          <p>
            This policy explains how payments, refunds, and cancellations work for Unboxx Business services.
            It applies alongside any Service Agreement signed between you and Unboxx Business.
          </p>

          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">1. How our services are billed</h3>
            <p>
              Depending on the service, you may be billed:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                A <strong className="text-text-charcoal">one-time setup or onboarding fee</strong>, for initial work such as Google Business Profile setup, virtual tour production, or chatbot/automation configuration.
              </li>
              <li>
                A <strong className="text-text-charcoal">recurring monthly or annual fee</strong>, for ongoing services such as Local SEO, Review Management, Reputation Monitoring, or automation maintenance.
              </li>
            </ul>
            <p className="mt-2">
              Exact pricing, billing frequency, and payment terms are confirmed in your proposal or Service Agreement before work begins.
            </p>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">2. Setup and onboarding fees</h3>
            <p>
              Setup and onboarding fees cover work already performed (such as audits, account setup, content creation, or initial configuration) and are <strong className="text-text-charcoal">non-refundable</strong> once that work has started, unless required by law.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">3. Recurring service fees</h3>
            <p>
              For ongoing monthly or subscription-based services:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>You may cancel at any time by giving <strong className="text-text-charcoal">30</strong> days' written notice before your next billing date.</li>
              <li>Fees already paid for the current billing period are <strong className="text-text-charcoal">non-refundable</strong>, since they cover work performed or scheduled during that period.</li>
              <li>If you cancel mid-cycle, your access to active services (such as review management or chatbot operation) will continue until the end of the period you've already paid for.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">4. No guaranteed-results refunds</h3>
            <p>
              Because search rankings, review growth, and online visibility depend on factors outside our control (including changes made by Google, Meta, and other platforms), we don't offer refunds based on rankings, review counts, leads, or revenue not meeting expectations. We do commit to delivering the work and effort outlined in your Service Agreement.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">5. Refunds for service errors</h3>
            <p>
              If we fail to deliver a service as agreed in your Service Agreement — for example, missing an agreed deliverable entirely — contact us at <span className="text-brand-orange font-semibold">support@unboxxbusiness.live</span> within <strong className="text-text-charcoal">7</strong> days. We'll review the issue and, where appropriate, offer a partial refund, service credit, or corrective work, at our discretion.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">6. Third-party and platform fees</h3>
            <p>
              Some services involve third-party costs — such as WhatsApp Business API fees, advertising spend, or paid tools used on your behalf. These fees are generally <strong className="text-text-charcoal">non-refundable</strong>, as they're paid directly to third-party platforms.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">7. How to request a cancellation or refund</h3>
            <p>
              To cancel a service or request a refund, email us at <span className="text-brand-orange font-semibold">support@unboxxbusiness.live</span> with your account details and the reason for your request. We'll confirm receipt within <strong className="text-text-charcoal">2</strong> business days and respond with next steps within <strong className="text-text-charcoal">7</strong> business days.
            </p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">8. Changes to this policy</h3>
            <p>
              We may update this policy from time to time. Changes will be posted here with a new "Last updated" date and will apply to services billed after that date.
            </p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">9. Contact us</h3>
            <p>
              Questions about billing, cancellations, or refunds can be sent to{" "}
              <span className="text-brand-orange font-semibold">support@unboxxbusiness.live</span> or by post to:
            </p>
            <address className="not-italic bg-white p-5 rounded-2xl border border-stone-200/80 text-text-charcoal mt-2 shadow-sm">
              Unboxx Business<br />
              New Delhi, Delhi,<br />
              India
            </address>
          </div>
        </main>

      </div>

    </div>
  );
}
