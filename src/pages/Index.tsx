import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyArjanSection from "@/components/WhyArjanSection";
import ProjectOverview from "@/components/ProjectOverview";
import UnitTypesSection from "@/components/UnitTypesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ROISection from "@/components/ROISection";
import SocialProofSection from "@/components/SocialProofSection";
import PaymentPlan from "@/components/PaymentPlan";
import FloorPlans from "@/components/FloorPlans";
import LocationSection from "@/components/LocationSection";
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
      <WhyArjanSection />
      <ProjectOverview />
      <UnitTypesSection />
      <AmenitiesSection />
      <ROISection />
      <SocialProofSection />
      <PaymentPlan />
      <FloorPlans />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
