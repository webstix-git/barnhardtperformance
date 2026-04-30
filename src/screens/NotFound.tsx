"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Home, Map, ArrowRight } from "lucide-react";

const allPages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQs", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
  { name: "Engine Building", path: "/services/engine-building" },
  { name: "Engine Tuning", path: "/services/engine-tuning" },
  { name: "Chassis Dyno Service", path: "/services/chassis-dyno" },
  { name: "Chassis Modifications", path: "/services/chassis-modifications" },
  { name: "Performance Auto Service", path: "/services/performance-auto-service" },
  { name: "Brakes", path: "/services/brakes" },
  { name: "Suspension Work", path: "/services/suspension-work" },
  { name: "Oil Changes & Maintenance", path: "/services/oil-changes" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Sitemap", path: "/sitemap" },
];

const NotFound = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allPages.filter((p) => p.name.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) router.push(results[0].path);
  };

  return (
    <>
      <section className="container mx-auto px-4 py-20 max-w-3xl text-center">
        <p className="font-heading text-7xl md:text-9xl font-bold text-accent leading-none">404</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Sorry, we couldn't find the page you're looking for. Try searching below or jump to one of the pages.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages (e.g. dyno, brakes, contact)"
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-base"
            autoFocus
          />
        </form>

        {results.length > 0 && (
          <ul className="max-w-xl mx-auto bg-card border border-border rounded mb-8 text-left overflow-hidden">
            {results.map((r) => (
              <li key={r.path} className="border-b border-border last:border-0">
                <Link href={r.path} className="flex items-center justify-between px-4 py-3 hover:bg-muted transition-colors group">
                  <span className="text-foreground group-hover:text-accent">{r.name}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/sitemap" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-bold rounded hover:border-accent transition-colors">
            <Map className="h-4 w-4" /> View Sitemap
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;