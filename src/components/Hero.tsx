
import React from 'react';
import { Button } from '@/components/ui/button';
import { FlaskConical, Dna, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-[#06c286] to-[#003296] relative overflow-hidden">
      {/* Neural network background pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={`line-${i}`} 
              className="absolute bg-white h-[1px] opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 50}%`,
                width: `${Math.random() * 300 + 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating molecular shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-20 animate-float">
        <Dna className="w-full h-full text-white" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10 animate-float-delayed">
        <Brain className="w-full h-full text-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block py-1 px-3 mb-4 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white/90 text-sm font-semibold flex items-center">
                <FlaskConical className="h-4 w-4 mr-2" /> 
                Where AI Meets Pharma Compliance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6 animate-title">
              Revolutionize Your Software Validation with <span className="text-civ-green bg-gradient-to-r from-civ-blue to-civ-green bg-clip-text text-transparent">AI-Powered</span> Continuous Intelligent Validation
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Automate GxP-compliant validation processes, reduce timelines by up to 75%, and ensure continuous compliance with evolving regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delayed">
              <Button className="bg-white hover:bg-gray-100 text-civ-darkblue hover:scale-105 px-8 py-6 text-lg rounded-lg shadow-glow transition-all duration-300">
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-civ-darkblue hover:scale-105 px-8 py-6 text-lg rounded-lg shadow-glow transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in">
            <div className="aspect-square max-w-xl mx-auto rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/20 shadow-xl overflow-hidden relative z-10">
              <div className="h-full w-full bg-gradient-to-br from-civ-blue/30 to-civ-green/30 rounded-xl flex items-center justify-center">
                <img 
                  src="/chatgpt-image.png" 
                  alt="AI-driven validation visualization" 
                  className="w-3/4 h-3/4 object-contain animate-pulse-slow"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-civ-blue/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-civ-green/30 rounded-full blur-2xl"></div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
