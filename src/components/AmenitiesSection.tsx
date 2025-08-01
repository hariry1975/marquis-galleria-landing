import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Dumbbell, 
  Baby, 
  Car, 
  Trees, 
  Utensils, 
  ShoppingBag, 
  Sparkles 
} from "lucide-react";
import amenitiesPool from "@/assets/amenities-luxury-pool.jpg";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Waves, title: "Swimming Pool", description: "Temperature-controlled pool with leisure deck" },
    { icon: Dumbbell, title: "Gymnasium", description: "State-of-the-art fitness facilities" },
    { icon: Baby, title: "Kids Play Area", description: "Safe and supervised play zone for children" },
    { icon: Car, title: "Smart Parking", description: "EV charging stations and covered parking" },
    { icon: Trees, title: "Sky Lounge", description: "First in Arjan - Rooftop entertainment area" },
    { icon: Utensils, title: "Business Centre", description: "Co-working spaces and meeting rooms" },
    { icon: ShoppingBag, title: "Retail Outlets", description: "Convenient shopping within the complex" },
    { icon: Sparkles, title: "24/7 Concierge", description: "Premium lifestyle management services" },
  ];

  const creativeAmenities = [
    "Creative Rooms (Art & Music Studios)",
    "Cold Ice Tub & Recovery Zone", 
    "Cinema Lounge with Premium Sound",
    "Full-Service Spa & Wellness Center",
    "Multi-Sports Court",
    "Pet Zones & Walking Areas",
    "Smart Home Integration",
    "Rooftop Garden & BBQ Area"
  ];

  return (
    <section id="amenities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Luxury Amenities
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold">25+</span> World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Sky Lounge (first in Arjan) to smart home features, experience luxury living redefined across 20,000 sq. ft. of premium amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={amenitiesPool} 
              alt="Luxury Pool Amenities" 
              className="rounded-lg shadow-luxury w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold">Smart Luxury Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Marquis One introduces the first Sky Lounge in Arjan, featuring panoramic views and premium entertainment facilities. 
              Every detail is designed for modern luxury living, from smart home integration to wellness-focused amenities.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {creativeAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-card p-6 rounded-lg border border-gold/20">
              <h4 className="font-semibold text-gold mb-3">Premium Features</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Grand Lobby</p>
                  <p className="text-xs text-muted-foreground">Double-height designer entrance</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Smart Homes</p>
                  <p className="text-xs text-muted-foreground">IoT enabled apartments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <amenity.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;