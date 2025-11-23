import { Lock, Clock, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  yearsOfExperience?: number;
  companyName?: string;
  city?: string;
}

const AboutSection = (props: Props) => {
  const { yearsOfExperience = 15, companyName = 'QuickLock locksmith 24/7', city = 'Melbourne' } = props;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-1 space-y-3 md:space-y-6 lg:pl-0">
              <div className="flex items-center gap-2 md:gap-3">
                <Lock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <span className="text-base md:text-lg font-bold text-primary uppercase tracking-wide">About Us</span>
              </div>

              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Local locksmiths in {city} — fast, safe and transparent
              </h2>

              {/* Stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                  <span>24/7</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                  <span>15-20 min ETA</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Shield className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Shield className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                  <span>Insured</span>
                </div>
              </div>

              {/* Bulleted value points */}
              <ul className="space-y-1.5 md:space-y-2">
                <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"><Check className="h-3 w-3 md:h-4 md:w-4 text-accent shrink-0" /> Damage-free door opening</li>
                <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"><Check className="h-3 w-3 md:h-4 md:w-4 text-accent shrink-0" /> Cylinder replacement & smart locks</li>
                <li className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"><Check className="h-3 w-3 md:h-4 md:w-4 text-accent shrink-0" /> Warranty on parts & labor</li>
              </ul>

              {/* Short story paragraph */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                At {companyName}, your safety and peace of mind come first. With {yearsOfExperience}+ years serving {city} homes and businesses, we bring the right tools and expertise to solve any lock or key issue quickly and professionally.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-accent hover:bg-green-hover text-accent-foreground font-bold">
                  <a href="tel:0356150114" aria-label="Call now 03 5615 0114">Call Now</a>
                </Button>
                <Button onClick={scrollToContact} variant="outline" className="font-semibold">Get a Quote</Button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative order-2 lg:order-2">
              {/* Decorative border - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute top-0 left-6 md:left-12 w-full h-full border-2 md:border-4 border-accent rounded-lg transform translate-x-2 md:translate-x-4 -translate-y-2 md:-translate-y-4 z-0" aria-hidden="true"></div>

              <div className="relative z-10 bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/צילום מסך 2025-11-13 153802.png"
                  alt="Locksmith technician on site assisting a customer"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Years badge - adjusted for mobile */}
              <div className="absolute top-3 right-3 md:top-8 md:right-0 bg-accent text-accent-foreground px-3 py-1.5 md:px-6 md:py-4 rounded-lg shadow-lg z-20 md:transform md:translate-x-8" aria-label={`${yearsOfExperience} years of experience`}>
                <div className="text-xl md:text-4xl font-bold text-center" aria-hidden="true">{yearsOfExperience}</div>
                <div className="text-[9px] md:text-xs font-semibold text-center mt-0.5 md:mt-1">Years of Experience</div>
              </div>

              {/* Decorative triangle - smaller on mobile, hidden on very small screens */}
              <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 transform -translate-x-8 md:-translate-x-12 translate-y-8 md:translate-y-12 opacity-20" aria-hidden="true">
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
