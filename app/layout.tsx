import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const baseUrl = 'https://www.chantierfilm.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Chantier Film',
  title: {
    template: '%s | Chantier Film',
    default: 'Chantier Film - Immortalisez Votre Chantier en Vidéo',
  },
  description:
    'Documentation vidéo de chantier et suivi drone pour le BTP. Timelapse box 4K, reportages industriels et valorisation de projets de construction.',
  keywords: [
    'suivi de chantier',
    'timelapse construction',
    'drone BTP',
    'documentation chantier',
    'vidéo corporate BTP',
    'photographie chantier',
    'reportage construction',
    'film institutionnel',
    'captation aérienne',
    'suivi travaux',
    'Grand Est',
    'Vosges',
    'Epinal',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/favicon.ico' },
    ],
    shortcut: '/favicons/favicon.ico',
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicons/site.webmanifest',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: 'Chantier Film',
    title: 'Chantier Film - Immortalisez Votre Chantier en Vidéo',
    description:
      'Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.',
    images: [
      {
        url: `/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp`,
        width: 1200,
        height: 630,
        alt: 'Suivi de chantier par drone - Chantier Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chantier Film - Documentation Professionnelle de Chantiers',
    description:
      'Drone, timelapse et reportages pour valoriser vos projets de construction.',
    images: [`/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // <-- Tu colleras ton code ici plus tard (ex: 'google-site-verification=...')
  },
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Chantier Film',
  url: baseUrl,
  logo: `/logos/icone-chantier-film-camera-connectee-chantier.webp`,
  image: `/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp`,
  description:
    'Expert en suivi de chantier vidéo, timelapse et drone pour le BTP et l\'industrie. Documentation complète de projets de construction.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39 rue Jean Mermoz',
    addressLocality: 'Golbey',
    postalCode: '88190',
    addressRegion: 'Grand Est',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '48.1953',
    longitude: '6.4347',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'State',
      name: 'Grand Est',
    },
    {
      '@type': 'City',
      name: 'Vosges',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33-6-51-30-18-93',
    contactType: 'customer service',
    email: 'contact@chantierfilm.com',
    areaServed: 'FR',
    availableLanguage: ['French'],
  },
  sameAs: [
    'https://www.linkedin.com/company/chantier-film',
  ],
  serviceType: [
    'Suivi de chantier vidéo',
    'Timelapse construction',
    'Captation drone BTP',
    'Reportage industriel',
    'Documentation de travaux',
  ],
  knowsAbout: [
    'Construction',
    'BTP',
    'Travaux publics',
    'Architecture',
    'Génie civil',
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
        {/* JSON-LD pour le référencement Local Business */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Chantier Film',
              url: baseUrl,
              logo: `${baseUrl}/logos/logo-chantier-film.webp`,
              image: `${baseUrl}/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp`,
              description: 'Expert en suivi de chantier vidéo, timelapse et drone pour le BTP et l\'industrie.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Golbey',
                addressRegion: 'Grand Est',
                addressCountry: 'FR',
              },
              priceRange: 'Sur devis',
              telephone: '+33-6-51-30-18-93',
              email: 'contact@chantierfilm.com',
              areaServed: 'Grand Est',
            }),
          }}
        />
      </head>
      <body className={nunito.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-S2FE5BSKWT" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}