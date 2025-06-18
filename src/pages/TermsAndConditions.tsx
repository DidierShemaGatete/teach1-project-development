
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Terms and Conditions</h1>
              <p className="text-xl text-teach-gray-light">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">1. Acceptance of Terms</h2>
                  <p className="text-teach-gray-dark">
                    By accessing and using the services provided by TEACH1 Homecare + Skill Consultant, LLC., 
                    you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">2. Service Description</h2>
                  <p className="text-teach-gray-dark mb-4">
                    TEACH1 provides educational and consulting services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-teach-gray-dark">
                    <li>Basic In-Home Aide Skills training</li>
                    <li>Fall Prevention education</li>
                    <li>Infection Control training</li>
                    <li>CPR Certification courses</li>
                    <li>Skills consultancy services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">3. Liability Limitations</h2>
                  <p className="text-teach-gray-dark">
                    TEACH1 Homecare + Skill Consultant, LLC. provides educational services and consultation. 
                    We are not responsible for any damages or injuries that may occur during or after training. 
                    Participants assume all risks associated with the application of learned skills.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">4. Certification and Compliance</h2>
                  <p className="text-teach-gray-dark">
                    All certifications provided are subject to the standards and requirements of the issuing 
                    organizations. It is the responsibility of the participant to maintain certification 
                    requirements and stay current with industry standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">5. Privacy and Confidentiality</h2>
                  <p className="text-teach-gray-dark">
                    We respect your privacy and are committed to protecting your personal information. 
                    Any personal information collected will be used solely for the purpose of providing 
                    our services and will not be shared with third parties without your consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">6. Payment Terms</h2>
                  <p className="text-teach-gray-dark">
                    Payment for services is due at the time of booking unless otherwise arranged. 
                    Cancellations must be made at least 24 hours in advance for a full refund.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">7. Changes to Terms</h2>
                  <p className="text-teach-gray-dark">
                    TEACH1 reserves the right to modify these terms at any time. Changes will be 
                    posted on this page and will take effect immediately upon posting.
                  </p>
                </div>

                <div className="bg-teach-gray-light p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-teach-blue mb-4">Contact Information</h2>
                  <p className="text-teach-gray-dark mb-2">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-teach-gray-dark">
                    <p><strong>Phone:</strong> <a href="tel:+19193358852" className="text-teach-blue hover:underline">919-335-8852</a></p>
                    <p><strong>Email:</strong> <a href="mailto:teachs1stephanie@gmail.com" className="text-teach-blue hover:underline">teachs1stephanie@gmail.com</a></p>
                    <p><strong>Owner:</strong> Stephanie Williams</p>
                  </div>
                  <p className="text-sm text-teach-gray-dark mt-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
