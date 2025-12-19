'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ReactGA from 'react-ga4';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialisation unique au chargement
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, [GA_MEASUREMENT_ID]);

  useEffect(() => {
    // Envoi d'un signal à chaque changement de page (url)
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return null;
}