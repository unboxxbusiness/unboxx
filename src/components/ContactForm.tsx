"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    industry: "",
    website: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Simple Client-side Validations
    if (!formData.name || !formData.businessName || !formData.email || !formData.phone || !formData.website || !formData.industry) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // Validate website domain structure (accepts http://, https://, www., or bare domain)
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    if (!urlRegex.test(formData.website)) {
      setStatus("error");
      setErrorMessage("Please enter a valid website address (e.g., www.example.com or example.com).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const industriesList = [
    "Universities",
    "Hospitals",
    "Schools",
    "Retail / Restaurant",
    "Real Estate",
    "Franchises",
    "Multi-Location Business",
    "Other"
  ];

  if (status === "success") {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 text-center space-y-6 animate-fadeIn shadow-md">
        <div className="mx-auto h-16 w-16 bg-brand-orange-light border border-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange">
          <CheckCircle2 className="h-10 w-10 text-brand-orange animate-bounce" />
        </div>
        
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-charcoal">
          Assessment Booked!
        </h3>
        
        <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-text-charcoal">{formData.name}</strong>. We've received details for <strong className="text-text-charcoal">{formData.businessName}</strong> and are preparing your review.
        </p>

        <div className="border-t border-stone-200/80 pt-6 max-w-md mx-auto text-left space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
            Next Steps in Your Action Plan:
          </span>
          <div className="space-y-3">
            {[
              "Running your automated local visibility index scan",
              "Auditing location coordinates across primary map networks",
              "Scanning cross-platform review averages and rating health",
              "Packaging audit results and emailing blueprint details"
            ].map((step, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-text-muted/80 leading-normal">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setFormData({
              name: "",
              businessName: "",
              industry: "",
              website: "",
              email: "",
              phone: "",
            });
            setStatus("idle");
          }}
          className="mt-8 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors underline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 space-y-6 shadow-sm">
      <h3 className="font-heading font-bold text-xl md:text-2xl text-text-charcoal mb-2">
        Get your free check
      </h3>
      <p className="text-xs text-text-muted/60 leading-relaxed mb-6">
        Tell us about your business and we'll analyze your search and review presence.
      </p>

      {status === "error" && (
        <div className="flex items-center space-x-2 bg-red-50 border border-red-200 text-red-650 p-4 rounded-xl text-sm">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-text-charcoal placeholder-text-muted/30 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
          />
        </div>

        {/* Business Name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="businessName" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Unboxx Business"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-text-charcoal placeholder-text-muted/30 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
          />
        </div>

        {/* Industry */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="industry" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Industry
          </label>
          <div className="relative">
            <select
              id="industry"
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-4 pr-10 py-3 text-sm text-text-charcoal focus:outline-none focus:border-brand-orange focus:bg-white transition-colors appearance-none"
            >
              <option value="" disabled className="text-text-muted/30">Select Industry</option>
              {industriesList.map((ind) => (
                <option key={ind} value={ind} className="bg-white text-text-charcoal">
                  {ind}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none text-text-muted/40 absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4" />
          </div>
        </div>

        {/* Website */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="website" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Website URL
          </label>
          <input
            type="text"
            id="website"
            name="website"
            required
            value={formData.website}
            onChange={handleChange}
            placeholder="example.com or www.example.com"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-text-charcoal placeholder-text-muted/30 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-text-charcoal placeholder-text-muted/30 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-text-charcoal placeholder-text-muted/30 focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-pill-primary w-full py-4 text-sm mt-4 text-center"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2 inline" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>Get your free check</span>
            <ArrowRight className="h-4 w-4 ml-1.5 inline" />
          </>
        )}
      </button>
      <p className="text-[11px] text-center text-text-muted/50 mt-3">
        No pressure. No long forms. Just a clear next step.
      </p>
    </form>
  );
}
