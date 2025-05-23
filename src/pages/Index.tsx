
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import RealWorldUseCases from "@/components/RealWorldUseCases";
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
      <div className="space-y-0"> {/* Removed space between sections */}
        <Features />
        <Benefits />
        <Process />
        <RealWorldUseCases />
        <CaseStudies />
        <WhyChoose />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
