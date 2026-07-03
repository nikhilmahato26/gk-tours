"use client";

import Image from "next/image";
import { ArrowUp, Sparkles, MessageSquare, Phone, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Specializations", href: "#specializations" },
    { name: "Services", href: "#services" },
  ];

  const secondaryLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Awards", href: "#awards" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative bg-dark-pure border-t border-gold-royal/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 star-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-royal/30 p-[1px] bg-dark-navy">
                <Image
                  src="/images/logo.jpg"
                  alt="GK Astrotech Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="font-display text-sm tracking-widest text-gold-warm font-semibold">
                GK ASTROTECH
              </span>
            </div>
            
            <p className="font-sans text-xs text-gold-ivory/60 leading-relaxed font-light max-w-sm mb-6">
              Empowering individuals through rigorous calculations, precise degree analytics, and ethical spiritual guidance.
              Bridging classical Vedic wisdom with modern rational thinking.
            </p>

            <span className="font-display text-[9px] tracking-[0.2em] text-gold-warm/60 uppercase font-semibold">
              All Problems, One Solution
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2.5 col-span-1">
            <h4 className="font-display text-[10px] tracking-widest text-gold-warm uppercase font-bold mb-6">
              Quick Explore
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-sans text-xs text-gold-ivory/70 hover:text-gold-warm transition-colors duration-300 uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Links */}
          <div className="lg:col-span-2.5 col-span-1">
            <h4 className="font-display text-[10px] tracking-widest text-gold-warm uppercase font-bold mb-6">
              Consulting Path
            </h4>
            <ul className="space-y-3.5">
              {secondaryLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-sans text-xs text-gold-ivory/70 hover:text-gold-warm transition-colors duration-300 uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Top Action */}
          <div className="lg:col-span-2 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full border border-gold-royal/20 hover:border-gold-warm text-gold-royal hover:text-gold-warm bg-gold-royal/5 transition-all duration-300 shadow-md group shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Footer Bottom divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-royal/15 to-transparent mb-8" />

        {/* Copyright & Disclaimer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] text-gold-ivory/40 tracking-wider text-center md:text-left font-light leading-relaxed">
            &copy; {new Date().getFullYear()} GK Astrotech. All Rights Reserved. <br className="sm:hidden" />
            Developed for Pandit Gangadhar Kotagi.
          </p>

          <div className="flex items-center gap-1 text-gold-warm/40">
            <Sparkles size={10} className="animate-pulse" />
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase">Vedic Astrology Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
