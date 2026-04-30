import { SITE_URL } from "@/lib/site";
import { PHONE_E164 } from "@/lib/contact";

export type JsonLd = Record<string, unknown>;

export function jsonLdOrganization(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Barnhardt Performance",
    url: SITE_URL,
    sameAs: ["https://www.facebook.com/Barnhardttruckandauto/"],
  };
}

export function jsonLdWebsite(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "Barnhardt Performance",
    publisher: { "@id": `${SITE_URL}#organization` },
  };
}

export function jsonLdLocalBusiness(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: "Barnhardt Performance",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: "barnhardtperformance@gmail.com",
    priceRange: "$$",
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17152 115th St",
      addressLocality: "Bloomer",
      addressRegion: "WI",
      postalCode: "54724",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.1014,
      longitude: -91.4893,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: { "@type": "State", name: "Wisconsin" },
    sameAs: ["https://www.facebook.com/Barnhardttruckandauto/"],
  };
}

export function jsonLdService(params: { name: string; urlPath: string; description: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${params.urlPath}#service`,
    name: params.name,
    description: params.description,
    provider: { "@id": `${SITE_URL}#localbusiness` },
    areaServed: { "@type": "State", name: "Wisconsin" },
    url: `${SITE_URL}${params.urlPath}`,
  };
}

export function jsonLdFaqPage(params: { urlPath: string; questions: Array<{ q: string; a: string }> }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${params.urlPath}#faq`,
    mainEntity: params.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    url: `${SITE_URL}${params.urlPath}`,
  };
}

