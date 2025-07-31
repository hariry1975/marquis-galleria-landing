import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, CheckCircle, Download } from "lucide-react";

const PaymentPlan = () => {
  const paymentSteps = [
    {
      icon: CreditCard,
      percentage: "20%",
      title: "Down Payment",
      description: "On Booking Date",
      color: "text-primary"
    },
    {
      icon: Calendar,
      percentage: "10%",
      title: "During Construction",
      description: "Easy Installments",
      color: "text-gold"
    },
    {
      icon: CheckCircle,
      percentage: "70%",
      title: "On Handover",
      description: "100% Completion",
      color: "text-navy"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Payment Plan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible <span className="text-primary">Payment Options</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convenient 30/70 payment plan designed to make your dream home accessible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {paymentSteps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-luxury"></div>
              <CardContent className="p-8 text-center">
                <step.icon className={`w-12 h-12 mx-auto mb-4 ${step.color}`} />
                <div className={`text-4xl font-bold mb-2 ${step.color}`}>
                  {step.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Home?</h3>
          <p className="text-muted-foreground mb-6">
            Download our detailed payment plan brochure and discover how easy it is to own your dream apartment
          </p>
          <Button variant="luxury" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download Payment Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;