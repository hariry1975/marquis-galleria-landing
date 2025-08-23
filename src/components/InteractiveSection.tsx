import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Home, Calculator, Eye, ArrowRight, Bed, Bath, SquareCheckBig } from "lucide-react";
import { useState } from "react";

const InteractiveSection = () => {
  const [selectedUnit, setSelectedUnit] = useState("1br");

  const unitTypes = [
    {
      id: "studio",
      name: "Studio",
      size: "450-550 sq ft",
      price: "AED 700,000",
      beds: 0,
      baths: 1,
      features: ["Open Kitchen", "Balcony", "Built-in Wardrobes"],
      popular: false
    },
    {
      id: "1br",
      name: "1 Bedroom",
      size: "650-750 sq ft", 
      price: "AED 950,000",
      beds: 1,
      baths: 2,
      features: ["Spacious Living", "Master Bedroom", "Laundry Room", "Premium Finishes"],
      popular: true
    },
    {
      id: "2br",
      name: "2 Bedroom",
      size: "950-1,100 sq ft",
      price: "AED 1,350,000", 
      beds: 2,
      baths: 2,
      features: ["En-suite Bathrooms", "Maid's Room", "Large Balcony", "Premium Kitchen"],
      popular: false
    }
  ];

  const currentUnit = unitTypes.find(unit => unit.id === selectedUnit);

  return (
    <section className="py-16 bg-gradient-to-b from-luxury-pearl to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Experience Before You Buy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive floor plans, virtual tours, and instant mortgage calculations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Virtual Tour & Calculator */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-luxury">
              <div className="relative aspect-video bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4 inline-block">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">360° Virtual Tour</h3>
                  <p className="text-white/80 mb-4">Experience luxury living from every angle</p>
                  <Button variant="secondary" className="bg-gold hover:bg-gold-dark text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Start Virtual Tour
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-gold" />
                  Mortgage Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your monthly payments with UAE's best rates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-luxury-pearl rounded-lg p-4">
                    <div className="text-2xl font-bold text-navy">2.99%</div>
                    <div className="text-sm text-muted-foreground">Interest Rate</div>
                  </div>
                  <div className="bg-luxury-pearl rounded-lg p-4">
                    <div className="text-2xl font-bold text-navy">25 Years</div>
                    <div className="text-sm text-muted-foreground">Max Tenure</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-luxury text-white hover:opacity-90">
                  Calculate Monthly Payment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Floor Plans */}
          <div>
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gold" />
                  Interactive Floor Plans
                </CardTitle>
                <CardDescription>
                  Click to explore different unit configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Unit Type Selector */}
                <div className="flex gap-2">
                  {unitTypes.map((unit) => (
                    <Button
                      key={unit.id}
                      variant={selectedUnit === unit.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedUnit(unit.id)}
                      className={selectedUnit === unit.id ? "bg-gold hover:bg-gold-dark" : ""}
                    >
                      {unit.popular && <Badge className="mr-1 scale-75 bg-red-500">Popular</Badge>}
                      {unit.name}
                    </Button>
                  ))}
                </div>

                {/* Selected Unit Details */}
                {currentUnit && (
                  <div className="space-y-4">
                    <div className="bg-luxury-pearl rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
                            {currentUnit.name}
                            {currentUnit.popular && (
                              <Badge className="bg-red-500">Most Popular</Badge>
                            )}
                          </h3>
                          <p className="text-muted-foreground">{currentUnit.size}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gold">{currentUnit.price}</div>
                          <div className="text-sm text-muted-foreground">Starting from</div>
                        </div>
                      </div>

                      <div className="flex gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4 text-gold" />
                          <span className="text-sm">{currentUnit.beds} Bed{currentUnit.beds !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4 text-gold" />
                          <span className="text-sm">{currentUnit.baths} Bath{currentUnit.baths !== 1 ? 's' : ''}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-navy">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {currentUnit.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <SquareCheckBig className="w-4 h-4 text-gold" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-luxury text-white hover:opacity-90">
                        <Eye className="w-4 h-4 mr-2" />
                        View Floor Plan
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Get Brochure
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;