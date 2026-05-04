import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./providers";
import Layout from "@/components/Layout";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { jsonLdLocalBusiness, jsonLdOrganization, jsonLdWebsite } from "@/lib/structured-data";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-E316PP584P";

export const metadata: Metadata = {
  title: {
    default: "Barnhardt Performance",
    template: "%s | Barnhardt Performance",
  },
  description: "Built for Power. Driven by Precision.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Barnhardt Performance",
    title: "Barnhardt Performance",
    description: "Built for Power. Driven by Precision.",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Barnhardt Performance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnhardt Performance",
    description: "Built for Power. Driven by Precision.",
    images: [absoluteUrl("/twitter-image")],
  },
  icons: {
    icon: [
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

const structuredDataGraph = [
  jsonLdOrganization(),
  jsonLdWebsite(),
  {
    ...jsonLdLocalBusiness(),
    image: absoluteUrl("/opengraph-image"),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3" },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Tuning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chassis Dyno" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chassis Modifications" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Auto Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brakes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suspension Work" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Changes & Maintenance" } },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="mX2FAJg3cOwnl9HzEjQwMUsMz8tUXCLSWqKy7qNkO3k" />
        <meta name="apple-mobile-web-app-title" content="Barnhardt Performance" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

