
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'basic-skills',
    title: 'Basic In-Home Aide Skills',
    description: 'Learn core caregiving skills like hygiene support, meal assistance, repositioning, and more — designed for family caregivers.',
    icon: '🧠',
  },
  {
    id: 'fall-prevention',
    title: 'Fall Prevention Training',
    description: 'We teach practical, effective methods to prevent dangerous falls, assess risks at home, and improve safety.',
    icon: '🦺',
  },
  {
    id: 'infection-control',
    title: 'Infection Control Guidance',
    description: 'Understand disinfection, PPE use, and hygiene protocols to keep your home safe from illness.',
    icon: '🧼',
  },
  {
    id: 'consultancy',
    title: 'Caregiving Skills Consultancy',
    description: 'One-on-one guidance or family-wide training to help you confidently provide quality care.',
    icon: '📋',
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Our Services</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Professional training designed specifically for family caregivers, ranging from basic skills to specialized care.
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
