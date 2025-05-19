
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileChartLine, ShieldCheck, FileCode, Database } from 'lucide-react';

const useCase = [
  {
    id: 1,
    title: "Automated GxP Compliance Validation",
    description: "Reduce validation effort by up to 75% while ensuring continuous compliance with FDA, EMA, and other regulatory requirements.",
    icon: ShieldCheck,
    stat: "75% reduction in validation time",
    tag: "Compliance"
  },
  {
    id: 2,
    title: "AI-Driven Clinical Trial Documentation",
    description: "Streamline documentation validation for clinical trials with intelligent pattern recognition that learns from previous validations.",
    icon: FileChartLine,
    stat: "90% fewer documentation errors",
    tag: "Clinical"
  },
  {
    id: 3,
    title: "Real-Time Risk Analysis in Manufacturing",
    description: "Identify and mitigate compliance risks in real-time during manufacturing processes with AI-powered monitoring.",
    icon: Database,
    stat: "65% improved risk detection",
    tag: "Real-time"
  },
  {
    id: 4,
    title: "Audit-Ready Process Automation",
    description: "Maintain perpetually audit-ready systems with continuous validation that documents compliance evidence automatically.",
    icon: FileCode,
    stat: "80% faster audit preparation",
    tag: "Automation"
  }
];

// Function to get tag color based on tag name
const getTagColor = (tag: string) => {
  switch(tag) {
    case 'Compliance': return 'bg-blue-100 text-blue-800';
    case 'Clinical': return 'bg-green-100 text-green-800';
    case 'Real-time': return 'bg-purple-100 text-purple-800';
    case 'Automation': return 'bg-amber-100 text-amber-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RealWorldUseCases = () => {
  return (
    <section id="use-cases" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-civ-lightgreen/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-civ-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-10 animate-on-scroll">
          <span className="bg-civ-green/20 text-civ-darkblue px-4 py-2 rounded-full font-medium text-sm">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 gradient-text">Real-World Use Cases of cIV</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our Continuous Intelligent Validation platform solves critical challenges across regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {useCase.map((item, index) => (
            <Card 
              key={item.id} 
              className="animate-on-scroll h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl border-none shadow-lg overflow-hidden rounded-2xl glass-card"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-0">
                <div className="h-2 bg-gradient-to-r from-civ-blue to-civ-green"></div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-civ-blue to-civ-darkblue w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <Badge className={`${getTagColor(item.tag)} border-none`}>{item.tag}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      
                      <div className="mt-2">
                        <div className="bg-civ-lightgreen/30 px-3 py-1.5 rounded-lg inline-flex items-center">
                          <span className="text-sm font-semibold text-civ-darkblue">{item.stat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldUseCases;
