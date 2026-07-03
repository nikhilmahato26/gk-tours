"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Search, Award } from "lucide-react";

export default function Journey() {
  const education = [
    {
      title: "Doctorate in Vedic Astrology",
      institution: "Jyotishya Vachaspati / Doctoral Fellowship",
      period: "Research Focus: Astro-Meteorology & Precise Degrees",
      desc: "Advanced research on integration of planetary degrees with cosmic sciences, life paths, and personal destiny cycles.",
    },
    {
      title: "Post Graduate Diploma in Vedic Astrology",
      institution: "Vedic Astrology Institute",
      period: "Specialization: Parashara & KP Systems",
      desc: "Rigorous training in mathematical computation, planetary strengths (Shadbala), and directional dasha charts.",
    },
    {
      title: "Continuous Research Programs",
      institution: "Self & Institutional Projects",
      period: "Ongoing",
      desc: "Active study across Astronomy, Gemology, Numerology, Brighu Nandi Nadi, Vedic Tantras, and remedies.",
    },
  ];

  const experience = [
    {
      title: "Senior Astrological Consultant",
      company: "Astroyogi, Astro Varta & Astrotalk",
      period: "10+ Years Active",
      desc: "Serving thousands of global clients on premier digital platforms, maintaining 4.8+ ratings for precise timelines and practical advice.",
    },
    {
      title: "Independent Offline Consultancy",
      company: "GK Astrotech Office & Home Studios",
      period: "15+ Years Active",
      desc: "Private personal consultation for CEOs, political figures, entrepreneurs, and families seeking high-end Vedic and Vastu planning.",
    },
  ];

  return (
    <section id="journey" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Star background */}
      <div className="absolute inset-0 star-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Credentials & Experience
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            The Educational & Professional Journey
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed max-w-xl mx-auto">
            A rare intersection of analytical logic and classical Vedic scholarship, bringing absolute reliability to every prediction.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pb-4 border-b border-gold-royal/10">
              <div className="p-2.5 rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-display text-lg md:text-xl tracking-wider text-gold-ivory font-bold uppercase">
                Educational & Research Journey
              </h3>
            </div>

            <div className="relative border-l border-gold-royal/15 pl-6 ml-3 space-y-10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Bullet Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border border-gold-royal bg-dark-pure group-hover:bg-gold-warm transition-colors duration-300" />

                  <span className="font-sans text-[9px] tracking-widest text-gold-warm uppercase font-bold block mb-1">
                    {item.period}
                  </span>
                  <h4 className="font-display text-sm md:text-base tracking-wide text-gold-ivory font-bold uppercase group-hover:text-gold-warm transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-gold-ivory/80 font-medium italic mt-1">
                    {item.institution}
                  </p>
                  <p className="font-sans text-[11px] md:text-xs text-gold-ivory/50 mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Experience */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pb-4 border-b border-gold-royal/10">
              <div className="p-2.5 rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm">
                <Briefcase size={20} />
              </div>
              <h3 className="font-display text-lg md:text-xl tracking-wider text-gold-ivory font-bold uppercase">
                Professional Experience
              </h3>
            </div>

            <div className="relative border-l border-gold-royal/15 pl-6 ml-3 space-y-10">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Bullet Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border border-gold-royal bg-dark-pure group-hover:bg-gold-warm transition-colors duration-300" />

                  <span className="font-sans text-[9px] tracking-widest text-gold-warm uppercase font-bold block mb-1">
                    {item.period}
                  </span>
                  <h4 className="font-display text-sm md:text-base tracking-wide text-gold-ivory font-bold uppercase group-hover:text-gold-warm transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-gold-ivory/80 font-medium italic mt-1">
                    {item.company}
                  </p>
                  <p className="font-sans text-[11px] md:text-xs text-gold-ivory/50 mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
