"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Medal, Star, Flame } from "lucide-react";

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom awards data
  const awards = [
    {
      title: "Eminence Astrologer Award 2026",
      issuer: "National Astrological Council",
      desc: "For outstanding research-driven contributions to Vedic degree analysis.",
      icon: Star,
      year: "2026",
    },
    {
      title: "Vedic Post Doctorate Fellowship",
      issuer: "Spiritual Research University",
      desc: "Honorary fellowship awarded for advanced astronomical synthesis in predictive chart mapping.",
      icon: Flame,
      year: "2024",
    },
    {
      title: "Dr APJ Abdul Kalam Nation Star Award",
      issuer: "National Welfare Association",
      desc: "Recognizing outstanding social contributions and promotion of ancient sciences.",
      icon: Medal,
      year: "2023",
    },
    {
      title: "Suvarna Karnataka Rajya Prashasti",
      issuer: "Government/State Cultural Association",
      desc: "State-level appreciation for preserving traditional Vedic Panchanga and horary systems.",
      icon: Award,
      year: "2022",
    },
    {
      title: "Jyotishya Vachaspati",
      issuer: "All India Astrologers Federation",
      desc: "Prestigious title conferred for excellence in Prashna Shastra (Horary Question Analysis).",
      icon: ShieldCheck,
      year: "2020",
    },
    {
      title: "Swami Vivekanand Award",
      issuer: "Youth & Social Development Board",
      desc: "For mentoring and guiding youth through non-fear-based educational counseling.",
      icon: Star,
      year: "2019",
    },
    {
      title: "Vastu Acharya",
      issuer: "Institute of Vedic Architecture",
      desc: "Recognizing structural energy audits completed without causing structural demolition.",
      icon: Award,
      year: "2017",
    },
    {
      title: "Jyotishya Ratna",
      issuer: "Vedic Sciences Academy",
      desc: "Conferred for mastery over Parashara and KP astrological calculation standards.",
      icon: Medal,
      year: "2015",
    },
    {
      title: "Indian Icon Achievement Award",
      issuer: "National Guild of Scholars",
      desc: "Appreciation of high ethical standards maintained in personal consultation.",
      icon: ShieldCheck,
      year: "2014",
    },
  ];

  return (
    <section id="awards" className="relative py-24 bg-dark-navy/30 overflow-hidden gold-border-bottom">
      {/* Stars Background */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Recognitions of Honor
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Awards & Accolades
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed max-w-xl mx-auto">
            Honored by state authorities, academic boards, and astrological federations for upholding ethical and scientific practices in Vedic astrology.
          </p>
        </div>

        {/* Scrollable Luxury Grid */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-thin scrollbar-thumb-gold-royal/30 scrollbar-track-transparent snap-x snap-mandatory"
        >
          {awards.map((award, idx) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel p-8 rounded-md min-w-[280px] sm:min-w-[320px] max-w-[350px] shrink-0 snap-center hover:border-gold-royal/40 transition-colors duration-300 relative group flex flex-col justify-between"
              >
                {/* Year Badge */}
                <div className="absolute top-4 right-4 font-display text-xs tracking-widest text-gold-warm/40 group-hover:text-gold-warm transition-colors duration-300 font-semibold">
                  {award.year}
                </div>

                <div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm mb-6 group-hover:bg-gold-warm group-hover:text-dark-pure transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  
                  <h3 className="font-display text-sm tracking-wider text-gold-ivory font-bold uppercase group-hover:text-gold-warm transition-colors duration-300 leading-snug">
                    {award.title}
                  </h3>
                  
                  <p className="font-sans text-[10px] tracking-wider text-gold-warm/70 mt-1 uppercase font-medium">
                    {award.issuer}
                  </p>

                  <p className="font-sans text-[11px] text-gold-ivory/60 mt-4 leading-relaxed font-light">
                    {award.desc}
                  </p>
                </div>

                {/* Subtle visual connector line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-royal/10 to-transparent mt-6 group-hover:via-gold-royal/30 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Swipe prompt */}
        <div className="flex items-center justify-center gap-2 mt-4 text-gold-ivory/40">
          <span className="font-sans text-[9px] tracking-widest uppercase">Drag / Swipe Horizontally to Explore</span>
        </div>
      </div>
    </section>
  );
}
