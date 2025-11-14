import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll contact you shortly.");
    setFormData({ name: "", phone: "", message: "" });
  };
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Call or message us for immediate assistance</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <Button asChild size="lg" className="bg-accent hover:bg-green-hover text-accent-foreground font-bold w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a href="tel:0363161113" aria-label="Call now 03 6316 1113">Call Now: 03 6316 1113</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold w-full sm:w-auto hover:border-accent hover:text-accent transition-all duration-300">
              <a href="https://wa.me/61363161113?text=Hi%20Locksmite%2C%20I%20need%20a%20locksmith%20in%20Melbourne." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Call Us</h3>
              <a href="tel:0363161113" className="text-accent hover:text-green-hover font-semibold text-lg sm:text-xl">
                03 6316 1113
              </a>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">Available 24/7 for emergencies</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Email Us</h3>
              <a href="mailto:info@locksmite.com.au" className="text-accent hover:text-green-hover font-semibold text-sm sm:text-base break-all">
                info@locksmite.com.au
              </a>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Service Area</h3>
              <p className="text-sm sm:text-base text-foreground font-semibold">Greater Melbourne</p>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">Serving all suburbs across Melbourne</p>
            </div>
          </div>
          
          <Card className="border-accent/30 bg-accent/5 shadow-lg">
            <CardContent className="p-5 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">Emergency Service</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Locked out? Don't wait! Call us now for immediate assistance.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-green-hover text-accent-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <a href="tel:0363161113" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: 03 6316 1113
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
