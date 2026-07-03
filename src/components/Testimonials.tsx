"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Coming from a technology background, I was highly skeptical of astrology. Pandit Gangadhar changed my perspective completely. His calculations are mathematical, precise, and have zero superstition. Highly logical recommendations.",
      author: "Aditya Hegde",
      role: "VP Engineering, Fintech Corp",
      title: "Changed my perspective completely",
    },
    {
      text: "The degree analysis was eye-opening. Instead of telling me general things about my star sign, he pinpointed specific career transition dates that occurred exactly down to the month. Very logical and scientific.",
      author: "Meera K. Rao",
      role: "Founder, GreenSpace Solutions",
      title: "Very logical and scientific",
    },
    {
      text: "Excellent service. He explained my planetary blockages and recommended simple, cost-free lifestyle modifications and sound therapies. I felt immediate changes in my workplace clarity. Accurate timing and detailed explanations.",
      author: "Rajesh Sekhar",
      role: "Senior Project Manager, Infrastructure Group",
      title: "Accurate timing & detailed explanation",
    },
    {
      text: "I consulted him for our commercial project Vastu. His advice was highly technical and based on energy grids. He did not ask us to break down walls or demolish structures, but suggested subtle balancing elements. Highly recommended.",
      author: "Siddharth Shetty",
      role: "Managing Director, Shetty Real Estate",
      title: "Highly recommended Vastu advice",
    },
    {
      text: "His understanding of both classical texts like Parashara and modern systems like KP is phenomenal. The analysis was detailed, patient, and highly reassuring. Exceptional Vedic knowledge.",
      author: "Dr. Ananya Shastri",
      role: "Professor of Sanskrit & Cultural Studies",
      title: "Exceptional Vedic knowledge",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-dark-navy/30 gold-border-bottom">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Client Voices
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Trusted By Professionals
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed">
            Read how Pandit Gangadhar Kotagi's degree-based calculations and analytical mindset help leaders achieve clarity.
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`glass-panel p-8 rounded-md hover:border-gold-royal/30 transition-all duration-300 flex flex-col justify-between ${
                idx === 3 || idx === 4 ? "lg:col-span-1.5" : ""
              }`}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <Quote size={24} className="text-gold-royal/20" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-gold-warm text-gold-warm" />
                    ))}
                  </div>
                </div>

                <h4 className="font-display text-xs md:text-sm tracking-wide text-gold-warm font-bold uppercase mb-3">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                <p className="font-sans text-xs text-gold-ivory/70 leading-relaxed font-light italic mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-gold-royal/10 mb-4" />
                <h5 className="font-display text-xs tracking-wider text-gold-ivory font-bold uppercase">
                  {rev.author}
                </h5>
                <span className="font-sans text-[10px] text-gold-ivory/40">
                  {rev.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
