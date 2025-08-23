import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ProjectOverview from "@/components/ProjectOverview";
import WhyArjanSection from "@/components/WhyArjanSection";
import UnitTypesSection from "@/components/UnitTypesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCtaForm from "@/components/FloatingCtaForm";

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
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <FloatingCtaForm />
    </div>
  );
};

export default Index;
