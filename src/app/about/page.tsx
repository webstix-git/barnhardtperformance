import type { Metadata } from "next";
import About from "@/screens/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Barnhardt Performance — veteran-owned and operated in Bloomer, WI with 20+ years of experience building engines, tuning, and fabricating for enthusiasts.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}

