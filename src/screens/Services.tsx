import Link from "next/link";
import { ArrowRight, Wrench, Gauge, Shield, Car, Disc3, SlidersVertical, Droplets, Cog } from "lucide-react";

const allServices = [
{ name: "Engine Building", desc: "Custom engine builds, rebuilds, and upgrades designed for maximum horsepower, torque, and long-term reliability. From street performance to full race applications.", path: "/services/engine-building", icon: Wrench },
{ name: "Engine Tuning", desc: "Precision fuel injection and carburetor tuning to extract every ounce of performance from your engine, verified on our chassis dyno.", path: "/services/engine-tuning", icon: Gauge },
{ name: "Chassis Dyno Service", desc: "Accurate, repeatable horsepower and torque measurements on our professional chassis dynamometer. Essential for tuning and performance validation.", path: "/services/chassis-dyno", icon: Cog },
{ name: "Chassis Modifications & Custom Fabrication", desc: "Roll cages, custom brackets, structural reinforcement, and fabrication work built to the highest safety and performance standards.", path: "/services/chassis-modifications", icon: Shield },
{ name: "Performance Auto Service", desc: "Transmission work, drivetrain upgrades, and comprehensive performance service to keep your vehicle operating at its peak.", path: "/services/performance-auto-service", icon: Car },
{ name: "Brakes", desc: "Performance brake upgrades, big brake kits, and high-performance pad and rotor packages for maximum stopping power.", path: "/services/brakes", icon: Disc3 },
{ name: "Suspension Work", desc: "Coilovers, lowering kits, lift kits, and race suspension setups to transform your vehicle's handling characteristics.", path: "/services/suspension-work", icon: SlidersVertical },
{ name: "Oil Changes & Maintenance", desc: "Performance-grade oil changes, battery replacements, and routine maintenance to keep your vehicle running strong.", path: "/services/oil-changes", icon: Droplets }];


const Services = () =>
<>
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img src="/images/hero-3.jpeg" alt="Performance services" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
          <p className="text-foreground/80 mt-4 max-w-2xl text-lg">Complete automotive performance solutions — from custom engine builds to precision tuning and everything in between.</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16" aria-labelledby="services-list-heading">
      <h2 id="services-list-heading" className="sr-only">
        Service list
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {allServices.map((s) =>
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
    </section>
  </>;


export default Services;