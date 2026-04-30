import type { Metadata } from "next";
import Script from "next/script";
import PerformanceAutoService from "@/screens/services/PerformanceAutoService";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Performance Auto Service",
  description: "Performance-focused auto service, drivetrain upgrades, and maintenance from Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/performance-auto-service" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-performance-auto-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Performance Auto Service",
              urlPath: "/services/performance-auto-service",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <PerformanceAutoService />
    </>
  );
}

