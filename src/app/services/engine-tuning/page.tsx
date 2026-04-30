import type { Metadata } from "next";
import Script from "next/script";
import EngineTuning from "@/screens/services/EngineTuning";
import { jsonLdService } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Engine Tuning",
  description: "Precision engine tuning and calibration for peak performance, verified on the dyno at Barnhardt Performance in Bloomer, WI.",
  alternates: { canonical: "/services/engine-tuning" },
};

export default function Page() {
  return (
    <>
      <Script
        id="service-jsonld-engine-tuning"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdService({
              name: "Engine Tuning",
              urlPath: "/services/engine-tuning",
              description: metadata.description as string,
            }),
          ),
        }}
      />
      <EngineTuning />
    </>
  );
}

