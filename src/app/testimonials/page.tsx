import type { Metadata } from "next";
import Testimonials from "@/screens/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what customers say about Barnhardt Performance — engine builds, tuning, fabrication, and performance service in Bloomer, WI.",
  alternates: { canonical: "/testimonials" },
};

export default function Page() {
  return <Testimonials />;
}

