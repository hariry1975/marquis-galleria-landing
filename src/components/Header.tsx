import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a16d7663-c701-491f-a49d-0f12afd15dd4.png" 
            alt="Bright Gate Properties" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#overview" className="text-foreground hover:text-primary transition-colors">Overview</a>
          <a href="#amenities" className="text-foreground hover:text-primary transition-colors">Amenities</a>
          <a href="#floor-plans" className="text-foreground hover:text-primary transition-colors">Floor Plans</a>
          <a href="#location" className="text-foreground hover:text-primary transition-colors">Location</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Phone className="w-4 h-4" />
            +971561700817
          </Button>
          <Button variant="luxury" size="sm">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;