import type { Metadata } from "next";
import Services from "@/screens/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Barnhardt Performance services: custom engine building, dyno tuning, chassis fabrication, brakes, suspension work, maintenance, and more in Bloomer, WI.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <Services />;
}

