# ☕ Solstice Café

![Solstice Café](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070)

Un site vitrine moderne et élégant pour **Solstice Café**, un coffee shop artisanal fictif situé à Canggu, Bali.

---

## 🎯 Aperçu du projet

Ce projet est un site vitrine "one-page" développé avec les dernières technologies web pour présenter Solstice Café, son ambiance tropicale, son menu artisanal et son identité unique.

### ✨ Caractéristiques principales

- **Design moderne et responsive** - Parfaitement adapté à tous les écrans (mobile-first)
- **Animations fluides** - Transitions et effets au scroll avec Framer Motion
- **Navigation intuitive** - Navbar sticky avec smooth scroll vers les sections
- **Optimisé SEO** - Balises meta complètes, alt sur toutes les images
- **Performance optimisée** - Next.js 15 avec App Router et Server Components
- **Style épuré** - Palette inspirée par Bali : sable, café, vert tropical

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [TailwindCSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Police** : [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)
- **Déploiement** : Compatible [Vercel](https://vercel.com/)

---

## 📂 Structure du projet

```
solstice-cafe/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata SEO
│   ├── page.tsx             # Page d'accueil (assemblage des sections)
│   └── globals.css          # Styles globaux et custom scrollbar
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Composant bouton réutilisable
│   │   ├── Container.tsx    # Wrapper de conteneur
│   │   └── SectionWrapper.tsx # Wrapper avec animations au scroll
│   └── sections/
│       ├── Navbar.tsx       # Navigation sticky avec smooth scroll
│       ├── Hero.tsx         # Section d'accueil avec CTA
│       ├── About.tsx        # Section "À propos"
│       ├── Menu.tsx         # Section menu avec cartes produits
│       ├── Gallery.tsx      # Galerie d'images avec hover effects
│       ├── Contact.tsx      # Formulaire de contact + Google Maps
│       └── Footer.tsx       # Footer avec liens et réseaux sociaux
├── public/                  # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Installation et Lancement

### Prérequis

- Node.js 18+ installé
- npm, yarn, pnpm ou bun

### Étapes

1. **Cloner le projet** (ou télécharger l'archive)

```bash
git clone <url-du-repo>
cd solstice-cafe
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir le navigateur**

Visitez [http://localhost:3000](http://localhost:3000) pour voir le site en action.

---

## 📦 Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Compile le projet pour la production
npm run start    # Lance le serveur de production
npm run lint     # Vérifie la qualité du code avec ESLint
```

---

## 🎨 Sections du site

### 1. **Hero Section**
- Image de fond immersive (café tropical)
- Logo "Solstice Café" en grand format
- Bouton CTA "See Menu" avec smooth scroll

### 2. **About Section**
- Image à gauche, texte à droite
- Histoire du café et philosophie artisanale
- Design épuré avec séparateur doré

### 3. **Menu Section**
- 4 produits phares en cartes interactives
- Hover effects avec zoom et ombre
- Prix en roupies indonésiennes (K)

### 4. **Gallery Section**
- Grille responsive de 6 images
- Hover zoom-in avec overlay descriptif
- Photos de latte art, ambiance café, staff

### 5. **Contact Section**
- Formulaire de contact (nom, email, message)
- Informations de contact et horaires
- Google Maps intégré

### 6. **Footer**
- Logo et description
- Liens de navigation
- Icônes réseaux sociaux (Instagram, Facebook, Twitter)
- Copyright et mention "Created by Got You Website"

---

## 🌐 Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com/)
2. Connecter votre dépôt Git
3. Cliquer sur "Deploy"
4. Vercel détecte automatiquement Next.js et configure tout

Ou en ligne de commande :

```bash
npm install -g vercel
vercel
```

---

## 🎓 Crédits

**Développement** : Got You Website (division technique de Got You Agency)
**Images** : [Unsplash](https://unsplash.com/)
**Icônes** : Heroicons (via SVG inline)

---

## 📄 Licence

Ce projet est un prototype de démonstration. Tous droits réservés.

---

## 🔧 Personnalisation

Pour adapter ce site à votre propre projet :

1. **Modifier les images** : Remplacer les URLs Unsplash dans les composants
2. **Changer les couleurs** : Ajuster les classes Tailwind (`amber-`, `stone-`, `green-`)
3. **Éditer le contenu** : Modifier les textes dans chaque composant de section
4. **Adapter le formulaire** : Intégrer [Formspree](https://formspree.io/) ou une API backend

---

**Bon développement ! ☕✨**
