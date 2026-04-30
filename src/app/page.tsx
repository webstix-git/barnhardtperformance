import type { Metadata } from "next";
import Index from "@/screens/Index";

export const metadata: Metadata = {
  title: "Barnhardt Performance",
  description:
    "Veteran-owned performance shop in Bloomer, WI specializing in custom engine building, precision dyno tuning, chassis fabrication, and full-service performance upgrades.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Index />;
}

