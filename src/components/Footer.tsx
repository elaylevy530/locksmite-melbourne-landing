import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">

              <span className="text-xl font-bold">Locksmite</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Melbourne's trusted locksmith service. Fast, reliable, and available 24/7 for all your security needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:0356150114" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>03 5615 0114</span>
              </a>
              <a href="mailto:quicklock770@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>quicklock770@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Greater Melbourne, VIC</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Payments & Hours</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div>
                <p className="text-sm font-semibold mb-2 md:mb-3">Accepted Payment Methods:</p>
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-2 px-2 md:px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground whitespace-nowrap">Visa</span>
                  <span className="inline-flex items-center gap-2 px-2 md:px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground whitespace-nowrap">Mastercard</span>
                  <span className="inline-flex items-center gap-2 px-2 md:px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground whitespace-nowrap">Contactless</span>
                  <span className="inline-flex items-center gap-2 px-2 md:px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground whitespace-nowrap">Bank Transfer</span>
                  <span className="inline-flex items-center gap-2 px-2 md:px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground whitespace-nowrap">EFTPOS</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-accent text-sm md:text-base">Emergency Service: 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} QuickLock Locksmiths. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
