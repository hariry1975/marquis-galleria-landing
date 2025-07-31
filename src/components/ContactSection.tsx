import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";
import interiorLuxury from "@/assets/interior-luxury.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our <span className="text-primary">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make Marquis Galleria your home? Our expert team is here to assist you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={interiorLuxury} 
              alt="Luxury Interior" 
              className="rounded-lg shadow-luxury w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">Speak directly with our sales team</p>
                    </div>
                  </div>
                  <Button variant="luxury" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    +971 55 162 3236
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">Quick and convenient messaging</p>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Send us a message
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" type="email" />
                  </div>
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button variant="premium" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
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