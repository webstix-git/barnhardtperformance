import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/contact";

const ThankYou = () => (
  <>
    <section className="container mx-auto px-4 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <CheckCircle className="h-16 w-16 text-accent mb-6" />
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Thank You!</h1>
      <p className="text-foreground/80 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
        Your message has been received. We appreciate your interest in Barnhardt Performance and will get back to you as soon as possible — typically within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors">
          Return Home <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors">
          Explore Services
        </Link>
        <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground/80 font-bold rounded hover:border-accent hover:text-accent transition-colors">
          <Phone className="h-4 w-4" /> Call Us Now
        </a>
      </div>
    </section>
  </>
);

export default ThankYou;
