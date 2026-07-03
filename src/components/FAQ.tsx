"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "How is your astrology consultation different?",
      a: "Our consultation combines classical Vedic calculations with exact planetary degree analysis and modern industrial risk assessment principles. We avoid fear-mongering and general star-sign predictions, providing logic-based timelines and practical remedies tailored to your career, business, or personal life.",
    },
    {
      q: "Do I need my exact birth time?",
      a: "Yes, exact birth time (down to the minute) is critical for precise degree calculations, Divisional charts (Vargas), and Sub-period (Dasha) timing. If your time is approximate, we can perform a Birth Time Rectification based on past life events. If birth details are completely unavailable, we use Prashna Shastra (Horary Astrology) to answer specific queries.",
    },
    {
      q: "Can the consultation be conducted online?",
      a: "Yes, we consult globally. Online sessions are conducted via secure video calls (Zoom, Google Meet, or WhatsApp Video). We screen-share your astrological charts and calculations. Audio calls are also available based on client preference.",
    },
    {
      q: "Do you provide remedies, and are they expensive?",
      a: "We only provide ethical, non-superstitious remedies. These are simple lifestyle adjustments, sound vibrations (mantras), direction balancing, and charitable acts. We do not demand expensive pujas, complex rituals, or sell commercial objects.",
    },
    {
      q: "How long is a single consultation session?",
      a: "A standard personal session lasts 45 to 60 minutes. This includes a complete chart overview, deep analysis of active planetary dashas, detailed query answers, and customized remedy mapping. We make sure all your doubts are answered patiently.",
    },
    {
      q: "Can international clients book consultations?",
      a: "Yes, a significant portion of our clients are NRIs and international professionals. We support flexible scheduling to accommodate different timezones (US, Europe, Middle East, and Asia-Pacific) and provide reports in PDF format.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-dark-pure gold-border-bottom">
      {/* Background starlight particles */}
      <div className="absolute inset-0 star-bg opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-md overflow-hidden transition-all duration-300 border border-gold-royal/10 hover:border-gold-royal/30"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle size={16} className="text-gold-royal/50 shrink-0" />
                    <span className="font-display text-xs md:text-sm tracking-wider text-gold-ivory font-bold uppercase">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-gold-warm shrink-0 p-1 bg-gold-royal/5 border border-gold-royal/10 rounded-sm">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Animated Drawer for Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gold-royal/5 font-sans text-xs md:text-sm text-gold-ivory/70 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
