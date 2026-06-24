import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Hospital, ShoppingBag, Building2, Layers, ArrowRight } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Industry Local SEO & Maps Optimization Solutions",
  description: "Tailored SEO, GBP, and reviews management plans for healthcare, education, retail, real estate, and multi-location franchises.",
  alternates: {
    canonical: "/industries",
  },
};

export default function Industries() {
  const industries = [
    {
      id: "healthcare",
      title: "Hospitals & Healthcare",
      desc: "People research a hospital before they trust it with their care. We help you show up in local search, build a strong base of patient reviews, and make it easier for people to find the right department or location.",
      icon: Hospital,
      accent: "from-emerald-100/40 to-emerald-50/10"
    },
    {
      id: "education",
      title: "Universities & Schools",
      desc: "Students and parents compare schools online long before they visit. We help your institution show up clearly across every location and program, and build the kind of online reputation that earns trust before the first tour.",
      icon: GraduationCap,
      accent: "from-blue-100/40 to-blue-50/10"
    },
    {
      id: "retail",
      title: "Retail Businesses",
      desc: "Shoppers check reviews and maps before they walk in. We help you show up nearby, look trustworthy at a glance, and turn online searches into in-store visits.",
      icon: ShoppingBag,
      accent: "from-yellow-100/40 to-yellow-50/10"
    },
    {
      id: "realestate",
      title: "Real Estate Companies",
      desc: "Buyers and renters search constantly, and trust matters as much as listings. We help your agents and offices show up locally and build reputations that move people from browsing to calling.",
      icon: Building2,
      accent: "from-cyan-100/40 to-cyan-50/10"
    },
    {
      id: "franchises",
      title: "Franchises & Multi-Location Organizations",
      desc: "Every location needs to show up and look trustworthy — not just the brand as a whole. We manage visibility and reputation consistently across all your locations, so no single one falls behind.",
      icon: Layers,
      accent: "from-rose-100/40 to-rose-50/10"
    }
  ];

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare Local SEO & Maps Sync",
      "description": "Ensure patients find emergency room locations and outpatient gates with accurate coordinate mapping and Google Business optimization."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Education Search Visibility Optimization",
      "description": "Rank regional engineering, business, and school programs on page 1 of search engine listings."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Retail Map Pack Optimization",
      "description": "Drive local shoppers to brick-and-mortar storefronts with optimized menu listings and review loops."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-24 md:space-y-32 text-text-muted">
      <StructuredData schema={serviceSchemas} />
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col space-y-6 pt-6">
        <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider self-center animate-pulse">
          <span>Targeted Sectors</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight leading-tight">
          We understand how different industries get found and chosen.
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          A hospital and a retail store don't lose customers the same way. We tailor our approach to how people actually search and decide in your industry.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.id}
              id={ind.id}
              className="scroll-mt-28 bg-white border border-stone-200/80 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${ind.accent} rounded-bl-full pointer-events-none`}></div>
              
              <div>
                <div className="p-3 bg-stone-50 rounded-xl text-brand-orange w-fit mb-6 group-hover:bg-brand-orange-light transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-heading font-bold text-xl md:text-2xl text-text-charcoal mb-4">
                  {ind.title}
                </h3>
                
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>
              
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center space-x-1.5 text-brand-orange font-semibold hover:text-brand-orange-hover transition-colors duration-200"
                >
                  <span>Find your industry's plan</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-[#f1efe9] border border-black/5 rounded-3xl max-w-4xl mx-auto w-full relative shadow-sm">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal leading-tight">
            Tailor-made growth blueprints
          </h2>
          <p className="text-sm md:text-base text-text-muted max-w-sm mx-auto">
            Get in touch to align local search optimization and review generation for your industry's customer journey.
          </p>
          <Link
            href="/contact"
            className="btn-pill-primary px-8 py-4 text-base"
          >
            <span>Get your industry plan</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
}
