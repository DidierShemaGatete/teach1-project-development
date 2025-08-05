
import React from 'react';
import { Link } from 'react-router-dom';

const OwnerIntroSection = () => {
  return (
    <section 
      className="min-h-screen relative bg-gradient-to-br from-teach-blue to-teach-blue-dark"
      style={{
        backgroundImage: `url('/lovable-uploads/42dd1545-d780-4cac-8d83-25717d2cb15b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-teach-blue/90 to-teach-blue-dark/90"></div>
      
      <div className="container-custom min-h-screen flex items-center justify-center py-12 relative z-10">
        {/* Content Section */}
        <div className="w-full max-w-4xl text-white space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 bg-teach-orange rounded-full text-sm font-medium text-white">
                Meet Our Founder
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Stephanie Williams
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light">
                Owner & Operator of Teach1
              </p>
            </div>
            
            <div className="w-16 h-1 bg-teach-orange rounded-full"></div>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-2xl">
            <p className="text-white/90">
              With years of experience in professional caregiving and healthcare education, 
              Stephanie founded Teach1 to empower families with the skills and confidence 
              needed to provide exceptional care for their loved ones.
            </p>
            <p className="text-white/90">
              Her mission is to bridge the gap between professional healthcare and family 
              caregiving, ensuring that every family has access to quality training and 
              ongoing support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/services"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
            >
              Learn More About Our Services
            </Link>
            <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerIntroSection;
