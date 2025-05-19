
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-civ-blue text-white">
      <div className="section-container">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Validation Process?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the growing list of companies that have revolutionized their approach to software validation with cIV.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-civ-blue hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 shadow-lg">
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white border-2 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-white/10 shadow-lg px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
