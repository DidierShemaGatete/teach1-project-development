import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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