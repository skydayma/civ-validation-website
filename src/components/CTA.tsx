
import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#06c286] to-[#003296] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-civ-green blur-3xl opacity-5"></div>
        {/* Add some subtle dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.2 + 0.05,
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
            <BadgeCheck className="mr-2 h-5 w-5 text-civ-green" />
            <span className="text-sm font-medium">Trusted by Industry Leaders</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Validation Process?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the growing list of companies that have revolutionized their approach to software validation with cIV.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-civ-blue hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 shadow-lg shadow-civ-blue/20">
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-civ-blue hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 shadow-lg shadow-civ-blue/20"
            >
              <Phone className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
