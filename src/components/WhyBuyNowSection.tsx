import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Shield, DollarSign, Building, MapPin, Zap, Award } from "lucide-react";

const WhyBuyNowSection = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Pre-Launch Pricing",
      description: "Lock in today's prices before market launch. Save up to 15% compared to post-launch rates.",
      highlight: "Limited Time",
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "30% Capital Appreciation",
      description: "Arjan property values increased 28% in 2024. Marquis One positioned for similar growth.",
      highlight: "Proven ROI",
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Zero Commission",
      description: "Buy directly from developer. No agent fees means you save AED 35,000+ on average unit.",
      highlight: "Save Big",
      color: "blue"
    },
    {
      icon: Building,
      title: "Final Phase Launch",
      description: "Last opportunity to buy in Arjan's prime location. No more land available for development.",
      highlight: "Last Chance",
      color: "purple"
    },
    {
      icon: Shield,
      title: "5-Year Payment Plan",
      description: "Flexible payment structure with only 10% down payment. Easy instalments during construction.",
      highlight: "Easy Terms",
      color: "green"
    },
    {
      icon: Zap,
      title: "Move-in Ready 2028", 
      description: "Fully furnished luxury units. No additional costs or waiting time for interior setup.",
      highlight: "Hassle-Free",
      color: "gold"
    }
  ];

  const marketData = [
    { metric: "Arjan Price Growth (2024)", value: "+28%", positive: true },
    { metric: "Rental Yield", value: "7-9%", positive: true },
    { metric: "Dubai Property Index", value: "+15.2%", positive: true },
    { metric: "Units Remaining", value: "12", positive: false }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-luxury-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">
            ⚡ Limited Time Opportunity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Why Smart Investors Are Buying Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Market conditions, pricing, and availability have aligned perfectly. Here's what the data shows:
          </p>
        </div>

        {/* Market Data Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {marketData.map((data, index) => (
            <Card key={index} className="text-center shadow-soft">
              <CardContent className="p-4">
                <div className={`text-2xl font-bold ${data.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {data.value}
                </div>
                <div className="text-sm text-muted-foreground">{data.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="shadow-luxury hover:shadow-glow transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-gold/10 rounded-lg p-2">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <Badge 
                      className={`
                        ${reason.color === 'red' ? 'bg-red-100 text-red-700 border-red-200' : ''}
                        ${reason.color === 'green' ? 'bg-green-100 text-green-700 border-green-200' : ''}
                        ${reason.color === 'blue' ? 'bg-blue-100 text-blue-700 border-blue-200' : ''}
                        ${reason.color === 'purple' ? 'bg-purple-100 text-purple-700 border-purple-200' : ''}
                        ${reason.color === 'gold' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : ''}
                      `}
                    >
                      {reason.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-navy">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-luxury rounded-lg p-8">
          <div className="text-white">
            <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Our Direct Advantage</h3>
            <p className="text-lg opacity-90 mb-4">
              As the exclusive sales partner, we offer guaranteed best prices and insider access to premium units.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Price Match Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>First Choice of Units</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Best Floor & View Selection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyNowSection;