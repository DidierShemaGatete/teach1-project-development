
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const consultationOptions = [
  {
    title: 'Free Initial Consultation',
    description: 'Comprehensive assessment of your caregiving needs and service planning.'
  },
  {
    title: 'Individual Training',
    description: 'One-on-one personalized training sessions tailored to your specific needs.'
  },
  {
    title: 'Group Training',
    description: 'Family or small group training sessions for coordinated care approaches.'
  },
  {
    title: 'Organizational Training',
    description: 'Training programs for healthcare organizations, assisted living facilities, and community groups.'
  }
];

const ConsultationOptionsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Consultation Options</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Choose the training format that works best for you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultationOptions.map((option, index) => (
            <div key={index} className="bg-teach-gray-light p-6 rounded-lg text-center card-hover">
              <h3 className="text-lg font-bold mb-3">{option.title}</h3>
              <p className="text-sm">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white">
            <Link to="/book">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationOptionsSection;
