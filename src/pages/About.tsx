
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import MissionSection from '@/components/MissionSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teach-blue to-teach-blue-dark text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">About TEACH1</h1>
                <p className="text-xl text-teach-gray-light mb-4">
                  Homecare and Skills Consultant, LLC
                </p>
                <p className="text-lg text-teach-gray-light mb-6">
                  Empowering families with professional caregiving skills since 2020.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-teach-orange font-semibold text-xl mb-2">Stephanie Williams</h3>
                  <p className="text-white/90">Founder & Certified Home Care Professional</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teach-orange/30 to-transparent rounded-2xl transform rotate-3"></div>
                  <img 
                    src="/lovable-uploads/17ee8217-da62-4487-a81e-ccbbed3ebebc.png" 
                    alt="Stephanie Williams - Founder of TEACH1" 
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flyer Introduction Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-teach-blue">Meet Our Founder & Services</h2>
              <p className="text-teach-gray-dark max-w-2xl mx-auto">
                Get to know Stephanie Williams and discover the comprehensive range of services TEACH1 offers to families across 10 counties: Guilford, Forsyth, Randolph, Stokes, Alamance, Rockingham, Harnett, Lee, Cumberland & Wake.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <img 
                  src="/lovable-uploads/ffa7e46f-1fb5-4b89-a252-d6c96c36d791.png" 
                  alt="TEACH1 Services Flyer featuring Stephanie Williams, Homecare and Skills Consultant, offering Basic In-Home Aide Skills, Fall Prevention, Infection Control, and CPR Certification in Triad and Surrounding Areas including Harnett, Lee, and Cumberland Counties"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Purpose Section */}
        <MissionSection variant="about" />

        {/* Why Choose TEACH1 Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Our Story Section */}
        <section className="section bg-teach-gray-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Black caregiver assisting elderly white patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-teach-blue">Our Story</h2>
                <p className="mb-4">
                  TEACH1 was founded by a certified home care professional with a passion for educating families. After years of working in direct patient care, we saw a gap — families wanted to help, but didn't always know how.
                </p>
                <p className="mb-4">
                  We witnessed the transformation that occurred when family members were properly trained in caregiving techniques. Not only did the quality of care improve, but the emotional wellbeing of both the caregiver and care recipient flourished.
                </p>
                <p>
                  TEACH1 bridges that gap with hands-on education, consultancy, and personalized support. Our approach empowers families to provide excellent care while maintaining the invaluable family connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-teach-blue">Our Core Values</h2>
              <p className="max-w-2xl mx-auto text-teach-gray-dark">
                These principles guide everything we do at TEACH1.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Dignity</h3>
                <p>
                  We ensure every caregiving technique preserves the dignity and respect of both the caregiver and care recipient.
                </p>
              </div>
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Empowerment</h3>
                <p>
                  We believe in giving families the skills and confidence to provide excellent care in the comfort of home.
                </p>
              </div>
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p>
                  Every interaction is guided by deep empathy for the challenges faced by both caregivers and those receiving care.
                </p>
              </div>
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p>
                  Our training techniques are evidence-based and reflect the highest standards in home care practice.
                </p>
              </div>
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p>
                  We make professional caregiving education accessible to all families, regardless of prior experience.
                </p>
              </div>
              <div className="p-6 border border-teach-gray rounded-lg card-hover">
                <h3 className="text-xl font-bold mb-3">Family-Centered</h3>
                <p>
                  We recognize the unique dynamics of each family and tailor our approach to honor those relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
