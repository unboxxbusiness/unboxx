import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Unboxx Business",
  description: "Terms of Use governing your use of the Unboxx Business website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfUse() {
  const sections = [
    { id: "1", title: "1. Who we are" },
    { id: "2", title: "2. Using our website" },
    { id: "3", title: "3. Our services" },
    { id: "4", title: "4. Access we may need" },
    { id: "5", title: "5. No guaranteed outcomes" },
    { id: "6", title: "6. Third-party platforms" },
    { id: "7", title: "7. Intellectual property" },
    { id: "8", title: "8. Client responsibilities" },
    { id: "9", title: "9. Limitation of liability" },
    { id: "10", title: "10. Termination" },
    { id: "11", title: "11. Changes to Terms" },
    { id: "12", title: "12. Governing law" },
    { id: "13", title: "13. Contact us" },
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
          Terms of Use
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
            These Terms of Use ("Terms") govern your use of the website{" "}
            <span className="text-text-charcoal font-semibold">unboxxbusiness.live</span> and the services provided by
            Unboxx Business ("Unboxx Business," "we," "us," or "our"). By using our website or services, you
            agree to these Terms.
          </p>

          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">1. Who we are</h3>
            <p>
              Unboxx Business helps businesses, institutions, and multi-location organizations improve their
              visibility, reputation, and customer experience online. Our services include:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                <strong className="text-text-charcoal">Visibility Growth</strong> — Google Business Profile Optimization,
                Local SEO, Google Maps Optimization, Multi-Location SEO, AI Search Visibility
              </li>
              <li>
                <strong className="text-text-charcoal">Reputation Growth</strong> — Review Generation, Review Management,
                Reputation Monitoring, Trust Building
              </li>
              <li>
                <strong className="text-text-charcoal">Experience & Automation</strong> — 360° Virtual Tours, AI Chatbots,
                WhatsApp Automation, Email Automation, Customer Journey Automation
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">2. Using our website</h3>
            <p>
              You agree to use our website only for lawful purposes related to learning about or engaging our
              services. You must not use our site to transmit malicious code, attempt unauthorized access, or
              interfere with its performance.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">3. Our services</h3>
            <p>
              Engaging Unboxx Business for services is governed by a separate Service Agreement or proposal signed
              by both parties. These Terms govern your initial contact, inquiries, and general use of this website.
            </p>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">4. Access we may need</h3>
            <p>
              To deliver our services (such as Google Maps optimization or review management), we will need
              authorized access to your Google Business Profile, local listings, or websites. We agree to only
              perform actions authorized by you and detailed in your Service Agreement.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">5. No guaranteed outcomes</h3>
            <p>
              While we optimize visibility and reputation using industry best practices, local search algorithms
              are owned by third parties (like Google and Meta). We cannot guarantee specific ranking positions,
              review counts, or sales outcomes.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">6. Third-party platforms</h3>
            <p>
              Our services interact with third-party platforms (Google Maps, WhatsApp, review sites). We are not
              responsible for changes, service disruptions, or policy enforcements on these platforms that affect
              your business listings.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">7. Intellectual property</h3>
            <p>
              All content on this website (logos, text, graphics, designs) is owned by or licensed to Unboxx Business
              and is protected by copyright laws. You may not copy, distribute, or reuse our website content without
              prior written consent.
            </p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">8. Client responsibilities</h3>
            <p>
              You agree to provide accurate information when filling out forms or communicating with us. You are
              responsible for maintaining the confidentiality of any access credentials provided to us.
            </p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">9. Limitation of liability</h3>
            <p>
              To the maximum extent permitted by law, Unboxx Business is not liable for any direct, indirect,
              incidental, or consequential damages resulting from your use of our website or services, including
              lost profits, data loss, or service interruptions.
            </p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">10. Termination</h3>
            <p>
              We reserve the right to suspend or terminate your access to our website or services at our sole
              discretion, without notice, for conduct that violates these Terms, our policies, or third-party rules,
              and any applicable Service Agreement.
            </p>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">11. Changes to these Terms</h3>
            <p>
              We may update these Terms from time to time. We'll post the updated version on this page with a new
              "Last updated" date. Continued use of our website or services after changes means you accept the
              updated Terms.
            </p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">12. Governing law</h3>
            <p>
              These Terms are governed by the laws of{" "}
              <span className="text-text-charcoal font-semibold">Delhi, India</span>. Any disputes will be handled
              in the courts of <span className="text-text-charcoal font-semibold">Delhi, India</span>.
            </p>
          </div>

          {/* Section 13 */}
          <div id="section-13" className="scroll-mt-28 space-y-3">
            <h3 className="font-heading font-bold text-xl text-text-charcoal">13. Contact us</h3>
            <p>
              Questions about these Terms can be sent to{" "}
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
