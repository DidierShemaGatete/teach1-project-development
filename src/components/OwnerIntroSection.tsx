
import React from 'react';

const OwnerIntroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teach-blue to-teach-blue-dark">
      <div className="container-custom min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12 lg:py-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/42dd1545-d780-4cac-8d83-25717d2cb15b.png"
                alt="Stephanie Williams - Owner and Operator of Teach1"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teach-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-white space-y-8">
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
            <button className="px-8 py-4 bg-teach-orange hover:bg-teach-orange-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              Learn More About Our Services
            </button>
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
