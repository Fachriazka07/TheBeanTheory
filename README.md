# The Bean Theory

A premium, interactive e-commerce and brand showcase website for **The Bean Theory**, a specialty coffee roastery. 

This project is built with a focus on high-end aesthetics, cinematic micro-interactions, and a smooth user experience. It leverages modern web technologies to deliver a "magazine-like" feel that educates customers and highlights the artistry of coffee roasting.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & CSS Modules (for specific design tokens)
- **Animation:** [GSAP](https://gsap.com/) (GreenSock Animation Platform) for stagger reveals, parallax, and scroll-linked animations
- **Smooth Scrolling:** Lenis (Studio Freight)
- **Content Management:** Sanity (Configured/Planned)
- **Mapping:** React-Leaflet (Planned for Location Finder)

## ✨ Key Features

- **Cinematic Hero Section:** Immersive background video with high-contrast typography, GSAP-driven stagger reveals, and mouse-based parallax effects.
- **Premium Animations:** Custom "spring" and "smooth" easings, interactive hover states (e.g., magnetic/sweep buttons), and scroll-triggered element reveals.
- **Featured Products Showcase:** Interactive product cards displaying single-origin beans, with dynamic scroll drift and bloom reveals.
- **Mobile-First Responsive Design:** Adapts fluidly from desktop monitors to mobile screens without sacrificing the luxury aesthetic.

## 📦 Project Structure

```text
TheBeanTheory/
├── src/
│   ├── app/                 # Next.js App Router (Pages, Layouts, Globals)
│   ├── components/          # Reusable React components
│   │   ├── features/        # Product cards, mapping, etc.
│   │   ├── landing/         # Hero, Brand Story, CTA, Featured Products
│   │   ├── layout/          # Navbar, Footer, Custom Cursor, SmoothScroll
│   │   └── ui/              # Base UI elements (Skeleton, etc.)
│   ├── hooks/               # Custom React hooks (e.g., useGSAP)
│   ├── lib/                 # Utility functions, query helpers, Sanity client
│   └── types/               # TypeScript interfaces & types
├── public/                  # Static assets (images, videos, fonts)
├── tailwind.config.ts       # Tailwind CSS configuration
└── postcss.config.mjs       # PostCSS plugins setup
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. Clone this repository.
2. Navigate into the application directory:
   ```bash
   cd TheBeanTheory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🤝 Contribution Guidelines

This project strictly follows the defined `RULE[user_global]` conventions, specifically:
- Static Type Checking (TypeScript) is enforced.
- ESLint and Prettier are required for code quality and formatting.
- `git commit` messages must follow the structured Changelog style (Conventional Commits).

---
*Built with ❤️ for coffee enthusiasts.*
