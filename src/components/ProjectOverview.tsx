import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Ruler, CreditCard, Calendar, MapPin } from "lucide-react";

const ProjectOverview = () => {
  const projectDetails = [
    { icon: Building, label: "Property Type", value: "Apartment" },
    { icon: Home, label: "Unit Types", value: "1, 2 & 3 BR" },
    { icon: Ruler, label: "Size Range", value: "789 to 2,099 SQ. FT." },
    { icon: CreditCard, label: "Down Payment", value: "20%" },
    { icon: Calendar, label: "Payment Plan", value: "30/70" },
    { icon: MapPin, label: "Handover", value: "Ready To Move In" },
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Project Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marquis One <span className="text-primary">Summary</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            By <strong>Marquis Development</strong> | <strong>Arjan, Dubai</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectDetails.map((detail, index) => (
            <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6 text-center">
                <detail.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{detail.label}</h3>
                <p className="text-muted-foreground">{detail.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">About the Project</h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Marquis One at Arjan</strong> is a revolutionary icon of modern living, a residential creation by esteemed 
              <strong> Marquis Development</strong> with premium designed 1, 2, and 3-bedroom apartments in Dubai. This is a testament 
              to architectural brilliance and contemporary luxury, this 09-storey masterpiece redefines urban elegance.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategically located in Arjan, provides unmatched connectivity to the city's landmarks while maintaining an 
              oasis-like ambiance within Dubai. The façade sets the benchmark for refined living, where the fusion of elegance, 
              innovation, and grandeur awaits you.
            </p>

            <div className="bg-gradient-card p-8 rounded-lg mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">Key Highlights</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• A stunning 9-storey modern façade featuring louvres, extended fins, and cascading water features</li>
                <li>• Thoughtfully designed apartments with expansive layouts and refined interiors</li>
                <li>• Ideally located in Arjan with easy access to Sheikh Mohammed Bin Zayed Road</li>
                <li>• Over 25 world-class amenities spanning 20,000 sq. ft.</li>
                <li>• Select apartments feature private plunge pools and terraces</li>
                <li>• Dedicated kids' play area with round-the-clock supervision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;