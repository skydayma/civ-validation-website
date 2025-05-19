import React from 'react';

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

const TrustedBySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
};

export default TrustedBySection;
