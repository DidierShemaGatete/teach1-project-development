
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>About TEACH1</h1>
              <p className="text-xl text-teach-gray-light">
                Empowering families with professional caregiving skills since 2020.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-teach-blue">Our Mission</h2>
                <p className="mb-4">
                  At <strong>TEACH1</strong>, our mission is simple yet profound: <em>"Teach loved ones to care for loved ones."</em>
                </p>
                <p className="mb-4">
                  We believe that with the right knowledge and support, family members can be empowered to provide safe, dignified care to those they love — right at home.
                </p>
                <p>
                  Our approach combines professional expertise with compassionate guidance, ensuring families feel confident and supported in their caregiving journey.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Caring hands"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section bg-teach-gray-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Professional caregiver teaching family member"
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
