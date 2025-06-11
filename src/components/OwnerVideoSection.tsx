
import React from 'react';

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
            <video 
              className="w-full h-full object-cover"
              controls
              poster=""
            >
              <source 
                src="https://www.shutterstock.com/shutterstock/videos/1108107271/preview/stock-footage-senior-woman-wheelchair-and-nurse-with-holding-hands-talk-and-listen-for-help-support-and-care.webm" 
                type="video/webm" 
              />
              Your browser does not support the video tag.
            </video>
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
