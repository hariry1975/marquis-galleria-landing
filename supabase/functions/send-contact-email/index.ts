import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  unitPreference: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, unitPreference }: ContactFormData = await req.json();

    console.log("Sending contact email for:", { name, email, phone, unitPreference });

    const emailResponse = await resend.emails.send({
      from: "Marquis One <onboarding@resend.dev>",
      to: ["ehab@bgatere.com"], // Your email where you want to receive leads
      subject: `New Lead from ${name} - Marquis One Inquiry`,
      html: `
        <h2>New Lead - Marquis One Landing Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Unit Preference:</strong> ${unitPreference}</p>
        <hr>
        <p>This lead was generated from the Marquis One landing page contact form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Check if there was an error in the email response
    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      throw new Error(`Email sending failed: ${emailResponse.error.message}`);
    }

    // Also send a confirmation email to the customer
    const confirmationResponse = await resend.emails.send({
      from: "Marquis One <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your interest in Marquis One",
      html: `
        <h2>Thank you for your interest, ${name}!</h2>
        <p>We have received your inquiry about Marquis One apartments and will get back to you within 24 hours with pricing and floor plan information.</p>
        <p><strong>Your submitted details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Preferred Unit: ${unitPreference}</li>
        </ul>
        <p>If you have any immediate questions, feel free to contact us via WhatsApp at +971 56 170 0817.</p>
        <p>Best regards,<br>The Marquis One Team</p>
      `,
    });

    console.log("Confirmation email response:", confirmationResponse);

    if (confirmationResponse.error) {
      console.error("Confirmation email error:", confirmationResponse.error);
      // Don't throw error for confirmation email failure, just log it
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);