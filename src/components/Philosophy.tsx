"use client";

import { motion } from "framer-motion";
import { Atom, Compass, Fingerprint, ShieldCheck, Eye, Sparkles } from "lucide-react";

export default function Philosophy() {
  const philosophies = [
    {
      title: "Scientific Astrology",
      desc: "Treating astrology not as a superstitious dogma, but as an observational cosmic science that correlates planetary energies with human behavior.",
      icon: Atom,
    },
    {
      title: "Planetary Degree Analysis",
      desc: "Meticulous calculation of exact degrees, houses, and strength coordinates rather than general sign-based predictions.",
      icon: Compass,
    },
    {
      title: "Karmic Blueprint",
      desc: "Decoding the structural framework of your past karma, letting you understand current limitations as opportunities for growth.",
      icon: Fingerprint,
    },
    {
      title: "Ethical Guidance",
      desc: "No fear-mongering or pushy remedies. Honesty, integrity, and simple, logical, and practical changes are our core practices.",
      icon: ShieldCheck,
    },
    {
      title: "Conscious Decision Making",
      desc: "We provide strategic insights to empower your free will, enabling you to choose optimal times and pathways with complete confidence.",
      icon: Eye,
    },
    {
      title: "Personal Transformation",
      desc: "Fostering internal development, emotional balance, and spiritual growth, converting challenges into powerful catalysts for success.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Background starlight particles */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Our Core Methodology
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            The Astrological Philosophy
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-serif text-sm md:text-base text-gold-ivory/60 mt-4 leading-relaxed italic">
            &ldquo;Jyotisha is the eye of the Vedas. It illuminates the paths, but the traveler must walk by their own light.&rdquo;
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="glass-panel glass-panel-hover p-8 rounded-md flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base tracking-wider text-gold-ivory font-bold uppercase">
                    {item.title}
                  </h3>
                </div>
                
                <p className="font-sans text-xs md:text-sm text-gold-ivory/70 leading-relaxed font-light mt-2 flex-grow">
                  {item.desc}
                </p>
                
                {/* Subtle card bottom accent */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-royal/20 to-transparent mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
