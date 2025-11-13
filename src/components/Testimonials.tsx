import { Star } from "lucide-react";
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
