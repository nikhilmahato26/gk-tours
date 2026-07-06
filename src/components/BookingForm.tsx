"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Clock, MapPin, Send, CheckCircle2, Phone, Mail } from "lucide-react";

interface BookingInputs {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  service: string;
  message: string;
}

export default function BookingForm({
  selectedService,
  setSelectedService,
}: {
  selectedService: string;
  setSelectedService: (service: string) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingInputs>();

  // Pre-fill selected service if clicked from services cards
  useEffect(() => {
    if (selectedService) {
      setValue("service", selectedService);
    }
  }, [selectedService, setValue]);

  const services = [
    "Career Guidance",
    "Marriage Compatibility",
    "Relationship Consultation",
    "Health Astrology",
    "Business Astrology",
    "Finance & Wealth Analysis",
    "Education & Stream Selection",
    "Children & Progeny Consultation",
    "Property & Vehicle Purchase",
    "Foreign Settlement & Travel",
    "Prashna Consultation (Horary)",
    "Vastu Shastra Consultation",
    "Numerology & Name Correction",
    "Reiki Distance Healing",
    "Crystal Healing Therapy",
    "Gemstone Recommendation",
    "Rudraksha Guidance",
    "Vedic Tantras & Mantra",
    "Fingerprint Analysis (DMIT)",
  ];

  const onSubmit = (data: BookingInputs) => {
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Construct mailto link
      const emailSubject = encodeURIComponent(`Consultation Booking - ${data.name}`);
      const emailBody = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Birth Date: ${data.birthDate}\n` +
        `Birth Time: ${data.birthTime}\n` +
        `Birth Place: ${data.birthPlace}\n` +
        `Service Requested: ${data.service}\n` +
        `Message: ${data.message || 'None'}`
      );
      
      // Auto-trigger email client
      window.location.href = `mailto:gkvedicastrologer@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }, 1800);
  };

  const handleReset = () => {
    reset();
    setSelectedService("");
    setSubmitSuccess(false);
  };

  return (
    <section id="booking" className="relative py-24 bg-dark-navy/30 overflow-hidden gold-border-top">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-accent/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-[500px] h-[500px] bg-blue-accent/15 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold-royal uppercase font-semibold">
            Reserve Your Session
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gold-ivory mt-2">
            Schedule a Consultation
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-gold-ivory/60 mt-4 leading-relaxed">
            Please share your accurate birth credentials. Your data is processed with extreme care and absolute privacy.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aditya Sharma"
                      {...register("name", { required: "Name is required" })}
                      className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                    />
                    {errors.name && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 99456 01286"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                    />
                    {errors.phone && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. client@domain.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                    />
                    {errors.email && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Select Service
                    </label>
                    <select
                      {...register("service", { required: "Please select a service" })}
                      className="w-full bg-dark-pure/80 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-dark-pure">-- Choose a Service --</option>
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-dark-navy text-gold-ivory">
                          {svc}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.service.message}
                      </span>
                    )}
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        {...register("birthDate", { required: "Birth date is required" })}
                        className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                      />
                    </div>
                    {errors.birthDate && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.birthDate.message}
                      </span>
                    )}
                  </div>

                  {/* Birth Time */}
                  <div>
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Time of Birth (Exact)
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        {...register("birthTime", { required: "Exact birth time is required" })}
                        className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                      />
                    </div>
                    {errors.birthTime && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.birthTime.message}
                      </span>
                    )}
                  </div>

                  {/* Birth Place */}
                  <div className="md:col-span-2">
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Place of Birth (City, State, Country)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bangalore, Karnataka, India"
                      {...register("birthPlace", { required: "Birth place is required" })}
                      className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300"
                    />
                    {errors.birthPlace && (
                      <span className="font-sans text-[10px] text-red-400 mt-1 block">
                        {errors.birthPlace.message}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="font-display text-[10px] tracking-wider text-gold-warm uppercase font-bold block mb-2">
                      Additional Message or Specific Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share any specific questions or focus areas for the consultation (e.g. career change in 2026, compatibility nuances)..."
                      {...register("message")}
                      className="w-full bg-dark-pure/60 border border-gold-royal/20 focus:border-gold-warm text-gold-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-sm flex items-center justify-center gap-2 py-4 bg-gold-royal hover:bg-gold-warm text-dark-pure font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(200,162,76,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-pure border-t-transparent rounded-full animate-spin" />
                        Analyzing Planetary Grid...
                      </>
                    ) : (
                      <>
                        Submit details
                        <Send size={12} className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6 max-w-lg mx-auto"
              >
                <div className="flex justify-center text-gold-warm">
                  <CheckCircle2 size={56} className="animate-pulse" />
                </div>
                
                <h3 className="font-display text-lg md:text-xl tracking-wider text-gold-ivory font-bold uppercase">
                  Details Received Successfully
                </h3>

                <p className="font-sans text-xs md:text-sm text-gold-ivory/70 leading-relaxed font-light">
                  Thank you! Your birth coordinates have been securely queued for planetary degree calculation.
                  We have triggered your default email application to confirm your booking. If it did not open, please click below or write to us directly.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border border-gold-royal/30 hover:border-gold-warm text-gold-ivory hover:text-gold-warm font-sans text-[10px] tracking-widest uppercase transition-all duration-300 rounded-sm"
                  >
                    Submit Another Booking
                  </button>
                  <a
                    href="https://wa.me/919945601286?text=Hi%20Dr.%20Pandit%20Gangadhar,%20I%20have%20submitted%20my%20birth%20details%20on%20your%20website%20for%20a%20consultation.%20Please%20verify."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gold-royal hover:bg-gold-warm text-dark-pure font-sans text-[10px] tracking-widest uppercase transition-all duration-300 rounded-sm font-semibold flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(200,162,76,0.2)]"
                  >
                    Confirm via WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
