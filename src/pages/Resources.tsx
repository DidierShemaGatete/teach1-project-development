
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Common Home Hazards & How to Prevent Falls',
    excerpt: 'Learn about the most common causes of falls in the home and practical steps you can take today to make any living space safer for elderly or recovering loved ones.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: 'May 15, 2023',
    category: 'Safety'
  },
  {
    id: 2,
    title: 'Caring for Aging Parents: Where to Start',
    excerpt: 'Taking on the role of caregiver for your parents can be overwhelming. This guide provides a step-by-step approach to beginning this important journey with confidence.',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: 'April 3, 2023',
    category: 'Caregiver Tips'
  },
  {
    id: 3,
    title: 'Why Families Need Infection Control Training',
    excerpt: 'The pandemic highlighted the importance of infection control, but these skills remain essential for any family providing care. Learn the basics of keeping a safe, clean caregiving environment.',
    image: 'https://images.unsplash.com/photo-1584634731339-252e58471e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: 'March 21, 2023',
    category: 'Health'
  },
  {
    id: 4,
    title: 'Caregiving Fatigue: How to Manage & Recover',
    excerpt: 'Caregiver burnout is a real concern that affects both the caregiver and care recipient. Discover practical strategies for self-care and maintaining your well-being while caring for others.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: 'February 8, 2023',
    category: 'Wellness'
  },
  {
    id: 5,
    title: 'Top 10 Mistakes Family Caregivers Make',
    excerpt: 'Even with the best intentions, new caregivers often make common mistakes. Learn how to avoid these pitfalls and provide better care for your loved ones right from the start.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: 'January 15, 2023',
    category: 'Caregiver Tips'
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Caregiving Resources</h1>
              <p className="text-xl text-teach-gray-light">
                Helpful guides, tips, and information to support your caregiving journey.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="border border-teach-gray rounded-lg overflow-hidden card-hover">
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2 text-sm">
                      <span className="bg-teach-orange-light text-teach-blue-dark px-2 py-1 rounded mr-2">
                        {post.category}
                      </span>
                      <span className="text-teach-gray-dark">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-teach-gray-dark mb-4">{post.excerpt}</p>
                    <Link 
                      to={`#`} 
                      className="text-teach-blue hover:text-teach-blue-dark flex items-center font-medium group"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="section bg-teach-gray-light">
          <div className="container-custom">
            <h2 className="text-teach-blue text-center mb-12">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">Downloadable Guides</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">📄</span>
                      Home Safety Checklist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">📄</span>
                      Medication Management Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">📄</span>
                      Caregiver Self-Care Workbook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">📄</span>
                      Emergency Response Plan Template
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">Video Tutorials</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">🎬</span>
                      Safe Transfer Techniques
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">🎬</span>
                      Basic Hygiene Assistance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">🎬</span>
                      Proper PPE Use at Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teach-blue hover:text-teach-blue-dark flex items-center">
                      <span className="mr-2">🎬</span>
                      Meal Preparation for Special Diets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
