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
        {/* Mobile: Google reviews + Open Now + phone button */}
        <div className="flex items-center justify-start py-2.5 sm:hidden gap-2 pl-4 pr-2">
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center shrink-0">
              <img 
                src="/צילום מסך 2025-11-13 152515.png" 
                alt="Google Reviews" 
                className="h-[68px] object-contain"
              />
            </div>
            
            <div
              className="flex items-center rounded-full bg-green-100 text-green-800 border border-green-200 px-2.5 py-1 text-[10.5px] font-medium shrink-0 whitespace-nowrap"
              aria-label="Open now"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5 shrink-0" aria-hidden="true" />
              Open Now
            </div>
            
            <Button 
              asChild
              className="h-11 w-11 rounded-full p-0 bg-accent hover:bg-green-hover text-accent-foreground shrink-0 ml-8"
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

        {/* Desktop / tablet: full header */}
        <div className="hidden sm:flex items-center justify-between gap-2 md:gap-4 py-2">
          {/* Left: logo + text */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="hidden md:flex items-center gap-1.5" aria-hidden="true">
              <Lock className="h-8 w-8 text-gray-800 stroke-[1.5]" />
              <ShieldCheck className="h-8 w-8 text-gray-800 stroke-[1.5]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">YOUR LOCAL</span>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">LOCKSMITH</span>
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">24/7</span>
            </div>
          </div>

          {/* Right: Google reviews + status + call button */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden lg:flex items-center">
              <img 
                src="/צילום מסך 2025-11-13 152515.png" 
                alt="Google Reviews" 
                className="h-20 object-contain"
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
              className="h-11 w-11 sm:h-12 sm:w-12 rounded-full p-0 bg-accent hover:bg-green-hover text-accent-foreground"
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
      </div>
    </nav>
  );
};

export default Navigation;
