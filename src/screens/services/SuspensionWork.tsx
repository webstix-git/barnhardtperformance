import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Transform Your Vehicle's Handling",
    imagePosition: "right",
    image: "/images/shop-firebird.jpeg",
    imageAlt: "Vehicle on lift for suspension work",
    paragraphs: [
      "The suspension is the foundation of your vehicle's handling characteristics. It determines how your car corners, rides, launches, and puts power to the ground.",
      "Whether you're looking to lower your stance, install coilovers for adjustable handling, lift a truck for off-road capability, or build a race suspension, we have the expertise and components to make it happen."
    ],
  },
  {
    type: "text",
    heading: "Performance Suspension Upgrades",
    paragraphs: [
      "A well-sorted suspension setup transforms the driving experience. We start by understanding how you use your vehicle — daily driver, autocross, drag racing — each application requires a different approach.",
      "Our services include coilover installations with proper corner balancing, lowering spring packages, sway bar upgrades, performance bushing installations, adjustable control arms, camber kits, and alignment components."
    ],
  },
  {
    type: "two-col",
    heading: "Coilover Systems",
    imagePosition: "left",
    image: "/images/gallery-1.jpeg",
    imageAlt: "Suspension components",
    paragraphs: [
      "Coilover suspension systems are the gold standard for adjustable performance. These assemblies allow us to set ride height, damping, and spring rates to precisely match your needs.",
      "After installation, we set ride height, damping settings, and alignment to our recommended baseline, then fine-tune based on your feedback and driving impressions."
    ],
  },
  {
    type: "text",
    heading: "Lift Kits & Off-Road Suspension",
    paragraphs: [
      "For truck and SUV owners, we offer professional lift kit installations including leveling kits, body lifts, and suspension lifts with proper component matching.",
      "We ensure that steering geometry, driveline angles, and brake line lengths are addressed as part of every installation for safe, reliable operation."
    ],
  },
  {
    type: "text",
    heading: "Alignment & Corner Balancing",
    paragraphs: [
      "After any suspension modification, we perform a precision alignment to ensure camber, caster, and toe are set correctly. For performance applications, alignment specs that optimize handling may differ significantly from factory settings.",
      "Corner balancing distributes weight evenly across all four wheels, improving handling balance and tire wear — especially important for vehicles used in competition."
    ],
  },
];

const SuspensionWork = () => (
  <ServicePageTemplate
    title="Suspension Upgrades | Barnhardt Performance"
    metaDescription="Coilovers, lowering kits, lift kits, and alignment services to transform your handling. Professional suspension work at Barnhardt Performance, Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Suspension Work"
    blocks={blocks}
  />
);

export default SuspensionWork;
