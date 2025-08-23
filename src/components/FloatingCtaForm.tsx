import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Minus, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const FloatingCtaForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    unitType: ""
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after 25% of page scroll
      const shouldShow = scrollPosition > windowHeight * 0.25;
      
      // Hide when near contact section (80% of page)
      const shouldHide = scrollPosition > documentHeight * 0.8;
      
      if (!isDismissed && shouldShow && !shouldHide) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@marquis.properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Lead - Floating Form Submission",
          _template: "table"
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted. We'll contact you shortly.",
        });
        navigate("/thank-you");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-80 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-luxury border-gold/20 bg-navy/95 backdrop-blur-md text-white">
        <div className="flex items-center justify-between p-3 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            <span className="font-semibold text-sm">Get Floor Plans</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <CardContent className="p-4">
            <div className="mb-4">
              <p className="text-sm text-gold font-semibold">Zero Commission Offer</p>
              <p className="text-xs text-white/80">Get prices & floor plans instantly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="floating-name" className="text-xs text-white/80">Full Name</Label>
                <Input
                  id="floating-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-8 text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="floating-phone" className="text-xs text-white/80">Phone Number</Label>
                <Input
                  id="floating-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-8 text-sm"
                  placeholder="+971 50 123 4567"
                  required
                />
              </div>

              <div>
                <Label htmlFor="floating-email" className="text-xs text-white/80">Email Address</Label>
                <Input
                  id="floating-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-8 text-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="floating-unit" className="text-xs text-white/80">Preferred Unit Type</Label>
                <Select value={formData.unitType} onValueChange={(value) => handleInputChange("unitType", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white h-8 text-sm">
                    <SelectValue placeholder="Select unit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1br">1 Bedroom</SelectItem>
                    <SelectItem value="2br">2 Bedroom</SelectItem>
                    <SelectItem value="any">Any Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-luxury hover:bg-gold text-white h-8 text-sm font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-3 h-3" />
                    Get Floor Plans Now
                  </div>
                )}
              </Button>
            </form>

            <p className="text-xs text-white/60 mt-3 text-center">
              No spam. Instant floor plans & pricing.
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default FloatingCtaForm;