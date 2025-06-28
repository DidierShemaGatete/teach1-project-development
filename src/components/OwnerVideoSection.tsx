
import React from 'react';

const OwnerVideoSection = () => {
  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue mb-4">Meet Our Founder</h2>
          <p className="text-lg text-teach-gray-dark max-w-3xl mx-auto">
            Learn about our mission and approach to empowering families with professional caregiving skills.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-white rounded-lg shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              controls
            >
              <source src="/att.Ec1aGWHoNV1i52swG_F8KXJshzLZPg7MjoSf_gOYEmg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerVideoSection;
