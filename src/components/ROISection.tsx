import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Shield, Award, Calculator, PieChart } from "lucide-react";

const ROISection = () => {
  const roiHighlights = [
    {
      icon: TrendingUp,
      title: "8-9% Rental Yield",
      description: "Arjan offers one of Dubai's highest rental yields",
      value: "8-9%"
    },
    {
      icon: DollarSign,
      title: "Zero Commission Savings",
      description: "Save 5% instantly on purchase price",
      value: "5%"
    },
    {
      icon: Award,
      title: "Capital Appreciation",
      description: "Strong growth potential in developing area",
      value: "High"
    },
    {
      icon: Shield,
      title: "Investment Security",
      description: "RERA approved and developer guarantee",
      value: "Secure"
    }
  ];

  const costSavings = [
    { item: "Studio (AED 750,000)", commission: "AED 37,500", total: "AED 787,500" },
    { item: "1BHK (AED 950,000)", commission: "AED 47,500", total: "AED 997,500" },
    { item: "2BHK (AED 1,500,000)", commission: "AED 75,000", total: "AED 1,575,000" }
  ];

  return (
    <section id="roi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold text-gold">
            Investment Returns
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Maximize Your <span className="text-gold">ROI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart investment opportunity with high rental yields, zero commission fees, and strong capital appreciation potential in Dubai's growing Arjan district.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roiHighlights.map((highlight, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="bg-gradient-luxury p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{highlight.title}</h3>
                <div className="text-2xl font-bold text-gold mb-2">{highlight.value}</div>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">Zero Commission = Instant Savings</h3>
            <div className="space-y-4 mb-8">
              {costSavings.map((saving, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">{saving.item}</h4>
                        <p className="text-sm text-green-600 font-medium">You Save: {saving.commission}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gold">{saving.commission}</p>
                        <p className="text-xs text-muted-foreground">Commission Saved</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg border border-gold/20">
              <h4 className="font-semibold text-gold mb-3 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Investment Benefits
              </h4>
              <ul className="space-y-2 text-sm">
                <li>✅ <strong>High rental demand</strong> - Perfect for Airbnb or long-term rental</li>
                <li>✅ <strong>Growing area</strong> - New infrastructure and amenities</li>
                <li>✅ <strong>No agent fees</strong> - Deal directly with developer</li>
                <li>✅ <strong>Flexible payment plans</strong> - 20% down, 80% during construction</li>
                <li>✅ <strong>Prime location</strong> - Close to major attractions and business districts</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-luxury p-8 rounded-lg text-white">
            <div className="text-center mb-6">
              <PieChart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold">Investment Calculator</h3>
              <p className="text-white/80">Based on 2BHK apartment</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span>Property Price</span>
                <span className="font-bold">AED 1,500,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span>Commission Saved</span>
                <span className="font-bold text-green-300">- AED 75,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span>Net Investment</span>
                <span className="font-bold">AED 1,425,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span>Expected Rental/Year</span>
                <span className="font-bold text-green-300">AED 120,000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg">Annual ROI</span>
                <span className="text-2xl font-bold text-yellow-300">8.4%</span>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6 bg-white text-gold hover:bg-white/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Detailed ROI Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;