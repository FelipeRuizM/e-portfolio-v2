# Felipe Ruiz - Interactive E-Portfolio

A highly experimental, brutalist-inspired interactive portfolio built with modern WebGL physics and complex scroll-linked typography overlays.

## 🚀 Project Overview

This application is a static Single Page Application (SPA) designed to showcase full-stack development work. It leverages aggressive visual aesthetics alongside complex matrix layouts—moving deliberately away from standard clean-corporate templates towards an artistic, visceral user experience.

### Key Features

- **Interactive WebGL Liquid Cursor**: Uses a highly modified 60fps GPU fluid dynamics fragment shader. It mathematically simulates dense, viscous acrylic paint (`mix-blend-multiply` and `difference`) reacting seamlessly to DOM bounds.
- **Scroll-Linked Dual Typography**: Background tracking tickers mathematically accelerate directly mapped to the user’s global scroll velocity.
- **Cross-Planar Layouts**: Parallax intersection components native to Framer Motion drive the horizontal Project Showcase dynamically translating native vertical window scrolling.
- **Brutalist Mobile Architecture**: Fully distinct CSS geometric configurations via Tailwind breakpoints ensuring exact, absolute-grid alignment on both desktop and mobile viewports.

## 🛠️ Technology Stack

- **Core Engine**: React 19 + Vite
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion & GSAP
- **Routing**: React Router v7 (`HashRouter` optimization for Static endpoints)
- **Deployment**: Automated via GitHub Pages CLI

## 🔧 Local Development

1. Ensure you have Node.js installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local Vite development server:
   ```bash
   npm run dev
   ```

## 📦 Deployment

This repository is configured natively to compile and push directly to GitHub Pages. To deploy the newest build:

```bash
npm run deploy
```
(This triggers the Vite Production Compiler and hooks the resulting static payloads automatically to the `gh-pages` branch).

## 🎨 Asset Structure

- Project JSON matrices and routing mappings are encapsulated in `src/data/projects.js` to allow fast content iterations without shattering the core React components natively.
