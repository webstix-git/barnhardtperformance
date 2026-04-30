import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Professional Chassis Dynamometer Testing",
    imagePosition: "right",
    image: "/images/dyno-1.jpeg",
    imageAlt: "Vehicles on chassis dyno at Barnhardt Performance",
    paragraphs: [
      "Our chassis dynamometer is one of the most important tools in our arsenal. A chassis dyno measures your vehicle's horsepower and torque output at the wheels — the number that actually matters for real-world performance.",
      "Unlike engine dynos that measure output at the flywheel, our chassis dyno measures power after it has passed through the entire drivetrain, giving you a true picture of how much power is reaching the pavement."
    ],
  },
  {
    type: "text",
    heading: "How Chassis Dyno Testing Works",
    paragraphs: [
      "During a dyno session, your vehicle is secured onto the dynamometer rollers. Sophisticated sensors and software calculate horsepower and torque at every point in the power band, producing a detailed dyno graph.",
      "Our dyno is equipped with advanced data acquisition that monitors air-fuel ratios, intake air temperature, exhaust gas temperatures, boost pressure, and other critical metrics. Each dyno pull takes less than a minute, but we run multiple pulls to ensure consistency and accuracy."
    ],
  },
  {
    type: "two-col",
    heading: "Applications for Chassis Dyno Testing",
    imagePosition: "left",
    image: "/images/gallery-5.jpeg",
    imageAlt: "Chassis dyno testing",
    paragraphs: [
      "Our chassis dyno service is used for a wide variety of applications across all types of vehicles and power levels."
    ],
    list: [
      { label: "Baseline Testing", text: "Establish a baseline before modifications to measure the impact of every upgrade." },
      { label: "Tuning Verification", text: "Every tune we develop is validated on the dyno to ensure fuel and spark calibrations are optimized." },
      { label: "Troubleshooting", text: "Unusual dips in the power curve, lean spots, or inconsistent runs can point to underlying problems." },
      { label: "Competition Preparation", text: "Knowing your exact power output is essential for class compliance, gear ratio selection, and competitive strategy." },
    ],
  },
  {
    type: "text",
    heading: "What's Included in a Dyno Session",
    paragraphs: [
      "Every dyno session includes a pre-test vehicle inspection to verify safety. We check fluid levels, belt conditions, tire pressure, and ensure there are no obvious mechanical issues.",
      "After testing, you'll receive a detailed dyno sheet showing your horsepower and torque curves, along with any additional data collected during the session. We walk you through the results and discuss potential areas for improvement.",
      "For customers pursuing tuning services, the dyno session is integrated into the tuning process — you won't be charged separately for dyno time during a tune."
    ],
  },
];

const ChassisDyno = () => (
  <ServicePageTemplate
    title="Chassis Dyno Testing | Barnhardt Performance"
    metaDescription="Accurate wheel horsepower and torque measurements on our chassis dynamometer. Baseline testing, tuning validation, and diagnostics in Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Chassis Dyno Service"
    blocks={blocks}
  />
);

export default ChassisDyno;
