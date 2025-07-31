import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Car } from "lucide-react";

const LocationSection = () => {
  const nearbyLandmarks = [
    { name: "Dubai Miracle Garden", time: "5 minutes", icon: "🌺" },
    { name: "Mall of the Emirates", time: "10 minutes", icon: "🛍️" },
    { name: "Sheikh Mohammed Bin Zayed Road", time: "Direct Access", icon: "🛣️" },
    { name: "Dubai Marina", time: "15 minutes", icon: "🏙️" },
    { name: "Dubai International Airport", time: "25 minutes", icon: "✈️" },
    { name: "Downtown Dubai", time: "20 minutes", icon: "🏢" }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Prime Location
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Strategically <span className="text-primary">Located</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ideally positioned in Arjan with unmatched connectivity to Dubai's landmarks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <MapPin className="inline-block w-8 h-8 text-primary mr-2" />
              Arjan, Dubai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Strategically located in Arjan, Marquis Galleria provides unmatched connectivity to the city's 
              landmarks while maintaining an oasis-like ambiance within Dubai. The location offers easy access 
              to Sheikh Mohammed Bin Zayed Road and nearby attractions.
            </p>

            <div className="bg-gradient-card p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-4 flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Easy Connectivity
              </h4>
              <p className="text-muted-foreground text-sm">
                With direct access to major highways and proximity to key destinations, residents enjoy 
                seamless connectivity to all of Dubai's business, shopping, and entertainment hubs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Nearby Landmarks
            </h4>
            {nearbyLandmarks.map((landmark, index) => (
              <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{landmark.icon}</span>
                    <div>
                      <h5 className="font-medium">{landmark.name}</h5>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary">
                    {landmark.time}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;