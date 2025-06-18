
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import OngoingSupportSection from '@/components/OngoingSupportSection';
import ConsultationOptionsSection from '@/components/ConsultationOptionsSection';
import { mainServices } from '@/data/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Our Services</h1>
              <p className="text-xl text-teach-gray-light">
                Professional caregiving training and support designed for families.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        {mainServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}

        <OngoingSupportSection />
        <ConsultationOptionsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
