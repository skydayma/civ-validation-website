
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const caseStudies = [
  {
    id: 1,
    company: "Veloxis Pharmaceuticals",
    description: "Achieved a 50% reduction in validation costs and compressed timelines by 75% using cIV for their TraceLink implementation.",
    logo: "/placeholder.svg",
    quote: "The cIV platform dramatically accelerated our validation process while maintaining full GxP compliance.",
    person: "Director of IT Validation",
  },
  {
    id: 2,
    company: "AODocs",
    description: "Leveraged cIV to deliver continuously validated applications to life sciences customers, ensuring compliance with every new release.",
    logo: "/placeholder.svg",
    quote: "With cIV, we can now offer validated solutions to our life sciences customers with confidence.",
    person: "VP of Life Sciences Solutions",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how organizations have transformed their validation processes with cIV.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="animate-on-scroll overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 h-24 flex items-center justify-center">
                  <img 
                    src={study.logo} 
                    alt={`${study.company} logo`} 
                    className="h-16 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="border-l-4 border-civ-blue pl-4 italic text-gray-600">
                    "{study.quote}"
                    <div className="mt-2 text-sm font-medium text-gray-900 not-italic">
                      — {study.person}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl font-semibold mb-4">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center">
                <img src="/placeholder.svg" alt={`Client logo ${i}`} className="h-6 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
