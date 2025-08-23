import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import InteractiveSection from "@/components/InteractiveSection";
import GallerySection from "@/components/GallerySection";
import ProjectOverview from "@/components/ProjectOverview";
import WhyBuyNowSection from "@/components/WhyBuyNowSection";
import WhyArjanSection from "@/components/WhyArjanSection";
import UnitTypesSection from "@/components/UnitTypesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import FAQSection from "@/components/FAQSection";
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
      <SocialProofBar />
      <WhyBuyNowSection />
      <GallerySection />
      <ProjectOverview />
      <WhyArjanSection />
      <AmenitiesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <FloatingCtaForm />
    </div>
  );
};

export default Index;
