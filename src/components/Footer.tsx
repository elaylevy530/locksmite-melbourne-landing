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
            <h3 className="text-lg font-bold mb-4">Payment Options</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div>
                <p className="text-sm font-semibold mb-2 md:mb-3">We're on call to assist you 24 hours a day, 365 days of the year.
                  Payment Options
                  We offer a convenient, mobile EFTPOS payment facility. We gladly accept:</p>
                <div className="mt-3 mb-2 inline-block">
                  <img 
                    src="/צילום מסך 2025-11-23 153629.png"
                    alt="Payment methods"
                    className="max-w-[200px] md:max-w-md object-contain rounded-lg"
                    style={{ 
                      backgroundColor: 'transparent',
                      display: 'block'
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">

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
