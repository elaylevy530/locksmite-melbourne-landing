import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">L</span>
            </div>
            <span className="text-xl font-bold text-primary-foreground">Locksmite</span>
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
    </nav>
  );
};

export default Navigation;
