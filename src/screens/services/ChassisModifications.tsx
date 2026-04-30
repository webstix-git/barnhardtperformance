import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Custom Fabrication & Structural Performance",
    imagePosition: "left",
    image: "/images/shop-hotrod.jpeg",
    imageAlt: "Custom hot rod build at Barnhardt Performance",
    paragraphs: [
      "Performance isn't just about what's under the hood — it's about the entire vehicle working together as a cohesive platform. Our chassis modification and custom fabrication services transform your vehicle's structural foundation to support the power, handling, and safety demands of serious performance driving.",
      "From professional roll cage fabrication to custom bracket work and structural reinforcement, our team has the welding skills, fabrication expertise, and engineering understanding to execute modifications that are both functional and beautifully crafted."
    ],
  },
  {
    type: "text",
    heading: "Roll Cage Fabrication",
    paragraphs: [
      "A properly designed and installed roll cage is the single most important safety modification for any vehicle used in competition. Our roll cage fabrication follows industry standards and sanctioning body requirements (NHRA, SCCA, NASA, and others).",
      "We use premium chromoly and mild steel tubing, precisely notched and fitted for maximum strength. Every joint is TIG-welded to the highest standards, and mounting plates are strategically positioned to distribute loads into the vehicle's strongest structural points.",
      "Whether you need a basic 6-point cage for your street/strip car or a full multi-point cage for dedicated race competition, we design and build each cage to fit your specific vehicle."
    ],
  },
  {
    type: "two-col",
    heading: "Custom Brackets & Mounting Solutions",
    imagePosition: "right",
    image: "/images/gallery-2.jpeg",
    imageAlt: "Custom fabrication work",
    paragraphs: [
      "Performance modifications often require custom brackets and mounting solutions that don't exist off the shelf. We design and manufacture custom brackets for engine swaps, transmission conversions, turbo mounting, intercooler installations, oil cooler routing, and virtually any other application.",
      "We start with an understanding of the forces and loads involved, then design a bracket that's strong enough while being as lightweight and compact as possible. Every bracket is test-fitted, adjusted, and finished before final installation."
    ],
  },
  {
    type: "two-col",
    heading: "Structural Reinforcement",
    imagePosition: "left",
    image: "/images/gallery-6.jpeg",
    imageAlt: "Structural reinforcement work",
    paragraphs: [
      "High-performance vehicles benefit from structural reinforcement to handle increased loads and stresses. Our services include subframe connectors, strut tower braces, frame stiffening, and localized reinforcement at high-stress points.",
      "These modifications reduce chassis flex, improve handling precision, and ensure that power is efficiently transferred to the wheels. We assess each vehicle individually and recommend strategies based on the specific application and power level."
    ],
  },
  {
    type: "text",
    heading: "The Barnhardt Fabrication Standard",
    paragraphs: [
      "Every piece of fabrication that leaves our shop represents our commitment to quality and precision. We don't take shortcuts, we don't cut corners, and we don't settle for \"good enough.\"",
      "When you see our fabrication work, you'll notice the attention to detail — clean welds, precise fitment, and a finished appearance that's as good as the structural integrity behind it. At Barnhardt Performance, we believe that quality craftsmanship should look as good as it performs."
    ],
  },
];

const ChassisModifications = () => (
  <ServicePageTemplate
    title="Chassis Mods & Custom Fabrication | Barnhardt"
    metaDescription="Roll cages, custom brackets, and structural fabrication for performance and race vehicles. Professional chassis work at Barnhardt Performance, Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Chassis Modifications"
    blocks={blocks}
  />
);

export default ChassisModifications;
