import type { Metadata } from "next";
import Gallery from "@/screens/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos of builds, dyno sessions, and projects from the Barnhardt Performance shop.",
  alternates: { canonical: "/gallery" },
};

export default function Page() {
  return <Gallery />;
}

