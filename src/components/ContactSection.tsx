import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "", 
    unitPreference: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          unitPreference: formData.unitPreference,
          message: formData.message || "No additional message"
        }
      });

      if (error) throw error;

      toast.success("Thank you! We'll contact you within 24 hours with floor plans and pricing.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        unitPreference: "",
        message: ""
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error("Failed to send email. Please try WhatsApp or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in Marquis One apartments. Here are my details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Unit Preference: ${formData.unitPreference}
Message: ${formData.message}

Please share floor plans and pricing information.`);
    
    const phoneNumber = "971561700817";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone (with country code) *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="unit" className="text-sm font-medium">Select Unit Type</Label>
                    <Select value={formData.unitPreference} onValueChange={(value) => setFormData({...formData, unitPreference: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preferred unit type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio (AED 750,000)</SelectItem>
                        <SelectItem value="1bhk">1BHK (AED 950,000)</SelectItem>
                        <SelectItem value="2bhk">2BHK (AED 1,500,000)</SelectItem>
                      </SelectContent>
                    </Select>
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