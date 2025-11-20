import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mark T.",
    rating: 5,
    text: "Called him after my front door lock jammed. Arrived quicker than expected and fixed it on the spot. Honest bloke, solid workmanship.",
  },
  {
    name: "Jessica P.",
    rating: 5,
    text: "Had all the locks in my new unit replaced. Super professional, clean work, fair price. Feels good having the place properly secured now.",
  },
  {
    name: "Daniel H.",
    rating: 5,
    text: "Locked myself out at 11pm. He showed up fast and opened the door without any damage. Absolute legend.",
  },
  {
    name: "Emma R.",
    rating: 5,
    text: "Installed two deadbolts and repaired an old sliding door lock. Friendly, efficient, and the job looks great. Highly recommend.",
  },
  {
    name: "Liam S.",
    rating: 5,
    text: "Great communication, fair pricing, and he fixed a tricky lock two other locksmiths couldn't sort out. Couldn't be happier.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Needed a few internal locks repaired and one replaced. He explained everything, worked clean, and the results were perfect.",
  },
  {
    name: "Oliver W.",
    rating: 5,
    text: "Fast response and very professional. He rekeyed all my door locks after I moved in. Smooth job and really dependable service.",
  },
  {
    name: "Chloe D.",
    rating: 5,
    text: "He helped me with a stuck back door lock that I'd been dealing with for months. Quick fix, great attitude, and very reasonably priced.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <Card className="border-border bg-card transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header: Avatar + Name */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                          {initials(t.name)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-card-foreground truncate">{t.name}</p>
                        </div>
                      </div>

                      {/* Rating row */}
                      <div className="flex items-center gap-2 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                        <span className="sr-only">{t.rating} out of 5 stars</span>
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                        <span className="text-sm text-muted-foreground">{t.rating}.0</span>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-5 w-5 text-accent/40" />
                        <p className="text-card-foreground italic pl-4">"{t.text}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <CardContent className="p-6">
                {/* Header: Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-card-foreground truncate">{t.name}</p>
                  </div>
                </div>

                {/* Rating row */}
                <div className="flex items-center gap-2 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                  <span className="sr-only">{t.rating} out of 5 stars</span>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground">{t.rating}.0</span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-5 w-5 text-accent/40" />
                  <p className="text-card-foreground italic pl-4">"{t.text}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
;

export default Testimonials;
