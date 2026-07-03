"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, ArrowRight, Sparkles } from "lucide-react";

interface Service {
  id: string;
  title: string;
  desc: string;
  benefits: string[];
  duration: string;
}

export default function Services({
  setSelectedService,
}: {
  setSelectedService: (service: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"astrology" | "remedial" | "scientific">("astrology");

  const categories = [
    { id: "astrology", label: "Stellar Consultations" },
    { id: "remedial", label: "Remedial & Holistic Sciences" },
    { id: "scientific", label: "Advanced DMIT Analysis" },
  ];

  const astrologyServices: Service[] = [
    {
      id: "career",
      title: "Career Guidance",
      desc: "Comprehensive analysis of 10th and 6th houses to identify optimal professional paths, job vs. business suitability, promotion timelines, and job change windows.",
      benefits: ["Identify high-yield career domains", "Understand favorable transit periods", "Navigate professional blocks"],
      duration: "45-60 Mins",
    },
    {
      id: "marriage",
      title: "Marriage Compatibility (Kundali Milan)",
      desc: "Advanced 8-fold (Ashtakoota) matching combined with planetary degree assessments and Mars placement (Manglik Dosha) impact analysis for long-term marital harmony.",
      benefits: ["Assess mutual emotional compatibility", "Identify potential relationship stress points", "Determine optimal marriage timelines"],
      duration: "45-60 Mins",
    },
    {
      id: "relationship",
      title: "Relationship Consultation",
      desc: "Detailed evaluation of 7th and 5th houses, planetary aspects, and Venus/Mars positions to resolve relationship blockages, separation threats, or delay in marriage.",
      benefits: ["Heal communication breakdowns", "Understand karmic bonding factors", "Identify favorable union times"],
      duration: "45-60 Mins",
    },
    {
      id: "business",
      title: "Business Astrology",
      desc: "Detailed assessment of the 7th and 11th houses to guide business launch times, partnership dynamics, branding alignments, and financial expansion strategies.",
      benefits: ["Select lucky names & business categories", "Evaluate partner synergies", "Calculate high-probability trade cycles"],
      duration: "60 Mins",
    },
    {
      id: "finance",
      title: "Finance & Wealth Analysis",
      desc: "Analyzing the 2nd (accumulated wealth) and 11th (gains) houses along with Jupiter and Venus positions to predict wealth stability, debt recovery, and investment avenues.",
      benefits: ["Plan wealth-building strategies", "Identify periods of high monetary return", "Mitigate financial risk cycles"],
      duration: "45 Mins",
    },
    {
      id: "education",
      title: "Education & Stream Selection",
      desc: "Analyzing 4th and 5th houses to determine intellectual capacity, focus barriers, and correct fields of higher education or professional streams.",
      benefits: ["Discover primary academic strengths", "Map out competitive exam timelines", "Identify blockages in concentration"],
      duration: "45 Mins",
    },
    {
      id: "foreign",
      title: "Foreign Settlement & Travel",
      desc: "Detailed analysis of 9th and 12th houses to determine chances of foreign travel, PR approvals, overseas jobs, or global business opportunities.",
      benefits: ["Determine high-probability immigration timelines", "Analyze overseas business viability", "Clear visa process blockages"],
      duration: "45 Mins",
    },
    {
      id: "property",
      title: "Property & Vehicle Purchase",
      desc: "Evaluation of the 4th house and Mars/Venus positions to select auspicious times for buying land, constructing houses, or acquiring vehicles.",
      benefits: ["Select legal-risk-free buying times", "Identify optimal property values", "Harmonize asset registration times"],
      duration: "30-45 Mins",
    },
    {
      id: "children",
      title: "Children & Progeny Consultation",
      desc: "Analyzing the 5th house, Jupiter, and Saptamsha charts to address delays, planetary obstacles (Pitri Dosha), and children's overall well-being.",
      benefits: ["Auspicious times for family expansion", "Remedies for planetary progeny blocks", "Insights on children's health & future"],
      duration: "45 Mins",
    },
    {
      id: "prashna",
      title: "Prashna Consultation (Horary)",
      desc: "A classical Vedic technique to answer direct, specific questions using the chart of the exact moment the query is asked, useful when birth time is unknown.",
      benefits: ["Instant, high-precision answers", "Resolve immediate life dilemmas", "Guidance without complete birth details"],
      duration: "30 Mins",
    },
  ];

  const remedialServices: Service[] = [
    {
      id: "gemstone",
      title: "Gemstone Recommendation",
      desc: "Highly precise calculation of planetary weight, degree, and metal compatibility to prescribe life-enhancing gems, focusing on functional benefics.",
      benefits: ["Boost weak but favorable planets", "Increase mental focus & physical stamina", "Neutralize malefic dasha impacts"],
      duration: "30 Mins",
    },
    {
      id: "rudraksha",
      title: "Rudraksha Recommendation",
      desc: "Mapping specific planetary weaknesses and Nakshatras to select sacred Rudraksha beads (1 to 21 Mukhi) for spiritual alignment and energy shielding.",
      benefits: ["Reduce stress & mental anxiety", "Create a protective energetic shield", "Deepen meditation and focus"],
      duration: "30 Mins",
    },
    {
      id: "vastu",
      title: "Vastu Shastra Consultation",
      desc: "Analyzing directional energies of residential and commercial properties to correct cosmic imbalances, ensuring physical and financial wellness.",
      benefits: ["Remedy Vastu defects without demolition", "Improve household peace & cash flow", "Harmonize workspace productivity"],
      duration: "60-90 Mins",
    },
    {
      id: "numerology",
      title: "Numerology & Name Correction",
      desc: "Tuning your birth, destiny, and name numbers to sync with favorable planetary vibrations, optimizing career and personal signature patterns.",
      benefits: ["Align legal & business brand names", "Improve personal luck index", "Select auspicious mobile & vehicle numbers"],
      duration: "30 Mins",
    },
    {
      id: "reiki",
      title: "Reiki Distance Healing",
      desc: "Holistic life-force energy channeling to clean chakras, clear mental blockages, and promote emotional recovery from long-standing stress.",
      benefits: ["Deep emotional detoxification", "Chakra balance & aura cleansing", "Relief from chronic fatigue & stress"],
      duration: "45 Mins",
    },
    {
      id: "crystal",
      title: "Crystal Healing Therapy",
      desc: "Personalized recommendation and grid activation of natural crystals to direct healing vibrations into your immediate workspace or living environment.",
      benefits: ["Absorb negative environmental frequencies", "Enhance mental clarity & focus", "Attract abundance energies"],
      duration: "45 Mins",
    },
    {
      id: "health",
      title: "Health & Medical Astrology",
      desc: "Investigating the 6th and 8th houses, Sun/Moon health metrics, and current dashas to predict onset periods of ailments and optimize recovery alignments.",
      benefits: ["Identify potential weak body zones", "Determine periods of high vitality", "Align medical treatments with moon phases"],
      duration: "45 Mins",
    },
  ];

  const scientificServices: Service[] = [
    {
      id: "dmit",
      title: "Scientific Fingerprint Analysis (DMIT)",
      desc: "Dermatoglyphics Multiple Intelligence Test. A scientific study of fingerprint ridge patterns representing brain lobe configurations to reveal inborn talents, learning styles, and behavioral traits.",
      benefits: [
        "Discover innate multiple intelligence profile",
        "Understand preferred learning style (Visual, Auditory, Kinesthetic)",
        "Identify dominant brain hemisphere (Left vs Right)",
        "Identify ideal career paths in early age",
      ],
      duration: "60 Mins (Includes 20-page Report)",
    },
  ];

  const getServices = () => {
    switch (activeTab) {
      case "astrology":
        return astrologyServices;
      case "remedial":
        return remedialServices;
      case "scientific":
        return scientificServices;
      default:
        return astrologyServices;
    }
  };

  const handleBook = (title: string) => {
    setSelectedService(title);
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Stars Background */}
      <div className="absolute inset-0 star-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Premium Consulting
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Astrological & Healing Services
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed">
            Choose from classical predictive astrology consultations, space harmonizing therapies, or scientific brain mapping profiles.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-display text-xs uppercase tracking-widest transition-all duration-300 rounded-sm border ${
                activeTab === tab.id
                  ? "bg-gold-royal text-dark-pure border-gold-royal shadow-[0_0_15px_rgba(200,162,76,0.2)] font-semibold"
                  : "bg-dark-navy/40 text-gold-ivory/70 border-gold-royal/20 hover:border-gold-royal/55 hover:text-gold-warm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Tab Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {getServices().map((service, idx) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-8 rounded-md flex flex-col justify-between h-full border-t-2 border-t-gold-royal/30 hover:border-t-gold-warm"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-base tracking-wider text-gold-ivory font-bold uppercase">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 text-gold-warm bg-gold-royal/10 border border-gold-royal/20 px-2 py-0.5 rounded-sm">
                      <Clock size={11} />
                      <span className="font-sans text-[9px] uppercase tracking-wider font-semibold">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-gold-ivory/70 leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    <span className="font-display text-[10px] tracking-widest text-gold-warm uppercase font-bold block mb-3">
                      Key Benefits
                    </span>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-gold-ivory/80">
                        <Check size={12} className="text-gold-royal mt-1 shrink-0" />
                        <span className="font-sans text-xs font-light leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleBook(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-gold-royal/20 hover:border-gold-warm bg-gold-royal/5 hover:bg-gold-royal text-gold-ivory hover:text-dark-pure font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm group"
                  >
                    Book Consultation
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
