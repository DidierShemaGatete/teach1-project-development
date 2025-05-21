
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
            <Link to="/" className="text-teach-gray-dark hover:text-teach-blue transition-colors">Home</Link>
            <Link to="/about" className="text-teach-gray-dark hover:text-teach-blue transition-colors">About</Link>
            <Link to="/services" className="text-teach-gray-dark hover:text-teach-blue transition-colors">Services</Link>
            <Link to="/resources" className="text-teach-gray-dark hover:text-teach-blue transition-colors">Resources</Link>
            <Link to="/contact" className="text-teach-gray-dark hover:text-teach-blue transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white">
              <Link to="/book">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-teach-gray-dark hover:bg-teach-gray hover:text-teach-blue"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-teach-gray-dark hover:text-teach-blue transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-teach-gray-dark hover:text-teach-blue transition-colors py-2" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="text-teach-gray-dark hover:text-teach-blue transition-colors py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/resources" className="text-teach-gray-dark hover:text-teach-blue transition-colors py-2" onClick={toggleMenu}>Resources</Link>
            <Link to="/contact" className="text-teach-gray-dark hover:text-teach-blue transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-teach-blue hover:bg-teach-blue-dark text-white w-full">
              <Link to="/book" onClick={toggleMenu}>Book a Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
