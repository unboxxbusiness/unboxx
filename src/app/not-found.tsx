import Link from "next/link";
import { Search, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Unboxx Business",
  description: "The page you are looking for does not exist. Let us help you find your way back to visibility.",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] max-w-xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8 py-16">
      
      {/* 404 Illustration */}
      <div className="relative flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute w-44 h-44 bg-brand-orange/10 rounded-full blur-[50px] animate-pulse"></div>
        
        {/* SVG Graphic (elevated premium card) */}
        <div className="relative border border-text-charcoal/5 bg-white shadow-md p-6 rounded-2xl w-48 aspect-square flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-orange/5 rounded-full pointer-events-none transition-transform group-hover:scale-125"></div>
          
          <div className="flex items-center justify-between text-[11px] text-text-muted/50 border-b border-text-charcoal/5 pb-2 font-mono uppercase tracking-wider">
            <span>Route Discovery</span>
            <span className="text-brand-orange font-bold font-mono">404</span>
          </div>

          <div className="my-auto flex items-center justify-center relative py-4">
            <Search className="h-14 w-14 text-brand-orange" />
            <span className="absolute h-3.5 w-3.5 bg-brand-orange rounded-full animate-ping top-1/2 left-1/2 -translate-x-1.5 -translate-y-1.5"></span>
            <span className="absolute h-2 w-2 bg-brand-orange rounded-full top-1/2 left-1/2 -translate-x-1 -translate-y-1"></span>
          </div>

          <div className="text-[10px] text-text-muted/50 flex justify-between border-t border-text-charcoal/5 pt-2 font-mono uppercase tracking-wider">
            <span>STATUS</span>
            <span className="text-brand-orange font-bold">NOT_FOUND</span>
          </div>
        </div>
      </div>

      {/* Message Copy */}
      <div className="space-y-4">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-text-charcoal">
          Page Not Found
        </h1>
        <p className="font-sans text-sm md:text-base text-text-muted max-w-sm mx-auto leading-relaxed">
          Even search engines lose track sometimes. Let's redirect you back to visibility.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link
          href="/"
          className="btn-pill-primary px-8 py-3.5 space-x-2 text-sm"
        >
          <Home className="h-4 w-4" />
          <span>Go Back Home</span>
        </Link>
        <Link
          href="/solutions"
          className="btn-pill-secondary px-8 py-3.5 space-x-2 text-sm"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
