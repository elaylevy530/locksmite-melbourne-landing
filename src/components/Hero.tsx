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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/portrait-man-doing-household-chores-participating-cleaning-home.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="relative z-10 w-full">
        <header className="absolute -top-80 left-0 right-0 flex items-center justify-center px-4 sm:px-8 py-2">
          <nav className="hidden lg:flex items-center gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-white hover:text-accent transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="text-white hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-green-hover text-accent-foreground px-6 py-2 font-medium"
            >
              Get A Quote
            </Button>
          </nav>
        </header>
      
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Available 24/7 for Emergencies</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-accent text-xl md:text-2xl font-medium">Welcome To Locksmite</h2>
            <Lock className="w-6 h-6 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Locked Out? </span>
            <span className="text-accent">We're Here 24/7.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Fast, reliable locksmith services across Melbourne. Your security is our priority.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-green-hover text-accent-foreground font-bold text-lg h-14 px-8"
            >
              <a href="tel:0363161113" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call Now: 03 6316 1113
              </a>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-semibold text-lg h-14 px-8"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        <div className="w-12 h-1 bg-accent rounded-full"></div>
        <div className="w-12 h-1 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-12 h-1 bg-white bg-opacity-50 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
