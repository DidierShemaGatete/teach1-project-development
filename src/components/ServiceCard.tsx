
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    video?: string;
    beforeAfterImages?: {
      before: string;
      after: string;
    };
    features: string[];
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <section 
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
            {service.id === 'hands-on-skills' && service.video ? (
              <div className="relative bg-teach-gray-light rounded-lg overflow-hidden shadow-xl aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster=""
                >
                  <source 
                    src={service.video} 
                    type="video/webm" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : service.id === 'home-management' && service.beforeAfterImages ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-center">Before</h4>
                  <img
                    src={service.beforeAfterImages.before}
                    alt="Cluttered space before"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-center">After</h4>
                  <img
                    src={service.beforeAfterImages.after}
                    alt="Organized space after"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
