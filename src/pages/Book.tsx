
import React, { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { supabase, type BookingRequest } from '@/lib/supabase';

const Book = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const isMobileRef = useRef(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sessionFormat: 'in-person',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
      setAutoAdvance(isMobileRef.current);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getServiceDisplayName = (serviceType: string) => {
    switch(serviceType) {
      case 'basic-skills': return 'Basic In-Home Aide Skills';
      case 'fall-prevention': return 'Fall Prevention Training';
      case 'infection-control': return 'Infection Control Guidance';
      case 'home-care': return 'Home Care Services';
      case 'consultancy': return 'Caregiving Skills Consultancy';
      default: return serviceType;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const bookingData: BookingRequest = {
        service_type: serviceType,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        session_format: formData.sessionFormat as 'in-person' | 'online',
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        additional_info: formData.additionalInfo || undefined,
        terms_accepted: termsAccepted,
      };

      // Insert into Supabase
      const { error } = await supabase
        .from('booking_requests')
        .insert([bookingData]);

      if (error) throw error;

      // Send notification emails
      const { error: emailError } = await supabase.functions.invoke('send-booking-email', {
        body: { bookingData }
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the form submission if email fails
      }

      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your session. Check your email for confirmation details.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        sessionFormat: 'in-person',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: ''
      });
      setServiceType('');
      setTermsAccepted(false);
      setStep(1);
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // Handle service selection with auto-advance for mobile
  const handleServiceChange = (value: string) => {
    setServiceType(value);
    
    // Auto-advance to next step on mobile
    if (autoAdvance) {
      setTimeout(() => {
        nextStep();
      }, 300); // Small delay for better UX
    }
  };

  // Handle time selection with auto-advance for mobile
  const handleTimeChange = (value: string) => {
    if (autoAdvance && step === 2) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teach-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1>Book a Session</h1>
              <p className="text-xl text-teach-gray-light">
                Let's get you started with the right caregiving training for your family's needs.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Progress Steps */}
              <div className="flex justify-between items-center mb-8">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-teach-blue' : 'text-teach-gray-dark'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 1 ? 'bg-teach-blue' : 'bg-teach-gray'}`}>1</div>
                  <span className="text-sm">Service</span>
                </div>
                <div className={`h-1 flex-grow mx-2 ${step >= 2 ? 'bg-teach-blue' : 'bg-teach-gray'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-teach-blue' : 'text-teach-gray-dark'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 2 ? 'bg-teach-blue' : 'bg-teach-gray'}`}>2</div>
                  <span className="text-sm">Details</span>
                </div>
                <div className={`h-1 flex-grow mx-2 ${step >= 3 ? 'bg-teach-blue' : 'bg-teach-gray'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-teach-blue' : 'text-teach-gray-dark'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 3 ? 'bg-teach-blue' : 'bg-teach-gray'}`}>3</div>
                  <span className="text-sm">Confirm</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Select Service */}
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <h2 className="text-teach-blue text-center">Choose a Service</h2>
                    
                    <div className="space-y-4">
                      <RadioGroup 
                        value={serviceType} 
                        onValueChange={handleServiceChange}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div className="col-span-1">
                          <RadioGroupItem 
                            value="basic-skills" 
                            id="basic-skills" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="basic-skills"
                            className="flex flex-col border-2 rounded-lg p-4 cursor-pointer hover:bg-teach-gray-light peer-data-[state=checked]:border-teach-blue peer-data-[state=checked]:bg-teach-blue/10"
                          >
                            <span className="text-lg font-bold">Basic In-Home Aide Skills</span>
                            <span className="text-sm text-teach-gray-dark">Learn core caregiving skills for family members</span>
                          </Label>
                        </div>
                        
                        <div className="col-span-1">
                          <RadioGroupItem 
                            value="fall-prevention" 
                            id="fall-prevention" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="fall-prevention"
                            className="flex flex-col border-2 rounded-lg p-4 cursor-pointer hover:bg-teach-gray-light peer-data-[state=checked]:border-teach-blue peer-data-[state=checked]:bg-teach-blue/10"
                          >
                            <span className="text-lg font-bold">Fall Prevention Training</span>
                            <span className="text-sm text-teach-gray-dark">Learn to prevent falls and improve home safety</span>
                          </Label>
                        </div>
                        
                        <div className="col-span-1">
                          <RadioGroupItem 
                            value="infection-control" 
                            id="infection-control" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="infection-control"
                            className="flex flex-col border-2 rounded-lg p-4 cursor-pointer hover:bg-teach-gray-light peer-data-[state=checked]:border-teach-blue peer-data-[state=checked]:bg-teach-blue/10"
                          >
                            <span className="text-lg font-bold">Infection Control Guidance</span>
                            <span className="text-sm text-teach-gray-dark">Learn proper hygiene and infection prevention</span>
                          </Label>
                        </div>
                        
                        <div className="col-span-1">
                          <RadioGroupItem 
                            value="home-care" 
                            id="home-care" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="home-care"
                            className="flex flex-col border-2 rounded-lg p-4 cursor-pointer hover:bg-teach-gray-light peer-data-[state=checked]:border-teach-blue peer-data-[state=checked]:bg-teach-blue/10"
                          >
                            <span className="text-lg font-bold">Home Care Services</span>
                            <span className="text-sm text-teach-gray-dark">Professional caregiver support at home</span>
                          </Label>
                        </div>
                        
                        <div className="col-span-1">
                          <RadioGroupItem 
                            value="consultancy" 
                            id="consultancy" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="consultancy"
                            className="flex flex-col border-2 rounded-lg p-4 cursor-pointer hover:bg-teach-gray-light peer-data-[state=checked]:border-teach-blue peer-data-[state=checked]:bg-teach-blue/10"
                          >
                            <span className="text-lg font-bold">Caregiving Skills Consultancy</span>
                            <span className="text-sm text-teach-gray-dark">Personalized assessment and training plan</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!serviceType}
                        className={`bg-teach-blue hover:bg-teach-blue-dark text-white ${autoAdvance ? 'md:block hidden' : 'block'}`}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Session Details */}
                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <h2 className="text-teach-blue text-center">Session Details</h2>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="block text-sm font-medium">
                            First Name *
                          </label>
                          <Input 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="block text-sm font-medium">
                            Last Name *
                          </label>
                          <Input 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium">
                            Email Address *
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium">
                            Phone Number *
                          </label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Preferred Session Format *
                        </label>
                        <RadioGroup 
                          value={formData.sessionFormat}
                          onValueChange={(value) => handleInputChange('sessionFormat', value)}
                        >
                          <div className="flex space-x-6">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="in-person" id="in-person" />
                              <Label htmlFor="in-person">In-Person</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="online" id="online" />
                              <Label htmlFor="online">Online</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="preferredDate" className="block text-sm font-medium">
                            Preferred Date *
                          </label>
                          <Input 
                            id="preferredDate" 
                            type="date" 
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="preferredTime" className="block text-sm font-medium">
                            Preferred Time *
                          </label>
                          <Select 
                            value={formData.preferredTime}
                            onValueChange={(value) => {
                              handleInputChange('preferredTime', value);
                              handleTimeChange(value);
                            }}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                              <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="additionalInfo" className="block text-sm font-medium">
                          Additional Information
                        </label>
                        <Textarea 
                          id="additionalInfo" 
                          placeholder="Please share any specific needs or questions you have"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={nextStep} 
                        className="bg-teach-blue hover:bg-teach-blue-dark text-white"
                      >
                        Review Booking
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-8 animate-fade-in">
                    <h2 className="text-teach-blue text-center">Confirm Your Booking</h2>
                    
                    <div className="bg-teach-gray-light p-6 rounded-lg space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2">Selected Service</h3>
                        <p className="text-teach-gray-dark">
                          {serviceType === 'basic-skills' && 'Basic In-Home Aide Skills'}
                          {serviceType === 'fall-prevention' && 'Fall Prevention Training'}
                          {serviceType === 'infection-control' && 'Infection Control Guidance'}
                          {serviceType === 'home-care' && 'Home Care Services'}
                          {serviceType === 'consultancy' && 'Caregiving Skills Consultancy'}
                        </p>
                      </div>
                      
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Your Information</h4>
                          <div className="text-sm text-teach-gray-dark space-y-1">
                            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Session Details</h4>
                          <div className="text-sm text-teach-gray-dark space-y-1">
                            <p><strong>Format:</strong> {formData.sessionFormat === 'in-person' ? 'In-Person' : 'Online'}</p>
                            <p><strong>Date:</strong> {formData.preferredDate}</p>
                            <p><strong>Time:</strong> {formData.preferredTime}</p>
                            {formData.additionalInfo && (
                              <p><strong>Additional Info:</strong> {formData.additionalInfo}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={termsAccepted}
                        onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                        disabled={isSubmitting}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions *
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          By submitting this form, you agree to our privacy policy and service terms.
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-teach-blue hover:bg-teach-blue-dark text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
