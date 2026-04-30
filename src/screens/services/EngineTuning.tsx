import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Precision Fuel Injection & Carburetor Tuning",
    imagePosition: "right",
    image: "/images/dyno.jpeg",
    imageAlt: "Vehicle on chassis dyno for tuning",
    paragraphs: [
      "An engine is only as good as its tune. Without proper calibration your engine will never reach its true potential. At Barnhardt Performance, we specialize in both electronic fuel injection (EFI) tuning and traditional carburetor optimization, using our professional chassis dynamometer to verify every adjustment in real time.",
      "We develop custom calibrations tailored to your specific engine combination, fuel type, intended use, and atmospheric conditions. The result is an engine that runs smoother, makes more power, responds better to throttle input, and does it all reliably."
    ],
  },
  {
    type: "text",
    heading: "Electronic Fuel Injection (EFI) Tuning",
    paragraphs: [
      "Modern fuel injection systems offer incredible precision and tunability, but they also require expert calibration to perform at their best. We work with popular aftermarket ECUs including Holley, FiTech, MSD Atomic, and factory PCM tuning through HP Tuners, EFILive, and similar platforms.",
      "During an EFI tuning session, we focus on air-fuel ratios across the entire RPM and load range, ignition timing optimization, throttle response calibration, idle quality, cold start enrichment, and transient fuel delivery. We monitor everything in real time on the dyno."
    ],
  },
  {
    type: "two-col",
    heading: "Carburetor Tuning",
    imagePosition: "left",
    image: "/images/shop-engine.jpg",
    imageAlt: "Carburetor tuning on performance engine",
    paragraphs: [
      "Carburetors remain the heart of many performance engines — especially in classic cars and racing applications. Tuning a carburetor requires a deep understanding of fuel circuits, air flow dynamics, and mechanical nuances.",
      "Our carburetor tuning services go far beyond simple jet changes. We evaluate and optimize every circuit: idle, main, accelerator pump, power valve, and float level. We work with all major brands including Holley, Edelbrock, Demon, and Quick Fuel."
    ],
  },
  {
    type: "two-col",
    heading: "The Dyno Advantage",
    imagePosition: "right",
    image: "/images/gallery-3.jpeg",
    imageAlt: "Engine tuning on chassis dyno",
    paragraphs: [
      "All of our tuning is performed on our professional chassis dynamometer, which provides real-time data on horsepower, torque, air-fuel ratios, and other critical parameters. The dyno allows us to make precise, measurable adjustments and verify the results immediately.",
      "Without a dyno, tuning becomes educated guessing. With our chassis dyno, we see exactly how your engine responds to every change and optimize accordingly — ensuring a tune that's powerful, safe, and reliable."
    ],
  },
  {
    type: "text",
    heading: "What to Expect",
    paragraphs: [
      "When you bring your vehicle to Barnhardt Performance for tuning, we start with a thorough inspection of your engine and fuel system. We verify that all mechanical components are in good condition before beginning the calibration process.",
      "A complete tune typically takes 2-4 hours depending on the complexity of your setup. Throughout the session, we keep you informed and share dyno results so you can see the improvements in real time.",
      "When we're finished, you'll leave with a custom calibration verified on the dyno, along with before-and-after dyno sheets documenting your vehicle's performance gains."
    ],
  },
];

const EngineTuning = () => (
  <ServicePageTemplate
    title="Engine Tuning & Dyno Calibration | Barnhardt"
    metaDescription="Precision EFI and carburetor tuning verified on our chassis dyno. Get more power and better drivability from your engine at Barnhardt Performance, Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Engine Tuning"
    blocks={blocks}
  />
);

export default EngineTuning;
