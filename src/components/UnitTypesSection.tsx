import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Bath, Waves, Users, Ruler } from "lucide-react";

const UnitTypesSection = () => {
  const unitTypes = [
    {
      type: "Studio",
      size: "450 SQ FT",
      price: "AED 750,000",
      bedrooms: 0,
      bathrooms: 1,
      features: ["Smart Home Ready", "Balcony", "Built-in Wardrobes"],
      popular: false
    },
    {
      type: "1BHK",
      size: "650 SQ FT", 
      price: "AED 950,000",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Open Kitchen", "Balcony", "Storage Space"],
      popular: true
    },
    {
      type: "1BHK + Private Pool",
      size: "750 SQ FT",
      price: "AED 1,200,000",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Private Pool", "Terrace", "Premium Finishes"],
      popular: false
    },
    {
      type: "1BHK + Maid's Room",
      size: "850 SQ FT",
      price: "AED 1,100,000", 
      bedrooms: 1,
      bathrooms: 2,
      features: ["Maid's Room", "Extra Storage", "Family Friendly"],
      popular: false
    },
    {
      type: "2BHK",
      size: "1,200 SQ FT",
      price: "AED 1,500,000",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Spacious Layout", "Master En-Suite", "Guest Bathroom"],
      popular: true
    },
    {
      type: "2BHK + Private Pool",
      size: "1,400 SQ FT",
      price: "AED 1,850,000",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Private Pool", "Large Terrace", "Luxury Finishes"],
      popular: false
    },
    {
      type: "2BHK + Maid's Room",
      size: "1,500 SQ FT",
      price: "AED 1,700,000",
      bedrooms: 2,
      bathrooms: 3,
      features: ["Maid's Room", "Family Room", "Premium Location"],
      popular: false
    }
  ];

  return (
    <section id="floor-plans" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Property Type
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect <span className="text-gold">Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From studios to luxury apartments with private pools, find the perfect space that matches your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitTypes.map((unit, index) => (
            <Card key={index} className={`relative shadow-soft hover:shadow-luxury transition-all duration-300 hover:scale-105 ${unit.popular ? 'ring-2 ring-gold' : ''}`}>
              {unit.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-luxury text-white">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">{unit.type}</h3>
                  <div className="text-2xl font-bold text-gold mb-1">{unit.price}</div>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>

                <div className="flex justify-center items-center space-x-6 mb-6 text-muted-foreground">
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-1 text-gold" />
                    <span className="text-sm">{unit.bedrooms} BR</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1 text-gold" />
                    <span className="text-sm">{unit.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-4 h-4 mr-1 text-gold" />
                    <span className="text-sm">{unit.size}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {unit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-luxury text-white hover:bg-gold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Floor Plan
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            💰 <strong>Zero Commission</strong> means you save 5% on every unit
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-luxury text-white hover:bg-gold px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Compare All Floor Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UnitTypesSection;