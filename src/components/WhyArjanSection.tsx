import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Plane, Building, TreePine, Train } from "lucide-react";
import Map from "@/components/Map";

const WhyArjanSection = () => {
  const locations = [
    { icon: TreePine, name: "Miracle Garden", time: "5 minutes", description: "World's largest natural flower garden" },
    { icon: Plane, name: "Dubai Airport", time: "25 minutes", description: "International connectivity" },
    { icon: Building, name: "Business Bay", time: "17 minutes", description: "Financial district" },
    { icon: Train, name: "Metro Station", time: "Walking distance", description: "Upcoming Red Line extension" },
  ];

  const highlights = [
    "Prime location in rapidly developing Arjan",
    "Direct access to Sheikh Mohammed Bin Zayed Road",
    "Family-friendly community with schools nearby",
    "Growing rental demand - perfect for investors",
    "Surrounded by leisure attractions and shopping"
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Prime Location
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gold">Arjan?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically positioned in one of Dubai's most promising neighborhoods, offering the perfect blend of convenience and community living.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">Connected to Everything That Matters</h3>
            <div className="space-y-4 mb-8">
              {locations.map((location, index) => (
                <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-luxury p-3 rounded-full">
                        <location.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{location.name}</h4>
                          <div className="flex items-center text-gold">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">{location.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{location.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg border border-gold/20">
              <h4 className="font-semibold text-gold mb-3">Location Advantages</h4>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:order-first">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArjanSection;