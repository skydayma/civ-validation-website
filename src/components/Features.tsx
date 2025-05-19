
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, FileCheck, Robot, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Automated URS Generation",
    description: "Transform user manuals and specifications into structured, GxP-compliant User Requirements Specifications using advanced language models.",
    icon: <FileText className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Intelligent Test Case Creation",
    description: "Utilize retrieval-augmented generation (RAG) to develop comprehensive test cases with full traceability to requirements.",
    icon: <FileCheck className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "Autonomous Test Execution",
    description: "Deploy AI agents to execute tests, capture evidence, and generate audit-ready reports.",
    icon: <Robot className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "Adaptive Learning",
    description: "Continuously learn from historical data and user interactions to improve validation accuracy over time.",
    icon: <Clock className="h-8 w-8 text-white" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-tr from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-civ-blue/10 text-civ-blue px-4 py-2 rounded-full font-medium text-sm">Our Platform</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Overview of cIV</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Continuous Intelligent Validation platform automates and streamlines software validation in regulated environments, 
            ensuring compliance while dramatically reducing validation effort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
              <Card className="feature-card h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-civ-blue to-civ-darkblue p-6 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
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
