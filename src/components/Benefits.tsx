
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, ShieldCheck, AlertTriangle } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "75% Reduction in Validation Timelines",
    description: "Our AI-powered approach drastically cuts down validation time by automating documentation and test execution.",
    icon: <Clock className="h-6 w-6" />,
    percentage: "75%",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    title: "50% Decrease in Validation Costs",
    description: "Minimize resource requirements and reduce overhead costs associated with traditional validation methods.",
    icon: <DollarSign className="h-6 w-6" />,
    percentage: "50%",
    color: "from-emerald-400 to-green-300"
  },
  {
    id: 3,
    title: "Enhanced Compliance with GxP Standards",
    description: "Maintain consistent adherence to regulatory requirements with automated compliance checks and verification.",
    icon: <ShieldCheck className="h-6 w-6" />,
    percentage: "100%",
    color: "from-violet-400 to-purple-300"
  },
  {
    id: 4,
    title: "Minimized Human Errors",
    description: "Eliminate manual errors through automated processes and standardized validation methodologies.",
    icon: <AlertTriangle className="h-6 w-6" />,
    percentage: "95%",
    color: "from-amber-400 to-yellow-300"
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-civ-lightgreen/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-civ-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-civ-lightgreen/50 text-civ-darkblue px-4 py-2 rounded-full font-medium text-sm">Key Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Benefits of Using cIV</h2>
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${benefit.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg`}>
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4">
                      <span className={`text-4xl font-bold bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}>
                        {benefit.percentage}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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

export default Benefits;
