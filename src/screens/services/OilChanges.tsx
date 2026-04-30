import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Performance-Grade Maintenance",
    imagePosition: "left",
    image: "/images/shop-engine.jpg",
    imageAlt: "Engine maintenance at Barnhardt Performance",
    paragraphs: [
      "Even the most powerful engine needs proper maintenance to perform at its best. At Barnhardt Performance, our oil change and maintenance services go beyond the basics.",
      "We use premium synthetic oils and filters, inspect critical systems during every service, and treat your vehicle with the same level of care whether it's a daily driver or a weekend warrior."
    ],
  },
  {
    type: "text",
    heading: "Oil Change Service",
    paragraphs: [
      "Oil is the lifeblood of your engine. We use premium synthetic motor oils that provide superior protection, especially in high-performance applications.",
      "Our oil change service includes draining the old oil, replacing the filter with a premium filter, and filling with the correct grade of synthetic oil. During every oil change, we perform a visual inspection of key engine components and systems."
    ],
  },
  {
    type: "text",
    heading: "Fluid Services",
    paragraphs: [
      "Beyond engine oil, your vehicle relies on several other fluids that require periodic service."
    ],
    list: [
      { label: "Transmission Fluid", text: "Regular changes with premium fluid for smooth shifting and long transmission life." },
      { label: "Differential Fluid", text: "Gear oil changes especially important for towing, racing, or spirited driving." },
      { label: "Brake Fluid", text: "Regular flushes maintain braking performance and safety." },
      { label: "Coolant", text: "Flush and fill with premium coolant matched to your engine's requirements." },
      { label: "Power Steering Fluid", text: "Clean fluid ensures smooth, responsive steering operation." },
    ],
  },
  {
    type: "text",
    heading: "Preventive Maintenance",
    paragraphs: [
      "The best way to avoid unexpected breakdowns is a consistent preventive maintenance schedule. We work with you to establish a plan appropriate for your vehicle's age, mileage, and usage patterns.",
      "At Barnhardt Performance, we believe maintenance is an investment in your vehicle's future. Every dollar spent on preventive care saves multiple dollars in emergency repairs."
    ],
  },
];

const OilChanges = () => (
  <ServicePageTemplate
    title="Oil Changes & Maintenance | Barnhardt Performance"
    metaDescription="Synthetic oil changes, fluid services, and preventive maintenance to keep your vehicle running strong. Performance-grade care in Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Oil Changes & Maintenance"
    blocks={blocks}
  />
);

export default OilChanges;
