import React from 'react';

const OwnerIntroSection = () => {
  return (
    <section className="bg-gradient-to-br from-teach-blue to-teach-blue-dark text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Stephanie Williams - Owner and Operator of Teach1"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Stephanie Williams
              </h1>
              <p className="text-xl text-teach-gray-light mb-2">
                Owner & Operator of Teach1
              </p>
              <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>
            <p className="text-lg leading-relaxed">
              With years of experience in professional caregiving and healthcare education, 
              Stephanie founded Teach1 to empower families with the skills and confidence 
              needed to provide exceptional care for their loved ones.
            </p>
            <p className="text-lg leading-relaxed">
              Her mission is to bridge the gap between professional healthcare and family 
              caregiving, ensuring that every family has access to quality training and 
              ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerIntroSection;