import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Richmond, VIC",
    rating: 5,
    text: "Locked myself out at 2am and they arrived within 20 minutes! Professional, friendly, and incredibly fast service. Highly recommend Locksmite!",
  },
  {
    name: "David Chen",
    location: "Melbourne CBD",
    rating: 5,
    text: "Had them install a new security system for my business. Outstanding work and very reasonable pricing. The team was punctual and thorough.",
  },
  {
    name: "Emma Thompson",
    location: "St Kilda, VIC",
    rating: 5,
    text: "Lost my car keys and was stranded. These guys came to my rescue quickly and made me a new key on the spot. Lifesavers!",
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <CardContent className="p-6">
                {/* Header: Avatar + Name/Location */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-card-foreground truncate">{t.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{t.location}</p>
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
