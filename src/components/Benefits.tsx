
import React from 'react';

const benefits = [
  {
    id: 1,
    title: "75% Reduction in Validation Timelines",
    description: "Our AI-powered approach drastically cuts down validation time by automating documentation and test execution.",
    icon: (
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-civ-lightgreen to-white flex items-center justify-center text-civ-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      </div>
    ),
    percentage: "75%",
  },
  {
    id: 2,
    title: "50% Decrease in Validation Costs",
    description: "Minimize resource requirements and reduce overhead costs associated with traditional validation methods.",
    icon: (
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-civ-lightgreen to-white flex items-center justify-center text-civ-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
          <path d="m9 15 2-2 4 4" />
          <path d="m9 11 2-2 4 4" />
        </svg>
      </div>
    ),
    percentage: "50%",
  },
  {
    id: 3,
    title: "Enhanced Compliance with GxP Standards",
    description: "Maintain consistent adherence to regulatory requirements with automated compliance checks and verification.",
    icon: (
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-civ-lightgreen to-white flex items-center justify-center text-civ-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    ),
    percentage: "100%",
  },
  {
    id: 4,
    title: "Minimized Human Errors",
    description: "Eliminate manual errors through automated processes and standardized validation methodologies.",
    icon: (
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-civ-lightgreen to-white flex items-center justify-center text-civ-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    ),
    percentage: "95%",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Using cIV</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform delivers tangible results that transform how validation is performed in regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="animate-on-scroll"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="card-enhanced hover:border-civ-blue bg-white rounded-2xl p-8 flex flex-col items-center text-center">
                {benefit.icon}
                <div className="mt-6 mb-3 text-4xl font-bold bg-gradient-to-r from-civ-blue to-civ-darkblue bg-clip-text text-transparent">{benefit.percentage}</div>
                <h3 className="font-semibold mb-3 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
