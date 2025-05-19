
import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-civ-blue via-[#1a65c7] to-civ-darkblue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-civ-green blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-civ-blue blur-3xl opacity-5"></div>
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
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 animate-on-scroll text-center lg:text-left">
            <div className="inline-flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
              <BadgeCheck className="mr-2 h-5 w-5 text-civ-green" />
              <span className="text-sm font-medium">Trusted by Industry Leaders</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Validation Process?</h2>
            <p className="text-xl opacity-90 mb-6">
              Join the growing list of companies that have revolutionized their approach to software validation with cIV.
            </p>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
              <form className="space-y-3">
                <div>
                  <label className="text-sm font-medium block mb-1 text-white/90">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-civ-green"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1 text-white/90">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-civ-green"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1 text-white/90">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-civ-green h-24"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="pt-3">
                  <Button className="w-full bg-civ-green hover:bg-civ-green/90 text-civ-darkblue font-medium text-base py-5 shadow-lg shadow-civ-darkblue/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-xl">
                    Submit Request
                  </Button>
                </div>
              </form>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
                <Button 
                  variant="outline" 
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 rounded-xl"
                >
                  <Phone className="h-4 w-4" /> Schedule a Call
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 rounded-xl"
                >
                  <Mail className="h-4 w-4" /> Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
