
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TEACH1 gave me the confidence to care for my father after his stroke. Their training was practical, compassionate, and made a real difference in our lives.",
    name: "Sarah M.",
    relation: "Family Caregiver"
  },
  {
    id: 2,
    quote: "The skills I learned from TEACH1 helped me prevent falls and provide better care for my mother with Alzheimer's. Their instructors truly understand caregiving.",
    name: "Michael T.",
    relation: "Adult Son Caregiver"
  },
  {
    id: 3,
    quote: "As a healthcare professional, I'm impressed by TEACH1's approach to family education. They bridge the gap between clinical care and home support beautifully.",
    name: "Dr. Rebecca J.",
    relation: "Geriatric Specialist"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-teach-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-white">What Families Say</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-light">
            Hear from families who have transformed their caregiving journey with our training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-teach-blue-dark p-6 rounded-lg shadow-lg card-hover"
            >
              <Quote size={30} className="text-teach-orange mb-4" />
              <p className="mb-4 italic">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-bold text-teach-orange">{testimonial.name}</p>
                <p className="text-sm text-teach-gray-light">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
