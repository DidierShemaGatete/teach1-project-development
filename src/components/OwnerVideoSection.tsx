
import React from 'react';
import { Play } from 'lucide-react';

const OwnerVideoSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue">Meet Stephanie Williams</h2>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Hear directly from our founder about how TEACH1 can help your family provide compassionate, confident care at home.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-teach-gray-light rounded-lg overflow-hidden shadow-xl aspect-video">
            {/* Placeholder for video - will be replaced with actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teach-blue-light to-teach-blue">
              <div className="text-center text-white">
                <div className="bg-white/20 rounded-full p-6 mb-4 inline-flex">
                  <Play size={48} className="text-white ml-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Welcome Message from Stephanie</h3>
                <p className="text-teach-gray-light">
                  Learn about our mission to empower families with caregiving skills
                </p>
                <p className="text-sm mt-4 text-teach-gray-light">
                  Video will be added here
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-teach-gray-light p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Stephanie Williams</h4>
              <p className="text-teach-gray-dark mb-2">Owner and Operator</p>
              <p className="text-sm text-teach-gray-dark">
                "Teaching Loved Ones to Care for Loved Ones" — with over years of experience in homecare training and family support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerVideoSection;
