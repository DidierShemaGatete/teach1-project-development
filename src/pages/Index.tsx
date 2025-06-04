
import React from 'react';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OwnerVideoSection from '@/components/OwnerVideoSection';
import SavingsCalculator from '@/components/SavingsCalculator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        
        {/* Important Notice Section */}
        <section className="py-6 bg-teach-orange-light border-y border-teach-orange">
          <div className="container-custom">
            <Alert className="border-teach-orange bg-white/90 max-w-4xl mx-auto">
              <Info className="h-5 w-5 text-teach-blue" />
              <AlertDescription className="text-teach-blue-dark font-medium text-center">
                <strong>Important Note:</strong> We are not a homecare company but offer private pay homecare referral services when needed.
              </AlertDescription>
            </Alert>
          </div>
        </section>
        
        <OwnerVideoSection />
        <SavingsCalculator />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
