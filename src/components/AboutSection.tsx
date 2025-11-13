import { Lock } from 'lucide-react';
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute top-0 left-12 w-full h-full border-4 border-accent rounded-lg transform translate-x-4 -translate-y-4 z-0"></div>
              
              <div className="relative z-10 bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/צילום מסך 2025-11-13 153802.png" 
                  alt="Locksmith professionals"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-8 right-0 bg-accent text-accent-foreground px-8 py-6 rounded-lg shadow-lg z-20 transform translate-x-8">
                <div className="text-5xl font-bold text-center">{yearsOfExperience}</div>
                <div className="text-sm font-semibold text-center mt-1">Years of Experience</div>
              </div>

              <div className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-12 translate-y-12 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                  <polygon points="0,100 0,0 100,100" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="space-y-6 lg:pl-8">
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6 text-accent" />
                <span className="text-lg font-bold text-primary uppercase tracking-wide">About Us</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Local Locksmiths in {city} Offering <span className="text-accent">Fast, Safe & Affordable</span> Locksmith Services 24/7
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                At {companyName}, your safety, protection and peace of mind are our top priority. We understand how having a reliable lock system can make you feel safe and confident. That's why we're here to offer you fast, reliable and efficient locksmith services.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {companyName} is the best locksmith company in {city}. We take pride in the {yearsOfExperience}+ years of experience we have in the locksmith industry, serving both residential and commercial clients across {city} and surrounding areas. We have the skills, knowledge and tools to provide you with the professional locksmith services you need — no matter the size or complexity of the project. Whether you're locked out of your car, you need to change the locks in your home, or you require digital lock installation and keyless entry in your office, we have the expertise to get the job done fast and effectively.
              </p>

              <Button 
                onClick={scrollToContact}
                className="bg-accent hover:bg-green-hover text-accent-foreground font-bold py-3 px-8 uppercase text-sm tracking-wide"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

