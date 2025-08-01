import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProjectOverview = () => {
  const highlights = [
    "Smart Home Ready Apartments",
    "Options with Private Pools & Maid's Rooms",
    "Sky Lounge – First of its kind in Arjan",
    "Grand Lobby with Business Lounge",
    "Rooftop Garden & Pet Areas",
    "Fully Equipped Business Centre"
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              PROJECT HIGHLIGHTS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            A Lifestyle of Elevation
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            A boutique vertical community blending iconic architecture, green spaces, and technology-driven comfort.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          <Button variant="luxury" size="lg" className="px-8">
            Explore Unit Types & Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;