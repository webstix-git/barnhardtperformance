"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const services = [
{ name: "Engine Building", path: "/services/engine-building" },
{ name: "Engine Tuning", path: "/services/engine-tuning" },
{ name: "Chassis Dyno Service", path: "/services/chassis-dyno" },
{ name: "Chassis Modifications", path: "/services/chassis-modifications" },
{ name: "Performance Auto Service", path: "/services/performance-auto-service" },
{ name: "Brakes", path: "/services/brakes" },
{ name: "Suspension Work", path: "/services/suspension-work" },
{ name: "Oil Changes & Maintenance", path: "/services/oil-changes" }];


const navLinks = [
{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Gallery", path: "/gallery" },
{ name: "Testimonials", path: "/testimonials" },
{ name: "FAQs", path: "/faq" },
{ name: "Contact", path: "/contact" }];


const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border" style={{ backgroundColor: '#102037' }}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo - vertically centered across both rows */}
        <Link href="/" className="flex items-center gap-3 py-3">
          <img
            src="/images/logo.png"
            alt="Barnhardt Performance"
            className={`object-contain rounded transition-all duration-300 ease-in-out ${scrolled ? "h-[70px] w-[70px]" : "h-[140px] w-[140px]"}`}
          />
        </Link>

        {/* Right side: phone/quote row + nav row */}
        <div className="hidden lg:flex flex-col items-end gap-1">
          {/* Phone and Quote */}
          <div className="flex items-center gap-4 py-1">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors text-base">
              <Phone className="h-4 w-4 text-accent" /> {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="px-5 py-1.5 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors text-base">
              Get a Quote
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-1">
            <Link href="/" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/") ? "text-accent" : "text-foreground/80"}`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/about") ? "text-accent" : "text-foreground/80"}`}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent flex items-center gap-1 ${pathname?.startsWith("/services") ? "text-accent" : "text-foreground/80"}`}>
                Services <ChevronDown className="h-3 w-3" />
              </Link>
              {servicesOpen &&
              <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-md shadow-xl py-2 mt-0">
                  <Link href="/services" className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-muted transition-colors font-medium">
                    All Services
                  </Link>
                  <div className="border-t border-border my-1" />
                  {services.map((s) =>
                <Link key={s.path} href={s.path} className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-muted transition-colors">
                      {s.name}
                    </Link>
                )}
                </div>
              }
            </div>

            <Link href="/gallery" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/gallery") ? "text-accent" : "text-foreground/80"}`}>
              Gallery
            </Link>
            <Link href="/testimonials" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/testimonials") ? "text-accent" : "text-foreground/80"}`}>
              Testimonials
            </Link>
            <Link href="/faq" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/faq") ? "text-accent" : "text-foreground/80"}`}>
              FAQs
            </Link>
            <Link href="/contact" className={`px-3 py-2 text-lg font-medium rounded transition-colors hover:text-accent ${isActive("/contact") ? "text-accent" : "text-foreground/80"}`}>
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="lg:hidden p-2">
            <Menu className="h-6 w-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-80">
            <SheetTitle className="font-heading text-foreground">Menu</SheetTitle>
            <nav className="flex flex-col gap-1 mt-6">
              {navLinks.slice(0, 2).map((link) =>
              <Link key={link.path} href={link.path} onClick={() => setMobileOpen(false)} className={`px-4 py-3 text-sm font-medium rounded hover:bg-muted transition-colors ${isActive(link.path) ? "text-accent" : "text-foreground/80"}`}>
                  {link.name}
                </Link>
              )}
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted rounded">
                Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen &&
              <div className="pl-4">
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-foreground/60 hover:text-accent">
                    All Services
                  </Link>
                  {services.map((s) =>
                <Link key={s.path} href={s.path} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-foreground/60 hover:text-accent">
                      {s.name}
                    </Link>
                )}
                </div>
              }
              {navLinks.slice(2).map((link) =>
              <Link key={link.path} href={link.path} onClick={() => setMobileOpen(false)} className={`px-4 py-3 text-sm font-medium rounded hover:bg-muted transition-colors ${isActive(link.path) ? "text-accent" : "text-foreground/80"}`}>
                  {link.name}
                </Link>
              )}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mx-4 mt-4 px-5 py-3 bg-accent text-accent-foreground text-sm font-bold rounded text-center hover:bg-accent/90">
                Get a Quote
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>);

};

export default Header;