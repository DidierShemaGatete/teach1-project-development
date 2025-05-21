
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'basic-skills',
    title: 'Basic In-Home Aide Skills',
    description: 'Learn core caregiving skills like hygiene support, meal assistance, repositioning, and more — designed for family caregivers or new aides.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Personal hygiene and bathing assistance',
      'Safe transfer techniques',
      'Meal preparation and feeding assistance',
      'Medication reminders and monitoring',
      'Basic health monitoring (temperature, blood pressure)',
      'Mobility assistance and proper body mechanics'
    ]
  },
  {
    id: 'fall-prevention',
    title: 'Fall Prevention Training',
    description: 'We teach practical, effective methods to prevent dangerous falls, assess risks at home, and improve safety for elderly or recovering loved ones.',
    image: 'https://images.unsplash.com/photo-1454894717220-9cb5eb2c4124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Home safety assessment techniques',
      'Identifying and removing fall hazards',
      'Proper use of assistive devices',
      'Balance improvement exercises',
      'Emergency response planning',
      'Adapting living spaces for accessibility'
    ]
  },
  {
    id: 'infection-control',
    title: 'Infection Control Guidance',
    description: 'Especially vital post-COVID, we help you understand disinfection, PPE use, and hygiene protocols to keep your home safe.',
    image: 'https://images.unsplash.com/photo-1584634731339-252e58471e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Proper handwashing and hygiene practices',
      'Effective use of personal protective equipment (PPE)',
      'Home disinfection procedures',
      'Managing care for immunocompromised individuals',
      'Recognizing signs of infection',
      'Safe disposal of contaminated materials'
    ]
  },
  {
    id: 'home-care',
    title: 'Home Care Services',
    description: 'From short-term recovery support to ongoing elder care, our certified caregivers can assist while you learn.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Post-hospitalization recovery care',
      'Respite care for family caregivers',
      'Companion care and social engagement',
      'Light housekeeping and meal preparation',
      'Transportation and errand assistance',
      'Specialized care for chronic conditions'
    ]
  },
  {
    id: 'consultancy',
    title: 'Caregiving Skills Consultancy',
    description: 'Need one-on-one guidance or family-wide training? We consult, assess, and coach so your family can confidently provide care.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Family caregiving assessment',
      'Customized training plans',
      'Group workshops for multiple family members',
      'Virtual consultation and follow-up',
      'Care plan development and coordination',
      'Ongoing skill development and support'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Our Services</h1>
              <p className="text-xl text-teach-gray-light">
                Professional caregiving training and support designed for families.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={service.id}
            className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-teach-gray-light'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                  <h2 className="text-teach-blue">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teach-orange mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white mt-4">
                    <Link to="/book">Schedule Training</Link>
                  </Button>
                </div>
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : ''} rounded-lg overflow-hidden shadow-xl`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
