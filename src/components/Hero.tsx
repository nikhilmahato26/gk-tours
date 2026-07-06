"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-pure pt-24 lg:pt-16 pb-12"
    >
      {/* Animated Starry Particle Background */}
      <div className="absolute inset-0 star-bg opacity-45 pointer-events-none z-0" />

      {/* Cosmic Nebula Glows */}
      <div className="absolute inset-0 nebula-purple pointer-events-none z-0" />
      <div className="absolute inset-0 nebula-blue pointer-events-none z-0" />

      {/* Subtle Grid overlay for luxury vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,162,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,162,76,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content (Text) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-4 bg-gold-royal/15 border border-gold-royal/30 px-3.5 py-1.5 rounded-full w-fit self-start"
          >
            <Sparkles size={12} className="text-gold-warm animate-pulse" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-warm uppercase font-medium">
              Vedic Astrology & Spiritual Consultant
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-2"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gold-ivory">
              Ancient Wisdom.
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-warm font-light italic leading-none">
              Scientific Precision.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-base md:text-lg text-gold-ivory/80 max-w-xl mt-6 leading-relaxed font-light"
          >
            Over two decades of professional experience combining traditional Vedic calculations with a modern, scientific and philosophical approach. We translate cosmic design into ethical, practical guidance for your life's path.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <a
              href="#booking"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-xs font-semibold tracking-widest text-dark-pure uppercase transition-all duration-300 bg-gold-royal hover:bg-gold-warm rounded-sm shadow-[0_0_20px_rgba(200,162,76,0.25)] hover:shadow-[0_0_30px_rgba(228,192,106,0.45)]"
            >
              Book Consultation
              <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="relative inline-flex items-center justify-center px-8 py-3.5 border border-gold-royal/30 text-xs font-semibold tracking-widest text-gold-ivory uppercase transition-all duration-300 hover:bg-gold-royal/10 hover:border-gold-warm rounded-sm"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Content (Image & Rotating Zodiac Wheel) */}
        <div className="lg:col-span-5 relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px] w-full">

          {/* Rotating Zodiac SVG Background Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[520px] lg:h-[520px] opacity-25 select-none pointer-events-none"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-gold-royal"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.15"
            >
              {/* Outer Circles */}
              <circle cx="50" cy="50" r="49" />
              <circle cx="50" cy="50" r="45" strokeDasharray="1, 1" />
              <circle cx="50" cy="50" r="38" />
              <circle cx="50" cy="50" r="28" strokeDasharray="2, 1" />

              {/* Lines / Segments */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 50 + 28 * Math.cos(angle);
                const y1 = 50 + 28 * Math.sin(angle);
                const x2 = 50 + 49 * Math.cos(angle);
                const y2 = 50 + 49 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}

              {/* Center Mandala Symbol */}
              <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.05" />
              <path
                d="M 50,47 C 48.5,47 47,48.5 47,50 C 47,51.5 48.5,53 50,53 C 51.5,53 53,51.5 53,50 C 53,48.5 51.5,47 50,47 Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </motion.div>

          {/* Reverse Rotating Constellation Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[580px] lg:h-[580px] opacity-15 select-none pointer-events-none"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-gold-warm"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              strokeDasharray="3, 5"
            >
              <circle cx="50" cy="50" r="47.5" />
              <circle cx="50" cy="50" r="41" />
            </svg>
          </motion.div>

          {/* Main Portrait Frame with Luxury Gold Borders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-[280px] h-[340px] sm:w-[350px] sm:h-[430px] lg:w-[400px] lg:h-[480px] rounded-t-full overflow-hidden border border-gold-royal/30 p-2 bg-gradient-to-b from-gold-royal/20 to-transparent shadow-[0_0_50px_rgba(8,8,8,0.8)]"
          >
            <div className="relative w-full h-full rounded-t-full overflow-hidden bg-dark-navy">
              <Image
                src="/images/pandit_latest.jpg"
                alt="Dr. Pandit Gangadhar Kotagi"
                fill
                priority
                unoptimized
                className="object-cover object-top filter brightness-95"
              />

              {/* Vignette Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-pure via-transparent to-transparent opacity-80" />
            </div>

            {/* Glowing Aura behind picture */}
            <div className="absolute -inset-1 rounded-t-full bg-gradient-to-t from-transparent via-gold-royal/10 to-gold-warm/20 filter blur-md -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-ivory/50 select-none z-10">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-gradient-to-b from-gold-royal to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
