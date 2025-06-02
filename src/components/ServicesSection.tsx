
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'hands-on-skills',
    title: 'Hands-On Basic In-Home Skills',
    description: 'Learn essential caregiving techniques through practical, hands-on training and demonstrations.',
    icon: '🧠',
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care Training',
    description: 'Comprehensive training on infection control and fall risk prevention to keep your loved ones safe.',
    icon: '🦺',
  },
  {
    id: 'plan-of-care',
    title: 'Plan of Care Development',
    description: 'Create structured daily routines and care plans that promote independence and wellbeing.',
    icon: '📋',
  },
  {
    id: 'cpr-certification',
    title: 'CPR Certification',
    description: 'Become certified in CPR and emergency response to be prepared for any situation.',
    icon: '🚑',
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Our Services</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Professional training designed specifically for family caregivers, from basic skills to specialized certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-teach-gray-dark mb-4">{service.description}</p>
              <Link 
                to={`/services#${service.id}`}
                className="text-teach-blue hover:text-teach-blue-dark flex items-center font-medium group"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white px-8 py-6 text-lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
