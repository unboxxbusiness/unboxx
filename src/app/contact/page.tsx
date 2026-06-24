import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact & Free Local SEO Audit | Unboxx Business",
  description: "Tell us a bit about your business. We'll audit your search visibility, Google Business Profile, and reviews for free.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Unboxx Business",
    "description": "Request a free local search visibility check and SEO audit.",
    "url": "https://unboxxbusiness.live/contact"
  };
  const steps = [
    {
      step: "1",
      title: "You tell us about your business.",
      desc: "Fill out the simple form with your basic details and website URL."
    },
    {
      step: "2",
      title: "We review your visibility and reputation.",
      desc: "We look at search rankings, maps profiles, review averages, and response times."
    },
    {
      step: "3",
      title: "We show you what to fix first, and how we can help.",
      desc: "You get a clear action plan of the changes that matter to win more customers."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-16 text-text-muted bg-bg-cream">
      <StructuredData schema={contactSchema} />
      
      {/* Header section */}
      <section className="max-w-3xl flex flex-col space-y-6 pt-6 text-left">
        <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider self-start">
          <span>Free Analysis</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight">
          Let's find out what's costing you customers.
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          Tell us a bit about your business. We'll take a look at how you currently show up online and tell you exactly where you're losing people — for free.
        </p>
      </section>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Process steps */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-text-charcoal">
              What happens next:
            </h3>
            <p className="text-sm text-text-muted/60">
              No pressure. No long forms. Just a clear next step.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((item, idx) => {
              return (
                <div key={idx} className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm">
                  <div className="h-8 w-8 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-text-charcoal text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-stone-200/85 pt-6 flex flex-col space-y-1">
            <span className="text-sm font-semibold text-text-charcoal italic">
              "No obligations. Just clarity on where you stand."
            </span>
          </div>
        </div>

        {/* Right column: The client-side form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
}
