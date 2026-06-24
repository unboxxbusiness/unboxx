import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Star, MessageSquare, Check } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SEO & Growth Solutions | Visibility, Reputation, Experience",
  description: "Explore Unboxx Business growth solutions: Local SEO dominance, automated review pipelines, and AI-supported conversion engines.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function Solutions() {
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Visibility Growth & Local SEO",
      "description": "Google Business Profile optimization, local SEO, Google Maps rankings, and AI search visibility configuration.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Unboxx Business"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Reputation & Review Automation",
      "description": "WhatsApp-triggered customer feedback loops and automated star ratings syndication.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Unboxx Business"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Experience & Conversion Automation",
      "description": "Deploy instant AI-supported chatbot templates and WhatsApp integrations to convert organic clicks.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Unboxx Business"
      }
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does local search visibility benefit my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By optimizing your Google Business Profile, coordinates, and citations, local SEO ensures you rank at the top when users search for services nearby, leading to direct opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What is reputation growth automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reputation automation uses API-driven workflows (such as WhatsApp) to request customer feedback at the point-of-sale, helping you acquire high ratings automatically."
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-20 text-text-muted">
      <StructuredData schema={[...serviceSchemas, faqSchema]} />
      
      {/* Page Header */}
      <section className="bg-white border border-stone-200/80 p-8 md:p-12 rounded-3xl flex flex-col space-y-4 max-w-4xl shadow-sm">
        <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full self-start text-xs font-semibold uppercase tracking-wider">
          <span>Engineered Growth</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight leading-tight">
          Three things every business needs to grow
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          You don't need more software. You need to be easier to find, easier to trust, and easier to do business with. That's what we focus on.
        </p>
      </section>

      {/* Grid Stack */}
      <div className="flex flex-col space-y-12">
        
        {/* Solution 1 */}
        <section id="visibility" className="bg-white border border-stone-200/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-mono-label font-bold block text-xs">SOLUTION 01</span>
                  <h2 className="font-heading font-bold text-2xl text-text-charcoal">Visibility Growth</h2>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-text-muted">
                <h4 className="font-heading font-semibold text-text-charcoal">Show up first, not eventually.</h4>
                <p className="leading-relaxed">
                  If you're not on the first page, you're invisible to most people searching. We make sure your business shows up — on Google, on Maps, and in the new wave of AI-powered search.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6 space-y-3">
                <span className="text-mono-label block text-text-muted/40 font-bold text-[10px]">Includes //</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Google Business Profile Optimization",
                    "Local SEO",
                    "Google Maps Optimization",
                    "Multi-Location SEO",
                    "AI Search Visibility"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text-muted">
                      <Check className="h-4 w-4 text-brand-orange flex-shrink-0" />
                      <span className="font-mono text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-pill-secondary px-6 py-2.5 text-xs text-brand-orange font-bold"
                >
                  <span>LEARN MORE ABOUT VISIBILITY GROWTH</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 inline" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 border border-stone-150 p-6 rounded-2xl space-y-4 shadow-sm">
              <span className="text-mono-label block text-text-muted/50 font-bold text-[10px]">Visibility Scope Matrix</span>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">Google Pack Ranking</span>
                  <span className="text-text-charcoal font-bold">Priority #1</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">AI Engine Recommender</span>
                  <span className="text-text-charcoal font-bold">Synthesized Index</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted/60">Citations Accuracy</span>
                  <span className="text-text-charcoal font-bold">100% Normalized</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution 2 */}
        <section id="reputation" className="bg-white border border-stone-200/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 text-indigo-650 rounded-2xl fill-indigo-500">
                  <Star className="h-6 w-6 fill-indigo-500 text-indigo-650" />
                </div>
                <div>
                  <span className="text-mono-label font-bold block text-xs">SOLUTION 02</span>
                  <h2 className="font-heading font-bold text-2xl text-text-charcoal">Reputation Growth</h2>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-text-muted">
                <h4 className="font-heading font-semibold text-text-charcoal">Let your happy customers do the talking.</h4>
                <p className="leading-relaxed">
                  People trust other people more than they trust ads. We help you generate more reviews, respond to them the right way, and keep a close eye on what's being said about you — before it becomes a problem.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6 space-y-3">
                <span className="text-mono-label block text-text-muted/40 font-bold text-[10px]">Includes //</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Review Generation",
                    "Review Management",
                    "Reputation Monitoring",
                    "Trust Building"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text-muted">
                      <Check className="h-4 w-4 text-brand-orange flex-shrink-0" />
                      <span className="font-mono text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-pill-secondary px-6 py-2.5 text-xs text-brand-orange font-bold"
                >
                  <span>LEARN MORE ABOUT REPUTATION GROWTH</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 inline" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 border border-stone-150 p-6 rounded-2xl space-y-4 shadow-sm">
              <span className="text-mono-label block text-text-muted/50 font-bold text-[10px]">Trust Scope Matrix</span>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">Average Star Target</span>
                  <span className="text-text-charcoal font-bold">4.8+ Rating</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">Frequency Volume</span>
                  <span className="text-text-charcoal font-bold">Stable Stream</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted/60">Alert Notification</span>
                  <span className="text-text-charcoal font-bold">Real-time Crawl</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution 3 */}
        <section id="automation" className="bg-white border border-stone-200/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-50 text-emerald-650 rounded-2xl">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-mono-label font-bold block text-xs">SOLUTION 03</span>
                  <h2 className="font-heading font-bold text-2xl text-text-charcoal">Experience & Automation</h2>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-text-muted">
                <h4 className="font-heading font-semibold text-text-charcoal">Give people a reason to choose you on the spot.</h4>
                <p className="leading-relaxed">
                  A fast response beats a perfect one that comes too late. We help you greet, guide, and follow up with customers automatically — so no one falls through the cracks.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6 space-y-3">
                <span className="text-mono-label block text-text-muted/40 font-bold text-[10px]">Includes //</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "360° Virtual Tours",
                    "AI Chatbots",
                    "WhatsApp Automation",
                    "Email Automation",
                    "Customer Journey Automation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text-muted">
                      <Check className="h-4 w-4 text-brand-orange flex-shrink-0" />
                      <span className="font-mono text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-pill-secondary px-6 py-2.5 text-xs text-brand-orange font-bold"
                >
                  <span>LEARN MORE ABOUT EXPERIENCE & AUTOMATION</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 inline" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 border border-stone-150 p-6 rounded-2xl space-y-4 shadow-sm">
              <span className="text-mono-label block text-text-muted/50 font-bold text-[10px]">Automation Scope Matrix</span>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">Initial Bot Response</span>
                  <span className="text-text-charcoal font-bold">&lt; 10 Seconds</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-text-muted/60">WhatsApp API Integration</span>
                  <span className="text-text-charcoal font-bold">Official Sync</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted/60">Virtual Tour Mapping</span>
                  <span className="text-text-charcoal font-bold">Spatial 3D View</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
        <div className="flex-1 h-px bg-stone-200/80"></div>
        <span className="text-[10px] font-mono font-bold text-text-muted/30 uppercase tracking-[0.2em]">SECTION 06</span>
        <div className="flex-1 h-px bg-stone-200/80"></div>
      </div>

      {/* Stark CTA Footer Section [06] */}
      <section className="text-center py-16 bg-[#f1efe9] border border-black/5 rounded-3xl max-w-4xl mx-auto w-full shadow-sm">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto px-6">
          <span className="text-mono-label font-bold text-xs">Diagnostic Tool</span>
          <h2 className="font-heading font-extrabold text-3xl text-text-charcoal leading-tight">
            Not sure where to start?
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Most businesses don't need everything at once. Tell us where you're losing customers, and we'll tell you what to fix first.
          </p>
          <Link
            href="/contact"
            className="btn-pill-primary px-8 py-4 text-base"
          >
            <span>GET A FREE VISIBILITY CHECK</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
}
