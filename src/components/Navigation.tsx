import { Phone, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-1.5">
              <Key className="h-8 w-8 text-gray-800 stroke-[1.5]" />
              <Key className="h-8 w-8 text-gray-800 stroke-[1.5]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">YOUR LOCAL</span>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">LOCKSMITH</span>
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">24/7</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <img 
                src="/google.png" 
                alt="Google" 
                className="h-6 w-6 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">5-Star Google Reviews</span>
            </div>
            
            <div className="hidden lg:flex items-center">
              <img 
                src="/צילום מסך 2025-11-13 152515.png" 
                alt="Screenshot" 
                className="h-20 object-contain"
              />
            </div>
            
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-green-hover text-accent-foreground font-semibold"
            >
              <a href="tel:0363161113" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">Call Now:</span>
                <span>03 6316 1113</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
