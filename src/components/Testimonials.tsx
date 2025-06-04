
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TEACH1 gave me confidence to care for my father after his stroke. Practical training that made a real difference.",
    name: "Sarah M.",
    relation: "Family Caregiver"
  },
  {
    id: 2,
    quote: "The skills I learned helped me prevent falls and provide better care for my mother with Alzheimer's.",
    name: "Michael T.",
    relation: "Adult Son Caregiver"
  },
  {
    id: 3,
    quote: "As a healthcare professional, I'm impressed by TEACH1's approach to bridging clinical care and home support.",
    name: "Dr. Rebecca J.",
    relation: "Geriatric Specialist"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-teach-blue text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl md:text-3xl">What Families Say</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-light text-sm md:text-base">
            Hear from families who have transformed their caregiving journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            // Different shape classes for each testimonial
            const shapeClasses = [
              "hexagon-shape bg-gradient-to-br from-teach-blue-dark to-teach-blue shadow-xl",
              "diamond-shape bg-gradient-to-tr from-teach-orange to-teach-orange-dark shadow-xl",
              "pentagon-shape bg-gradient-to-bl from-teach-blue-dark via-teach-blue to-teach-orange shadow-xl"
            ];
            
            return (
              <div 
                key={testimonial.id} 
                className={`${shapeClasses[index]} p-4 md:p-5 card-hover transform transition-all duration-300 hover:scale-105 hover:rotate-1 relative overflow-hidden`}
                style={{
                  clipPath: index === 0 
                    ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' // Octagon
                    : index === 1 
                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' // Diamond
                    : 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' // Pentagon
                }}
              >
                <div className="relative z-10">
                  <Quote size={20} className="text-white mb-2 opacity-80" />
                  <p className="mb-3 italic text-sm leading-relaxed text-white">{testimonial.quote}</p>
                  <div className="mt-4">
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white opacity-90">{testimonial.relation}</p>
                  </div>
                </div>
                
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-8 h-8 border border-white rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
