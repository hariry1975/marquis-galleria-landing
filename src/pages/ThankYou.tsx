import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Download, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track Google Ads conversions
    if (typeof window !== 'undefined' && window.gtag) {
      // Lead form conversion
      window.gtag('event', 'conversion', {
        'send_to': 'AW-931481903/Rh1FCJ_1iIobEK-SlbwD',
        'value': 1.0,
        'currency': 'AED'
      });

      // Page view conversion
      window.gtag('event', 'conversion', {
        'send_to': 'AW-931481903/CTdJCN-ByP0aEK-SlbwD',
        'value': 1.0,
        'currency': 'AED'
      });

      // Track GA4 form completion
      window.gtag('event', 'form_submit', {
        'event_category': 'Lead Generation',
        'event_label': 'Contact Form Completed',
        'value': 1
      });
    }
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "971561700817";
    const message = encodeURIComponent(`Hi! I just submitted my details on your website and would like to know more about Marquis One apartments.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-luxury border-gold/20 bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
              <Badge variant="outline" className="mb-4 border-gold text-gold">
                Success!
              </Badge>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Thank You for Your Interest!
              </h1>
              <p className="text-lg text-muted-foreground">
                Your inquiry has been successfully submitted. Our expert consultant will contact you within 24 hours with:
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>📄 Complete floor plans and unit layouts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>💰 Latest pricing and payment plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>🎯 Personalized investment advice</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>📅 Private viewing appointment (if desired)</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-3">🚀 What Happens Next?</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Step 1:</strong> Our consultant reviews your preferences</p>
                <p><strong>Step 2:</strong> We prepare personalized recommendations</p>
                <p><strong>Step 3:</strong> You receive a call within 24 hours</p>
                <p><strong>Step 4:</strong> Schedule viewing & secure your unit</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-gradient-luxury text-white hover:opacity-90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Us Now on WhatsApp
              </Button>

              <Button 
                variant="outline"
                onClick={() => navigate("/")}
                className="w-full border-gold text-gold hover:bg-gold/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Pro Tip:</strong> Save our WhatsApp number (+971 56 170 0817) for instant updates and quick questions!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default ThankYou;