
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MissionSection from '@/components/MissionSection';
import OwnerVideoSection from '@/components/OwnerVideoSection';
import SavingsCalculator from '@/components/SavingsCalculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <MissionSection variant="homepage" />
        <OwnerVideoSection />
        <Features />
        <SavingsCalculator />
        <ServicesSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
