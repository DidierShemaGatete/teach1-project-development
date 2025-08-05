import React from 'react';

const OwnerIntroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/42dd1545-d780-4cac-8d83-25717d2cb15b.png"
          alt="Stephanie Williams - Owner and Operator of Teach1"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teach-blue/80 via-teach-blue/60 to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container-custom">
        <div className="max-w-2xl text-white animate-fade-in">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Meet Stephanie Williams
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-4">
                Owner & Operator of Teach1
              </p>
              <div className="w-24 h-1 bg-white rounded-full"></div>
            </div>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p className="text-white/95">
                With years of experience in professional caregiving and healthcare education, 
                Stephanie founded Teach1 to empower families with the skills and confidence 
                needed to provide exceptional care for their loved ones.
              </p>
              <p className="text-white/95">
                Her mission is to bridge the gap between professional healthcare and family 
                caregiving, ensuring that every family has access to quality training and 
                ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerIntroSection;