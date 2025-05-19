
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileChartLine, ShieldCheck, FileCode, Database } from 'lucide-react';

const useCase = [
  {
    id: 1,
    title: "Automated GxP Compliance Validation",
    description: "Reduce validation effort by up to 75% while ensuring continuous compliance with FDA, EMA, and other regulatory requirements.",
    icon: ShieldCheck,
    stat: "75% reduction in validation time"
  },
  {
    id: 2,
    title: "AI-Driven Clinical Trial Documentation",
    description: "Streamline documentation validation for clinical trials with intelligent pattern recognition that learns from previous validations.",
    icon: FileChartLine,
    stat: "90% fewer documentation errors"
  },
  {
    id: 3,
    title: "Real-Time Risk Analysis in Manufacturing",
    description: "Identify and mitigate compliance risks in real-time during manufacturing processes with AI-powered monitoring.",
    icon: Database,
    stat: "65% improved risk detection"
  },
  {
    id: 4,
    title: "Audit-Ready Process Automation",
    description: "Maintain perpetually audit-ready systems with continuous validation that documents compliance evidence automatically.",
    icon: FileCode,
    stat: "80% faster audit preparation"
  }
];

const RealWorldUseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-[#D3E4FD] relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">💡 Real-World Use Cases of cIV in Pharma & Life Sciences</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our Continuous Intelligent Validation platform solves critical challenges across regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCase.map((item) => (
            <Card 
              key={item.id} 
              className="animate-on-scroll card-enhanced h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg bg-white"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-5 bg-civ-blue/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-civ-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto">
                  <div className="bg-civ-green/10 px-3 py-2 rounded-lg inline-flex items-center">
                    <span className="text-sm font-semibold text-civ-darkblue">{item.stat}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button 
            size="lg" 
            className="bg-civ-blue hover:bg-civ-blue/90 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealWorldUseCases;
