import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Hospital, School, MapPin, UtensilsCrossed } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Client Success Chronicles | Real Growth Case Studies",
  description: "Read real stories and results of organizations that optimized search visibility, review rating systems, and regional rankings with Unboxx Business.",
  alternates: {
    canonical: "/stories",
  },
};

export default function Stories() {
  const stories = [
    {
      slug: "empty-admissions-desk",
      title: "The Empty Admissions Desk",
      industry: "Universities & Schools",
      teaser: "Enrollment metrics were hitting record lows because the institution lacked basic search engine presence.",
      icon: GraduationCap,
    },
    {
      slug: "hospital-nobody-could-find",
      title: "The Hospital Nobody Could Find",
      industry: "Hospitals & Healthcare",
      teaser: "Patients searching for emergency departments were unable to locate the correct entry coordinates on maps.",
      icon: Hospital,
    },
    {
      slug: "school-parents-never-considered",
      title: "The School Parents Never Considered",
      industry: "Universities & Schools",
      teaser: "Despite superior academics, a lack of digital review history made the school look risky to new parents.",
      icon: School,
    },
    {
      slug: "missing-branch",
      title: "The Missing Branch",
      industry: "Franchises & Multi-Location",
      teaser: "Mismatched branch listings across 50+ directory portals sent local searches to competitors.",
      icon: MapPin,
    },
    {
      slug: "great-food-nobody-knew-about",
      title: "The Great Food Nobody Knew About",
      industry: "Retail Businesses",
      teaser: "A dining spot struggled with guest volume until maps pack optimizations placed them in local searches.",
      icon: UtensilsCrossed,
    }
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Client Success Chronicles | Unboxx Business",
    "description": "A collection of case studies demonstrating Unboxx Business local search and reputation improvements.",
    "url": "https://unboxxbusiness.live/stories",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": stories.map((story, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://unboxxbusiness.live/stories/${story.slug}`,
        "name": story.title
      }))
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-20 text-text-muted bg-bg-cream">
      <StructuredData schema={collectionSchema} />
      
      {/* Page Header */}
      <section className="bg-white border border-stone-200/80 p-8 md:p-12 rounded-3xl flex flex-col space-y-4 max-w-4xl shadow-sm">
        <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full self-start text-xs font-semibold uppercase tracking-wider">
          <span>Case Chronicles</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight leading-tight">
          Real businesses. Real results.
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          This is where we'll share the businesses we've helped — the hospital that started showing up in local search, the university that turned more inquiries into applications, the retailer that finally got ahead of its reviews.
        </p>
      </section>

      {/* Methodology callout */}
      <section className="bg-white border border-stone-200/80 p-6 rounded-2xl max-w-3xl shadow-sm">
        <span className="text-mono-label font-bold block mb-2 text-xs">Outcome-First Template //</span>
        <p className="text-xs text-text-muted leading-relaxed">
          Every story here follows the same shape: <strong className="text-text-charcoal font-bold">The problem</strong> (what was actually costing them customers), <strong className="text-text-charcoal font-bold">What we did</strong> (the changes we made), and <strong className="text-text-charcoal font-bold">What changed</strong> (in their words, not just our numbers).
        </p>
      </section>

      {/* Stories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <div
              key={story.slug}
              className="bg-white border border-stone-200/80 p-6 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange-light border border-brand-orange/20 px-2.5 py-0.5 rounded-full">
                    {story.industry}
                  </span>
                  <Icon className="h-4 w-4 text-text-muted/30 group-hover:text-brand-orange transition-colors duration-300" />
                </div>

                <h3 className="font-heading font-bold text-lg text-text-charcoal mb-2 leading-snug">
                  {story.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed">
                  {story.teaser}
                </p>
              </div>

              <div>
                <Link
                  href={`/stories/${story.slug}`}
                  className="btn-pill-secondary px-5 py-2 text-xs font-bold text-brand-orange"
                >
                  <span>READ STORY</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5 inline transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Divider */}
      <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
        <div className="flex-1 h-px bg-stone-200/80"></div>
        <span className="text-[10px] font-mono font-bold text-text-muted/30 uppercase tracking-[0.2em]">SECTION 07</span>
        <div className="flex-1 h-px bg-stone-200/80"></div>
      </div>

      {/* Bottom CTA */}
      <section className="text-center py-16 bg-[#f1efe9] border border-black/5 rounded-3xl max-w-4xl mx-auto w-full relative shadow-sm">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto px-6">
          <span className="text-mono-label font-bold text-xs">Growth Alignment</span>
          <h2 className="font-heading font-extrabold text-3xl text-text-charcoal leading-tight">
            Talk to us about your business
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Find out how we can help your brand get found, trusted, and chosen online using a similar outcome-first blueprint.
          </p>
          <Link
            href="/contact"
            className="btn-pill-primary px-8 py-4 text-base"
          >
            <span>START A BLUEPRINT ASSESSMENT</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
}
