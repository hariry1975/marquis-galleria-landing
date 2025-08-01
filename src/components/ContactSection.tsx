import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "971561700817";
    const message = encodeURIComponent(`Hi! I'm interested in Marquis One apartments. Please share floor plans and pricing information.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      toast({
        title: "✅ Details Sent Successfully!",
        description: "Thank you! Your inquiry has been submitted. Our team will contact you within 24 hours with pricing and floor plans.",
        duration: 3000,
      });

      // Reset form
      e.currentTarget.reset();
      
    } catch (error) {
      toast({
        title: "⚠️ Submission Error",
        description: "There was an issue submitting your details. Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Get In Touch
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            🚀 Secure Pre-Launch Access – <span className="text-gold">Limited Units Available</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Submit your interest and one of our consultants will get in touch within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-gold mr-3" />
                  <div>
                    <h3 className="font-semibold">Call Now</h3>
                    <p className="text-muted-foreground">Speak with our property consultants</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-luxury text-white hover:bg-gold">
                  <Phone className="w-4 h-4 mr-2" />
                  +971 56 170 0817
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">WhatsApp Direct</h3>
                    <p className="text-muted-foreground">Instant response guaranteed</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
           <Card className="shadow-luxury border-gold/20">
  <CardContent className="p-8">
    <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Send Me Prices & Floorplans</h3>
    
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="recipient" value="ehab@bgatere.com" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium">Phone (with country code) *</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+971 XX XXX XXXX"
            required
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="unit" className="text-sm font-medium">Select Unit Type</Label>
        <select
          id="unit"
          name="unitPreference"
          required
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
        >
          <option value="">Select preferred unit type</option>
          <option value="studio">Studio (AED 750,000)</option>
          <option value="1bhk">1BHK (AED 950,000)</option>
          <option value="2bhk">2BHK (AED 1,500,000)</option>
        </select>
      </div>

      <div>
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-luxury text-white hover:bg-gold disabled:opacity-50"
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send Me Prices & Floorplans"}
        </Button>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            📞 No obligations. No pressure. Just opportunity.
          </p>
          <p className="text-sm text-muted-foreground">
            💬 Live WhatsApp Chat available.
          </p>
        </div>
      </div>
    </form>
  </CardContent>
</Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;