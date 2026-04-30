import type { Metadata } from "next";
import Script from "next/script";
import ChassisModifications from "@/screens/services/ChassisModifications";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Chassis Modifications",
  description: "Custom chassis fabrication, reinforcement, and modifications built for safety and performance at Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/chassis-modifications" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-chassis-modifications"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Chassis Modifications",
              urlPath: "/services/chassis-modifications",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <ChassisModifications />
    </>
  );
}

