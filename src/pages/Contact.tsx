import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Printer, Loader2 } from 'lucide-react';
import { supabase, type ContactSubmission } from '@/lib/supabase';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!supabase) {
        toast({
          title: "Configuration Error",
          description: "Backend services are not configured. Please contact the administrator.",
          variant: "destructive",
        });
        return;
      }

      const formData = new FormData(e.currentTarget);
      
      const contactData: ContactSubmission = {
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || undefined,
        subject: formData.get('subject') as string || undefined,
        message: formData.get('message') as string,
      };

      // Insert into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([contactData]);

      if (error) throw error;

      // Send notification emails
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: { contactData }
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the form submission if email fails
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24-48 hours.",
      });
      
      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section with Photo */}
        <section className="relative bg-gradient-to-r from-teach-blue to-teach-blue-dark text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">We're Here to Help</h1>
                <p className="text-xl text-teach-gray-light mb-4">
                  "Teaching Loved Ones to Care for Loved Ones"
                </p>
                <p className="text-lg text-teach-gray-light mb-6">
                  Families Taking Care of Families
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-teach-orange font-semibold text-xl mb-2">Stephanie Williams</h3>
                  <p className="text-white/90">Owner and Operator</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teach-orange/30 to-transparent rounded-2xl transform rotate-3"></div>
                  <img 
                    src="/lovable-uploads/f0e3b636-f429-40e2-afb4-b29eb080c4c2.png" 
                    alt="Stephanie Williams - Owner and Operator" 
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
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
                      <Input id="firstName" name="firstName" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required disabled={isSubmitting} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message *
                    </label>
                    <Textarea id="message" name="message" rows={5} required disabled={isSubmitting} />
                  </div>
                  <Button type="submit" className="bg-teach-blue hover:bg-teach-blue-dark text-white w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-teach-blue mb-6">Contact Information</h2>
                <div className="bg-teach-gray-light p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg mr-4">
                        <span className="text-2xl font-serif font-bold">TEACH<span className="text-teach-orange">1</span></span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">TEACH1 Homecare + Skill Consultant, LLC.</h4>
                        <p className="text-teach-gray-dark">"Teaching Loved Ones to Care for Loved Ones"</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p><a href="tel:+19193358852" className="text-teach-blue hover:underline">919-335-8852</a></p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Printer size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Fax</h4>
                        <p className="text-teach-gray-dark">919-249-6315</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p><a href="mailto:info@teach1care.com" className="text-teach-blue hover:underline">teachs1stephanie@gmail.com</a></p>
                      </div>
                    </div>
                    
                    
                    <div className="flex">
                      <MapPin size={24} className="text-teach-blue mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Service Areas</h4>
                        <p className="text-sm text-teach-gray-dark mb-2">We proudly serve the following counties:</p>
                        <div className="grid grid-cols-2 gap-1 text-sm">
                          <span>• Guilford</span>
                          <span>• Forsyth</span>
                          <span>• Randolph</span>
                          <span>• Stokes</span>
                          <span>• Alamance</span>
                          <span>• Rockingham</span>
                          <span>• Harnett</span>
                          <span>• Lee</span>
                          <span>• Cumberland</span>
                          <span>• Wake</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-bold mb-2">Our Services</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Basic In-Home Aide Skills</li>
                        <li>Fall Prevention</li>
                        <li>Infection Control</li>
                        <li>CPR Certification</li>
                      </ul>
                    </div>
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
