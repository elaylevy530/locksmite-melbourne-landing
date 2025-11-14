import { Button } from "@/components/ui/button";
import { Phone, Lock } from "lucide-react";

const brands = [
  {
    name: "Samsung",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Yale",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Yale_logo.svg",
  },
  {
    name: "ServiceSeeking",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ServiceSeeking_logo.svg",
  },
  {
    name: "Lockton",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Lockton_Companies_logo.svg",
  },
  {
    name: "Schlage",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Schlage_logo.svg",
  },
];

const AssociatedBrands = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-accent" />
            <span>Associated Brands</span>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            We Service & Install All Lock Manufacturers, Including
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            We provide a 24 hour automotive emergency service.
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {brands.map((b) => (
            <div key={b.name} className="rounded-lg border border-border bg-card p-6 flex flex-col items-center justify-center h-32">
              <img
                src={b.src}
                alt={`${b.name} logo`}
                className="max-h-10 w-auto object-contain opacity-90"
                loading="lazy"
                decoding="async"
              />
              <span className="mt-3 text-sm text-muted-foreground">{b.name}</span>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Call Us Now For Immediate Response
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-green-hover text-accent-foreground font-bold">
              <a href="tel:0363161113" aria-label="Call now 03 6316 1113" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                03-6316-1113
              </a>
            </Button>
            <Button onClick={scrollToContact} size="lg" variant="outline" className="font-semibold">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociatedBrands;
