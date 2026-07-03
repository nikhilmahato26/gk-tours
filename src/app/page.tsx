"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Specializations from "@/components/Specializations";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Journey from "@/components/Journey";
import Awards from "@/components/Awards";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Philosophy />
        <Specializations />
        <Services setSelectedService={setSelectedService} />
        <WhyChoose />
        <Journey />
        <Awards />
        <Process />
        <Testimonials />
        <FAQ />
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
