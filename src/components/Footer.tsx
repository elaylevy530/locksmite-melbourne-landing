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
              <a href="tel:0363161113" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>03 6316 1113</span>
              </a>
              <a href="mailto:info@locksmite.com.au" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@locksmite.com.au</span>
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
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground">Visa</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground">Mastercard</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground">Contactless</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground">bank transfer</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground">efpos</span>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-accent">Emergency Service: 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Locksmite Locksmiths. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
