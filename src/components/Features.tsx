
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    id: 'compassionate',
    title: 'Compassionate, Human-Centered Approach',
    description: 'Our philosophy puts dignity and empathy at the center of all caregiving training.',
  },
  {
    id: 'expertise',
    title: 'Professional Home Care Expertise',
    description: 'Learn from certified professionals with years of real-world caregiving experience.',
  },
  {
    id: 'skills',
    title: 'Skill Transfer to Empower Families',
    description: 'We don\'t just provide care—we teach you how to provide care with confidence.',
  },
  {
    id: 'affordable',
    title: 'Affordable, Accessible, Flexible Sessions',
    description: 'Training that fits your schedule and budget, available in-person or online.',
  },
];

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Why Choose TEACH1</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            We empower families with professional skills, providing peace of mind and quality care for your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex items-start p-6 rounded-lg border border-teach-gray card-hover"
            >
              <div className="bg-teach-blue rounded-full p-2 mr-4 flex-shrink-0">
                <Check className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-teach-gray-dark">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
