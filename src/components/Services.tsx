import { Lock, Home, Car, Shield, Clock, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lock,
    title: "Emergency Lockout",
    description:
      "Locked out of your home or car? We provide fast emergency lockout services 24/7 across Melbourne.",
    badges: ["24/7", "No damage"],
    bullets: ["Avg arrival 20–30 min", "Licensed & insured"],
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description:
      "Home lock installation, repair, and rekeying services. We secure your home with quality locks.",
    badges: ["Same-day"],
    bullets: ["Rekey & fresh installs", "Warranty on parts"],
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description:
      "Car key replacement, ignition repair, and emergency car lockout assistance for all vehicle types.",
    badges: ["On-site"],
    bullets: ["Most makes & models", "Cut & program keys"],
  },
  {
    icon: Shield,
    title: "Security Systems",
    description:
      "Professional security system installation including smart locks, CCTV, and access control systems.",
    badges: ["Commercial"],
    bullets: ["Smart locks & CCTV", "Access control"],
  },
  {
    icon: Clock,
    title: "Lock Repair & Maintenance",
    description:
      "Expert lock repair and maintenance services to keep your property secure and functioning smoothly.",
    badges: ["Reliable"],
    bullets: ["All major brands", "Preventative service"],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional locksmith solutions for every security need in Melbourne
          </p>
          <div className="mt-3 text-sm text-muted-foreground">24/7 • Avg arrival 20–30 min • Licensed & Insured</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 relative">
                {/* Badges */}
                {service.badges?.length ? (
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {service.badges.map((b, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-xs bg-accent/10 text-accent border border-accent/20"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Bullets */}
                {service.bullets?.length ? (
                  <ul className="space-y-2 mb-4">
                    {service.bullets.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <Button
                  onClick={scrollToContact}
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-semibold focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                  aria-label={`Book ${service.title}`}
                >
                  Book Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-accent hover:bg-green-hover text-accent-foreground font-bold">
            <a href="tel:0363161113" className="flex items-center gap-2" aria-label="Call now 03 6316 1113">
              Call Now: 03 6316 1113
            </a>
          </Button>
          <Button onClick={scrollToContact} size="lg" variant="outline" className="font-semibold">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
