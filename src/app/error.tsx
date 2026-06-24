"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Eye, EyeOff } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  useEffect(() => {
    console.error("Runtime exception caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] max-w-xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8 py-16">
      
      {/* Alert Graphic */}
      <div className="relative flex items-center justify-center">
        {/* Ambient background glow */}
        <div className="absolute w-32 h-32 bg-orange/10 rounded-full blur-[40px] animate-pulse"></div>
        
        {/* SVG Graphic */}
        <div className="relative h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange">
          <AlertTriangle className="h-10 w-10 animate-bounce" />
        </div>
      </div>

      {/* Message Copy */}
      <div className="space-y-4">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
          Something went wrong
        </h1>
        <p className="font-sans text-sm md:text-base text-alabaster-grey/70 max-w-sm mx-auto leading-relaxed">
          An unexpected crash has occurred. Our team has been notified. Let's try recovering or navigating back to visibility.
        </p>
      </div>

      {/* Reset & Nav CTA */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button
          onClick={() => reset()}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange text-black font-sans font-bold text-sm rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <Home className="h-4 w-4" />
          <span>Go Back Home</span>
        </Link>
      </div>

      {/* Diagnostics Toggle */}
      <div className="w-full border-t border-white/5 pt-6">
        <button
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          className="flex items-center justify-center space-x-2 text-xs font-semibold text-alabaster-grey/55 hover:text-orange mx-auto transition-colors focus:outline-none"
        >
          {showDiagnostics ? (
            <>
              <EyeOff className="h-4 w-4" />
              <span>Hide Diagnostics</span>
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              <span>Show Technical Diagnostics</span>
            </>
          )}
        </button>

        {showDiagnostics && (
          <div className="mt-4 bg-black/60 border border-white/5 rounded-lg p-4 text-left font-mono text-[10px] text-red-400 overflow-x-auto max-w-full">
            <p className="font-bold mb-1">Error Name: {error.name}</p>
            <p className="mb-2">Message: {error.message}</p>
            {error.digest && <p className="mb-2">Digest ID: {error.digest}</p>}
            {error.stack && (
              <pre className="text-[9px] text-alabaster-grey/60 leading-tight border-t border-white/5 pt-2 max-h-40 overflow-y-auto">
                {error.stack}
              </pre>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
