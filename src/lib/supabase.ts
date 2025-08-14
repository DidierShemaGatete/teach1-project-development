import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://exncsjdfynfpjrrzfxll.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bmNzamRmeW5mcGpycnpmeGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNTM1OTgsImV4cCI6MjA3MDcyOTU5OH0.YdYW-3HQ6JlMro49egqL-cRSZ3lklN676Zho4zj3R58"

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