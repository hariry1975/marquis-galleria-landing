import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, TrendingUp, Eye, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProofBar = () => {
  const [liveViewers, setLiveViewers] = useState(23);
  const [recentPurchase, setRecentPurchase] = useState({ name: "Ahmed Al-Mansouri", location: "Dubai Marina", time: "3 minutes ago" });

  // Simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => Math.floor(Math.random() * 10) + 18);
      
      const names = ["Sarah Johnson", "Ahmed Al-Mansouri", "Priya Sharma", "Mohammed Hassan", "Elena Rodriguez"];
      const locations = ["Dubai Marina", "Downtown Dubai", "JBR", "Business Bay", "DIFC"];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      setRecentPurchase({
        name: randomName,
        location: randomLocation,
        time: `${Math.floor(Math.random() * 8) + 2} minutes ago`
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-sm border-t border-gold/20 py-4">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-navy">Dubai Land Department Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-navy">RERA Certified Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-navy">30% Capital Appreciation Expected</span>
          </div>
        </div>

        {/* Live Activity */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
            <Eye className="w-3 h-3 mr-1" />
            {liveViewers} people viewing now
          </Badge>
          
          <Card className="inline-flex items-center p-2 border-gold/20">
            <CardContent className="p-0 flex items-center gap-2">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-xs text-navy">
                <strong>{recentPurchase.name}</strong> from {recentPurchase.location} just registered • {recentPurchase.time}
              </span>
            </CardContent>
          </Card>

          <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
            Only 12 units remaining in this phase!
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;