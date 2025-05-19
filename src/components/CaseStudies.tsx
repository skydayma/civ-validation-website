
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: "Veloxis Pharmaceuticals",
    description: "Achieved a 50% reduction in validation costs and compressed timelines by 75% using cIV for their TraceLink implementation.",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The cIV platform dramatically accelerated our validation process while maintaining full GxP compliance.",
    person: "Director of IT Validation",
  },
  {
    id: 2,
    company: "AODocs",
    description: "Leveraged cIV to deliver continuously validated applications to life sciences customers, ensuring compliance with every new release.",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "With cIV, we can now offer validated solutions to our life sciences customers with confidence.",
    person: "VP of Life Sciences Solutions",
  },
];

// Partner logos for "Trusted by Industry Leaders" section
const partnerLogos = [
  {
    id: 1,
    name: "Pharma Corp",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "MedTech Solutions",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "BioGen Labs",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "LifeScience Inc",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    name: "Health Systems",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative">
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
        
        {/* Enhanced "Trusted by Industry Leaders" section */}
        <div className="mt-20 animate-on-scroll">
          <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 py-10 px-6">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {partnerLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="bg-white shadow-md rounded-xl p-4 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100"
                >
                  <img 
                    src={logo.imageUrl} 
                    alt={`${logo.name} logo`} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 font-medium">
                Join 200+ organizations using cIV to streamline validation processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
