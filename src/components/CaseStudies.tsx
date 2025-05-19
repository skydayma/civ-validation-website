
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Users } from 'lucide-react';

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
    <section id="case-studies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
          <path
            fill="#f0f9ff"  
            fillOpacity="1"
            d="M0,32L30,26.7C60,21,120,11,180,16C240,21,300,43,360,53.3C420,64,480,64,540,58.7C600,53,660,43,720,37.3C780,32,840,32,900,37.3C960,43,1020,53,1080,53.3C1140,53,1200,43,1260,42.7C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4 bg-civ-blue/10 px-4 py-1 rounded-full">
            <Users className="mr-2 h-5 w-5 text-civ-blue" />
            <span className="text-sm font-medium text-civ-darkblue">Customer Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how organizations have transformed their validation processes with cIV.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="animate-on-scroll card-enhanced overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl border-none bg-gradient-to-br from-white via-white to-gray-50">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-civ-blue/5 to-civ-green/5 h-24 flex items-center justify-center">
                  <img 
                    src={study.logo} 
                    alt={`${study.company} logo`} 
                    className="h-16 object-contain"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-civ-darkblue">{study.company}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{study.description}</p>
                  <div className="border-l-4 border-civ-blue pl-4 italic text-gray-700 bg-gradient-to-r from-blue-50 to-transparent p-3 rounded">
                    <p className="mb-2">"{study.quote}"</p>
                    <div className="mt-2 text-sm font-medium text-gray-900 not-italic flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-civ-blue" />
                      {study.person}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="h-12 w-32 bg-white shadow-sm rounded-xl flex items-center justify-center transition-transform hover:scale-105 border border-gray-100"
              >
                <img src="/placeholder.svg" alt={`Client logo ${i}`} className="h-6 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff" 
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CaseStudies;
