
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>We're Here to Help</h1>
              <p className="text-xl text-teach-gray-light">
                Feel free to reach out with any questions or to discuss your family's care needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-teach-blue mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium">
                        First Name *
                      </label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name *
                      </label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address *
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message *
                    </label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  <Button type="submit" className="bg-teach-blue hover:bg-teach-blue-dark text-white w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-teach-blue mb-6">Contact Information</h2>
                <div className="bg-teach-gray-light p-6 rounded-lg mb-8">
                  <div className="space-y-6">
                    <div className="flex">
                      <MapPin size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Office Address</h4>
                        <p>123 Care Street, Suite 101<br />Anytown, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex">
                      <Phone size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p><a href="tel:+15551234567" className="text-teach-blue hover:underline">+1 (555) 123-4567</a></p>
                      </div>
                    </div>
                    <div className="flex">
                      <Mail size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p><a href="mailto:info@teach1care.com" className="text-teach-blue hover:underline">info@teach1care.com</a></p>
                      </div>
                    </div>
                    <div className="flex">
                      <Clock size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Office Hours</h4>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                  {/* This would be a Google Map in a real app */}
                  <div className="w-full h-full bg-teach-gray flex items-center justify-center">
                    <p className="text-teach-gray-dark">Map would be displayed here</p>
                  </div>
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

export default Contact;
