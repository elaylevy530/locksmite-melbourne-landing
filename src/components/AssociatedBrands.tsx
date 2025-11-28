import { Button } from "@/components/ui/button";
import { Phone, Lock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    name: "BRAVA",
    src: ""
  },
  {
    name: "carbina",
    src: ""
  },
  {
    name: "eufy",
    src: ""
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

        {/* Logos carousel */}
        <div className="relative mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-4 md:mb-6">Our Brands</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((b) => (
                <CarouselItem key={b.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="rounded-lg border border-border bg-card p-3 md:p-6 flex flex-col items-center justify-center h-auto">
                    {b.name === 'Schlage' && (
                      <img
                        src="/Schlage.png"
                        alt="Schlage product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'Lockton' && (
                      <img
                        src="/Lockton.png"
                        alt="Lockton product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'Yale' && (
                      <img
                        src="/Yale.png"
                        alt="Yale product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'Samsung' && (
                      <img
                        src="/Samsung.png"
                        alt="Samsung product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'BRAVA' && (
                      <img
                        src="/BRAVA.png"
                        alt="BRAVA product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'ServiceSeeking' && (
                      <img
                        src="/ServiceSeeking.png"
                        alt="ServiceSeeking product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'carbina' && (
                      <img
                        src="/carbina.png"
                        alt="carbina product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {b.name === 'eufy' && (
                      <img
                        src="/eufy.png"
                        alt="eufy product"
                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 md:-left-12 h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="right-1 md:-right-12 h-8 w-8 md:h-10 md:w-10" />
          </Carousel>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Call Us Now For Immediate Response
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-green-hover text-accent-foreground font-bold">
              <a href="tel:0356150114" aria-label="Call now 03 5615 0114" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
               0356150114
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
