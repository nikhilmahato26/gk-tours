"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Users, Compass } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "12+",
      label: "Years Astrology Practice",
      icon: Compass,
      desc: "Dedicated Vedic calculation",
    },
    {
      value: "15+",
      label: "Specializations",
      icon: Calendar,
      desc: "Vedic, KP, Vastu, Palmistry & more",
    },
    {
      value: "1000+",
      label: "Consultations Completed",
      icon: Users,
      desc: "Trusted worldwide guidance",
    },
    {
      value: "Multiple",
      label: "International Awards",
      icon: Award,
      desc: "Recognized excellence & scholarship",
    },
  ];

  return (
    <section className="relative z-25 -mt-16 px-6 max-w-7xl mx-auto w-full">
      <div className="glass-panel rounded-lg py-10 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 lg:divide-x divide-gold-royal/15">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left pt-6 md:pt-0 lg:px-6 first:pt-0 first:pl-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-sm bg-gold-royal/10 border border-gold-royal/20 text-gold-warm">
                  <Icon size={18} />
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold tracking-tight text-glow-gold text-gold-warm">
                  {stat.value}
                </span>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-gold-ivory font-semibold mt-1">
                {stat.label}
              </h3>
              <p className="font-sans text-[11px] text-gold-ivory/60 mt-1.5 leading-relaxed font-light">
                {stat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
