
import React from 'react';
import { Heart, Users, GraduationCap, Home, Shield, BookOpen } from 'lucide-react';

interface MissionSectionProps {
  variant?: 'homepage' | 'about';
}

const MissionSection = ({ variant = 'homepage' }: MissionSectionProps) => {
  const isHomepage = variant === 'homepage';
  
  return (
    <section className={`section ${isHomepage ? 'bg-teach-gray-light' : 'bg-white'}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-teach-blue mb-4">
            {isHomepage ? 'Our Mission, Vision & Purpose' : 'Mission, Vision & Purpose'}
          </h2>
          <div className="space-y-2">
            <p className="text-xl font-medium text-teach-blue-dark">
              Teaching Loved Ones to Care for Loved Ones
            </p>
            <p className="text-lg text-teach-gray-dark italic">
              Families Taking Care of Families
            </p>
          </div>
        </div>

        {/* Mission, Vision, Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg p-8 shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <div className="bg-teach-blue/10 p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-teach-blue" />
              </div>
              <h3 className="text-2xl font-bold text-teach-blue">Mission</h3>
            </div>
            <p className="text-teach-gray-dark leading-relaxed">
              Empowering families with knowledge and skills to provide compassionate, confident, and effective care for loved ones. Fostering dignity and peace of mind while keeping your loved one home.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg p-8 shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <div className="bg-teach-orange/10 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-teach-orange" />
              </div>
              <h3 className="text-2xl font-bold text-teach-blue">Vision</h3>
            </div>
            <p className="text-teach-gray-dark leading-relaxed">
              To create a world where every family has the knowledge and confidence to care for family members, promoting stronger and healthier families and enriching the quality of life for all, while minimizing the need for unfamiliar caregivers in the home.
            </p>
          </div>

          {/* Culture */}
          <div className="bg-white rounded-lg p-8 shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <div className="bg-teach-blue/10 p-3 rounded-full mr-4">
                <GraduationCap className="h-8 w-8 text-teach-blue" />
              </div>
              <h3 className="text-2xl font-bold text-teach-blue">Culture</h3>
            </div>
            <p className="text-teach-gray-dark leading-relaxed">
              We believe in fostering a supportive, compassionate, and inclusive environment where learning and empathy come together to equip families with the skills to care with confidence. Our culture is built on respect, integrity, and an unwavering commitment to improving the quality of life for caregivers and their loved ones.
            </p>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="bg-teach-blue rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Purpose</h3>
              </div>
              <p className="text-teach-gray-light leading-relaxed mb-6">
                TEACH1 provides families with the tools and skills to offer comprehensive, safe, and informed care at home. We teach essential CNA-level techniques to prevent injuries, reduce infections, ease anxiety, and maintain the dignity of loved ones — all while lowering reliance on outside help.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Important Note:</strong> We are not a homecare company but offer private pay homecare referral services when needed.
                </p>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-teach-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Prevent Injuries</h4>
                  <p className="text-sm text-teach-gray-light">Safe handling techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-teach-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Reduce Infections</h4>
                  <p className="text-sm text-teach-gray-light">Proper hygiene protocols</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-teach-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Ease Anxiety</h4>
                  <p className="text-sm text-teach-gray-light">Confident caregiving</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-teach-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Maintain Dignity</h4>
                  <p className="text-sm text-teach-gray-light">Respectful care practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
