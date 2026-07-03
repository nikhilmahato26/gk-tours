"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Specializations", href: "#specializations" },
    { name: "Services", href: "#services" },
    { name: "Journey", href: "#journey" },
    { name: "Awards", href: "#awards" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-pure/80 backdrop-blur-md border-b border-gold-royal/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-royal/30 p-[1px] bg-dark-navy transition-all duration-300 group-hover:border-gold-warm">
              <Image
                src="/images/logo.jpg"
                alt="GK Astrotech Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-widest text-gold-warm font-semibold leading-none">
                GK ASTROTECH
              </span>
              <span className="font-sans text-[9px] tracking-widest text-gold-ivory/60 mt-1 uppercase">
                All Problems, One Solution
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-xs tracking-widest text-gold-ivory/80 hover:text-gold-warm uppercase transition-colors duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-royal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs font-semibold tracking-widest text-dark-pure uppercase transition-all duration-300 bg-gold-royal hover:bg-gold-warm rounded-sm shadow-[0_0_15px_rgba(200,162,76,0.3)] hover:shadow-[0_0_20px_rgba(228,192,106,0.5)]"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold-warm p-1 hover:text-gold-ivory transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[68px] z-40 lg:hidden bg-dark-pure/95 backdrop-blur-xl border-t border-gold-royal/10"
          >
            <nav className="flex flex-col items-center justify-center gap-6 py-12 px-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-lg tracking-widest text-gold-ivory/90 hover:text-gold-warm uppercase transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 w-full max-w-xs text-center px-6 py-3 font-semibold tracking-widest text-dark-pure uppercase bg-gold-royal hover:bg-gold-warm rounded-sm transition-colors duration-300"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
