import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectOverview from "@/components/ProjectOverview";
import AmenitiesSection from "@/components/AmenitiesSection";
import PaymentPlan from "@/components/PaymentPlan";
import FloorPlans from "@/components/FloorPlans";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectOverview />
      <AmenitiesSection />
      <PaymentPlan />
      <FloorPlans />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
