import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a16d7663-c701-491f-a49d-0f12afd15dd4.png" 
            alt="Bright Gate Properties" 
            className="h-12 md:h-20 w-auto" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#overview" className="text-foreground hover:text-primary transition-colors">Overview</a>
          <a href="#amenities" className="text-foreground hover:text-primary transition-colors">Amenities</a>
          <a href="#floor-plans" className="text-foreground hover:text-primary transition-colors">Types</a>
          <a href="#location" className="text-foreground hover:text-primary transition-colors">Location</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Phone className="w-4 h-4" />
            +971561700817
          </Button>
          <Button variant="luxury" size="sm">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#overview" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <a 
              href="#amenities" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </a>
            <a 
              href="#floor-plans" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Types
            </a>
            <a 
              href="#location" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="justify-start">
                <Phone className="w-4 h-4 mr-2" />
                +971561700817
              </Button>
              <Button variant="luxury" size="sm" className="justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;