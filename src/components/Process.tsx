
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Input Gathering",
    description: "Collect user manuals, existing test cases, and other relevant documents.",
    icon: (
      <div className="h-12 w-12 rounded-full bg-civ-blue flex items-center justify-center text-white">
        <span className="text-xl font-bold">1</span>
      </div>
    ),
  },
  {
    id: 2,
    title: "URS Generation",
    description: "AI models generate structured User Requirements Specifications.",
    icon: (
      <div className="h-12 w-12 rounded-full bg-civ-blue flex items-center justify-center text-white">
        <span className="text-xl font-bold">2</span>
      </div>
    ),
  },
  {
    id: 3,
    title: "Test Case Development",
    description: "Create detailed test cases linked to URS.",
    icon: (
      <div className="h-12 w-12 rounded-full bg-civ-blue flex items-center justify-center text-white">
        <span className="text-xl font-bold">3</span>
      </div>
    ),
  },
  {
    id: 4,
    title: "Test Execution",
    description: "AI agents autonomously execute tests and capture evidence.",
    icon: (
      <div className="h-12 w-12 rounded-full bg-civ-blue flex items-center justify-center text-white">
        <span className="text-xl font-bold">4</span>
      </div>
    ),
  },
  {
    id: 5,
    title: "Reporting",
    description: "Generate comprehensive, GxP-compliant reports.",
    icon: (
      <div className="h-12 w-12 rounded-full bg-civ-blue flex items-center justify-center text-white">
        <span className="text-xl font-bold">5</span>
      </div>
    ),
  },
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How cIV Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our step-by-step process ensures thorough validation with minimal manual effort.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-civ-lightgreen -ml-0.5 z-0"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className="animate-on-scroll relative">
                <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="mx-auto md:mx-0 z-10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  
                  <div className="md:hidden mt-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center animate-on-scroll">
          <div className="max-w-3xl w-full bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Process Visualization</h3>
            <div className="aspect-video bg-white rounded-lg border border-gray-100 flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="cIV Process Flow Diagram" 
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
