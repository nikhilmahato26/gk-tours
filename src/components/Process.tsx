"use client";

import { motion } from "framer-motion";
import { Calendar, UserCheck, Activity, BarChart, FileText, Heart, Compass, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Book Consultation",
      desc: "Schedule your online or offline session and choose your required service.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "Share Birth Details",
      desc: "Provide date, exact time, and place of birth via our secure forms.",
      icon: UserCheck,
    },
    {
      num: "03",
      title: "Horoscope Analysis",
      desc: "We construct your birth chart (Lagna Kundali) and divisionals (Vargas).",
      icon: Compass,
    },
    {
      num: "04",
      title: "Planetary Degree Analysis",
      desc: "Calculations of exact degrees, house strengths, and cuspal transition zones.",
      icon: BarChart,
    },
    {
      num: "05",
      title: "Detailed Consultation",
      desc: "A direct, thorough session exploring your chart timelines and answering queries.",
      icon: Activity,
    },
    {
      num: "06",
      title: "Ethical Remedies",
      desc: "Receive logical, simple lifestyle and energy adjustments - no superstition.",
      icon: Heart,
    },
    {
      num: "07",
      title: "Guidance Report",
      desc: "Get a summarized PDF report detailing key dates, remedies, and maps discussed.",
      icon: FileText,
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Background starry particles */}
      <div className="absolute inset-0 star-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            The Consultation Workflow
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            The Consultation Process
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed">
            Every consultation is structured with precision, ensuring transparency and deep research before we speak.
          </p>
        </div>

        {/* Steps Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col justify-between">
                
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-panel p-6 rounded-md h-full flex flex-col justify-between hover:border-gold-royal/30 transition-colors duration-300 relative"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-2xl font-bold text-gold-royal/30 group-hover:text-gold-royal transition-colors duration-300">
                        {step.num}
                      </span>
                      <div className="p-2 rounded-sm bg-gold-royal/5 border border-gold-royal/10 text-gold-warm">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="font-display text-xs md:text-sm tracking-wider text-gold-ivory font-bold uppercase mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-[11px] text-gold-ivory/55 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting arrow for larger screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-gold-royal/30 z-20">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
