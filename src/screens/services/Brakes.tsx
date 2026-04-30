import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Stopping Power That Matches Your Horsepower",
    imagePosition: "right",
    image: "/images/shop-brakes.jpg",
    imageAlt: "Brake rotor on lathe at Barnhardt Performance",
    paragraphs: [
      "There's an old saying in motorsport: \"Speed is nothing without the ability to stop.\" At Barnhardt Performance, we take your braking system as seriously as your engine.",
      "Performance brakes aren't just about bigger components — they're about selecting the right combination of calipers, rotors, pads, lines, and fluid that work together as a system for your specific application."
    ],
  },
  {
    type: "text",
    heading: "Performance Brake Upgrades",
    paragraphs: [
      "If your vehicle's factory brakes are struggling to keep up with your power upgrades, it's time for a performance brake upgrade. We offer a range of options from simple pad and rotor packages to complete big brake kit installations.",
      "For serious applications, we install big brake kits featuring larger calipers with more pistons, larger diameter rotors with increased thermal mass, and braided stainless steel brake lines that eliminate spongy pedal feel."
    ],
  },
  {
    type: "two-col",
    heading: "Brake System Components",
    imagePosition: "left",
    image: "/images/gallery-6.jpeg",
    imageAlt: "Performance brake components",
    paragraphs: [
      "A complete brake system upgrade addresses every component in the braking chain for maximum performance and safety."
    ],
    list: [
      { label: "Brake Pads", text: "Performance compounds suited for street, dual-purpose, and dedicated race applications." },
      { label: "Rotors", text: "Slotted, drilled, and two-piece floating rotors for maximum heat management and reduced unsprung weight." },
      { label: "Brake Lines", text: "Braided stainless steel lines for firmer pedal feel and more consistent pressure delivery." },
      { label: "Brake Fluid", text: "High-temperature fluid with a higher boiling point essential for performance driving." },
      { label: "Master Cylinder", text: "Upgraded to match increased caliper volume and ensure proper pedal ratio and feel." },
    ],
  },
  {
    type: "text",
    heading: "Race Brake Preparation",
    paragraphs: [
      "For competition vehicles, we offer comprehensive race brake preparation including proper bedding procedures, brake bias adjustment, and thermal management solutions.",
      "We also install brake cooling ducts for vehicles that experience excessive brake temperatures during track use. Proper brake cooling extends component life and maintains consistent performance lap after lap."
    ],
  },
  {
    type: "text",
    heading: "Routine Brake Service",
    paragraphs: [
      "Even if you're not looking for a full performance upgrade, we offer complete routine brake service including inspections, pad replacements, rotor resurfacing, caliper service, and brake fluid flush.",
      "Every brake service begins with a thorough inspection of the entire braking system. Our honest approach means we'll never recommend work that isn't needed."
    ],
  },
];

const Brakes = () => (
  <ServicePageTemplate
    title="Performance Brakes | Barnhardt Performance"
    metaDescription="Upgrade your stopping power with big brake kits, performance pads, slotted rotors, and complete brake service at Barnhardt Performance in Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Brakes"
    blocks={blocks}
  />
);

export default Brakes;
