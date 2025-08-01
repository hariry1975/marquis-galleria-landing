import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return <footer className="bg-luxury-gray text-luxury-pearl py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/a16d7663-c701-491f-a49d-0f12afd15dd4.png" 
              alt="Bright Gate Properties" 
              className="h-40 w-auto mb-4"
            />
            <p className="text-luxury-pearl/70">
              A revolutionary icon of modern living in Arjan, Dubai.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-luxury-pearl/70">
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#floor-plans" className="hover:text-primary transition-colors">Property Type</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Project Info</h4>
            <ul className="space-y-2 text-luxury-pearl/70">
              <li>Developer: Marquis Development</li>
              <li>Location: Arjan, Dubai</li>
              <li>Status: Off Plan</li>
              <li>Units: 500 Premium Apartments</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-luxury-pearl/70">
              <li>+971 561700817</li>
              <li>WhatsApp Available</li>
              <li>Arjan, Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-luxury-pearl/20 mb-8" />

        <div className="text-center text-luxury-pearl/60">
          <p>© 2025 Bright Gate Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;