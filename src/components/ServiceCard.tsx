
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
  const renderVisualContent = () => {
    if (service.id === 'hands-on-skills' && service.video) {
      return (
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
      );
    }

    if (service.id === 'home-management' && service.beforeAfterImages) {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center text-teach-blue">Before</h4>
              <img
                src={service.beforeAfterImages.before}
                alt="Cluttered space before transformation"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center text-teach-blue">After</h4>
              <img
                src={service.beforeAfterImages.after}
                alt="Organized space after transformation"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <section 
      id={service.id}
      className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-teach-gray-light'}`}
    >
      <div className="container-custom">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
            <h2 className="text-teach-blue">{service.title}</h2>
            <p className="mb-6 text-lg leading-relaxed">{service.description}</p>
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
            {renderVisualContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
