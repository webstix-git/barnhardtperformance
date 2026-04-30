import type { Metadata } from "next";
import Script from "next/script";
import ChassisDyno from "@/screens/services/ChassisDyno";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Chassis Dyno",
  description: "Accurate horsepower and torque measurement with professional chassis dyno service at Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/chassis-dyno" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-chassis-dyno"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Chassis Dyno",
              urlPath: "/services/chassis-dyno",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <ChassisDyno />
    </>
  );
}

