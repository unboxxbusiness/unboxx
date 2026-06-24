import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, GraduationCap, Hospital, School, MapPin, UtensilsCrossed, CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";

interface StoryData {
  title: string;
  industry: string;
  problem: string;
  whatWeDid: string;
  whatChanged: string;
  metrics: { value: string; label: string }[];
  timeline: string[];
  icon: any;
}

export const storiesData: Record<string, StoryData> = {
  "empty-admissions-desk": {
    title: "The Empty Admissions Desk",
    industry: "Universities & Schools",
    problem: "Prospective students were searching for regional engineering and business programs, but the university's site was buried on page 3 of search results. Enrollment metrics were hitting record lows because the institution lacked basic online visibility.",
    whatWeDid: "We optimized their academic program landing pages for high-intent keywords, fixed technical indexing errors, and structured their local schemas so search engines understood regional relevance.",
    whatChanged: "\"Our engineering applications increased by over 60% in a single semester once students could actually find us on Google search. The admissions desk is busy again, and the process is seamless.\"",
    metrics: [
      { value: "+148%", label: "Search Visibility" },
      { value: "+64%", label: "Lead Form Enquiries" },
      { value: "No. 1", label: "Regional Ranking" }
    ],
    timeline: [
      "Technical index audit and duplicate schema removal",
      "Program page keyword mapping and metadata overhaul",
      "Regional backlink authority campaigns",
      "Lead-generation funnel automation setup"
    ],
    icon: GraduationCap
  },
  "hospital-nobody-could-find": {
    title: "The Hospital Nobody Could Find",
    industry: "Hospitals & Healthcare",
    problem: "Patients searching for emergency room locations and outpatient specialty services were unable to locate the correct entrances on standard navigation apps, leading to lost patient trust and intake volume.",
    whatWeDid: "We mapped and optimized Google Business Profiles for every branch, inpatient department, and emergency entrance. We aligned spatial coordinates and synchronized metadata across primary navigation networks.",
    whatChanged: "\"Patients are finding the specialty entrance directly now without getting lost or calling for directions. Our emergency department check-ins from search directions are up 85%.\"",
    metrics: [
      { value: "+210%", label: "Google Maps Discovery" },
      { value: "+85%", label: "Direction Requests" },
      { value: "100%", label: "Coordinate Accuracy" }
    ],
    timeline: [
      "Audited latitude/longitude coords for 14 separate clinic entry gates",
      "Re-configured emergency care GBP schemas",
      "Local directories coordinate syndication",
      "Integrated emergency maps page updates"
    ],
    icon: Hospital
  },
  "school-parents-never-considered": {
    title: "The School Parents Never Considered",
    industry: "Universities & Schools",
    problem: "Parents seeking private primary education researched ratings and testimonials before booking tours. Lacking review generation systems, the school was overlooked in favor of competitors with more digital credibility, despite superior academics.",
    whatWeDid: "We deployed automated feedback loops targeting parents at high-touch moments, compiled verified reviews onto key portals, and implemented trust assets directly on the website.",
    whatChanged: "\"We built a 4.9-star rating within months. Parents now mention reading our positive reviews before booking a tour, and our classrooms are completely full.\"",
    metrics: [
      { value: "4.9★", label: "Average Review Rating" },
      { value: "+120%", label: "Parent Tour Bookings" },
      { value: "+300", label: "New Verified Reviews" }
    ],
    timeline: [
      "Established automated review generation triggers post-registration",
      "Optimized Google Business reviews workflow",
      "Styled reviews showcase slider on homepage",
      "Created parent referral reward tracking"
    ],
    icon: School
  },
  "missing-branch": {
    title: "The Missing Branch",
    industry: "Franchises & Multi-Location",
    problem: "A multi-location franchise had mismatched phone numbers, addresses, and hours across search portals. The errors sent potential customers to competitor locations, costing thousands in daily revenue.",
    whatWeDid: "We centralized directory listings, built automated sync scripts, and unified details across 50+ local platforms to guarantee absolute consistency.",
    whatChanged: "\"Every single branch now displays accurate hours and contacts across Google and Maps. Directory complaints fell to zero, and calls went up 45%.\"",
    metrics: [
      { value: "+45%", label: "Call Clicks Increase" },
      { value: "0", label: "Mismatched Listings" },
      { value: "+80%", label: "GBP Search Impression" }
    ],
    timeline: [
      "Compile centralized database of official location records",
      "Suppress duplicate and obsolete listings across web directories",
      "Integrate automated location-syndication software",
      "Configure branch-level review response systems"
    ],
    icon: MapPin
  },
  "great-food-nobody-knew-about": {
    title: "The Great Food Nobody Knew About",
    industry: "Retail Businesses",
    problem: "A restaurant with world-class menus struggled to draw guests. Lacking local optimization, they missed out on hungry searchers seeking dining options nearby.",
    whatWeDid: "We optimized their menu schema, synchronized profiles, and drove reviews to place them directly inside Google's local search map packs.",
    whatChanged: "\"Our tables are packed throughout the week. We are showing up right at the top when people search for food near them, turning searches into guests.\"",
    metrics: [
      { value: "+180%", label: "Local Pack Impressions" },
      { value: "+55%", label: "Table Reservation Rate" },
      { value: "+95%", label: "Click-To-Call Volumes" }
    ],
    timeline: [
      "Menu structure markup for Google Search optimization",
      "Local Map Pack schema adjustments",
      "Dynamic high-intent review drive strategy",
      "Implement quick mobile reservation flows"
    ],
    icon: UtensilsCrossed
  }
};

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = storiesData[slug];
  if (!story) {
    return {};
  }
  return {
    title: `${story.title} | Case Chronicles`,
    description: `${story.problem.substring(0, 150)}...`,
    alternates: {
      canonical: `/stories/${slug}`,
    },
    openGraph: {
      title: `${story.title} | Unboxx Business`,
      description: `${story.problem.substring(0, 150)}...`,
      url: `https://unboxxbusiness.live/stories/${slug}`,
      type: "article",
    },
  };
}

