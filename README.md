# 🎬 Nuit Blanche Production - Site Officiel

> Vitrine numérique moderne pour Nuit Blanche Production. Performance, esthétique et immersion visuelle.

Ce dépôt contient le code source du site officiel de Nuit Blanche Production. L'objectif est de présenter le portfolio, les services et l'identité visuelle de l'agence avec une expérience utilisateur fluide et un SEO optimal.

## ⚡️ Tech Stack (Le Moteur)

Architecture moderne basée sur la performance (Server Side Rendering) et l'évolutivité :

* **Core:** [Next.js 14](https://nextjs.org/) (App Router)
* **Langage:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Composants UI:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
* **Icônes:** Lucide React
* **Animation:** Framer Motion
* **Déploiement:** Vercel

## 🛠 Structure du Projet

```text
/
  ├── /app           # Pages et Layouts (App Router)
  │    ├── layout.tsx    # Squelette global (Navbar, Footer, SEO)
  │    ├── page.tsx      # Page d'accueil
  │    └── globals.css   # Styles globaux & Variables
  ├── /components    # Blocs UI réutilisables
  │    ├── /ui           # Composants primitifs Shadcn (Button, Dialog, etc.)
  │    ├── Navbar.tsx    # Navigation principale
  │    ├── Footer.tsx    # Pied de page
  │    └── ...           # Sections (Hero, Services, ContactModal)
  ├── /public        # Assets statiques (Images, Favicons, Robots.txt)
  ├── /lib           # Utilitaires (utils.ts)
  └── /hooks         # Custom React Hooks

```

🌍 Déploiement
Le déploiement est automatisé via Vercel.
Toute modification poussée sur la branche main déclenche un build de production optimisé.
Note sur la collaboration :
Le projet étant hébergé sur un compte Vercel personnel (Hobby), le dépôt GitHub doit être Public pour permettre les déploiements automatiques, ou le déploiement doit être déclenché par le propriétaire du compte Vercel.

