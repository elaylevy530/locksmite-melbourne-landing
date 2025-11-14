import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    q: "How fast can you arrive?",
    a: "Our average arrival time across Melbourne is 20–30 minutes, depending on traffic and your exact location.",
  },
  {
    q: "Are you available 24/7?",
    a: "Yes. We provide emergency locksmith services around the clock, including weekends and public holidays.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major cards (Visa, Mastercard), contactless payments, and cash.",
  },
  {
    q: "Do you offer warranty on parts and labor?",
    a: "Absolutely. We provide a warranty on both parts and workmanship. Details vary by product—ask our technician on site.",
  },
  {
    q: "Can you replace car keys on-site?",
    a: "Yes. For most vehicles, we can cut and program replacement keys on-site.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">FAQ</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answers to common questions about our services
          </p>
        </div>
        <Accordion.Root type="single" collapsible className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, idx) => (
            <Accordion.Item key={idx} value={`item-${idx}`} className="rounded-lg border border-border bg-card overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left px-4 md:px-5 py-4 md:py-5 font-semibold text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="ml-4 text-muted-foreground" aria-hidden>+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 md:px-5 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="pb-4 md:pb-5 text-muted-foreground">{item.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
