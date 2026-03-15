# ADR-001: Architecture Selection — Next.js + Sanity CMS

## Status: Accepted (Revised) | Date: 2026-02-20

> **Revision Note:** Updated from Vite + React SPA → Next.js App Router + Sanity CMS per user request.

---

## Context

| Factor       | Value                                          |
| :----------- | :--------------------------------------------- |
| Project Type | E-Commerce Showcase Website + Headless CMS     |
| Team Size    | Solo Developer                                 |
| Scale        | < 1,000 users (informational site, no auth)    |
| Timeline     | MVP — 2 days                                   |
| Key Tech     | GSAP, Lenis, Video Background, Interactive Map |
| CMS          | Sanity (headless CMS for content management)   |
| Backend      | Sanity API (GROQ queries)                      |

---

## Decision

We will use **Next.js 15 (App Router)** with **Sanity CMS** as the headless content management system, deployed on **Vercel**.

### Why Next.js (revised from Vite)?

1. **SSR/SSG for SEO** — Next.js enables static generation for product pages, improving discoverability
2. **Built-in Image Optimization** — `next/image` for product photos = better performance
3. **API Routes** — Can serve as proxy for Sanity GROQ queries if needed
4. **Sanity Official Integration** — `next-sanity` package provides first-class support
5. **Vercel Deployment** — Zero-config deploy with automatic revalidation
6. **Server Components** — Default server rendering reduces JS bundle (Rule #90: Server-First)

### Why Sanity CMS?

1. **Free Tier** — Generous free plan for solo/fun projects
2. **Embedded Studio** — Sanity Studio runs as a Next.js route (`/studio`)
3. **Real-time Content** — GROQ queries + Live Preview
4. **Structured Content** — Schema-based, type-safe content model
5. **Image Pipeline** — Built-in CDN image transformation (crop, resize)
6. **No Database Needed** — Content hosted on Sanity's cloud

### Architecture Pattern: Next.js App Router + Headless CMS

```
┌─────────────────────────────────────────────────────────────┐
│                      Vercel (Deploy)                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  Next.js App Router                    │  │
│  │  ┌──────────────────────────────────────────────────┐ │  │
│  │  │              Server Components (RSC)              │ │  │
│  │  │  ┌──────────┐ ┌──────────┐ ┌───────────────────┐│ │  │
│  │  │  │ Home Page│ │ Products │ │ Brewing Guide     ││ │  │
│  │  │  │ (SSG)    │ │ (SSG)    │ │ (SSG)             ││ │  │
│  │  │  └──────────┘ └──────────┘ └───────────────────┘│ │  │
│  │  └──────────────────────────────────────────────────┘ │  │
│  │                        │  GROQ                        │  │
│  │  ┌──────────────────────────────────────────────────┐ │  │
│  │  │              Client Components                    │ │  │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │ │  │
│  │  │  │ GSAP     │ │ Lenis    │ │ Leaflet Map      │ │ │  │
│  │  │  │ Anims    │ │ Scroll   │ │ Interactive      │ │ │  │
│  │  │  └──────────┘ └──────────┘ └──────────────────┘ │ │  │
│  │  └──────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
│                        │                                     │
│          ┌─────────────┴─────────────┐                      │
│          ▼                           ▼                      │
│  ┌──────────────┐          ┌──────────────────┐             │
│  │ Sanity API   │          │ Sanity Studio     │             │
│  │ (Content)    │          │ (/studio route)   │             │
│  └──────────────┘          └──────────────────┘             │
└─────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
the-bean-theory/
├── public/
│   ├── fonts/                        # Custom web fonts
│   ├── images/                       # Static images (icons, logos)
│   └── videos/
│       └── hero.mp4                  # Landing page cinematic video
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (site)/                   # Route group: public website
│   │   │   ├── layout.tsx            # Site layout (Navbar + Footer)
│   │   │   ├── page.tsx              # Home / Landing page
│   │   │   ├── products/
│   │   │   │   └── page.tsx          # Product Showcase
│   │   │   ├── brewing-guide/
│   │   │   │   └── page.tsx          # Brewing Guide
│   │   │   └── locations/
│   │   │       └── page.tsx          # Location Finder
│   │   ├── studio/
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx          # Sanity Studio (embedded)
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global CSS import
│   │
│   ├── components/                   # React components
│   │   ├── ui/                       # Atomic UI elements
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Card.tsx
│   │   ├── layout/                   # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SmoothScroll.tsx      # Lenis wrapper (client)
│   │   ├── home/                     # Home page sections
│   │   │   ├── HeroSection.tsx       # Video hero (client)
│   │   │   └── FeaturedSection.tsx
│   │   ├── products/                 # Product page components
│   │   │   └── ProductCard.tsx
│   │   ├── brewing/                  # Brewing guide components
│   │   │   └── MethodCard.tsx
│   │   └── locations/                # Location components
│   │       └── MapView.tsx           # Leaflet map (client)
│   │
│   ├── animations/                   # GSAP animation configs
│   │   ├── gsap-config.ts            # GSAP plugin registration
│   │   ├── scroll-triggers.ts        # ScrollTrigger presets
│   │   └── transitions.ts            # Page/element transitions
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useGsap.ts               # GSAP animation hook
│   │   └── useMediaQuery.ts          # Responsive breakpoint hook
│   │
│   ├── lib/                          # Utilities & configs
│   │   ├── sanity/
│   │   │   ├── client.ts             # Sanity client config
│   │   │   ├── queries.ts            # GROQ queries
│   │   │   └── image.ts              # Sanity image URL builder
│   │   └── whatsapp.ts               # WA link generator
│   │
│   ├── styles/                       # Design system
│   │   ├── tokens.css                # CSS custom properties
│   │   ├── reset.css                 # CSS reset
│   │   └── typography.css            # Font imports & type scale
│   │
│   └── types/                        # TypeScript types
│       └── index.ts                  # Shared types (Product, etc.)
│
├── sanity/                           # Sanity CMS config
│   ├── schemas/
│   │   ├── product.ts                # Product schema
│   │   ├── brewingGuide.ts           # Brewing guide schema
│   │   └── location.ts              # Location schema
│   ├── sanity.config.ts              # Sanity Studio config
│   └── sanity.cli.ts                 # Sanity CLI config
│
├── .env.local                        # Environment variables (NEVER commit)
├── .eslintrc.json                    # ESLint config
├── .prettierrc                       # Prettier config
├── next.config.ts                    # Next.js config
├── tailwind.config.ts                # (if using Tailwind — optional)
├── tsconfig.json                     # TypeScript config
└── package.json
```

### Key Architecture Decisions

| Decision                  | Rationale                                                  |
| :------------------------ | :--------------------------------------------------------- |
| `(site)/` route group     | Separates public pages from Sanity Studio route            |
| `sanity/schemas/`         | CMS content models co-located, separate from Next.js       |
| `lib/sanity/`             | Sanity client + queries centralized                        |
| `components/{feature}/`   | Feature-based component organization                       |
| `animations/`             | GSAP configs separate from React components                |
| Server Components default | SSG for content pages, Client Components for interactivity |
| Embedded Sanity Studio    | Monorepo approach — Studio at `/studio` route              |

---

## Tech Stack Summary

| Category       | Choice                      | Version |
| :------------- | :-------------------------- | :------ |
| Framework      | Next.js (App Router)        | ^15.x   |
| Language       | TypeScript                  | ^5.x    |
| CMS            | Sanity                      | ^3.x    |
| Sanity Toolkit | next-sanity                 | ^9.x    |
| Animation      | GSAP                        | ^3.12   |
| Smooth Scroll  | @studio-freight/lenis       | ^1.x    |
| Map            | Leaflet + react-leaflet     | ^4.x    |
| Styling        | Vanilla CSS + CSS Variables | -       |
| Image          | next/image + Sanity CDN     | -       |
| Deployment     | Vercel                      | -       |
| Linter         | ESLint                      | ^9.x    |
| Formatter      | Prettier                    | ^3.x    |

---

## Consequences

### ✅ Positive

- **CMS-powered content** — Products, guides, locations editable without code changes
- **SSG performance** — Static pages served from CDN edge
- **SEO-ready** — Server-rendered pages with proper meta tags
- **Image optimization** — next/image + Sanity CDN = fast, responsive images
- **Embedded Studio** — Edit content at `/studio` without separate deploy
- **Server Components** — Smaller client JS bundle

### ⚠️ Tradeoffs

- **GSAP + SSR** — Must use `"use client"` directive for animation components (hydration)
- **Sanity learning curve** — Schema definition syntax is Sanity-specific
- **Build time** — Slightly slower than Vite due to SSR/SSG processing
- **Free tier limits** — Sanity free plan has 100K API requests/month (sufficient for this project)

---

## Research Sources

| Source                            | Key Insight                                      |
| :-------------------------------- | :----------------------------------------------- |
| Sanity official docs              | next-sanity integration, embedded Studio setup   |
| Next.js 15 docs                   | App Router, Server Components, route groups      |
| Sanity + Next.js starter template | Monorepo structure, GROQ query patterns          |
| GSAP React guide                  | useGSAP hook, `"use client"` requirement         |
| Medium/Dev.to best practices      | Feature-based component organization for Next.js |
