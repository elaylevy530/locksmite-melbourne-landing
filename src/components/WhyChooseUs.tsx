import { Clock, Shield, Award, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency locksmith services. We're always here when you need us most.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance for your peace of mind.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decades of combined experience handling all types of locks and security systems.",
  },
  {
    icon: Users,
    title: "Trusted by 5000+ Customers",
    description: "Melbourne's most trusted locksmith service with hundreds of 5-star reviews.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Locksmite?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Melbourne's most reliable locksmith service with unmatched expertise and customer care
          </p>
        </div>

        {/* Mini-metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12" aria-label="Key advantages">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>24/7</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>15-20 min ETA</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-accent" />
            <span>Licensed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Award className="h-4 w-4 text-accent" />
            <span>Insured</span>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center rounded-xl bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.35)] focus-within:ring-2 focus-within:ring-accent"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <feature.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-accent hover:bg-[hsl(var(--green-hover))] text-accent-foreground font-bold">
            <a href="tel:0363161113" className="flex items-center gap-2" aria-label="Call now 03 6316 1113">
              <Phone className="h-5 w-5" />
              Call Now: 03 6316 1113
            </a>
          </Button>
          <Button size="lg" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-transparent" asChild>
            <a href="#contact" aria-label="Get a quote">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
