import { Phone, Clock, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <section id="hero" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 hero-bg"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-60" />
      </div>
      
      <div className="relative z-10 w-full">
      
      <div className="container mx-auto px-4 sm:px-8 py-8 md:py-16 lg:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
            <Clock className="h-3 w-3 md:h-4 md:w-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">24/7 • 15-20 min ETA • Licensed & Insured</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8 leading-tight">
            <span className="text-white">Locked out?</span>
            <span className="text-accent"> Fast, damage‑free entry.</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-2xl">
            City‑wide Melbourne coverage, transparent pricing, quick response.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-green-hover text-accent-foreground font-bold text-base md:text-lg h-12 md:h-14 px-6 md:px-8"
            >
              <a href="tel:0356150114" className="flex items-center gap-2 md:gap-3">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                Call Now: 03 5615 0114
              </a>
            </Button>
          </div>
        </div>
      </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        <div className="w-8 h-0.5 md:w-12 md:h-1 bg-accent rounded-full"></div>
        <div className="w-8 h-0.5 md:w-12 md:h-1 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-8 h-0.5 md:w-12 md:h-1 bg-white bg-opacity-50 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
