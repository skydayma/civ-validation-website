
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Link, BarChart3, Shield } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "Integration with existing systems",
    description: "cIV seamlessly connects with your current technology stack without disruption.",
    icon: <Link className="text-civ-blue h-6 w-6" />,
  },
  {
    id: 2,
    title: "Scalability",
    description: "Easily scale validation efforts to accommodate growing and changing needs.",
    icon: <BarChart3 className="text-civ-blue h-6 w-6" />,
  },
  {
    id: 3,
    title: "Continuous monitoring and governance",
    description: "Maintain oversight with real-time validation status and compliance tracking.",
    icon: <Shield className="text-civ-blue h-6 w-6" />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-civ-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-civ-green/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-on-scroll">
            <span className="bg-civ-green/20 text-civ-darkblue px-4 py-2 rounded-full font-medium text-sm inline-block mb-4">Key Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose cIV</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform offers unique advantages that make it the premier choice for software validation in regulated industries.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <Card key={reason.id} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:translate-x-2" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-civ-blue/10 flex-shrink-0">{reason.icon}</div>
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
            <Card className="border-none shadow-xl overflow-hidden bg-white">
              <div className="h-2 w-full bg-gradient-to-r from-civ-blue to-civ-lightgreen"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-8 flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-civ-green" />
                  Comparison with Traditional Methods
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4">Feature</th>
                        <th className="text-center py-4 px-4">Traditional Validation</th>
                        <th className="text-center py-4 px-4 bg-gradient-to-r from-civ-lightgreen/60 to-civ-green/30 font-bold rounded-t-xl">cIV Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Validation Time</td>
                        <td className="text-center py-4 px-4">Weeks to Months</td>
                        <td className="text-center py-4 px-4 bg-civ-lightgreen/20 font-medium text-civ-darkblue">Days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Resource Requirements</td>
                        <td className="text-center py-4 px-4">High</td>
                        <td className="text-center py-4 px-4 bg-civ-lightgreen/20 font-medium text-civ-darkblue">Minimal</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Error Rate</td>
                        <td className="text-center py-4 px-4">Medium to High</td>
                        <td className="text-center py-4 px-4 bg-civ-lightgreen/20 font-medium text-civ-darkblue">Very Low</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Standardization</td>
                        <td className="text-center py-4 px-4">Variable</td>
                        <td className="text-center py-4 px-4 bg-civ-lightgreen/20 font-medium text-civ-darkblue">Consistent</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">Continuous Compliance</td>
                        <td className="text-center py-4 px-4">Difficult</td>
                        <td className="text-center py-4 px-4 bg-civ-lightgreen/20 font-medium text-civ-darkblue rounded-b-xl">Built-in</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-civ-blue/10 to-civ-lightgreen/10 rounded-lg">
                  <p className="text-center font-medium text-gray-700">
                    cIV delivers up to 80% efficiency improvement over traditional validation methods
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
