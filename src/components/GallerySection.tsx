import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera, Eye, ArrowRight } from "lucide-react";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import interiorModernLuxury from "@/assets/interior-modern-luxury.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import amenitiesGym from "@/assets/amenities-gym.jpg";
import amenitiesPool from "@/assets/amenities-pool.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      src: interiorLuxury,
      title: "Luxury Interior Design",
      description: "Premium finishes and elegant furnishings throughout"
    },
    {
      src: interiorModernLuxury,
      title: "Modern Living Spaces",
      description: "Contemporary design meets comfort and functionality"
    },
    {
      src: heroBuilding,
      title: "Architectural Excellence",
      description: "Stunning exterior design in the heart of Arjan"
    },
    {
      src: amenitiesGym,
      title: "State-of-the-Art Fitness",
      description: "Fully equipped wellness club and spa facilities"
    },
    {
      src: amenitiesPool,
      title: "Resort-Style Pool",
      description: "Beach-inspired swimming pool with leisure deck"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            <Camera className="w-4 h-4 mr-2" />
            Visual Gallery
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="text-gold">Marquis One</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our luxury development. From stunning interiors to world-class amenities, 
            discover what makes Marquis One the perfect choice for modern living.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 hover:scale-105">
                    <CardContent className="p-0 relative">
                      <div className="relative overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.title}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="secondary" size="sm" className="bg-white/90 text-navy hover:bg-white">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 border-gold/20 hover:bg-gold hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 border-gold/20 hover:bg-gold hover:text-white" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-card p-8 rounded-lg border border-gold/20 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Ready to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a private viewing to experience the luxury of Marquis One firsthand. 
              Our sales team will guide you through our show units and amenities.
            </p>
            <Button 
              className="bg-gradient-luxury text-white hover:bg-gold px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Viewing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;