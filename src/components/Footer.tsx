
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

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
            <p className="text-teach-gray-light text-sm mb-2">
              TEACH1 Homecare + Skill Consultant, LLC.
            </p>
            <p className="text-teach-gray-light text-sm mb-4">
              "Teaching Loved Ones to Care for Loved Ones" <br />
              Families Taking Care of Families
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
              <li><Link to="/services#consultancy" className="hover:text-teach-orange transition-colors">Skills Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-xl mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+13363274671" className="hover:text-teach-orange transition-colors">336-327-4671</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@teach1care.com" className="hover:text-teach-orange transition-colors">teachs1stephanie@gmail.com</a>
              </li>
              <li className="mt-4">
                <p className="text-teach-orange">Stephanie Williams</p>
                <p className="text-sm text-teach-gray-light">Owner and Operator</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teach-blue-dark mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} TEACH1 Homecare + Skill Consultant, LLC. All Rights Reserved.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/company/teach1care" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teach-orange transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-teach-orange/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                </a>
                <a 
                  href="https://facebook.com/teach1care" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teach-orange transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-teach-orange/20 transition-colors">
                    <Facebook size={20} />
                  </div>
                </a>
                <a 
                  href="https://instagram.com/teach1care" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teach-orange transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-teach-orange/20 transition-colors">
                    <Instagram size={20} />
                  </div>
                </a>
                <a 
                  href="https://tiktok.com/@teach1care" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teach-orange transition-colors group"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-teach-orange/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
