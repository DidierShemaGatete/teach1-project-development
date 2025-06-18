
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    id: 'hands-on-skills',
    title: 'Hands-On Basic In-Home Skills and Demonstrations',
    description: 'We provide in-home demonstrations of essential life skills — from basic cooking to cleaning routines and laundry — empowering clients with confidence through hands-on learning.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3477394851/preview/stock-footage-folding-clothes-on-the-table-hands-folding-a-purple-t-shirt.webm',
    features: [
      'Personal hygiene and bathing assistance',
      'Safe transfer techniques',
      'Meal preparation and feeding assistance',
      'Medication reminders and monitoring',
      'Basic health monitoring techniques',
      'Mobility assistance and proper body mechanics'
    ]
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care (Infection and Fall Risk)',
    description: 'Comprehensive training on preventing infections and reducing fall risks to keep your loved ones safe at home.',
    image: 'https://images.unsplash.com/photo-1454894717220-9cb5eb2c4124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Home safety assessment techniques',
      'Identifying and removing fall hazards',
      'Proper handwashing and hygiene practices',
      'Effective use of personal protective equipment (PPE)',
      'Home disinfection procedures',
      'Balance improvement exercises and safety strategies'
    ]
  },
  {
    id: 'plan-of-care',
    title: 'Plan of Care (Daily Routine)',
    description: 'Develop structured, personalized daily care routines that promote independence and wellbeing.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Creating structured daily schedules',
      'Medication management routines',
      'Activity planning and engagement',
      'Health monitoring schedules',
      'Vital signs',
      'Catheter care',
      'Hoyer lift',
      'Emergency response planning',
      'Adapting routines to changing needs'
    ]
  },
  {
    id: 'home-management',
    title: 'Declutter & Clutter Management',
    description: 'Our decluttering service transforms chaotic spaces into clean, calm environments. See the difference a structured system and practical help can make in your daily life.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    features: [
      'Home safety and accessibility assessment',
      'Decluttering strategies for safer navigation',
      'Organizing medical supplies and equipment',
      'Creating accessible storage solutions',
      'Maintaining a clean and hygienic environment',
      'Adapting spaces for mobility aids'
    ]
  },
  {
    id: 'work-with-caregiver',
    title: 'Work with Pre-existing Caregiver',
    description: 'Collaborate and coordinate with existing caregivers to ensure consistent, quality care.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Communication strategies with professional caregivers',
      'Care plan coordination and updates',
      'Training family members to support existing care',
      'Continuity of care practices',
      'Backup care planning',
      'Effective handoff procedures'
    ]
  },
  {
    id: 'skills-refresher',
    title: 'Refresher on Skills',
    description: 'Update and reinforce your caregiving skills with refresher training sessions.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Review of previously learned techniques',
      'Updates on best practices and new methods',
      'Skill assessment and improvement',
      'Problem-solving for ongoing challenges',
      'Confidence building exercises',
      'Adapting skills to changing conditions'
    ]
  },
  {
    id: 'private-homecare-referral',
    title: 'Private Homecare Referral Services',
    description: 'We offer compassionate private homecare referral guidance tailored to each family\'s situation. (We are not a homecare company)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Vetted caregiver referral network'
    ]
  },
  {
    id: 'cpr-certification',
    title: 'CPR Certification',
    description: 'Become certified in CPR to be prepared for emergency situations and provide life-saving care.',
    image: 'https://images.unsplash.com/photo-1584634731339-252e58471e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: [
      'Adult CPR techniques',
      'AED (Automated External Defibrillator) training',
      'Choking response procedures',
      'Emergency response protocols',
      'Hands-on practice and certification',
      'Recertification support'
    ]
  }
];

const ongoingSupport = [
  {
    title: 'Follow-ups',
    description: 'Regular follow-up sessions to ensure continued success and address new challenges.',
    features: [
      'Progress assessment',
      'Skill reinforcement',
      'Problem resolution',
      'Care plan adjustments'
    ]
  },
  {
    title: 'Check-ins',
    description: 'Scheduled check-ins to provide ongoing support and answer questions.',
    features: [
      'Virtual or in-person consultations',
      'Quick question resolution',
      'Emotional support',
      'Resource recommendations'
    ]
  }
];

const consultationOptions = [
  {
    title: 'Free Initial Consultation',
    description: 'Comprehensive assessment of your caregiving needs and service planning.'
  },
  {
    title: 'Individual Training',
    description: 'One-on-one personalized training sessions tailored to your specific needs.'
  },
  {
    title: 'Group Training',
    description: 'Family or small group training sessions for coordinated care approaches.'
  },
  {
    title: 'Organizational Training',
    description: 'Training programs for healthcare organizations, assisted living facilities, and community groups.'
  }
];

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
          <section 
            key={service.id}
            id={service.id}
            className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-teach-gray-light'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                  <h2 className="text-teach-blue">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teach-orange mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white mt-4">
                    <Link to="/book">Schedule Training</Link>
                  </Button>
                </div>
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : ''} rounded-lg overflow-hidden shadow-xl`}>
                  {service.id === 'hands-on-skills' && service.video ? (
                    <div className="relative bg-teach-gray-light rounded-lg overflow-hidden shadow-xl aspect-video">
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster=""
                      >
                        <source 
                          src={service.video} 
                          type="video/webm" 
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : service.id === 'home-management' && service.beforeAfterImages ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-center">Before</h4>
                        <img
                          src={service.beforeAfterImages.before}
                          alt="Cluttered space before"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-center">After</h4>
                        <img
                          src={service.beforeAfterImages.after}
                          alt="Organized space after"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Ongoing Support Section */}
        <section className="section bg-teach-gray-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-teach-blue">Ongoing Support</h2>
              <p className="max-w-2xl mx-auto text-teach-gray-dark">
                Our commitment to your success extends beyond initial training with continued support and guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ongoingSupport.map((support, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">{support.title}</h3>
                  <p className="mb-4">{support.description}</p>
                  <ul className="space-y-2">
                    {support.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teach-orange mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Options Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-teach-blue">Consultation Options</h2>
              <p className="max-w-2xl mx-auto text-teach-gray-dark">
                Choose the training format that works best for you and your family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationOptions.map((option, index) => (
                <div key={index} className="bg-teach-gray-light p-6 rounded-lg text-center card-hover">
                  <h3 className="text-lg font-bold mb-3">{option.title}</h3>
                  <p className="text-sm">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white">
                <Link to="/book">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
