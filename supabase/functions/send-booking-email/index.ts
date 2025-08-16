import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const getServiceDisplayName = (serviceType: string) => {
  switch(serviceType) {
    case 'basic-skills': return 'Basic In-Home Aide Skills';
    case 'fall-prevention': return 'Fall Prevention Training';
    case 'infection-control': return 'Infection Control Guidance';
    case 'home-care': return 'Home Care Services';
    case 'consultancy': return 'Caregiving Skills Consultancy';
    default: return serviceType;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { bookingData, testMode = false } = await req.json()
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const serviceName = getServiceDisplayName(bookingData.service_type)
    const formattedDate = new Date(bookingData.preferred_date).toLocaleDateString()
    
    console.log(`Processing booking email${testMode ? ' (TEST MODE)' : ''}:`, {
      service: serviceName,
      customer: bookingData.email,
      date: formattedDate,
      testMode
    })

    // Send confirmation email to customer
    const customerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: testMode ? 'TEACH1 TEST <onboarding@resend.dev>' : 'TEACH1 <noreply@teach1care.com>',
        to: [bookingData.email],
        ...(testMode && { bcc: ['didiershemagate03@gmail.com'] }),
        subject: `${testMode ? '[TEST] ' : ''}Booking Request Received - ${serviceName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            ${testMode ? '<div style="background-color: #fbbf24; color: #92400e; padding: 10px; text-align: center; font-weight: bold; margin-bottom: 20px;">🧪 TEST MODE - This is a test email</div>' : ''}
            <h2 style="color: #1e40af;">Your Booking Request Has Been Received!</h2>
            <p>Dear ${bookingData.first_name},</p>
            <p>Thank you for booking with TEACH1! We have received your booking request and will contact you within 24 hours to confirm your session.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Booking Details:</h3>
              <p><strong>Service:</strong> ${serviceName}</p>
              <p><strong>Format:</strong> ${bookingData.session_format === 'in-person' ? 'In-Person' : 'Online'}</p>
              <p><strong>Preferred Date:</strong> ${formattedDate}</p>
              <p><strong>Preferred Time:</strong> ${bookingData.preferred_time}</p>
              ${bookingData.additional_info ? `<p><strong>Additional Information:</strong> ${bookingData.additional_info}</p>` : ''}
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>We will contact you within 24 hours to confirm your booking</li>
              <li>You will receive session preparation materials via email</li>
              <li>A calendar invitation will be sent once confirmed</li>
            </ul>
            
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
        from: testMode ? 'TEACH1 TEST <onboarding@resend.dev>' : 'TEACH1 Website <noreply@teach1care.com>',
        to: testMode ? ['didiershemagate03@gmail.com'] : ['teachs1stephanie@gmail.com'],
        ...(testMode && { bcc: ['didiershemagate03@gmail.com'] }),
        subject: `${testMode ? '[TEST] ' : ''}New Booking Request - ${serviceName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            ${testMode ? '<div style="background-color: #fbbf24; color: #92400e; padding: 10px; text-align: center; font-weight: bold; margin-bottom: 20px;">🧪 TEST MODE - This is a test booking</div>' : ''}
            <h2 style="color: #1e40af;">New Booking Request</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e40af; margin-top: 0;">Client Information:</h3>
              <p><strong>Name:</strong> ${bookingData.first_name} ${bookingData.last_name}</p>
              <p><strong>Email:</strong> ${bookingData.email}</p>
              <p><strong>Phone:</strong> ${bookingData.phone}</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Booking Details:</h3>
              <p><strong>Service:</strong> ${serviceName}</p>
              <p><strong>Format:</strong> ${bookingData.session_format === 'in-person' ? 'In-Person' : 'Online'}</p>
              <p><strong>Preferred Date:</strong> ${formattedDate}</p>
              <p><strong>Preferred Time:</strong> ${bookingData.preferred_time}</p>
              ${bookingData.additional_info ? `<p><strong>Additional Information:</strong> ${bookingData.additional_info}</p>` : ''}
            </div>
            
            <p><strong>Action Required:</strong> Please contact the client within 24 hours to confirm the booking.</p>
            <p style="color: #6b7280; font-size: 14px;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        `,
      }),
    })

    if (!customerEmailRes.ok || !businessEmailRes.ok) {
      console.error('Email sending failed:', {
        customerStatus: customerEmailRes.status,
        businessStatus: businessEmailRes.status,
        customerText: await customerEmailRes.text(),
        businessText: await businessEmailRes.text()
      })
      throw new Error('Failed to send emails')
    }

    console.log(`Booking emails sent successfully${testMode ? ' (TEST MODE)' : ''}`)

    return new Response(
      JSON.stringify({ 
        message: `Booking emails sent successfully${testMode ? ' (TEST MODE)' : ''}`,
        testMode 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in send-booking-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})