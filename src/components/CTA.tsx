
import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-civ-blue to-[#1E40AF] text-white relative overflow-hidden">
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
              className="border-white border-2 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 px-8 backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#F3F4F6" /* This should match the previous section's background color */
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,48C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;
