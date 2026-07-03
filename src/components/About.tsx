"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, GraduationCap, Scale } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Compass,
      title: "Scientific Calculations",
      desc: "Exact planetary degree analysis rather than generic zodiac predictions.",
    },
    {
      icon: ShieldCheck,
      title: "HSE Professionalism",
      desc: "20+ years of corporate health, safety & environment experience mapping to ethical consultations.",
    },
    {
      icon: Scale,
      title: "Empowerment vs Fear",
      desc: "Using astrology to clarify paths and unlock potential, never to create fear.",
    },
    {
      icon: GraduationCap,
      title: "Ancestral Lineage",
      desc: "Raised in a traditional family of Vedic astrologers and almanac (Panchanga) editors.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-dark-navy/30 overflow-hidden gold-border-top">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-accent/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-accent/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[450px] mx-auto rounded-lg overflow-hidden border border-gold-royal/30 p-2 bg-gradient-to-tr from-gold-royal/20 to-transparent"
            >
              <div className="relative w-full h-full rounded-md overflow-hidden bg-dark-navy">
                <Image
                  src="/images/about_chart.png"
                  alt="Vedic Astrology Calculations Book"
                  fill
                  className="object-cover object-center filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-pure/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Accent Floating Mini-Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-6 -right-4 md:right-8 glass-panel p-5 rounded-sm max-w-[220px] border-l-2 border-l-gold-royal shadow-2xl"
            >
              <p className="font-display text-[10px] tracking-widest text-gold-warm uppercase font-bold">
                Our Mission
              </p>
              <p className="font-serif text-xs text-gold-ivory/80 mt-1.5 leading-relaxed italic">
                &ldquo;To empower souls with absolute clarity and practical actions, rather than passive fear.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right Column - Text & Biography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
                Bridging Science & Spirit
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2 mb-6">
                About Pandit Gangadhar Kotagi
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-5 font-sans text-sm md:text-base text-gold-ivory/80 font-light leading-relaxed"
            >
              <p>
                Raised in a traditional and devout family of traditional astrologers and almanac (Panchanga) editors, 
                Pandit Gangadhar Kotagi inherited a deep, ancestral relationship with celestial alignments and Vedic literature from his childhood.
              </p>
              <p>
                However, his approach is far from typical. Parallel to his extensive studies in astrology, he is a senior 
                <strong> Environmental Health & Safety (HSE) professional</strong> with over two decades of experience in high-standard safety engineering and project execution (currently serving as Safety Manager at Adarsh Developers).
              </p>
              <p>
                This dual expertise defines his consultancies. Gangadhar applies the same rigorous observation, risk assessment, 
                and analytical systems from his HSE career to astrological calculations. By utilizing 
                <span className="text-gold-warm font-semibold"> exact planetary degree positions</span> rather than broad zodiac generalized forecasts, he outlines your chart with scientific, mathematical clarity.
              </p>
            </motion.div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="text-gold-warm mt-1 shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-display text-xs uppercase tracking-wider text-gold-ivory font-bold">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-[11px] text-gold-ivory/60 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
