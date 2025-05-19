
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const reasons = [
  {
    id: 1,
    title: "Integration with existing systems",
    description: "cIV seamlessly connects with your current technology stack without disruption.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Scalability",
    description: "Easily scale validation efforts to accommodate growing and changing needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Continuous monitoring and governance",
    description: "Maintain oversight with real-time validation status and compliance tracking.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-civ-blue">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose cIV</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform offers unique advantages that make it the premier choice for software validation in regulated industries.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <Card key={reason.id} className="card-enhanced bg-white hover:border-civ-blue" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-civ-lightgreen/50">{reason.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll">
            <div className="card-enhanced bg-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Comparison with Traditional Methods</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4">Feature</th>
                      <th className="text-center py-4 px-4">Traditional Validation</th>
                      <th className="text-center py-4 px-4 bg-civ-lightgreen/50 font-bold rounded-t-xl">cIV Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">Validation Time</td>
                      <td className="text-center py-4 px-4">Weeks to Months</td>
                      <td className="text-center py-4 px-4 bg-civ-lightgreen/30 font-medium">Days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Resource Requirements</td>
                      <td className="text-center py-4 px-4">High</td>
                      <td className="text-center py-4 px-4 bg-civ-lightgreen/30 font-medium">Minimal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Error Rate</td>
                      <td className="text-center py-4 px-4">Medium to High</td>
                      <td className="text-center py-4 px-4 bg-civ-lightgreen/30 font-medium">Very Low</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Standardization</td>
                      <td className="text-center py-4 px-4">Variable</td>
                      <td className="text-center py-4 px-4 bg-civ-lightgreen/30 font-medium">Consistent</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Continuous Compliance</td>
                      <td className="text-center py-4 px-4">Difficult</td>
                      <td className="text-center py-4 px-4 bg-civ-lightgreen/30 font-medium rounded-b-xl">Built-in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
