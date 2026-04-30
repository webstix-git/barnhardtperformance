import type { Metadata } from "next";
import Script from "next/script";
import OilChanges from "@/screens/services/OilChanges";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Oil Changes & Maintenance",
  description: "Performance-grade oil changes and routine maintenance to keep your vehicle running strong at Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/oil-changes" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-oil-changes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Oil Changes & Maintenance",
              urlPath: "/services/oil-changes",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <OilChanges />
    </>
  );
}

