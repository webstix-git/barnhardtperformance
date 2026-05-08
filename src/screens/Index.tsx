import Link from "next/link";
import { ArrowRight, Phone, Shield, Wrench, Gauge, Award, Star, MapPin, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const services = [
{ name: "Engine Building", desc: "Custom engine builds designed for maximum horsepower, torque, and reliability. From street performance to full race applications.", path: "/services/engine-building", icon: Wrench },
{ name: "Engine Tuning", desc: "Precision fuel injection and carburetor tuning to unlock your engine's full potential on our chassis dyno.", path: "/services/engine-tuning", icon: Gauge },
{ name: "Chassis Modifications", desc: "Custom fabrication, roll cages, and structural modifications built to the highest standards of safety and performance.", path: "/services/chassis-modifications", icon: Shield }];


const reviews = [
{ name: "Mike R.", text: "Trent and his team are top-notch. Had my engine rebuilt and the power difference is night and day. Honest, professional, and the quality of work is outstanding. Highly recommend Barnhardt Performance!", rating: 5 },
{ name: "Jason T.", text: "Best performance shop in the area, hands down. They tuned my fuel injection system and the results on the dyno were incredible. These guys know what they're doing and they stand behind their work.", rating: 5 },
{ name: "Sarah K.", text: "As someone who was nervous about finding a trustworthy shop, Barnhardt Performance exceeded my expectations. They explained everything clearly, delivered on time, and the craftsmanship is excellent.", rating: 5 }];


const Index = () =>
<>
    {/* Hero */}
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      <img src="/images/hero-banner.jpeg" alt="Pontiac Firebird on the chassis dyno at Barnhardt Performance" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '85% center' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Veteran-Owned &bull; Est. 2006 </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Built for Power.<br />Driven by Precision.
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl leading-relaxed">
            Barnhardt Performance is a professional automotive performance shop specializing in engine building, precision tuning, and custom vehicle solutions. Located in Bloomer, Wisconsin, Trent brings over 20 years of hands-on experience and an unwavering commitment to quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded text-lg hover:bg-accent/90 transition-colors">
              Explore Our Work <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/30 text-foreground font-bold rounded text-lg hover:border-accent hover:text-accent transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* About Snapshot */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Performance Runs in Our Blood
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              At Barnhardt Performance, we take pride in restoring vintage beauties to their former glory while building modern powerhouses that dominate on the street and the track. As a veteran-owned business, we bring the values of integrity, discipline, and meticulous attention to detail into every project that rolls through our doors.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              With over 20 years of experience in the automotive performance industry, our team has the knowledge and skill to handle everything from ground-up custom engine builds to precision chassis dyno tuning. We aren't just another shop — we're fellow enthusiasts who understand the passion that drives you to push your vehicle to its absolute limits.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our approach is built on relationships. Every customer is treated like a neighbor and friend, and we take the time to listen, understand your goals, and offer honest advice backed by decades of proven results. When you bring your vehicle to Barnhardt Performance, you're getting more than a service — you're gaining a partner in performance.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-base">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src="/images/about-section.jpeg" alt="Pontiac Trans Am on the dyno at Barnhardt Performance" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded font-heading font-bold text-lg">
              20+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Services */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From custom engine builds that deliver jaw-dropping horsepower to precision dyno tuning that maximizes every ounce of performance, we offer a full range of automotive performance solutions tailored to your vision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) =>
        <Link key={s.path} href={s.path} className="group bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <s.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors text-2xl">{s.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{s.desc}</p>
              <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-base">
                Learn More <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
        )}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">The Barnhardt Difference</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
        { icon: Shield, title: "Veteran-Owned", desc: "Founded on the principles of integrity, discipline, and unwavering commitment to excellence that come from military service." },
        { icon: Award, title: "20+ Years Experience", desc: "Two decades of hands-on automotive performance expertise means your vehicle is in the most capable hands in the region." },
        { icon: Wrench, title: "Quality Craftsmanship", desc: "Every project receives meticulous attention to detail. We don't cut corners — we build it right the first time, every time." },
        { icon: Gauge, title: "Honest Communication", desc: "Transparent pricing, honest assessments, and clear timelines. We treat you like family, not just another customer." }].
        map((item, i) =>
        <div key={i} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 text-2xl">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">Our Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">From the Shop Floor</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Take a look at some of the custom builds, performance upgrades, and precision craftsmanship that define Barnhardt Performance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) =>
        <Link key={n} href="/gallery" className="group relative overflow-hidden rounded-lg aspect-square">
              <img src={`/images/gallery-${n}.jpeg`} alt={`Barnhardt Performance project ${n}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </Link>
        )}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) =>
        <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) =>
            <Star key={j} className="h-4 w-4 fill-accent text-accent" />
            )}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic text-lg">"{r.text}"</p>
              <p className="text-accent font-semibold text-sm">{r.name}</p>
            </div>
        )}
        </div>
        <div className="text-center mt-8">
          <Link href="/testimonials" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            See All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <img src="/images/hero-3.jpeg" alt="Performance vehicle" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Unleash Your Vehicle's Potential?
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you're building a race car from the ground up, chasing more horsepower, or looking for precision tuning to dial in your setup, Barnhardt Performance has the expertise and passion to make it happen. Let's talk about your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded text-lg hover:bg-accent/90 transition-colors">
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/30 text-foreground font-bold rounded text-lg hover:border-accent hover:text-accent transition-colors">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>

    {/* Contact Info Bar */}
    <section className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="text-foreground/80 text-base">
              17152 115th St<br />
              Bloomer, WI 54724
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="h-5 w-5 text-accent" />
            <a href={PHONE_TEL} className="text-foreground/80 hover:text-accent transition-colors text-base">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="h-5 w-5 text-accent" />
            <a href="mailto:barnhardtperformance@gmail.com" className="text-foreground/80 hover:text-accent transition-colors text-base">barnhardtperformance@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  </>;


export default Index;
