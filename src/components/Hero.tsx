
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div 
      className="bg-gradient-to-br from-teach-blue-light/90 via-teach-blue/90 to-teach-blue-dark/90 text-white py-20 md:py-32 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/lovable-uploads/ead24676-0ec5-4f9a-9a61-3b901cc12d61.png)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teach-blue-dark/80 via-teach-blue/85 to-teach-blue-light/80"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center">
          <div className="max-w-5xl text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Empowering Families with the Skills to Care at Home
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white drop-shadow-lg max-w-4xl mx-auto leading-relaxed">
              At TEACH1, we teach loved ones to care for loved ones — with professional in-home aide skills, training, and compassionate consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="bg-teach-orange hover:bg-teach-orange-dark text-teach-blue-dark text-lg px-8 py-4 shadow-xl">
                <Link to="/book">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-teach-blue text-lg px-8 py-4 shadow-xl">
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
