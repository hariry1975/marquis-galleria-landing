import React from 'react';
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-luxury">
      <img 
        src="/lovable-uploads/2de0b383-e058-4511-9916-e729db402790.png" 
        alt="Arjan Dubai Location Map" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      
      {/* Location marker for Marquis One */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <MapPin className="w-8 h-8 text-gold drop-shadow-lg" fill="currentColor" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <Badge variant="secondary" className="bg-white/90 text-navy border-gold">
              Marquis One
            </Badge>
          </div>
        </div>
      </div>

      {/* Arjan label */}
      <div className="absolute top-4 right-4">
        <Badge variant="outline" className="bg-white/90 border-gold text-navy">
          Arjan, Dubai
        </Badge>
      </div>
    </div>
  );
};

export default Map;