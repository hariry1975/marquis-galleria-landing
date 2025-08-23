import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Building, Calendar, Clock, Trophy, Shield, Send } from "lucide-react";
import heroBuilding from "@/assets/hero-marquis-one.jpg";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBuilding})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        {/* Main Content - Full Width */}
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight text-center">
              Own the Last Landmark<br />Plot in <span className="bg-gradient-luxury bg-clip-text text-transparent">Arjan</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              <strong>Zero Commission!</strong> Luxury living meets prime investment. Final pre-launch units at Marquis One – Q4 2028 handover, unbeatable lifestyle amenities, and no agent fees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-medium">Arjan, Dubai</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                <Building className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-medium">Studio, 1 & 2BR</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                <Calendar className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-medium">Q4 2028 Handover</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                <Trophy className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-medium">5 Years Payment</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                <Shield className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-medium">Fully Furnished</span>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 mr-2 text-gold" />
                <span className="text-sm font-semibold">Pre-Launch Offer Ends In:</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gold/20 rounded p-2">
                  <div className="text-xl font-bold text-gold">{timeLeft.days}</div>
                  <div className="text-xs text-white/70">DAYS</div>
                </div>
                <div className="bg-gold/20 rounded p-2">
                  <div className="text-xl font-bold text-gold">{timeLeft.hours}</div>
                  <div className="text-xs text-white/70">HOURS</div>
                </div>
                <div className="bg-gold/20 rounded p-2">
                  <div className="text-xl font-bold text-gold">{timeLeft.minutes}</div>
                  <div className="text-xs text-white/70">MINS</div>
                </div>
                <div className="bg-gold/20 rounded p-2">
                  <div className="text-xl font-bold text-gold animate-countdown">{timeLeft.seconds}</div>
                  <div className="text-xs text-white/70">SECS</div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-2">Starting From</p>
              <p className="text-4xl md:text-5xl font-bold font-playfair text-gold">AED 700,000</p>
              <p className="text-sm text-white/60 mt-1">*Zero commission saves you AED 37,500</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-gradient-luxury text-white hover:bg-gold px-8 py-6 font-semibold shadow-glow text-base">
                Register Now to Get Prices & Floor Plans
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-6 text-white/70">
              <p className="text-base">🔥 <strong>120+ clients already registered</strong>• Only few units left</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;