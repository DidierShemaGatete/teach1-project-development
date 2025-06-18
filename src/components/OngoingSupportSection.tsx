
import React from 'react';

const ongoingSupport = [
  {
    title: 'Follow-ups',
    description: 'Regular follow-up sessions to ensure continued success and address new challenges.',
    features: [
      'Progress assessment',
      'Skill reinforcement',
      'Problem resolution',
      'Care plan adjustments'
    ]
  },
  {
    title: 'Check-ins',
    description: 'Scheduled check-ins to provide ongoing support and answer questions.',
    features: [
      'Virtual or in-person consultations',
      'Quick question resolution',
      'Emotional support',
      'Resource recommendations'
    ]
  }
];

const OngoingSupportSection = () => {
  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Ongoing Support</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Our commitment to your success extends beyond initial training with continued support and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ongoingSupport.map((support, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{support.title}</h3>
              <p className="mb-4">{support.description}</p>
              <ul className="space-y-2">
                {support.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teach-orange mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingSupportSection;
