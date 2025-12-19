# 🏗️ Chantier Film - Suivi de Chantier & Timelapse

> La vitrine numérique dédiée à l'offre BTP de Nuit Blanche Production. Précision, suivi technique et valorisation de patrimoine industriel.

Ce dépôt contient le code source du site officiel de **Chantier Film**. L'objectif est de présenter les solutions de suivi de chantier (Timelapse, Drone, Vidéo), de rassurer les investisseurs/collectivités et de convertir les prospects BTP.

## ⚡️ Tech Stack (Performance & SEO)

Architecture clonée et optimisée depuis le core Nuit Blanche, basée sur la performance (SSR) et la fiabilité :

* **Core:** [Next.js 14](https://nextjs.org/) (App Router)
* **Langage:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Composants UI:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
* **Icônes:** Lucide React
* **Animation:** Framer Motion (Subtil & Pro)
* **Déploiement:** Vercel

## 🎯 Objectifs du Site (Business First)

1. **Crédibilité Immédiate :** Démontrer la capacité technique à gérer des chantiers complexes (Timelapse 4G, Sécurité, Drone) pour des clients type Norske Skog ou Collectivités.
2. **Conversion :** Présenter les offres claires (Installation, Abonnement, Reportage) et pousser à la demande de devis.
3. **Portail Client (Roadmap) :** Servira à terme de point d'entrée pour que les clients consultent leur suivi timelapse en temps réel.

## 🛠 Structure du Projet

```text
/
  ├── /app           # Pages et Layouts (App Router)
  │    ├── layout.tsx    # Squelette global (Navbar, Footer, SEO spécialisé BTP)
  │    ├── page.tsx      # Landing Page (Hero Section, Preuve sociale, Offres)
  │    └── globals.css   # Styles globaux (Charte graphique Chantier Film)
  ├── /components    # Blocs UI réutilisables
  │    ├── /ui           # Composants primitifs Shadcn
  │    ├── Navbar.tsx    # Navigation simplifiée
  │    ├── Pricing.tsx   # Section Tarifs (Installation / Abo / Reportage)
  │    └── ...           # Sections (Hero BTP, FAQ Technique, Contact)
  ├── /public        # Assets (Photos chantiers, Logos partenaires, Favicons)
  ├── /lib           # Utilitaires
  └── /hooks         # Custom React Hooks
```

🌍 Déploiement
Le déploiement est automatisé via Vercel.

Production : main branch.

Note: Ce projet est une filiale technique de Nuit Blanche Production. L'infrastructure est partagée pour maximiser l'efficacité de maintenance.

© Nuit Blanche Production - Division Chantier Film


***
