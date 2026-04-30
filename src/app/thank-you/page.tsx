import type { Metadata } from "next";
import ThankYou from "@/screens/ThankYou";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out to Barnhardt Performance. We received your message and will respond soon.",
  alternates: { canonical: "/thank-you" },
};

export default function Page() {
  return <ThankYou />;
}

