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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBuilding})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Own the Last Landmark Plot in <span className="bg-gradient-luxury bg-clip-text text-transparent">Arjan</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              <strong>Zero Commission!</strong> Luxury living meets prime investment. Final pre-launch units at Marquis One – Q4 2028 handover, unbeatable lifestyle amenities, and no agent fees.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-white/80">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                Arjan, Dubai | Plot P-22
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2 text-gold" />
                Studio,1 & 2 Bedroom Apartments
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gold" />
                Q4 2028 Handover
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
              <p className="text-4xl md:text-5xl font-bold font-playfair text-gold">AED 750,000</p>
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

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-xs bg-gradient-luxury border-gold/30 shadow-2xl">
              <CardContent className="p-4">
                <h3 className="font-playfair text-xl font-bold mb-4 text-center text-white">Get VIP Pre Launch Access</h3>
                
                <form
                  action="https://formsubmit.co/ehab@bgatere.com"
                  method="POST"
                  className="space-y-3"
                >
                  {/* Hidden Fields for Email Handling */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Lead - Marquis One Hero Form" />
                  <input type="hidden" name="_next" value="https://marquis-one.lovable.app?submitted=true" />

                  <div>
                    <Label htmlFor="hero-name" className="text-sm font-medium text-white">Full Name *</Label>
                    <Input
                      id="hero-name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hero-phone" className="text-sm font-medium text-white">Phone (with country code) *</Label>
                    <Input
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      placeholder="+971 XX XXX XXXX"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hero-email" className="text-sm font-medium text-white">Email Address *</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hero-unit" className="text-sm font-medium text-white">Select Unit Type</Label>
                    <select
                      id="hero-unit"
                      name="unitPreference"
                      required
                      className="mt-1 w-full border rounded px-3 py-2 text-sm bg-white"
                    >
                      <option value="">Select preferred unit type</option>
                      <option value="studio">Studio (AED 750,000)</option>
                      <option value="1bhk">1BHK (AED 950,000)</option>
                      <option value="2bhk">2BHK (AED 1,500,000)</option>
                    </select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-navy text-white hover:bg-navy/90 font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Me Prices & Floorplans
                  </Button>

                  <div className="text-center space-y-1">
                    <p className="text-xs text-white/90">
                      📞 No obligations. No pressure. Just opportunity.
                    </p>
                    <p className="text-xs text-white/90">
                      💬 Instant WhatsApp response available.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;