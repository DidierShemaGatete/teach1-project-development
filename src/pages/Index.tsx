
import React from 'react';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import CPRCertificationSection from '@/components/CPRCertificationSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <CPRCertificationSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
