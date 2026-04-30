import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const mainPages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQs", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const servicePages = [
  { name: "Engine Building", path: "/services/engine-building" },
  { name: "Engine Tuning", path: "/services/engine-tuning" },
  { name: "Chassis Dyno Service", path: "/services/chassis-dyno" },
  { name: "Chassis Modifications", path: "/services/chassis-modifications" },
  { name: "Performance Auto Service", path: "/services/performance-auto-service" },
  { name: "Brakes", path: "/services/brakes" },
  { name: "Suspension Work", path: "/services/suspension-work" },
  { name: "Oil Changes & Maintenance", path: "/services/oil-changes" },
];

const legalPages = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Sitemap", path: "/sitemap" },
];

const Sitemap = () => (
  <>
    <section className="container mx-auto px-4 py-12">
      <PageBreadcrumb items={[{ label: "Sitemap" }]} />
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Sitemap</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">A complete overview of every page available on the Barnhardt Performance website.</p>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Main Pages</h2>
          <ul className="space-y-2">
            {mainPages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-muted-foreground hover:text-accent transition-colors">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Services</h2>
          <ul className="space-y-2">
            {servicePages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-muted-foreground hover:text-accent transition-colors">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Legal</h2>
          <ul className="space-y-2">
            {legalPages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-muted-foreground hover:text-accent transition-colors">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default Sitemap;