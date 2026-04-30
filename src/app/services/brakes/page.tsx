import type { Metadata } from "next";
import Script from "next/script";
import Brakes from "@/screens/services/Brakes";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Brakes",
  description: "Performance brake upgrades, kits, pads, and rotors for confident stopping power at Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/brakes" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-brakes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Brakes",
              urlPath: "/services/brakes",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <Brakes />
    </>
  );
}

