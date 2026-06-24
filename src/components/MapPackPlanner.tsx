"use client";

import { useState } from "react";
import { Check, Star, Search, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

export default function MapPackPlanner() {
  const [gbp, setGbp] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [aiSync, setAiSync] = useState(false);
  const [directories, setDirectories] = useState(false);

  // Re-rank calculations based on check boxes
  const activeCount = [gbp, reviews, aiSync, directories].filter(Boolean).length;
  
  let rank = "Hidden (#8)";
  let badgeColor = "bg-red-50 text-red-600 border-red-200";
  let statusText = "Invisible to Searchers";
  let starsCount = 0;
  let reviewsCount = 0;
  let ratingText = "No reviews";

  if (activeCount === 0) {
    rank = "Hidden (#8)";
    statusText = "Not appearing in Local Search Packs";
  } else if (activeCount === 1) {
    rank = "Rank #5";
    badgeColor = "bg-yellow-50 text-yellow-600 border-yellow-200";
    statusText = "Basic listing active but unranked";
    if (gbp) {
      statusText = "GBP Created (Needs Reviews & Citations)";
    }
  } else if (activeCount === 2) {
    rank = "Rank #3";
    badgeColor = "bg-brand-orange-light text-brand-orange border-brand-orange/20";
    statusText = "Appearing on page 1 maps list";
    if (reviews) {
      starsCount = 4.9;
      reviewsCount = 142;
      ratingText = "4.9 ★ (142 reviews)";
    }
  } else if (activeCount === 3) {
    rank = "Rank #2";
    badgeColor = "bg-brand-orange-light text-brand-orange border-brand-orange/30";
    statusText = "Recommended inside AI search summary";
    starsCount = 4.9;
    reviewsCount = 285;
    ratingText = "4.9 ★ (285 reviews)";
  } else if (activeCount === 4) {
    rank = "Rank #1";
    badgeColor = "bg-emerald-50 text-emerald-600 border-emerald-200";
    statusText = "First Choice Local Rank (Google, Maps & AI)";
    starsCount = 4.9;
    reviewsCount = 350;
    ratingText = "4.9 ★ (350 reviews)";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full">
      
      {/* Controls Card Left */}
      <div className="md:col-span-5 bg-white border border-stone-200/80 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm">
        <div>
          <span className="text-mono-label mb-2 block">Crawl Optimization Checklist</span>
          <h3 className="font-heading font-bold text-lg text-text-charcoal mb-4">
            Toggle Infrastructure Fixes
          </h3>
          
          <div className="space-y-4">
            {/* Control 1 */}
            <label className="flex items-start space-x-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={gbp}
                onChange={() => setGbp(!gbp)}
                className="sr-only"
              />
              <div className={`h-5 w-5 rounded border flex items-center justify-center transition-all ${
                gbp 
                  ? "bg-brand-orange border-brand-orange text-white" 
                  : "border-stone-300 group-hover:border-brand-orange/50 text-transparent"
              }`}>
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-semibold text-text-charcoal group-hover:text-brand-orange transition-colors">
                  Google Business Profile
                </span>
                <p className="text-[11px] text-text-muted/60">Optimize description, hours & photos</p>
              </div>
            </label>

            {/* Control 2 */}
            <label className="flex items-start space-x-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={reviews}
                onChange={() => setReviews(!reviews)}
                className="sr-only"
              />
              <div className={`h-5 w-5 rounded border flex items-center justify-center transition-all ${
                reviews 
                  ? "bg-brand-orange border-brand-orange text-white" 
                  : "border-stone-300 group-hover:border-brand-orange/50 text-transparent"
              }`}>
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-semibold text-text-charcoal group-hover:text-brand-orange transition-colors">
                  Trust Reputation Loop
                </span>
                <p className="text-[11px] text-text-muted/60">Activate customer review generation</p>
              </div>
            </label>

            {/* Control 3 */}
            <label className="flex items-start space-x-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={aiSync}
                onChange={() => setAiSync(!aiSync)}
                className="sr-only"
              />
              <div className={`h-5 w-5 rounded border flex items-center justify-center transition-all ${
                aiSync 
                  ? "bg-brand-orange border-brand-orange text-white" 
                  : "border-stone-300 group-hover:border-brand-orange/50 text-transparent"
              }`}>
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-semibold text-text-charcoal group-hover:text-brand-orange transition-colors">
                  AI Search Engine Sync
                </span>
                <p className="text-[11px] text-text-muted/60">Submit semantic markup & profiles</p>
              </div>
            </label>

            {/* Control 4 */}
            <label className="flex items-start space-x-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={directories}
                onChange={() => setDirectories(!directories)}
                className="sr-only"
              />
              <div className={`h-5 w-5 rounded border flex items-center justify-center transition-all ${
                directories 
                  ? "bg-brand-orange border-brand-orange text-white" 
                  : "border-stone-300 group-hover:border-brand-orange/50 text-transparent"
              }`}>
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-semibold text-text-charcoal group-hover:text-brand-orange transition-colors">
                  Directory Verification
                </span>
                <p className="text-[11px] text-text-muted/60">Unify citation NAP metrics across maps</p>
              </div>
            </label>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-4 font-mono text-[10px] text-text-muted/40">
          <span>Active updates: {activeCount}/4 applied</span>
        </div>
      </div>

      {/* Simulator Card Right */}
      <div className="md:col-span-7 bg-white border border-stone-200/80 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm">
        
        {/* Mock Search Pack Result */}
        <div className="space-y-4">
          <span className="text-mono-label mb-2 block">Simulated Local Rank Panel</span>
          
          {/* Mock search header */}
          <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-200/60 px-3 py-2 rounded-lg text-xs text-text-muted/60 font-mono">
            <Search className="h-3.5 w-3.5 text-brand-orange" />
            <span>unboxxbusiness.live near me</span>
          </div>

          {/* AI Search Panel - shows when AI sync is enabled */}
          {aiSync && (
            <div className="bg-brand-orange-light border border-brand-orange/20 p-4 rounded-lg relative overflow-hidden transition-all duration-300 animate-fadeIn shadow-sm">
              <div className="flex items-center space-x-1.5 text-[9px] text-brand-orange font-bold uppercase tracking-wider mb-1.5 font-mono">
                <Sparkles className="h-3 w-3 fill-brand-orange" />
                <span>AI Search Recommendation</span>
              </div>
              <p className="text-[11px] text-text-muted/80 leading-relaxed">
                "Based on local business reviews and verification markers, <span className="text-text-charcoal font-bold">Unboxx Business</span> ranks as the top-performing regional agency, recommended for Local SEO and profile sync."
              </p>
            </div>
          )}

          {/* Local Map Pack Listing */}
          <div className={`p-4 rounded-lg border transition-all duration-300 bg-white flex items-center justify-between ${
            activeCount === 4 ? "border-emerald-500/30 shadow-sm shadow-emerald-500/5" : "border-stone-150"
          }`}>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-bold text-text-charcoal transition-colors duration-300">
                  {gbp ? "Unboxx Business" : "Listing Hidden / Unoptimized"}
                </h4>
                {activeCount === 4 && (
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                    Rank #1
                  </span>
                )}
              </div>

              {/* Star Ratings */}
              <div className="flex items-center space-x-1.5">
                {starsCount > 0 ? (
                  <>
                    <span className="text-xs text-yellow-600 font-bold">{starsCount}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-[10px] text-text-muted/50">({reviewsCount} reviews)</span>
                  </>
                ) : (
                  <span className="text-[10px] text-text-muted/40 italic">{ratingText}</span>
                )}
              </div>

              <p className="text-[10px] text-text-muted/65">
                {gbp ? "New Delhi, Delhi · Open 24/7" : "Missing local GBP mapping"}
              </p>
            </div>

            <div className="flex flex-col items-end space-y-1.5">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                {rank}
              </span>
            </div>
          </div>
        </div>

        {/* Real-time metrics projection graph */}
        <div className="border-t border-stone-100 pt-4">
          <span className="text-[10px] font-mono text-text-muted/50 uppercase block mb-3">Projected Lead Capture</span>
          
          <div className="flex items-end space-x-2 h-16 pt-2">
            {[
              { label: "Base", height: "h-2", val: "5%" },
              { label: "+GBP", height: gbp ? "h-6" : "h-2", val: gbp ? "20%" : "" },
              { label: "+Reviews", height: reviews ? "h-10" : gbp ? "h-6" : "h-2", val: reviews ? "55%" : "" },
              { label: "+AI Sync", height: aiSync ? "h-14" : reviews ? "h-10" : gbp ? "h-6" : "h-2", val: aiSync ? "82%" : "" },
              { label: "Full Sync", height: directories ? "h-[64px]" : aiSync ? "h-14" : reviews ? "h-10" : gbp ? "h-6" : "h-2", val: directories ? "100%" : "" },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center space-y-1">
                <span className="text-[9px] font-mono text-brand-orange font-bold">{bar.val}</span>
                <div className={`w-full bg-stone-100 rounded-t transition-all duration-500 border-t ${
                  bar.val ? "bg-brand-orange border-brand-orange/30" : "bg-stone-100 border-stone-200"
                } ${bar.height}`}></div>
                <span className="text-[8px] font-mono text-text-muted/40">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
