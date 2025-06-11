
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const CPRCertificationSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-teach-orange/10 p-4 rounded-full">
              <Heart size={48} className="text-teach-orange" />
            </div>
          </div>
          <h2 className="text-teach-blue mb-4">CPR Certification</h2>
          <p className="text-xl text-teach-gray-dark mb-8 italic">
            "How to save lives."
          </p>
          <p className="text-lg mb-8 text-teach-gray-dark max-w-2xl mx-auto">
            Learn life-saving CPR techniques and become certified to respond confidently in emergency situations. 
            Our comprehensive training prepares you with the skills needed to potentially save a life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white">
              <Link to="/services#cpr-certification">Learn More</Link>
            </Button>
            <Button asChild className="bg-teach-orange hover:bg-teach-orange-dark text-white">
              <Link to="/book">Get Certified</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPRCertificationSection;
