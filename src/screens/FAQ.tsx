import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What types of vehicles do you work on?", a: "We work on a wide range of vehicles including cars, trucks, and specialty performance vehicles. Whether it's a classic muscle car restoration, a modern street performance build, or a full race car, we have the expertise to handle it. We're especially experienced with domestic V8 platforms, but we welcome all makes and models." },
  { q: "What is your service area?", a: "We're located in Bloomer, Wisconsin, and serve customers within a 60-mile radius. This includes the greater Chippewa Valley area and surrounding communities. If you're outside this area, feel free to contact us — we're always happy to discuss your project." },
  { q: "How does chassis dyno tuning work?", a: "Our chassis dynamometer measures your vehicle's horsepower and torque at the wheels in a controlled environment. During a dyno session, we run your vehicle on the rollers while monitoring engine parameters in real time. This allows us to precisely tune air-fuel ratios, ignition timing, and other variables for optimal performance. It's the most accurate way to tune and verify power output." },
  { q: "Do you offer free estimates?", a: "Yes, we provide free consultations and estimates for all of our services. We believe in transparent communication and want you to understand the scope and cost of your project before any work begins. Contact us to schedule a consultation." },
  { q: "How long does an engine build typically take?", a: "The timeline for an engine build varies depending on the complexity of the project, parts availability, and the specific goals for the build. A straightforward performance rebuild might take 2-4 weeks, while a ground-up custom build could take 6-8 weeks or more. We'll provide you with a realistic timeline during our initial consultation." },
  { q: "What sets Barnhardt Performance apart from other shops?", a: "As a veteran-owned business with over 20 years of automotive experience, we bring a unique combination of military discipline and genuine passion for performance. We pride ourselves on honest communication, transparent pricing, and meticulous craftsmanship. Our customers aren't just clients — they're friends and fellow enthusiasts." },
  { q: "Do you work on race cars?", a: "Absolutely. Race car builds and preparation are one of our specialties. From roll cage fabrication and chassis reinforcement to engine building and precision tuning, we can build and prepare your vehicle for competition. We understand the demands of racing and build accordingly." },
  { q: "Can I bring my own parts?", a: "Yes, we're happy to install customer-supplied parts. However, please note that our warranty only covers parts we source and supply. We're also always available to recommend high-quality parts that are best suited for your specific application and goals." },
  { q: "How do I schedule an appointment?", a: "You can schedule an appointment by calling us at (254) 226-0938, emailing barnhardtperformance@gmail.com, or filling out the contact form on our website. We'll get back to you promptly to discuss your project and find a time that works." },
  { q: "Do you offer any warranties on your work?", a: "Yes, we stand behind our work with confidence. Specific warranty terms vary by service type and will be discussed during your consultation. Our goal is to build it right the first time so you never have to worry about coming back for the same issue." },
];

const FAQ = () => (
  <>
    <section className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.</p>

      <Accordion type="multiple" defaultValue={faqs.map((_, i) => `faq-${i}`)}>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-foreground hover:text-accent text-left font-semibold text-[22px]">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 text-[18px]" style={{ lineHeight: 1.6 }}>
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </>
);

export default FAQ;
