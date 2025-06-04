
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-teach-blue">TEACH<span className="text-teach-orange">1</span></span>
            <span className="ml-2 text-teach-gray-dark text-sm hidden sm:inline">Care Training</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 relative group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teach-blue to-teach-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/about" className="nav-link font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 relative group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teach-orange to-teach-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/services" className="nav-link font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 relative group">
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teach-blue to-teach-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/resources" className="nav-link font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 relative group">
              Resources
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teach-orange to-teach-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/contact" className="nav-link font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 relative group">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teach-blue to-teach-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-teach-blue to-teach-blue-dark hover:from-teach-blue-dark hover:to-teach-blue text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/book">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-teach-gray-dark hover:bg-teach-gray hover:text-teach-blue transform hover:scale-110 transition-all duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-white to-teach-gray-light border-t animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 py-2 px-4 rounded-lg hover:bg-teach-blue/10 transform hover:translate-x-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 py-2 px-4 rounded-lg hover:bg-teach-blue/10 transform hover:translate-x-2" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 py-2 px-4 rounded-lg hover:bg-teach-blue/10 transform hover:translate-x-2" onClick={toggleMenu}>Services</Link>
            <Link to="/resources" className="font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 py-2 px-4 rounded-lg hover:bg-teach-blue/10 transform hover:translate-x-2" onClick={toggleMenu}>Resources</Link>
            <Link to="/contact" className="font-bold text-teach-gray-dark hover:text-teach-blue transition-all duration-300 py-2 px-4 rounded-lg hover:bg-teach-blue/10 transform hover:translate-x-2" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-gradient-to-r from-teach-blue to-teach-blue-dark hover:from-teach-blue-dark hover:to-teach-blue text-white font-bold w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/book" onClick={toggleMenu}>Book a Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
