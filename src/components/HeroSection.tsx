import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Calendar } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBuilding})`
    }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 bg-card/20 backdrop-blur-sm border-primary-foreground/30">
            <Calendar className="w-4 h-4 mr-2" />
            Ready to Move In
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Marquis <span className="bg-gradient-luxury bg-clip-text text-transparent">One</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
        </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-primary-foreground/80">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Arjan, Dubai
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 mr-2" />
              1, 2 & 3 Bedroom Apartments
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-primary-foreground/70 mb-2">Starting From</p>
            <p className="text-4xl md:text-5xl font-bold text-gold">AED 750,000</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Schedule Viewing
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;