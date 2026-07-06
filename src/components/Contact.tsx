"use client";

import Image from "next/image";
import { Phone, Mail, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const phoneNumbers = ["99456 01286", "95918 01286", "81475 01286"];
  const emailAddress = "gkvedicastrologer@gmail.com";

  const handleCall = (num: string) => {
    window.location.href = `tel:${num.replace(/\s+/g, "")}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Pranam Panditji, I would like to schedule a Vedic Astrology consultation session.");
    window.open(`https://wa.me/919945601286?text=${text}`, "_blank");
  };

  const handleBook = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Starry Background */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Direct Info & Quick CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2 mb-6">
              Connect Directly
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mb-8" />

            <p className="font-sans text-xs md:text-sm text-gold-ivory/70 leading-relaxed font-light mb-10">
              For direct bookings, queries, or quick consultations, please reach out using the official channels below.
              Dr. Pandit Gangadhar is available for both personal in-person discussions and online video consultations.
            </p>

            <div className="space-y-6 mb-12">
              {/* Phones List */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold">
                    Official Contact Numbers
                  </h4>
                  <div className="flex flex-col gap-1 mt-2">
                    {phoneNumbers.map((num) => (
                      <button
                        key={num}
                        onClick={() => handleCall(num)}
                        className="font-sans text-sm md:text-base text-gold-ivory font-light hover:text-gold-warm text-left transition-colors duration-300 w-fit"
                      >
                        +91 {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold">
                    Official Email
                  </h4>
                  <button
                    onClick={handleEmail}
                    className="font-sans text-sm md:text-base text-gold-ivory font-light hover:text-gold-warm text-left mt-2 transition-colors duration-300 w-fit"
                  >
                    {emailAddress}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Button Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-dark-pure font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-sm shadow-[0_0_15px_rgba(37,211,102,0.2)]"
              >
                <MessageSquare size={14} />
                WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center gap-2 px-6 py-3 bg-gold-royal hover:bg-gold-warm text-dark-pure font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-sm shadow-[0_0_15px_rgba(200,162,76,0.2)]"
              >
                <Mail size={14} />
                Email
              </button>
              <button
                onClick={handleBook}
                className="flex items-center gap-2 px-6 py-3 border border-gold-royal/30 hover:border-gold-warm text-gold-ivory hover:bg-gold-royal/10 font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
              >
                <Calendar size={14} />
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Framed circular GK Astrotech seal */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Spinning decorative orbit circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
              className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] border border-dashed border-gold-royal/15 rounded-full pointer-events-none"
            />
            
            <div className="relative aspect-square w-full max-w-[380px] p-6 glass-panel rounded-full overflow-hidden border border-gold-royal/30 bg-gradient-to-b from-dark-navy/60 to-dark-pure/90 flex items-center justify-center shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-gold-royal/20 bg-dark-navy p-1 shadow-[0_0_30px_rgba(200,162,76,0.15)]">
                <Image
                  src="/images/logo.jpg"
                  alt="GK Astrotech Seal"
                  fill
                  className="object-cover rounded-full filter contrast-105 brightness-95"
                />
              </div>

              {/* Glowing ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold-royal/5 via-gold-warm/10 to-transparent filter blur-md -z-10 animate-pulse-slow" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
