
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teach-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-serif font-bold">TEACH<span className="text-teach-orange">1</span></span>
            </div>
            <p className="text-teach-gray-light text-sm mb-4">
              Empowering families with the skills to care at home. Professional training for compassionate caregiving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-teach-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teach-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teach-orange transition-colors">Our Services</Link></li>
              <li><Link to="/resources" className="hover:text-teach-orange transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-teach-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#basic-skills" className="hover:text-teach-orange transition-colors">Basic In-Home Aide Skills</Link></li>
              <li><Link to="/services#fall-prevention" className="hover:text-teach-orange transition-colors">Fall Prevention</Link></li>
              <li><Link to="/services#infection-control" className="hover:text-teach-orange transition-colors">Infection Control</Link></li>
              <li><Link to="/services#home-care" className="hover:text-teach-orange transition-colors">Home Care Services</Link></li>
              <li><Link to="/services#consultancy" className="hover:text-teach-orange transition-colors">Skills Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Care Street, Suite 101<br />Anytown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-teach-orange transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@teach1care.com" className="hover:text-teach-orange transition-colors">info@teach1care.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teach-blue-dark mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} TEACH1 Care Training. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
