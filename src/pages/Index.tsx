
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { setupScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    const cleanupScrollAnimation = setupScrollAnimation();
    return cleanupScrollAnimation;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Process />
      <CaseStudies />
      <WhyChoose />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
