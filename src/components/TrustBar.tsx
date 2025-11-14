import { Star, Shield, Clock } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Star className="h-5 w-5 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">5-Star Google Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Licensed & Insured</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">24/7 Emergency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
