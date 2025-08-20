import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ProjectOverview from "@/components/ProjectOverview";
import WhyArjanSection from "@/components/WhyArjanSection";

import UnitTypesSection from "@/components/UnitTypesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ROISection from "@/components/ROISection";
import SocialProofSection from "@/components/SocialProofSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyCtaBar />
      <Header />
      <HeroSection />
      <GallerySection />
      <ProjectOverview />
      <WhyArjanSection />
      
      <UnitTypesSection />
      <AmenitiesSection />
      <ROISection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
