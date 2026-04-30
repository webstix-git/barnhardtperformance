import ServicePageTemplate, { ServiceBlock } from "@/components/ServicePageTemplate";

const blocks: ServiceBlock[] = [
  {
    type: "two-col",
    heading: "Custom Engine Builds for Maximum Performance",
    imagePosition: "left",
    image: "/images/shop-engine.jpg",
    imageAlt: "Barnhardt Performance custom engine build",
    paragraphs: [
      "At Barnhardt Performance, engine building is more than a service — it's our passion. Whether you're looking to breathe new life into a classic muscle car, build a purpose-built race engine, or extract every last ounce of horsepower from your daily driver, our team has the knowledge, tools, and experience to deliver results that exceed your expectations.",
      "With over 20 years of hands-on engine building experience, we've worked with virtually every platform imaginable. From small-block Chevys and big-block Fords to modern LS and Coyote powerplants, we understand the nuances of each engine family and know exactly how to maximize their potential for your specific application."
    ],
  },
  {
    type: "text",
    heading: "Our Engine Building Process",
    paragraphs: [
      "Every engine build at Barnhardt Performance begins with a detailed consultation. We sit down with you to understand your goals — whether that's a specific horsepower target, a particular use case (street, strip, or circle track), or a budget you're working within.",
      "Once we've established the direction, our process follows a methodical, disciplined approach:"
    ],
    list: [
      { label: "Inspection & Machining", text: "Every block and rotating assembly is thoroughly inspected and precision-machined to exact specifications." },
      { label: "Component Selection", text: "We hand-select every component — pistons, rods, camshafts, heads, and valvetrain — based on your performance goals." },
      { label: "Assembly", text: "Every clearance is checked, every torque spec is verified, and every component is installed with meticulous precision." },
      { label: "Break-In & Testing", text: "After assembly, we follow a controlled break-in procedure and validate the build on our chassis dynamometer." },
    ],
  },
  {
    type: "two-col",
    heading: "Street Performance Builds",
    imagePosition: "right",
    image: "/images/street-performance.jpeg",
    imageAlt: "Street performance engine build",
    paragraphs: [
      "Not every engine build is destined for the track. Many of our customers want a reliable, powerful street engine that transforms their daily driving experience. Our street performance builds focus on a balance of power, drivability, and longevity.",
      "We optimize cam profiles for streetable idle and low-end torque, select fuel system components that work with pump gas, and ensure the entire package works harmoniously with your vehicle's transmission, cooling system, and exhaust.",
      "The result is an engine that pulls hard from idle to redline, sounds incredible, and can be driven every day with confidence."
    ],
  },
  {
    type: "two-col",
    heading: "Race Engine Builds",
    imagePosition: "left",
    image: "/images/shop-firebird.jpeg",
    imageAlt: "Race engine preparation",
    paragraphs: [
      "For our competition-oriented customers, we build race engines designed to perform under the most demanding conditions. Every component is selected for maximum performance, weight savings, and durability under extreme stress.",
      "Our race builds feature high-compression forged internals, race-spec camshafts, ported and polished cylinder heads, and precision-balanced rotating assemblies. Every engine is assembled in a clean environment with premium lubricants and gaskets, ensuring reliability when it matters most."
    ],
  },
  {
    type: "text",
    heading: "Why Choose Barnhardt Performance for Your Engine Build?",
    paragraphs: [
      "Engine building is an art that requires patience, precision, and an intimate understanding of how all the components work together. At Barnhardt Performance, we don't just bolt parts together — we engineer complete powerplants tailored to your specific needs.",
      "As a veteran-owned business, we bring the same discipline and attention to detail that defined our military service into every engine we build. When you trust us with your engine build, you're getting a handcrafted powerplant built by enthusiasts who share your passion for performance.",
      "We take pride in our work, and it shows in every engine that leaves our shop. From the first consultation to the final dyno pull, you'll experience a level of service and craftsmanship that sets Barnhardt Performance apart."
    ],
  },
];

const EngineBuilding = () => (
  <ServicePageTemplate
    title="Custom Engine Building | Barnhardt Performance"
    metaDescription="Custom engine builds for street and race vehicles at Barnhardt Performance. Forged internals, ported heads, and precision assembly in Bloomer, WI."
    heroImage="/images/services-banner.jpeg"
    breadcrumbLabel="Engine Building"
    blocks={blocks}
  />
);

export default EngineBuilding;
