import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, phone, email, unitPreference, message } = await req.json()

    const emailBody = `
New Property Inquiry - Marquis One

Name: ${name}
Phone: ${phone}
Email: ${email}
Unit Preference: ${unitPreference}
Message: ${message}

Please send floor plans and pricing information.
    `.trim()

    // Using Resend API for email sending
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured')
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com',
        to: ['ehab@bgatere.com'],
        subject: 'Property Inquiry - Marquis One',
        text: emailBody,
        html: emailBody.replace(/\n/g, '<br>'),
      }),
    })

    if (!resendResponse.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})