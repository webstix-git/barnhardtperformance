import type { Metadata } from "next";
import Sitemap from "@/screens/Sitemap";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A complete list of pages on the Barnhardt Performance website.",
  alternates: { canonical: "/sitemap" },
};

export default function Page() {
  return <Sitemap />;
}

