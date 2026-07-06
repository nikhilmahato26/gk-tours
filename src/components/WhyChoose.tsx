"use client";

import { motion } from "framer-motion";
import { Compass, ShieldAlert, HeartHandshake, Eye, Scroll, BrainCircuit, BarChart3, Lock } from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      title: "Scientific Calculations",
      desc: "Using astronomical mathematics to compute accurate houses, planetary strengths, and cuspal alignments rather than estimation.",
      icon: Compass,
    },
    {
      title: "Precise Planetary Degree Analysis",
      desc: "Detailed computation of planet degrees (up to minutes of arc) to evaluate exact influences, aspect intersections, and transition thresholds.",
      icon: BarChart3,
    },
    {
      title: "Ethical Remedies",
      desc: "We focus on simple, logical, and practical lifestyle adjustments, sound vibrations (mantras), and charitable acts. No expensive remedies or fear tactics.",
      icon: ShieldAlert,
    },
    {
      title: "Personalized Consultations",
      desc: "One-on-one tailored sessions where we dive deep into your life areas, addressing queries with undivided attention and complete clarity.",
      icon: HeartHandshake,
    },
    {
      title: "Ancient Wisdom",
      desc: "Rooted in classical source texts including Brihat Parashara Hora Shastra, Jaimini Sutras, and Nadi texts.",
      icon: Scroll,
    },
    {
      title: "Modern Thinking",
      desc: "Translating ancient terminology into modern terms applicable to global corporate settings, international studies, startup business models, and mental wellness.",
      icon: BrainCircuit,
    },
    {
      title: "Research-Driven Predictions",
      desc: "Employing analytical statistical patterns and historical chart comparison databases to deliver high-probability foresight.",
      icon: Compass,
    },
    {
      title: "Confidential Consultations",
      desc: "All client details, birth details, and discussion logs are treated with strict confidentiality under modern NDAs.",
      icon: Lock,
    },
  ];

  return (
    <section id="why-choose" className="relative py-24 bg-dark-navy/30 gold-border-bottom">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-accent/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            The Astrotech Difference
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Why Choose Dr. Pandit Gangadhar
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed">
            Aligning ancient astrology with contemporary analytical thinking to deliver actionable solutions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central dotted line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-royal/50 via-gold-royal/10 to-transparent border-l border-dashed border-gold-royal/30 -translate-x-1/2" />

          <div className="space-y-12">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-gold-royal bg-dark-pure flex items-center justify-center z-20 shadow-[0_0_10px_rgba(200,162,76,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold-warm animate-pulse" />
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass-panel p-8 rounded-md w-[90%] ml-12 md:ml-0 md:w-[45%] border-l-2 border-l-gold-royal hover:border-l-gold-warm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="text-gold-warm shrink-0">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display text-xs md:text-sm tracking-wider text-gold-ivory font-bold uppercase">
                        {pt.title}
                      </h3>
                    </div>
                    <p className="font-sans text-[11px] md:text-xs text-gold-ivory/60 leading-relaxed font-light mt-2">
                      {pt.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
