import { Lock, Clock, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  yearsOfExperience?: number;
  companyName?: string;
  city?: string;
}

const AboutSection = (props: Props) => {
  const { yearsOfExperience = 15, companyName = 'Your local locksmith 24/7', city = 'Melbourne' } = props;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-1 space-y-4 sm:space-y-6 lg:pl-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <span className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Local locksmiths in {city} — fast, safe and transparent
              </h2>

              {/* Stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                  <span>24/7</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                  <span>20–30 min ETA</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                  <span>Insured</span>
                </div>
              </div>

              {/* Bulleted value points */}
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground"><Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" /> Damage-free door opening</li>
                <li className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground"><Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" /> Cylinder replacement & smart locks</li>
                <li className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground"><Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" /> Car keys: cut & program on-site</li>
                <li className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground"><Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" /> Warranty on parts & labor</li>
              </ul>

              {/* Short story paragraph */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                At {companyName}, your safety and peace of mind come first. With {yearsOfExperience}+ years serving {city} homes and businesses, we bring the right tools and expertise to solve any lock or key issue quickly and professionally.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-accent hover:bg-green-hover text-accent-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <a href="tel:0363161113" aria-label="Call now 03 6316 1113">Call Now</a>
                </Button>
                <Button onClick={scrollToContact} variant="outline" className="font-semibold hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto">Get a Quote</Button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="hidden sm:block absolute top-0 left-8 sm:left-12 w-full h-full border-2 sm:border-4 border-accent rounded-lg transform translate-x-3 sm:translate-x-4 -translate-y-3 sm:-translate-y-4 z-0" aria-hidden="true"></div>

              <div className="relative z-10 bg-white rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/צילום מסך 2025-11-13 153802.png"
                  alt="Locksmith technician on site assisting a customer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute top-4 sm:top-8 right-2 sm:right-0 bg-accent text-accent-foreground px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-xl z-20 transform translate-x-4 sm:translate-x-8" aria-label={`${yearsOfExperience} years of experience`}>
                <div className="text-3xl sm:text-4xl font-bold text-center" aria-hidden="true">{yearsOfExperience}</div>
                <div className="text-[10px] sm:text-xs font-semibold text-center mt-1">Years of Experience</div>
              </div>

              <div className="hidden sm:block absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 transform -translate-x-8 sm:-translate-x-12 translate-y-8 sm:translate-y-12 opacity-20" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                  <polygon points="0,100 0,0 100,100" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

