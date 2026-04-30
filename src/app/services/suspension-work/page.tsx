import type { Metadata } from "next";
import Script from "next/script";
import SuspensionWork from "@/screens/services/SuspensionWork";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Suspension Work",
  description: "Suspension upgrades and setups including coilovers, lowering kits, lift kits, and performance handling solutions in Bloomer, WI.",
  alternates: { canonical: "/services/suspension-work" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-suspension-work"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Suspension Work",
              urlPath: "/services/suspension-work",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <SuspensionWork />
    </>
  );
}

