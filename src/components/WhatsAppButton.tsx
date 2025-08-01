import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in Marquis One in Arjan. Please share details.");
    const phoneNumber = "971561700817"; // Without + symbol for WhatsApp API
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-luxury animate-pulse-gold"
      size="lg"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;