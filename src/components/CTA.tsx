
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="section bg-gradient-to-r from-teach-orange-light via-teach-orange to-teach-orange-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-teach-blue-dark mb-3">"Teaching Loved Ones to Care for Loved Ones"</h2>
          <p className="text-teach-blue-dark font-medium mb-6">Families Taking Care of Families</p>
          
          <p className="text-lg mb-8 text-teach-blue-dark">
            Book a free consultation today and discover how TEACH1 can empower your family with professional caregiving skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white px-8 py-6 text-lg">
              <Link to="/book">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-teach-blue text-teach-blue hover:bg-teach-blue hover:text-white px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
