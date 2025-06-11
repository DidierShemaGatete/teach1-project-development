
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MissionSection from '@/components/MissionSection';

const OurPurpose = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Our Purpose</h1>
              <p className="text-xl text-teach-gray-light">
                Understanding our mission, vision, and commitment to empowering families with professional caregiving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <MissionSection variant="about" />
      </main>
      <Footer />
    </div>
  );
};

export default OurPurpose;
