
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teach-blue text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              <span className="text-2xl font-serif font-bold">TEACH<span className="text-teach-orange">1</span></span>
            </div>
            <p className="text-teach-gray-light text-sm mb-2">
              TEACH1 Homecare + Skill Consultant, LLC.
            </p>
            <p className="text-teach-gray-light text-sm mb-3">
              "Teaching Loved Ones to Care for Loved Ones" <br />
              Families Taking Care of Families
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-3 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-teach-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teach-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teach-orange transition-colors">Our Services</Link></li>
              <li><Link to="/resources" className="hover:text-teach-orange transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-teach-orange transition-colors">Contact Us</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-teach-orange transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-3 font-serif">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#basic-skills" className="hover:text-teach-orange transition-colors">Basic In-Home Aide Skills</Link></li>
              <li><Link to="/services#fall-prevention" className="hover:text-teach-orange transition-colors">Fall Prevention</Link></li>
              <li><Link to="/services#infection-control" className="hover:text-teach-orange transition-colors">Infection Control</Link></li>
              <li><Link to="/services#consultancy" className="hover:text-teach-orange transition-colors">Skills Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-3 font-serif">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+13363274671" className="hover:text-teach-orange transition-colors">336-327-4671</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@teach1care.com" className="hover:text-teach-orange transition-colors">teachs1stephanie@gmail.com</a>
              </li>
              <li className="mt-3">
                <p className="text-teach-orange">Stephanie Williams</p>
                <p className="text-sm text-teach-gray-light">Owner and Operator</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teach-blue-dark mt-6 pt-6">
          <div className="flex flex-col items-center space-y-3">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-8">
                <a 
                  href="https://www.linkedin.com/in/teach1-consultancy-4b7504376/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#0077B5] p-1.5 rounded-lg">
                    <Linkedin size={16} className="text-white" />
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61578838132629" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#1877F2] p-1.5 rounded-lg">
                    <Facebook size={16} className="text-white" />
                  </div>
                </a>
                <a 
                  href="https://www.youtube.com/@StephanieWilliams-v8e1u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#FF0000] p-1.5 rounded-lg">
                    <Youtube size={16} className="text-white" />
                  </div>
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-center">
              © {currentYear} TEACH1 Homecare + Skill Consultant, LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
