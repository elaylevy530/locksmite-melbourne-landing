import { Phone, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto pl-1 pr-3 md:px-4">
        <div className="flex flex-col gap-1 py-2">
          <div className="flex items-center h-16 justify-start md:justify-between gap-2">
            <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center gap-1.5" aria-hidden="true">
              <Lock className="h-8 w-8 text-gray-800 stroke-[1.5]" />
              <ShieldCheck className="h-8 w-8 text-gray-800 stroke-[1.5]" />
            </div>
            <div className="flex md:hidden items-center">
              <img 
                src="/צילום מסך 2025-11-13 152515.png" 
                alt="Google reviews rating" 
                className="h-[72px] object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">YOUR LOCAL</span>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">LOCKSMITH</span>
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">24/7</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-5 lg:gap-6 ml-2 md:ml-0">
            <div className="flex items-center">
              <img 
                src="/צילום מסך 2025-11-13 152515.png" 
                alt="Google reviews rating" 
                className="h-12 sm:h-16 lg:h-20 object-contain"
              />
            </div>
            
            <div
              className="flex items-center rounded-full bg-green-100 text-green-800 border border-green-200 px-2 py-0.5 text-[11px] font-medium sm:px-2.5 sm:py-1 sm:text-xs shrink-0"
              aria-label="Open now"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2" aria-hidden="true" />
              Open Now
            </div>
            
            <Button 
              asChild
              className="h-12 w-12 rounded-full p-0 bg-accent hover:bg-green-hover text-accent-foreground ml-2 md:ml-0"
            >
              <a 
                href="tel:0363161113" 
                aria-label="התקשר עכשיו 03 6316 1113" 
                className="flex items-center justify-center"
              >
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Nav links row */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-3 text-sm font-medium text-gray-700">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="whitespace-nowrap hover:text-black"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollTo("services")}
            className="whitespace-nowrap hover:text-black"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="whitespace-nowrap hover:text-black"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo("why-choose-us")}
            className="whitespace-nowrap hover:text-black"
          >
            Why Choose Us
          </button>
          <button
            type="button"
            onClick={() => scrollTo("testimonials")}
            className="whitespace-nowrap hover:text-black"
          >
            Testimonials
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="whitespace-nowrap hover:text-black"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
