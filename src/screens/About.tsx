import Link from "next/link";
import { Shield, Wrench, Heart, Users, ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const About = () =>
<>
    {/* Hero */}
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img src="/images/inside-banner.jpeg" alt="Barnhardt Performance shop" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">About Barnhardt Performance</h1>
          <p className="text-foreground/80 mt-4 max-w-2xl text-lg">Veteran-owned. Passion-driven. Built on over 20 years of hands-on performance expertise.</p>
        </div>
      </div>
    </section>

    {/* Our Story - Image Left / Content Right */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/images/shop-engine.jpg" alt="Barnhardt Performance engine build" className="rounded-lg w-full h-96 object-cover" />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded font-heading font-bold text-lg hidden md:block">
              Est. 2006
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Veteran-Owned &bull; Over 20 Years Experience</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Barnhardt Performance was born out of a deep-rooted passion for automobiles and an unwavering commitment to quality craftsmanship. Founded by Trent Barnhardt, a military veteran with over two decades of hands-on automotive experience, our shop represents the intersection of discipline, expertise, and genuine enthusiasm for performance vehicles.</p>
            <p className="text-gray-700 mb-4 leading-relaxed">We take pride in restoring vintage beauties to their former glory, preserving the soul of the car while enhancing its reliability and performance. But our work extends far beyond restoration — we build custom engines designed for raw horsepower, tune fuel injection and carburetor systems for peak efficiency, and fabricate chassis modifications that push the boundaries of what's possible.</p>
            <p className="text-gray-700 leading-relaxed">Located in the heart of Bloomer, Wisconsin, we serve fellow automotive enthusiasts within a 60-mile radius. From our very first day, our mission has been simple: deliver results that exceed expectations, one vehicle at a time.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">What Drives Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">As a veteran-owned business, we bring the core principles of military service into everything we do: integrity, discipline, and an uncompromising attention to detail.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
        { icon: Wrench, title: "Quality Craftsmanship", desc: "No shortcuts, no compromises. We build it right the first time because your vehicle deserves nothing less." },
        { icon: Heart, title: "Passion for Performance", desc: "We're not just technicians — we're enthusiasts who share your excitement for power, speed, and precision." },
        { icon: Shield, title: "Integrity & Honesty", desc: "Transparent pricing, honest assessments, and realistic timelines. We earn your trust through actions, not words." },
        { icon: Users, title: "Relationship-Driven", desc: "Our customers are neighbors, friends, and fellow enthusiasts. We invest in relationships that last." }].
        map((v, i) =>
        <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <v.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-xl">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{v.desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>

    {/* Our Approach - Content Left / Image Right */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">How We Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">At Barnhardt Performance, we believe in building relationships as strong as our engines. Our customers aren't just clients — they're fellow enthusiasts, neighbors, and friends. We take the time to listen, understand your goals, and offer honest advice backed by decades of experience.</p>
            <p className="text-gray-700 mb-4 leading-relaxed">No matter the make, model, or condition, we approach each job with the same goal: to deliver results that exceed expectations. Whether you're chasing a specific horsepower number, preparing a vehicle for competition, or looking to enhance the daily driving experience, we bring the same level of passion and precision to every project.</p>
            <p className="text-gray-700 leading-relaxed">We understand that trusting someone with your vehicle — especially a performance build or custom project — is a big decision. That's why we prioritize clear communication throughout the entire process, keeping you informed at every stage so there are never any surprises.</p>
          </div>
          <div>
            <img src="/images/shop-interior.jpeg" alt="Barnhardt Performance shop interior" className="rounded-lg w-full h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Shop Gallery Strip */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">Inside the Shop</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Where the Magic Happens</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/shop-hotrod.jpeg" alt="Hot rod build" className="rounded-lg w-full h-48 object-cover" />
          <img src="/images/shop-truck.jpeg" alt="C10 truck on dyno" className="rounded-lg w-full h-48 object-cover" />
          <img src="/images/shop-firebird.jpeg" alt="Firebird on lift" className="rounded-lg w-full h-48 object-cover" />
          <img src="/images/shop-engine2.jpeg" alt="Engine bay build" className="rounded-lg w-full h-48 object-cover" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <img src="/images/hero-3.jpeg" alt="Performance vehicle" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Build Something Powerful Together</h2>
        <p className="text-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">Ready to experience the Barnhardt difference? Contact us to discuss your next performance project.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded text-lg hover:bg-accent/90 transition-colors">
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/30 text-foreground font-bold rounded text-lg hover:border-accent hover:text-accent transition-colors">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  </>;


export default About;