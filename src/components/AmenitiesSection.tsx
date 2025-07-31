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
import amenitiesPool from "@/assets/amenities-pool.jpg";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Waves, title: "Swimming Pool", description: "Temperature-controlled pool with leisure deck" },
    { icon: Dumbbell, title: "Gymnasium", description: "State-of-the-art fitness facilities" },
    { icon: Baby, title: "Kids Play Area", description: "Safe and supervised play zone for children" },
    { icon: Car, title: "Parking Facility", description: "Covered parking spaces for residents" },
    { icon: Trees, title: "Parks & Leisure", description: "Lush landscaping and recreation areas" },
    { icon: Utensils, title: "Dining Outlets", description: "Premium dining experiences" },
    { icon: ShoppingBag, title: "Retail Outlets", description: "Convenient shopping within the complex" },
    { icon: Sparkles, title: "Rooftop Barbecue", description: "Exclusive rooftop entertainment area" },
  ];

  return (
    <section id="amenities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Premium Amenities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-primary">Amenities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 25 luxury amenities spanning 20,000 sq. ft. designed for the ultimate lifestyle experience
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
            <h3 className="text-3xl font-bold">Gallery of Amenities</h3>
            <p className="text-muted-foreground leading-relaxed">
              The design ethos revolves around the concept of a "gallery of amenities," where every detail 
              contributes to a harmonious living experience. From the majestic double-height designer lobby 
              to private terraces with plunge pools, the development seamlessly blends modern aesthetics 
              with functional spaces.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary">Home Theatre</h4>
                <p className="text-sm text-muted-foreground">Cinematic entertainment</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary">Steam & Sauna</h4>
                <p className="text-sm text-muted-foreground">Wellness facilities</p>
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