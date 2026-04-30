import type { Metadata } from "next";
import PrivacyPolicy from "@/screens/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Barnhardt Performance privacy policy and how we handle inquiries and website usage.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicy />;
}

