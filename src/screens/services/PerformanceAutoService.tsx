import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Comprehensive Performance Vehicle Service",
    imagePosition: "left",
    image: "/images/one.jpg",
    imageAlt: "Barnhardt Performance shop with muscle cars",
    paragraphs: [
      "At Barnhardt Performance, we understand that a high-performance vehicle demands more than just an engine tune — it requires every system to work together flawlessly.",
      "Our performance auto service encompasses transmission work, drivetrain upgrades, cooling system optimization, electrical systems, and comprehensive vehicle diagnostics. We treat every vehicle as a complete performance platform."
    ],
  },
  {
    type: "text",
    heading: "Transmission Service & Upgrades",
    paragraphs: [
      "Your transmission is the critical link between your engine's power and the wheels. We offer complete transmission service including fluid changes, filter replacement, and inspection. For increased power levels, we also offer shift kit installations, torque converter upgrades, and valve body modifications.",
      "We work with both automatic and manual transmissions across all major platforms. We also handle clutch replacements, flywheel resurfacing, and slave cylinder service for manual transmission vehicles."
    ],
  },
  {
    type: "two-col",
    heading: "Drivetrain & Differential Service",
    imagePosition: "right",
    image: "/images/gallery-4.jpeg",
    imageAlt: "Drivetrain service",
    paragraphs: [
      "We service and upgrade differentials, driveshafts, axles, and U-joints to ensure reliable power delivery. For vehicles with limited-slip differentials, we use correct friction modifiers and high-quality gear oils.",
      "We also install gear ratio changes to optimize acceleration for your specific tire size and intended use — shorter gears for drag racing or taller gears for highway cruising."
    ],
  },
  {
    type: "text",
    heading: "Cooling System Service",
    paragraphs: [
      "High-performance engines generate significant heat. We offer complete cooling system service including radiator upgrades, electric fan installations, coolant flush, thermostat replacement, and water pump upgrades.",
      "Overheating can cause catastrophic engine damage. We assess your cooling system's capacity and recommend upgrades to ensure optimal operating temperature under all conditions."
    ],
  },
  {
    type: "text",
    heading: "Electrical & Wiring",
    paragraphs: [
      "We troubleshoot and resolve electrical issues, install performance wiring harnesses, and integrate aftermarket components with factory systems. Clean, reliable wiring is essential for any performance build, and we take the time to do it right."
    ],
  },
];

const PerformanceAutoService = () => (
  <ServicePageTemplate
    title="Performance Auto Service | Barnhardt Performance"
    metaDescription="Transmission service, drivetrain upgrades, cooling systems, and full vehicle diagnostics. Complete performance auto care at Barnhardt Performance, Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Performance Auto Service"
    blocks={blocks}
  />
);

export default PerformanceAutoService;
