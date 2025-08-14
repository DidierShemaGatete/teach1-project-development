-- Create booking_requests table for storing consultation bookings
CREATE TABLE public.booking_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  session_format TEXT NOT NULL CHECK (session_format IN ('in-person', 'online')),
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  additional_info TEXT,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert booking requests (public form)
CREATE POLICY "Anyone can submit booking requests" 
ON public.booking_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading of booking requests for privacy
CREATE POLICY "No public access to booking requests" 
ON public.booking_requests 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_booking_requests_updated_at
    BEFORE UPDATE ON public.booking_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();