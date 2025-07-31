import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Ruler, Download } from "lucide-react";

const FloorPlans = () => {
  const floorPlans = [
    {
      type: "1 Bedroom",
      size: "789 - 858 Sq Ft",
      types: "TYPE 1 to TYPE 2",
      category: "Apartment"
    },
    {
      type: "2 Bedrooms", 
      size: "1,193 - 1,322 Sq Ft",
      types: "TYPE 1 to TYPE 3",
      category: "Apartment"
    },
    {
      type: "3 Bedroom + Pool",
      size: "2,099 Sq Ft",
      types: "TYPE 1",
      category: "Premium Apartment"
    }
  ];

  return (
    <section id="floor-plans" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Floor Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Thoughtfully <span className="text-primary">Designed Layouts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expansive layouts with natural light and refined interiors that exude sophistication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-card rounded-lg mb-6 flex items-center justify-center">
                  <Home className="w-16 h-16 text-primary opacity-50" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{plan.type}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Ruler className="w-4 h-4 mr-2" />
                    {plan.size}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.types}</p>
                  <Badge variant="outline" className="text-xs">
                    {plan.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download All Floor Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;