
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
            const bgClasses = [
              "bg-white/10",
              "bg-teach-orange/20",
              "bg-white/15"
            ];
            
            return (
              <div 
                key={testimonial.id} 
                className={`${bgClasses[index]} p-6 rounded-lg card-hover backdrop-blur-sm border border-white/20`}
              >
                <Quote size={20} className="text-white mb-3 opacity-80" />
                <p className="mb-4 italic text-sm leading-relaxed text-white">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="font-bold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white opacity-90">{testimonial.relation}</p>
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
