
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-teach-blue-light via-teach-blue to-teach-blue-dark text-white py-16 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Empowering Families with the Skills to Care at Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-teach-gray-light">
              At TEACH1, we teach loved ones to care for loved ones — with professional in-home aide skills, training, and compassionate consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-teach-orange hover:bg-teach-orange-dark text-teach-blue-dark">
                <Link to="/book">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teach-blue">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl max-w-md w-full">
              <div className="aspect-w-16 aspect-h-9 bg-teach-blue-dark/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Caregiver teaching family member" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