export default async function StoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storiesData[slug];

  if (!story) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "description": story.problem,
    "publisher": {
      "@type": "Organization",
      "name": "Unboxx Business",
      "logo": "https://unboxxbusiness.live/logo.png"
    },
    "author": {
      "@type": "Organization",
      "name": "Unboxx Business"
    },
    "about": story.industry
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unboxxbusiness.live/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Stories",
        "item": "https://unboxxbusiness.live/stories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": story.title,
        "item": `https://unboxxbusiness.live/stories/${slug}`
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col space-y-16 text-text-muted bg-bg-cream">
      <StructuredData schema={[articleSchema, breadcrumbSchema]} />
      
      {/* Back Button & Navigation Breadcrumb */}
      <div>
        <Link
          href="/stories"
          className="group inline-flex items-center space-x-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Stories</span>
        </Link>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Case Study Narrative */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Header Title Info */}
          <div className="space-y-4">
            <span className="inline-flex items-center text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange-light border border-brand-orange/20 px-3 py-1 rounded-full">
              {story.industry}
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-text-charcoal">
              {story.title}
            </h1>
          </div>

          {/* Metrics Block */}
          <div className="grid grid-cols-3 gap-6 border-y border-stone-200/80 py-8">
            {story.metrics.map((metric, idx) => (
              <div key={idx} className="text-center md:text-left">
                <span className="block font-heading font-extrabold text-2xl md:text-4xl text-brand-orange mb-1">
                  {metric.value}
                </span>
                <span className="text-xs text-text-muted/65 font-semibold uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative Details following the specific shape */}
          <div className="space-y-10">
            {/* The Problem */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-text-charcoal flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                <span>The problem.</span>
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed pl-5 border-l border-stone-200">
                {story.problem}
              </p>
            </div>

            {/* What we did */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-text-charcoal flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
                <span>What we did.</span>
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed pl-5 border-l border-stone-200">
                {story.whatWeDid}
              </p>
            </div>

            {/* What changed */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl text-text-charcoal flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>What changed.</span>
              </h3>
              <div className="pl-5 border-l border-brand-orange bg-brand-orange-light/60 p-5 rounded-r-2xl shadow-sm">
                <p className="text-sm md:text-base text-text-charcoal font-medium leading-relaxed italic">
                  {story.whatChanged}
                </p>
                <span className="text-[9px] text-brand-orange font-bold uppercase tracking-wider block mt-2">
                  Verified Client Statement
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Timeline checklist & CTA Box */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Action Steps Card */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 space-y-6 shadow-sm">
            <h4 className="font-heading font-bold text-lg text-text-charcoal">Execution Timeline</h4>
            <div className="space-y-4">
              {story.timeline.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-text-muted/80 leading-normal">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment CTA */}
          <div className="bg-[#f1efe9] border border-black/5 p-8 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-heading font-bold text-xl text-text-charcoal mb-2">Write your story</h4>
            <p className="text-xs text-text-muted/80 leading-relaxed mb-6">
              Let's evaluate your organization's digital discovery metrics and build a similar blueprint.
            </p>
            <Link
              href="/contact"
              className="btn-pill-primary w-full py-3 text-xs"
            >
              <span>Get Your Blueprint</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
