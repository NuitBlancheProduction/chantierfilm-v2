import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-nunito",
});

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "https://www.chantierfilm.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Chantier Film - Immortalisez Votre Chantier en Vidéo",
  description:
    "Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.",
  keywords: [
    "chantier film",
    "vidéo chantier",
    "timelapse chantier",
    "drone chantier",
    "documentation chantier",
    "suivi chantier",
    "reportage chantier",
    "captation chantier",
    "photogrammétrie",
    "inspection drone",
  ],
  icons: {
    icon: [{ url: "/asset/icon.webp" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Chantier Film",
    title: "Chantier Film - Immortalisez Votre Chantier en Vidéo",
    description:
      "Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.",
    images: [
      {
        url: `${baseUrl}/asset/01.webp`,
        width: 1200,
        height: 630,
        alt: "Chantier Film - Documentation professionnelle de chantiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chantier Film - Immortalisez Votre Chantier en Vidéo",
    description:
      "Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.",
    images: [`${baseUrl}/asset/01.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoProductionService",
      "@id": `${baseUrl}/#organization`,
      name: "Chantier Film",
      description:
        "Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.",
      url: baseUrl,
      logo: `${baseUrl}/asset/title.webp`,
      priceRange: "$$-$$$",
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      serviceType: [
        "Reportage Chantier",
        "Timelapse Professionnel",
        "Vue Drone",
        "Documentation Chantier",
        "Suivi Temps Réel",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "Chantier Film",
      description:
        "Service de captation vidéo et photo de chantiers avec drones et timelapse.",
      url: baseUrl,
      telephone: "+33-6-51-30-18-93",
      email: "contact@chantierfilm.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "39 rue Jean Mermoz",
        addressLocality: "Golbey",
        postalCode: "88190",
        addressCountry: "FR",
      },
      priceRange: "$$-$$$",
      sameAs: ["https://www.linkedin.com/company/chantier-film"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}