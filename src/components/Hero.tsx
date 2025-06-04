
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
      <div className="absolute inset-0 bg-gradient-to-br from-teach-blue-dark/70 via-teach-blue/75 to-teach-blue-light/70"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center">
          <div className="max-w-6xl text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-10 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] leading-tight">
              Empowering Families with the Skills to Care at Home
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] max-w-5xl mx-auto leading-relaxed font-medium">
              At TEACH1, we teach loved ones to care for loved ones — with professional in-home aide skills, training, and compassionate consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button asChild className="bg-teach-orange hover:bg-teach-orange-dark text-teach-blue-dark text-xl px-10 py-6 shadow-2xl transform hover:scale-105 transition-all">
                <Link to="/book">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/15 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-teach-blue text-xl px-10 py-6 shadow-2xl transform hover:scale-105 transition-all">
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
