import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Need a locksmith? Contact us now for fast, reliable service
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-border mb-6">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0412 345 678"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your locksmith needs..."
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-green-hover text-accent-foreground font-bold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Call Us</h3>
                <a href="tel:0363161113" className="text-accent hover:text-green-hover font-semibold text-xl">
                  03 6316 1113
                </a>
                <p className="text-muted-foreground mt-1">Available 24/7 for emergencies</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Email Us</h3>
                <a href="mailto:info@locksmite.com.au" className="text-accent hover:text-green-hover font-semibold">
                  info@locksmite.com.au
                </a>
                <p className="text-muted-foreground mt-1">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Service Area</h3>
                <p className="text-foreground font-semibold">Greater Melbourne</p>
                <p className="text-muted-foreground mt-1">Serving all suburbs across Melbourne</p>
              </div>
            </div>
            
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Emergency Service</h3>
                <p className="text-muted-foreground mb-4">
                  Locked out? Don't wait! Call us now for immediate assistance.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-accent hover:bg-green-hover text-accent-foreground font-bold"
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
      </div>
    </section>
  );
};

export default Contact;
