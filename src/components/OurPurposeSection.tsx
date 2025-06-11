
import React from 'react';
import { Home, Users, TrendingUp } from 'lucide-react';

const purposeItems = [
  {
    icon: Home,
    title: 'Keeping loved ones home',
    description: 'Empowering families to provide quality care in the comfort and familiarity of home.'
  },
  {
    icon: Users,
    title: 'Reduce outside help',
    description: 'Teaching family members essential skills to minimize dependence on external caregivers.'
  },
  {
    icon: TrendingUp,
    title: 'Improve quality of life',
    description: 'Enhancing the well-being and independence of both caregivers and care recipients.'
  }
];

const OurPurposeSection = () => {
  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue mb-6">Our Purpose</h2>
          <p className="text-xl text-teach-gray-dark max-w-2xl mx-auto">
            At TEACH1, our mission is clear: empowering families with the knowledge and skills to care for their loved ones with confidence and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {purposeItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="flex justify-center mb-4">
                  <div className="bg-teach-blue/10 p-3 rounded-full">
                    <IconComponent size={32} className="text-teach-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-teach-blue">{item.title}</h3>
                <p className="text-teach-gray-dark">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPurposeSection;
