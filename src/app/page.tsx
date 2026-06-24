import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Star, MessageSquare, ShieldCheck, Check, Sparkles, MapPin, CheckCircle } from "lucide-react";
import MapPackPlanner from "@/components/MapPackPlanner";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Get Found on Google & Maps | Local SEO & AI Visibility",
  description: "Boost your organic visibility, Google Maps rankings, and AI search answers with Unboxx Business. Get a free digital profile check today.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Unboxx Business",
    "url": "https://unboxxbusiness.live",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://unboxxbusiness.live/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Unboxx Business",
    "url": "https://unboxxbusiness.live",
    "logo": "https://unboxxbusiness.live/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/unboxxbusiness"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Unboxx Business",
    "image": "https://unboxxbusiness.live/hero-mockup.png",
    "url": "https://unboxxbusiness.live",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "DL",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <div className="flex flex-col bg-bg-cream pb-24 text-text-muted">
      <StructuredData schema={[websiteSchema, organizationSchema, localBusinessSchema]} />
      
      {/* Centered Premium Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse"></span>
            <span>SYSTEM ACTIVE & SYNCED</span>
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl tracking-tight text-text-charcoal leading-[1.1] max-w-3xl mx-auto">
            Get found.<br />
            Get trusted.<br />
            <span className="text-brand-orange">Get chosen.</span>
          </h1>

          <p className="font-sans text-base md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed pt-2">
            People search before they decide. If they can't find you, or don't trust what they find, they go somewhere else. Unboxx Business makes sure that doesn't happen to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/contact"
              className="btn-pill-primary px-8 py-3.5 text-base shadow-md hover:shadow-lg"
            >
              <span>GET YOUR FREE CHECK</span>
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#how-it-works"
              className="btn-pill-secondary px-8 py-3.5 text-base"
            >
              <span>SEE HOW IT WORKS</span>
            </Link>
          </div>
          
          <p className="text-xs text-text-muted/50 font-mono tracking-tight pt-1">
            Free profile check · 7-day refund guarantee · Delhi NCR Office
          </p>
        </div>

        {/* Center Mockup - MapPackPlanner Simulator Showcase */}
        <div className="max-w-5xl mx-auto mt-16 p-4 md:p-8 bg-white border border-stone-200/60 rounded-3xl shadow-[0_20px_50px_rgba(22,31,29,0.04)] relative">
          <div className="absolute inset-x-0 -top-8 h-40 bg-gradient-to-b from-[#f8f7f3] to-transparent pointer-events-none z-10 rounded-t-3xl"></div>
          <div className="relative z-20">
            <div className="flex items-center justify-between pb-6 border-b border-stone-100 mb-6">
              <div className="flex items-center space-x-2">
                <span className="h-3.5 w-3.5 rounded-full bg-red-400"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-yellow-400"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-green-400"></span>
                <span className="text-xs text-text-muted/40 font-mono pl-2">local-seo-simulator.sh</span>
              </div>
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider font-bold">
                Interactive Panel
              </span>
            </div>
            <MapPackPlanner />
          </div>
        </div>
      </section>

      {/* Core Philosophy Highlight Section */}
      <section className="py-12 bg-white border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-mono-label font-bold text-xs">Core Belief</span>
            <blockquote className="font-heading font-bold text-2xl md:text-3xl text-text-charcoal leading-relaxed italic">
              "Most businesses don't lose customers because they're bad. They lose them because they're hard to find and hard to trust."
            </blockquote>
            <p className="font-heading font-extrabold text-xl text-brand-orange uppercase tracking-wider">
              We fix both.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-mono-label font-bold">Capabilities [01-03]</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal">
            Three things every business needs to grow
          </h2>
          <p className="text-text-muted leading-relaxed">
            We coordinates visibility, trust, and response times in local search lists to guarantee rank upgrades.
          </p>
        </div>

        {/* 3-Column Premium Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
                  <Search className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-text-muted/40 font-semibold">PILLAR 01 // VISIBILITY</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-charcoal group-hover:text-brand-orange transition-colors">
                Show up where people are searching
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                When someone searches for a business like yours, you want to be the one they see first — on Google, on Maps, and now, in AI search results too. We help you show up there. Consistently.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/solutions#visibility" 
                className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
              >
                <span>SEE HOW VISIBILITY WORKS</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Star className="h-6 w-6 fill-indigo-500" />
                </div>
                <span className="font-mono text-xs text-text-muted/40 font-semibold">PILLAR 02 // REPUTATION</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-charcoal group-hover:text-brand-orange transition-colors">
                Look trustworthy the moment they find you
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A great business with no reviews looks risky. A good business with strong reviews looks like the obvious choice. We help you earn more reviews, manage them, and build a reputation people trust.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/solutions#reputation" 
                className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
              >
                <span>SEE HOW REPUTATION WORKS</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-text-muted/40 font-semibold">PILLAR 03 // AUTOMATION</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-charcoal group-hover:text-brand-orange transition-colors">
                Make it easy to say yes
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Once someone's interested, don't make them wait. With virtual tours, chatbots, and automated follow-ups, we help you respond faster and guide people toward a decision — without extra work.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/solutions#automation" 
                className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
              >
                <span>SEE HOW AUTOMATION WORKS</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Full-width Dark Green Section - Supercharged Banner */}
      <section className="bg-card-dark text-white py-24 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
            Your local search presence, supercharged.
          </h2>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Coordinates maps configuration, customer reviews, directories citation indexes, and automated WhatsApp replies in a single platform.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-pill-primary px-8 py-4 text-white text-base shadow-lg"
            >
              <span>GET STARTED NOW</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alternating Feature Showcase - Rich visual layouts */}
      <section className="py-24 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          
          {/* Row 1: Visibility */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-mono-label font-bold text-xs">01 / LOCAL MAPS DOMINANCE</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal leading-tight">
                Show up first the moment search happens
              </h2>
              <p className="text-text-muted leading-relaxed">
                We place your Google Business Profile, organic local pages, and citation records directly in front of searchers. Get top rank visibility in standard map pack search listings and voice-activated AI search responses.
              </p>
              <div className="pt-2">
                <Link
                  href="/solutions#visibility"
                  className="btn-pill-secondary px-6 py-2.5 text-sm"
                >
                  <span>Explore Visibility Features</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-bg-cream p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="bg-white p-4 rounded-xl border border-stone-150 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-charcoal">Your Business Profile</h4>
                    <p className="text-xs text-text-muted/60">Optimized GBP Sync</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full">Active #1</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-150 shadow-sm flex items-center justify-between opacity-75">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded bg-stone-100 flex items-center justify-center text-text-muted/40 font-bold">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-charcoal">Competitor A</h4>
                    <p className="text-xs text-text-muted/60">Unchecked Citations</p>
                  </div>
                </div>
                <span className="text-[10px] bg-stone-100 text-text-muted/40 font-bold px-2 py-0.5 rounded-full">Rank #2</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-150 shadow-sm flex items-center justify-between opacity-50">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded bg-stone-100 flex items-center justify-center text-text-muted/40 font-bold">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-charcoal">Competitor B</h4>
                    <p className="text-xs text-text-muted/60">Duplicate Listings</p>
                  </div>
                </div>
                <span className="text-[10px] bg-stone-100 text-text-muted/40 font-bold px-2 py-0.5 rounded-full">Rank #3</span>
              </div>
            </div>
          </div>

          {/* Row 2: Reputation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-mono-label font-bold text-xs">02 / REVIEW AUTOMATION</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal leading-tight">
                Look trustworthy the moment you are found
              </h2>
              <p className="text-text-muted leading-relaxed">
                Never ask manually for feedback. Our WhatsApp API loops trigger review requests at point-of-sale automatically. Filter negative comments, prompt positive star listings, and broadcast reviews back to search.
              </p>
              <div className="pt-2">
                <Link
                  href="/solutions#reputation"
                  className="btn-pill-secondary px-6 py-2.5 text-sm"
                >
                  <span>Explore Reputation Features</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 bg-bg-cream p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-stone-150 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#f1efe9] flex items-center justify-center font-bold text-brand-orange">4.9</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-charcoal">Total Score Summary</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-stone-50 rounded-xl text-xs space-y-1">
                    <div className="flex justify-between font-bold text-text-charcoal">
                      <span>Rohan M. (Verified Customer)</span>
                      <span className="text-yellow-600">5.0 ★</span>
                    </div>
                    <p className="text-text-muted/75">"Amazing experience. Booking was fast and response came within 30 seconds. Highly recommend!"</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl text-xs space-y-1">
                    <div className="flex justify-between font-bold text-text-charcoal">
                      <span>Meera K. (Verified Customer)</span>
                      <span className="text-yellow-600">5.0 ★</span>
                    </div>
                    <p className="text-text-muted/75">"Unboxx Business optimized our profile, and our leads literally doubled in 2 weeks."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-mono-label font-bold text-xs">03 / CONVERSION ENGINES</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal leading-tight">
                Respond faster. Close customers instantly.
              </h2>
              <p className="text-text-muted leading-relaxed">
                If searchers have to wait, they switch options. Our system deploys instant AI-supported chatbot templates and Whatsapp integrations. Convert organic clicks into booked sales appointments automatically.
              </p>
              <div className="pt-2">
                <Link
                  href="/solutions#automation"
                  className="btn-pill-secondary px-6 py-2.5 text-sm"
                >
                  <span>Explore Experience Features</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-bg-cream p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-stone-150 shadow-sm space-y-3 font-sans text-xs">
                <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="font-bold text-text-charcoal">WhatsApp Growth Bot</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-stone-50 p-2.5 rounded-xl max-w-[80%]">
                    <p className="text-text-muted">Hello! I saw your map listing and wanted to get pricing for your services.</p>
                  </div>
                  <div className="bg-brand-orange-light text-text-charcoal p-2.5 rounded-xl max-w-[85%] ml-auto">
                    <p className="font-bold text-brand-orange text-[10px] mb-1">UNBOXX BOT // INSTANT REPLY</p>
                    <p>Sure! We have optimized solutions for local SEO starting today. Would you like to schedule a free profile check right now?</p>
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-xl max-w-[80%]">
                    <p className="text-text-muted">Yes please. Rohan, Delhi.</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-850 p-2.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <div>
                        <span className="font-bold block">Assessment Scheduled</span>
                        <span className="text-[10px] text-emerald-700">Audit report compiling...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How it Works - Timeline Panels */}
      <section id="how-it-works" className="py-20 bg-bg-cream border-b border-stone-200/50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-mono-label font-bold">Workflow Engine</span>
            <h2 className="font-heading font-extrabold text-3xl text-text-charcoal">How it works</h2>
            <p className="text-text-muted text-sm">Three basic steps to upgrade your visibility and trust indicators online.</p>
          </div>

          {/* Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We look at how you show up today.",
                desc: "Search, maps, reviews, response times — we check it all to spot leaks."
              },
              {
                step: "02",
                title: "We fix what's costing you customers.",
                desc: "No long contracts. No guesswork. Just direct GBP and review pipeline sync."
              },
              {
                step: "03",
                title: "Get found, trusted, and chosen.",
                desc: "Rank upgrades, stable automated customer streams, and faster follow-up loops."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <span className="font-mono text-sm font-bold text-brand-orange/40 block">{item.step} // STAGE</span>
                  <h3 className="font-heading font-bold text-lg text-text-charcoal leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Premium CTA Panel */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-[#f1efe9] border border-black/5 p-8 md:p-16 rounded-3xl flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
          <div className="space-y-4 max-w-2xl">
            <span className="text-mono-label font-bold">Enterprise Sync [05]</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal leading-tight">
              Built for businesses with a lot to manage
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Whether you run one location or a hundred, we make visibility and reputation something you don't have to think about every day.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="btn-pill-primary px-8 py-4 text-base whitespace-nowrap"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
