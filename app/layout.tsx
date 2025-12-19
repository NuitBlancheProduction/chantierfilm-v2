import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
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
    'Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel de vos projets BTP.',
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
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/asset/icon.webp', type: 'image/webp' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/asset/icon.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Chantier Film',
    title: 'Chantier Film - Immortalisez Votre Chantier en Vidéo',
    description:
      'Capturation professionnelle de chantiers avec drone et timelapse. Documentation complète et suivi en temps réel.',
    images: [
      {
        url: `${baseUrl}/asset/01.webp`,
        width: 1200,
        height: 630,
        alt: 'Chantier Film - Suivi de chantier professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chantier Film - Documentation Professionnelle de Chantiers',
    description:
      'Drone, timelapse et reportages pour valoriser vos projets de construction.',
    images: [`${baseUrl}/asset/01.webp`],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chantier Film',
  url: baseUrl,
  logo: `${baseUrl}/asset/title.webp`,
  description:
    'Service professionnel de documentation vidéo de chantiers : timelapse, drone, reportages complets.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39 rue Jean Mermoz',
    addressLocality: 'Golbey',
    postalCode: '88190',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33-6-51-30-18-93',
    contactType: 'customer service',
    email: 'contact@chantierfilm.com',
    areaServed: 'FR',
    availableLanguage: 'French',
  },
  sameAs: [
    'https://www.linkedin.com/company/chantier-film',
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
      <body className={nunito.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-S2FE5BSKWT" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}