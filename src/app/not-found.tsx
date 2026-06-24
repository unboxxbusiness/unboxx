import Link from "next/link";
import { Search, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Unboxx Business",
  description: "The page you are looking for does not exist. Let us help you find your way back to visibility.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] max-w-xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8 py-16">
      
      {/* 404 Illustration */}
      <div className="relative flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute w-40 h-40 bg-orange/5 rounded-full blur-[50px] animate-pulse"></div>
        
        {/* SVG Graphic */}
        <div className="relative border border-white/10 bg-black/60 shadow-lg p-6 rounded-2xl w-48 aspect-square flex flex-col justify-between group overflow-hidden">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange/5 rounded-full pointer-events-none transition-transform group-hover:scale-125"></div>
          
          <div className="flex items-center justify-between text-xs text-alabaster-grey/40 border-b border-white/5 pb-2">
            <span>Route Discovery</span>
            <span className="text-red-500 font-bold">404</span>
          </div>

          <div className="my-auto flex items-center justify-center relative py-4">
            <Search className="h-16 w-16 text-orange animate-pulse" />
            <span className="absolute h-3 w-3 bg-red-500 rounded-full animate-ping top-1/2 left-1/2 -translate-x-1 -translate-y-1"></span>
          </div>

          <div className="text-[10px] text-alabaster-grey/40 flex justify-between border-t border-white/5 pt-2 font-mono">
            <span>STATUS</span>
            <span className="text-red-500 font-bold">NOT_FOUND</span>
          </div>
        </div>
      </div>

      {/* Message Copy */}
      <div className="space-y-4">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
          Page Not Found
        </h1>
        <p className="font-sans text-sm md:text-base text-alabaster-grey/70 max-w-sm mx-auto leading-relaxed">
          Even search engines lose track sometimes. Let's redirect you back to visibility.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link
          href="/"
          className="group flex items-center justify-center space-x-2 px-6 py-3 bg-orange text-black font-sans font-bold text-sm rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          <Home className="h-4 w-4" />
          <span>Go Back Home</span>
        </Link>
        <Link
          href="/solutions"
          className="group flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
