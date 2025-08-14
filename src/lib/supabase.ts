import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not configured. Please complete the Supabase integration setup.')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type ContactSubmission = {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  subject?: string
  message: string
  created_at?: string
  status?: 'new' | 'contacted' | 'resolved'
}

export type BookingRequest = {
  id?: string
  service_type: string
  first_name: string
  last_name: string
  email: string
  phone: string
  session_format: 'in-person' | 'online'
  preferred_date: string
  preferred_time: string
  additional_info?: string
  terms_accepted?: boolean
  created_at?: string
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}