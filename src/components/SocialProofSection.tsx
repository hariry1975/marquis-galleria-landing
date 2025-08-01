import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Shield, Award, CheckCircle, TrendingUp } from "lucide-react";

const SocialProofSection = () => {
  const stats = [
    { number: "120+", label: "Clients Registered", icon: Users },
    { number: "95%", label: "Customer Satisfaction", icon: Star },
    { number: "AED 50M+", label: "Properties Sold", icon: TrendingUp },
    { number: "100%", label: "RERA Compliance", icon: Shield }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: "RERA Approved",
      description: "Fully licensed and regulated by Dubai government"
    },
    {
      icon: Award,
      title: "Developer Guarantee", 
      description: "Marquis Development - Proven track record"
    },
    {
      icon: CheckCircle,
      title: "Zero Commission Promise",
      description: "No hidden fees - deal directly with developer"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      location: "Dubai",
      rating: 5,
      text: "Saved AED 75,000 in commission fees. The team was professional and the location is perfect for investment."
    },
    {
      name: "Sarah Johnson", 
      location: "UK",
      rating: 5,
      text: "As an overseas investor, the zero commission model made perfect sense. Already getting great rental returns."
    },
    {
      name: "Mohammed Hassan",
      location: "Abu Dhabi", 
      rating: 5,
      text: "The payment plan flexibility and prime location convinced me. My unit is ready and tenants moved in immediately."
    }
  ];

  return (
    <section id="social-proof" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Trusted by Investors
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Why Investors <span className="text-gold">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 120+ satisfied investors who have secured their piece of Dubai's fastest-growing district.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-luxury p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <indicator.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;