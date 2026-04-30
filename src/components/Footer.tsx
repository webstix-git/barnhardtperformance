import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Shield } from "lucide-react";

const Footer = () =>
<footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="Barnhardt Performance" className="w-[80px] h-[80px] rounded object-contain" />
            <span className="font-heading text-lg font-bold text-foreground">BARNHARDT PERFORMANCE</span>
          </Link>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Veteran-owned performance shop with over 20 years of automotive experience. Built for power. Driven by precision.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Shield className="h-4 w-4 text-accent" />
            <span className="font-semibold text-accent uppercase tracking-wider text-sm">Veteran-Owned Business</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Gallery", path: "/gallery" },
          { name: "Testimonials", path: "/testimonials" },
          { name: "FAQ", path: "/faq" },
          { name: "Contact Us", path: "/contact" }].
          map((link) =>
          <li key={link.path} className="text-sm">
                <Link href={link.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            {[
          { name: "Engine Building", path: "/services/engine-building" },
          { name: "Engine Tuning", path: "/services/engine-tuning" },
          { name: "Chassis Dyno", path: "/services/chassis-dyno" },
          { name: "Chassis Modifications", path: "/services/chassis-modifications" },
          { name: "Brakes", path: "/services/brakes" },
          { name: "Suspension Work", path: "/services/suspension-work" }].
          map((link) =>
          <li key={link.path} className="text-sm">
                <Link href={link.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">
                17152 115th St<br />
                Bloomer, WI 54724
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <a href="tel:2542260938" className="text-muted-foreground hover:text-accent transition-colors text-sm">(254) 226-0938</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <a href="mailto:barnhardtperformance@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">barnhardtperformance@gmail.com</a>
            </li>
          </ul>
          <div className="mt-4">
            <a href="https://www.facebook.com/Barnhardttruckandauto/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm">
              <Facebook className="h-5 w-5" /> Follow us on Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-center gap-x-1.5 gap-y-1 text-center leading-none">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Barnhardt Performance. All rights reserved.
        </p>
        <span className="hidden md:inline text-muted-foreground/50 text-xs leading-none">|</span>
        <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-accent transition-colors">Sitemap</Link>
        <span className="text-muted-foreground/50 text-xs leading-none">|</span>
        <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>;


export default Footer;