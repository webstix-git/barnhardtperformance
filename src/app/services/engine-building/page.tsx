import type { Metadata } from "next";
import Script from "next/script";
import EngineBuilding from "@/screens/services/EngineBuilding";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Engine Building",
  description: "Custom engine builds, rebuilds, and upgrades for street and race applications from Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/engine-building" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-engine-building"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Engine Building",
              urlPath: "/services/engine-building",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <EngineBuilding />
    </>
  );
}

