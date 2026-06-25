"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Stories", href: "/stories" },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#f8f7f3]/80 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="https://res.cloudinary.com/dhrigocvd/image/upload/f_auto,q_auto/v1776502814/unboxxbusinesslogo_gmbbok.png"
            alt="Unboxx Business Logo"
            width={180}
            height={54}
            priority
            className={`h-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
              isScrolled
                ? "w-[110px] md:w-[135px] lg:w-[160px]"
                : "w-[120px] md:w-[150px] lg:w-[180px]"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-orange ${
                  isActive ? "text-brand-orange font-semibold" : "text-text-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="btn-pill-primary px-6 py-2.5 text-sm"
          >
            <span>Get Assessment</span>
            <ArrowRight className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-charcoal hover:text-brand-orange transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-[#f8f7f3]/98 backdrop-blur-lg border-t border-black/5 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-xl font-medium tracking-wide border-b border-black/5 pb-4 transition-colors ${
                  isActive ? "text-brand-orange font-bold" : "text-text-charcoal hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-pill-primary py-3.5 w-full text-center"
          >
            <span>Get Assessment</span>
            <ArrowRight className="h-4 w-4 ml-1.5 inline" />
          </Link>
        </div>
      </div>
    </header>
  );
}
