
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import OngoingSupportSection from '@/components/OngoingSupportSection';
import ConsultationOptionsSection from '@/components/ConsultationOptionsSection';
import OwnerVideoSection from '@/components/OwnerVideoSection';
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
              <p className="text-xl text-teach-gray-light mb-6">
                Professional caregiving training and support designed for families.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-sm text-teach-orange font-semibold mb-1">Service Areas</p>
                <p className="text-sm">Guilford • Forsyth • Randolph • Stokes • Alamance • Rockingham • Harnett • Lee • Cumberland • Wake</p>
              </div>
            </div>
          </div>
        </section>

        <OwnerVideoSection />

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
