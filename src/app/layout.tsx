import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unboxxbusiness.live"),
  title: {
    default: "Unboxx Business | Modern Growth Infrastructure",
    template: "%s | Unboxx Business",
  },
  description: "Unboxx Business helps organizations improve visibility, strengthen reputation, and generate more opportunities through Local SEO, Google Business Profile Optimization, AI Search Visibility, Reviews, and Experience & Automation.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Unboxx Business | Modern Growth Infrastructure",
    description: "Helping businesses become the obvious choice when customers search, compare, and decide.",
    url: "https://unboxxbusiness.live",
    siteName: "Unboxx Business",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unboxx Business | Modern Growth Infrastructure",
    description: "Helping businesses become the obvious choice when customers search, compare, and decide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://res.cloudinary.com/dhrigocvd/image/upload/v1770616618/dark_site_icon_bukbwd.png",
    shortcut: "https://res.cloudinary.com/dhrigocvd/image/upload/v1770616618/dark_site_icon_bukbwd.png",
    apple: "https://res.cloudinary.com/dhrigocvd/image/upload/v1770616618/dark_site_icon_bukbwd.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          {...{
            onload: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on('init', function(user) {
                  if (!user) {
                    window.netlifyIdentity.on('login', function() {
                      document.location.href = '/admin/';
                    });
                  }
                  
                  // Programmatically trigger the popup if an invite, recovery, or confirmation token is in the hash
                  var hash = window.location.hash;
                  if (
                    hash.indexOf('invite_token') !== -1 ||
                    hash.indexOf('recovery_token') !== -1 ||
                    hash.indexOf('confirmation_token') !== -1
                  ) {
                    window.netlifyIdentity.open();
                  }
                });
                window.netlifyIdentity.init();
              }
            `
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col relative bg-bg-cream text-text-muted">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content wrapper */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-black/5 bg-[#f1efe9] text-text-muted">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Brand Col */}
              <div className="md:col-span-5 flex flex-col space-y-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/dhrigocvd/image/upload/f_auto,q_auto/v1776502814/unboxxbusinesslogo_gmbbok.png"
                    alt="Unboxx Business Logo"
                    width={180}
                    height={54}
                    className="w-[150px] h-auto object-contain"
                  />
                </Link>
                
                <h5 className="text-sm font-bold tracking-wide text-text-charcoal">
                  Get Found. Build Trust. Grow Faster.
                </h5>
                
                <p className="text-sm text-text-muted/80 max-w-sm">
                  Helping businesses become the obvious choice when customers search, compare, and decide.
                </p>
                
                <div className="pt-4 border-t border-black/5 pr-4">
                  <span className="text-xs font-semibold tracking-wider text-brand-orange uppercase block mb-2">
                    Our Core Philosophy
                  </span>
                  <p className="text-xs leading-relaxed text-text-muted/70">
                    Businesses don't lose customers because they're bad. They lose customers because they're hard to find and hard to trust. Unboxx Business helps them change that.
                  </p>
                </div>
              </div>

              {/* Links Col 1 */}
              <div className="md:col-span-2 flex flex-col space-y-4">
                <h4 className="text-sm font-bold tracking-wider text-text-charcoal uppercase">Platform</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/" className="text-text-muted hover:text-brand-orange transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="text-text-muted hover:text-brand-orange transition-colors">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/stories" className="text-text-muted hover:text-brand-orange transition-colors">
                      Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries" className="text-text-muted hover:text-brand-orange transition-colors">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-text-muted hover:text-brand-orange transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-text-muted hover:text-brand-orange transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Links Col 2 */}
              <div className="md:col-span-2 flex flex-col space-y-4">
                <h4 className="text-sm font-bold tracking-wider text-text-charcoal uppercase">Solutions</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/solutions#visibility" className="text-text-muted hover:text-brand-orange transition-colors">
                      Visibility Growth
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#reputation" className="text-text-muted hover:text-brand-orange transition-colors">
                      Reputation Growth
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#automation" className="text-text-muted hover:text-brand-orange transition-colors">
                      Experience & Automation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Expected Outcomes */}
              <div className="md:col-span-3 flex flex-col space-y-4">
                <h4 className="text-sm font-bold tracking-wider text-text-charcoal uppercase">Expected Outcomes</h4>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    <span>More Visibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    <span>More Trust</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    <span>More Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-16 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted/60 font-mono">
              <p>© {new Date().getFullYear()} Unboxx Business. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms of Use</Link>
                <Link href="/refund" className="hover:text-brand-orange transition-colors">Refund & Cancellation</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
