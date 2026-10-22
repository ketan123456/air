import "./globals.css";
import type { Metadata } from "next";
import Motion from "./motion";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  icons: {
    icon: [{ url: "/favicon.svg?v=1", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg?v=1", type: "image/svg+xml" }],
  },
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
    url: siteUrl,
    locale: "en_IN",
    images: [
      {
        url: "/airox-logo.png",
        width: 1600,
        height: 600,
        alt: "Airox Ultra Pneumatics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airox Ultra Pneumatics",
    description:
      "Compressed-air treatment and industrial equipment in New Delhi, India.",
    images: ["/airox-logo.png"],
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
        <div className="site-chrome">
          <SiteHeader />
        </div>
        <main>{children}</main>
        <SiteFooter />
        <a
          className="whatsapp-float"
          href="https://wa.me/918470072102?text=Hello%20Airox%20Ultra%20Pneumatics%2C%20I%27d%20like%20to%20discuss%20your%20equipment."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Airox on WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16.03 3.2A12.6 12.6 0 0 0 5.2 22.25L3.5 28.5l6.4-1.68A12.65 12.65 0 1 0 16.03 3.2Zm0 22.95a10.3 10.3 0 0 1-5.25-1.44l-.38-.23-3.8 1 1.02-3.7-.25-.39a10.34 10.34 0 1 1 8.66 4.76Zm5.67-7.74c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.2.3-.8 1-1 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.51.1-.21.05-.39-.03-.55-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.57s1.1 2.98 1.25 3.19c.16.2 2.17 3.31 5.25 4.64.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.19-1.47-.08-.13-.28-.2-.59-.36Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
