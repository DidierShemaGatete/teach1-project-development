import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { contactData, testMode } = await req.json()
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    // Send confirmation email to customer
    const customerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: testMode ? 'TEACH1 TEST <onboarding@resend.dev>' : 'TEACH1 <noreply@teach1care.com>',
        to: [contactData.email],
        bcc: testMode ? ['didiershemagate03@gmail.com'] : undefined,
        subject: testMode ? '[TEST] Thank you for contacting TEACH1' : 'Thank you for contacting TEACH1',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">Thank you for contacting TEACH1!</h2>
            <p>Dear ${contactData.first_name},</p>
            <p>We have received your message and will get back to you within 24-48 hours.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Message:</h3>
              <p><strong>Subject:</strong> ${contactData.subject || 'General Inquiry'}</p>
              <p><strong>Message:</strong> ${contactData.message}</p>
            </div>
            
            <p>At TEACH1, we are committed to "Teaching Loved Ones to Care for Loved Ones" and helping families take care of families.</p>
            
            <div style="border-top: 2px solid #f97316; padding-top: 20px; margin-top: 30px;">
              <p><strong>TEACH1 Homecare + Skill Consultant, LLC.</strong></p>
              <p>📞 919-335-8852</p>
              <p>📧 teachs1stephanie@gmail.com</p>
            </div>
          </div>
        `,
      }),
    })

    // Send notification email to business
    const businessEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: testMode ? 'TEACH1 TEST Website <onboarding@resend.dev>' : 'TEACH1 Website <noreply@teach1care.com>',
        to: testMode ? ['didiershemagate03@gmail.com'] : ['teachs1stephanie@gmail.com'],
        subject: testMode ? `[TEST] New Contact Form Submission - ${contactData.subject || 'General Inquiry'}` : `New Contact Form Submission - ${contactData.subject || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">New Contact Form Submission</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information:</h3>
              <p><strong>Name:</strong> ${contactData.first_name} ${contactData.last_name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${contactData.subject || 'General Inquiry'}</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-line;">${contactData.message}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        `,
      }),
    })

    if (!customerEmailRes.ok || !businessEmailRes.ok) {
      throw new Error('Failed to send emails')
    }

    return new Response(
      JSON.stringify({ message: 'Emails sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})