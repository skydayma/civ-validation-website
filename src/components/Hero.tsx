
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-civ-lightgreen relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-civ-blue blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-civ-green blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Revolutionize Your Software Validation with <span className="text-civ-blue">AI-Powered</span> Continuous Intelligent Validation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Automate GxP-compliant validation processes, reduce timelines by up to 75%, and ensure continuous compliance with evolving regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-civ-blue hover:bg-civ-darkblue text-white px-8 py-6 text-lg rounded-lg">
                Request a Demo
              </Button>
              <Button variant="outline" className="border-civ-blue text-civ-blue hover:bg-civ-lightgreen px-8 py-6 text-lg rounded-lg">
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square max-w-xl mx-auto rounded-2xl bg-white p-4 shadow-xl border border-gray-100 overflow-hidden relative z-10">
              <div className="h-full w-full bg-gradient-to-br from-civ-blue/20 to-civ-green/20 rounded-xl flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="AI-driven validation visualization" 
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-civ-blue/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-civ-green/20 rounded-full blur-xl"></div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
