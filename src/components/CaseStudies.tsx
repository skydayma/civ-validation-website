
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const partnerLogos = [
  {
    id: 1,
    name: "Pharma Corp",
    imageUrl: "https://placehold.co/200x80/e2e8f0/64748b?text=PharmaLogo", 
  },
  {
    id: 2,
    name: "MedTech Solutions",
    imageUrl: "https://placehold.co/200x80/e2e8f0/64748b?text=MedTechLogo", 
  },
  {
    id: 3,
    name: "BioGen Labs",
    imageUrl: "https://placehold.co/200x80/e2e8f0/64748b?text=BioGenLogo", 
  },
  {
    id: 4,
    name: "LifeScience Inc",
    imageUrl: "https://placehold.co/200x80/e2e8f0/64748b?text=LifeScienceLogo", 
  },
  {
    id: 5,
    name: "Health Systems",
    imageUrl: "https://placehold.co/200x80/e2e8f0/64748b?text=HealthLogo", 
  },
];

const testimonials = [
  {
    id: 1,
    quote: "cIV has reduced our validation time by over 70% while improving our compliance standards.",
    author: "Dr. Jane Smith",
    role: "QA Director, PharmaLabs",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    quote: "The automated test generation has been a game-changer for our validation processes.",
    author: "Michael Chen",
    role: "Compliance Manager, BioTech Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const TrustedBySection = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-civ-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-civ-green/5 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-civ-blue/10 text-civ-blue px-4 py-2 rounded-full font-medium text-sm">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of pharmaceutical and life sciences organizations that rely on cIV for their validation needs.
          </p>
        </div>

        {/* Logo showcase */}
        <Card className="mb-16 shadow-lg border-none bg-white animate-on-scroll">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.imageUrl}
                    alt={`${logo.name} logo`}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 font-medium">
                Join 200+ organizations using cIV to streamline validation processes
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="shadow-lg border-none hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue opacity-20">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4 border-2 border-civ-blue"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
