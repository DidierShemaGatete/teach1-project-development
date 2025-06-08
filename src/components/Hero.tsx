
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div 
      className="bg-black/40 text-white py-16 md:py-28 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/lovable-uploads/ead24676-0ec5-4f9a-9a61-3b901cc12d61.png)'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center">
          <div className="max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Empowering Families with the Skills to Care at Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              At TEACH1, we teach loved ones to care for loved ones — with professional in-home aide skills, training, and compassionate consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teach-orange hover:bg-teach-orange-dark text-teach-blue-dark">
                <Link to="/book">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
