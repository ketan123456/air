import "./globals.css";
import type { Metadata } from "next";
import Motion from "./motion";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Airox Ultra Pneumatics | Industrial Air Treatment Equipment",
    template: "%s | Airox Ultra Pneumatics",
  },
  description:
    "Explore refrigeration and desiccant air dryers, air filters, automatic drains, air receivers, water chillers, heat exchangers and nitrogen generation equipment from Airox Ultra Pneumatics in New Delhi.",
  keywords: [
    "industrial air dryers Delhi",
    "refrigerated air dryer",
    "desiccant air dryer",
    "compressed air filters",
    "automatic drain valves",
    "air receiver tank",
    "industrial water chiller",
    "heat exchanger",
    "nitrogen generator",
    "Airox Ultra Pneumatics",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Airox Ultra Pneumatics",
    title: "Airox Ultra Pneumatics | Industrial Air Treatment Equipment",
    description:
      "Compressed-air treatment and industrial equipment in New Delhi, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airox Ultra Pneumatics",
    description:
      "Compressed-air treatment and industrial equipment in New Delhi, India.",
  },
};
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Airox Ultra Pneumatics",
  email: "Airoxultrapneumatics08@gmail.com",
  telephone: "+91-8470072102",
  taxID: "07BWVPN0302C1ZS",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ground Floor, 59A, Sainik Enclave, Mohan Garden, Part III, Uttam Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  ...(siteUrl ? { url: siteUrl } : {}),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8470072102",
    email: "Airoxultrapneumatics08@gmail.com",
    contactType: "sales",
    areaServed: "IN",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <Motion />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
