import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Unboxx Business",
  description: "Privacy Policy explaining how Unboxx Business collects, uses, and protects information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "1", title: "1. Information we collect" },
    { id: "2", title: "2. How we use information" },
    { id: "3", title: "3. How we share information" },
    { id: "4", title: "4. AI tools and automation" },
    { id: "5", title: "5. Cookies" },
    { id: "6", title: "6. Data security" },
    { id: "7", title: "7. Data retention" },
    { id: "8", title: "8. Your rights" },
    { id: "9", title: "9. Children's privacy" },
    { id: "10", title: "10. International users" },
    { id: "11", title: "11. Changes to this policy" },
    { id: "12", title: "12. Contact us" },
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
          Privacy Policy
        </h1>
        <div className="flex items-center space-x-2 text-xs text-text-muted/60">
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
            This Privacy Policy explains how Unboxx Business collects, uses, and protects information when you
            visit our website <span className="text-text-charcoal font-semibold">unboxxbusiness.live</span> or use our services.
          </p>

          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">1. Information we collect</h3>
            <p>
              <strong>Information you give us directly</strong>, such as when you fill out a contact form, request a free check, or sign a Service Agreement:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Name, email, phone number, company name, and job title</li>
              <li>Business details relevant to delivering our services (e.g., locations, Google Business Profile data, review platform access)</li>
              <li>Payment and billing details (processed via our secure payment provider — we don't store full card details)</li>
            </ul>

            <p className="mt-2">
              <strong>Information collected automatically</strong>, when you visit our website:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time on site, referral source</li>
              <li>Cookies and similar tracking technologies (see Section 5)</li>
            </ul>

            <p className="mt-2">
              <strong>Information processed while delivering services</strong>, such as:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Customer reviews, ratings, and responses you ask us to manage</li>
              <li>Messages sent or received through WhatsApp Automation, Email Automation, or AI Chatbots, where you've engaged us to manage these on your behalf</li>
              <li>Analytics from your Google Business Profile, Google Maps listing, or website</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">2. How we use this information</h3>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Deliver and improve the services you've engaged us for</li>
              <li>Communicate with you about your account, services, or support requests</li>
              <li>Send you updates, tips, or offers (you can opt out anytime)</li>
              <li>Monitor and improve our website's performance and security</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">3. How we share information</h3>
            <p>
              We don't sell your information. We may share it with:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                <strong className="text-text-charcoal">Service providers</strong> who help us operate — such as hosting providers, email and WhatsApp messaging platforms, AI chatbot providers, and analytics tools
              </li>
              <li>
                <strong className="text-text-charcoal">Platforms required to deliver services</strong> — such as Google (for Business Profile and Maps optimization) or Meta (for WhatsApp Business)
              </li>
              <li>
                <strong className="text-text-charcoal">Authorities</strong>, if required by law, regulation, or legal process
              </li>
            </ul>
            <p className="mt-2">
              Any third party we share information with is required to handle it securely and only use it for the purpose we've authorized.
            </p>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">4. AI tools and automation</h3>
            <p>
              Some of our services (such as AI Chatbots, AI Search Visibility, and automated messaging) use third-party AI providers to process conversations and customer interactions. We take reasonable steps to work with providers who handle data securely, but we encourage you to avoid sharing highly sensitive personal information through chatbots or automated messages unless necessary.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">5. Cookies</h3>
            <p>
              Our website uses cookies to understand how visitors use the site and to improve your experience. You can control or disable cookies through your browser settings. Disabling cookies may affect how parts of the site function.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">6. Data security</h3>
            <p>
              We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. No method of transmission or storage is completely secure, and we can't guarantee absolute security.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">7. Data retention</h3>
            <p>
              We retain your information for as long as needed to provide our services, meet legal obligations, or resolve disputes. When information is no longer needed, we take steps to delete or anonymize it.
            </p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">8. Your rights</h3>
            <p>
              Depending on where you're located, you may have the right to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing, where consent is the basis for it</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <span className="text-brand-orange font-semibold">support@unboxxbusiness.live</span>.
            </p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">9. Children's privacy</h3>
            <p>
              Our website and services are intended for businesses and organizations, not children. We don't knowingly collect personal information from children under 18.
            </p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">10. International users</h3>
            <p>
              If you're accessing our website or services from outside <span className="text-text-charcoal font-semibold">India</span>, your information may be processed and stored in <span className="text-text-charcoal font-semibold">India</span> or other locations where our service providers operate.
            </p>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">11. Changes to this policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted here with a new "Last updated" date.
            </p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">12. Contact us</h3>
            <p>
              Questions about this Privacy Policy can be sent to{" "}
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
