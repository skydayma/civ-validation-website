
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    id: 1,
    title: "Automated URS Generation",
    description: "Transform user manuals and specifications into structured, GxP-compliant User Requirements Specifications using advanced language models.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 17h6" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Intelligent Test Case Creation",
    description: "Utilize retrieval-augmented generation (RAG) to develop comprehensive test cases with full traceability to requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 9h1" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Autonomous Test Execution",
    description: "Deploy AI agents to execute tests, capture evidence, and generate audit-ready reports.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Adaptive Learning",
    description: "Continuously learn from historical data and user interactions to improve validation accuracy over time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview of cIV</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Continuous Intelligent Validation platform automates and streamlines software validation in regulated environments, 
            ensuring compliance while dramatically reducing validation effort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
              <Card className="card-enhanced feature-card h-full border-t-4 border-t-civ-blue">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-civ-lightgreen to-civ-blue/10 flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
