"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Scroll,
  Binary,
  HelpCircle,
  BookOpen,
  HeartPulse,
  Sparkles,
  Award,
  Hash,
  Home,
  Flame,
  Gem,
  CheckCircle2,
  Activity,
  KeyRound,
  Fingerprint,
} from "lucide-react";

export default function Specializations() {
  const specializations = [
    { name: "Vedic Astrology", icon: Compass, desc: "Traditional stellar computations" },
    { name: "Parashara Paddhati", icon: Scroll, desc: "Sage Parashara's ancient predictive system" },
    { name: "KP System", icon: Binary, desc: "Krishnamurti Paddhati precision calculations" },
    { name: "Prashna Shastra", icon: HelpCircle, desc: "Horary astrology answering specific questions" },
    { name: "Brighu Nandi Nadi", icon: BookOpen, desc: "Lineage calculations and planetary transits" },
    { name: "Medical Astrology", icon: HeartPulse, desc: "Mapping planetary degrees to body wellness" },
    { name: "Palmistry", icon: Sparkles, desc: "Hast Rekha analysis of life lines and mounts" },
    { name: "Jaimini Astrology", icon: Award, desc: "Vedic sutra calculations using Karakas" },
    { name: "Numerology", icon: Hash, desc: "Core numbers, destiny analysis & name tuning" },
    { name: "Vastu Shastra", icon: Home, desc: "Harmonizing structures with cosmic energy grid" },
    { name: "Reiki Healing", icon: Flame, desc: "Channeling universal life force energy" },
    { name: "Crystal Healing", icon: Gem, desc: "Balancing chakras using mineral vibrations" },
    { name: "Gemstones Recommendation", icon: CheckCircle2, desc: "Precision planetary gemstone selection" },
    { name: "Rudraksha Guidance", icon: Activity, desc: "Sacred bead energy mapping for protection" },
    { name: "Vedic Tantras & Mantra", icon: KeyRound, desc: "Sound vibration and spiritual defense remedies" },
    { name: "Fingerprint Analysis (DMIT)", icon: Fingerprint, desc: "Dermatoglyphics Multiple Intelligence Test" },
  ];

  return (
    <section id="specializations" className="relative py-24 bg-dark-navy/20 gold-border-bottom">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-royal/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Vedic & Modern Systems
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Fields of Specialization
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed max-w-xl mx-auto">
            Blending deep classical Vedic disciplines, advanced modern mathematical systems, and biological analysis (DMIT) to offer a complete consulting service.
          </p>
        </div>

        {/* Specialization Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                className="glass-panel p-6 rounded-md hover:border-gold-royal/40 transition-all duration-300 group flex items-start gap-4 hover:bg-dark-navy/40"
              >
                <div className="p-2 rounded-sm bg-gold-royal/5 group-hover:bg-gold-royal/10 border border-gold-royal/10 group-hover:border-gold-royal/30 text-gold-warm transition-all duration-300 shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <h3 className="font-display text-xs md:text-sm tracking-wider text-gold-ivory group-hover:text-gold-warm font-bold uppercase transition-colors duration-300">
                    {spec.name}
                  </h3>
                  <p className="font-sans text-[11px] text-gold-ivory/50 mt-1 leading-relaxed font-light">
                    {spec.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
