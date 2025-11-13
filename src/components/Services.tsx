import { Lock, Home, Car, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lock,
    title: "Emergency Lockout",
    description: "Locked out of your home or car? We provide fast emergency lockout services 24/7 across Melbourne.",
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Home lock installation, repair, and rekeying services. We secure your home with quality locks.",
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Car key replacement, ignition repair, and emergency car lockout assistance for all vehicle types.",
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Professional security system installation including smart locks, CCTV, and access control systems.",
  },
  {
    icon: Clock,
    title: "Lock Repair & Maintenance",
    description: "Expert lock repair and maintenance services to keep your property secure and functioning smoothly.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional locksmith solutions for every security need in Melbourne
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button 
                  onClick={scrollToContact}
                  variant="ghost" 
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-semibold"
                >
                  Book Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
