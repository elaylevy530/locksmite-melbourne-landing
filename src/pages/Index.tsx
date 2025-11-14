import Navigation from "@/components/Navigation";
import { Phone } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import AssociatedBrands from "@/components/AssociatedBrands";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <AssociatedBrands />
      <Contact />
      <Map />
      <Footer />

      <div className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 sm:hidden">
        <a
          href="tel:0363161113"
          aria-label="התקשר עכשיו 03 6316 1113"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-hover)] hover:bg-[hsl(var(--green-hover))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Index;
