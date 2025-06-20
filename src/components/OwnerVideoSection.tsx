
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
            <iframe
              src="https://www.youtube.com/embed/h7jybVgBiVM?autoplay=1&loop=1&playlist=h7jybVgBiVM&controls=0&showinfo=0&rel=0&modestbranding=1&mute=0&enablejsapi=1&origin=window.location.origin"
              title="TEACH1 Care - Meet Our Founder"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerVideoSection;
