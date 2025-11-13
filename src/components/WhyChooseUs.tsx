import { Clock, Shield, Award, Users } from "lucide-react";

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
    <section id="why-choose-us" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Locksmite?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Melbourne's most reliable locksmith service with unmatched expertise and customer care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
