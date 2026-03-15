# The Bean Theory — Design Blueprint

**Version:** 1.0 | **Date:** 2026-02-20 | **Status:** ✅ Ready for Development Phase

---

## Executive Summary

**Project:** The Bean Theory — Specialty Coffee E-Commerce Website
**Context:** Solo Developer (Tier 1) | Fun/Personal Project
**Timeline:** 2 hari (2026-02-20 → 2026-02-22)
**Budget:** Rp 0 (free-tier hosting)
**Decision:** ✅ GO

**Goal:** Build an Awwwards-quality website for a specialty coffee roastery with 3 branches. Digital storefront + brand showcase + education hub + location guide. Rich GSAP animations, cinematic feel, Sanity CMS for content management.

---

## 1. Architecture

> 📄 Full ADR: [ADR-001_architecture.md](./ADR-001_architecture.md) | [ADR-002_sanity_cms.md](./ADR-002_sanity_cms.md)

### Tech Stack

| Layer         | Technology                               | Rationale                             |
| :------------ | :--------------------------------------- | :------------------------------------ |
| Framework     | **Next.js 15 (App Router)**              | SSG + Server Components, SEO-friendly |
| Language      | **TypeScript**                           | Type safety                           |
| CMS           | **Sanity v3** (embedded)                 | Headless CMS at `/studio`             |
| Styling       | **Vanilla CSS + Tokens**                 | Design tokens as CSS variables        |
| Animation     | **GSAP 3.12**                            | Awwwards-level interactions           |
| Smooth Scroll | **Lenis**                                | Premium scroll feel                   |
| Map           | **Leaflet + react-leaflet**              | Free, interactive maps                |
| Deployment    | **Vercel**                               | Edge runtime, ISR support             |
| Fonts         | **Playfair Display + DM Sans + DM Mono** | Serif + Sans + Mono                   |

### Folder Structure

```
the-bean-theory/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/             # Public pages (route group)
│   │   │   ├── page.tsx        # Home / Landing
│   │   │   ├── products/       # Product Showcase
│   │   │   ├── brewing-guide/  # Brewing Guide
│   │   │   └── locations/      # Location Finder
│   │   ├── studio/[[...tool]]/ # Embedded Sanity Studio
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles + tokens
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Container, Section
│   │   ├── ui/                 # Button, Badge, Card, Skeleton
│   │   ├── features/           # HeroSection, ProductCard, MapView, etc.
│   │   └── animations/         # AnimatedSection, SplitText, Cursor
│   ├── hooks/                  # useGSAP, useLenis, useScrollDirection
│   ├── lib/                    # sanity.ts (client config), utils
│   └── styles/                 # tokens.css, typography.css
├── sanity/
│   ├── schemas/                # product.ts, brewingGuide.ts, location.ts
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── public/                     # Static assets (images, video, fonts)
└── package.json
```

### CMS Schemas

| Schema         | Key Fields                                                                     |
| :------------- | :----------------------------------------------------------------------------- |
| `product`      | title, slug, image, origin, roastLevel, process, notes, price, isReady, waLink |
| `brewingGuide` | methodName, icon, difficulty, instructions (Portable Text), videoUrl           |
| `location`     | branchName, address, coordinates (Geopoint), openingHours                      |

---

## 2. Design System

> 📄 Full spec: [02_ui_ux_design.md](./02_ui_ux_design.md)

### Design Style: Minimalist Industrial & Premium

Magazine-editorial feel. Clean layouts, bold serif typography, heavy white space, earthy palette, cinematic imagery. Inspired by Blue Bottle, Coffee Collective, Felix Roasting Co.

### Color Palette

```
  ■ Charcoal #1A1A1A    ■ Espresso #2C1810    ■ Roast #6B4226
  ■ Mocha    #8B6F4E    ■ Cream    #F5F0EB    ■ Off-White #FAFAF7
  ■ Stone    #9B9590    ■ Matte-Black #111111  ■ Error #C53030
  ■ Success  #38654A
```

All contrast ratios pass **WCAG AA** minimum.

### Typography

| Role    | Font             | Weights       |
| :------ | :--------------- | :------------ |
| Heading | Playfair Display | 400, 700, 900 |
| Body    | DM Sans          | 400, 500, 700 |
| Accent  | DM Mono          | 400           |

**Scale:** 1.250 (Major Third) — from `0.75rem` (caption) to `4.768rem` (display).

### Spacing

Base: **8px grid**. Tokens from `--space-1` (0.25rem) to `--space-20` (10rem).
Containers: `640px` → `1440px` max.

---

## 3. Screens & Wireframes

> 📄 Full wireframes: [wireframes/README.md](./wireframes/README.md)

| Screen            | Priority | URL              | Key Sections                                      |
| :---------------- | :------- | :--------------- | :------------------------------------------------ |
| **Landing Page**  | P0       | `/`              | Hero (video), Featured Products, Brand Story, CTA |
| **Products**      | P0       | `/products`      | Filter bar, Product grid (3-col), Hover effects   |
| **Brewing Guide** | P1       | `/brewing-guide` | Method cards, Step-by-step detail, Video embed    |
| **Locations**     | P1       | `/locations`     | Interactive Leaflet map, Branch cards             |

### State Coverage (All Screens)

| State      | Implementation                                  |
| :--------- | :---------------------------------------------- |
| ✅ Ideal   | Full data from Sanity, all animations active    |
| ⏳ Loading | Skeleton components (Skeleton variant per type) |
| 📭 Empty   | Friendly message + CTA fallback                 |
| ❌ Error   | "Something went wrong" + Retry button           |
| 📱 Mobile  | Single-column, simplified animations, no video  |

---

## 4. Animation Specs (Awwwards Level)

> 📄 Full spec: [02_animation_specs.md](./02_animation_specs.md)

### Global Interactions

| Interaction       | Technique                                               |
| :---------------- | :------------------------------------------------------ |
| Custom Cursor     | Dot (8px) + ring (32px), `mix-blend-mode: difference`   |
| Smooth Scroll     | Lenis (duration: 1.2, custom easing)                    |
| Magnetic Elements | Navbar links + CTA buttons attract toward cursor (±8px) |
| Page Transitions  | Curtain wipe (matte-black div, clip-path inset)         |

### Text Animations

| Animation         | Trigger       | Duration | Detail                            |
| :---------------- | :------------ | :------- | :-------------------------------- |
| SplitText Reveal  | Page load     | 0.8s     | Per-character, rotateX -90° → 0°  |
| Line-by-Line      | ScrollTrigger | 0.6s     | Each line slides up, stagger 0.1s |
| Marquee Separator | Infinite      | -        | Horizontal text, scroll-velocity  |

### Scroll-Driven Animations

| Animation         | Trigger       | Detail                                    |
| :---------------- | :------------ | :---------------------------------------- |
| Hero Cinematic    | Page load     | Video → overlay fade → text reveal → CTA  |
| Clip-Path Reveal  | ScrollTrigger | Images reveal via `inset()` + scale 1.2→1 |
| Horizontal Scroll | Pin + Scrub   | Products section: vertical → horizontal   |
| Parallax Layers   | Scroll        | 3 depth layers (10%, 30%, 60% speed)      |

### Component Interactions

| Component   | Interaction                                         |
| :---------- | :-------------------------------------------------- |
| ProductCard | Image zoom + flavor notes slide-up + border animate |
| Navbar      | Transparent → glass blur → auto-hide on scroll down |
| Buttons     | Fill-from-left + arrow translate + press scale      |
| Mobile Menu | `clip-path: circle()` expand from hamburger         |

### Mobile Performance Strategy

| Feature           | Desktop | Mobile          |
| :---------------- | :------ | :-------------- |
| Custom cursor     | ✅      | ❌ Hidden       |
| Parallax          | ✅      | ❌ Static       |
| Horizontal scroll | ✅      | ❌ Grid         |
| Video hero        | ✅      | ❌ Static image |
| Magnetic buttons  | ✅      | ❌ Normal       |
| Split text        | ✅      | ✅ Simpler      |
| Page transitions  | ✅      | ✅ Faster       |

---

## 5. Component Inventory

### Layout (4)

| Component   | Type   | Purpose                      |
| :---------- | :----- | :--------------------------- |
| `Layout`    | Server | Root wrapper                 |
| `Navbar`    | Client | Transparent/solid, auto-hide |
| `Footer`    | Server | 3-column, dark bg            |
| `Container` | Server | Max-width constraint         |

### UI (5)

| Component         | Type   | Purpose                        |
| :---------------- | :----- | :----------------------------- |
| `Button`          | Client | primary/outline/ghost variants |
| `Badge`           | Server | roast/process/difficulty       |
| `Card`            | Server | General card wrapper           |
| `AnimatedSection` | Client | GSAP ScrollTrigger wrapper     |
| `Skeleton`        | Server | Loading placeholders           |

### Features (8)

| Component         | Type   | Purpose                      |
| :---------------- | :----- | :--------------------------- |
| `HeroSection`     | Client | Video bg, cinematic entry    |
| `ProductCard`     | Client | Product display + WA button  |
| `MethodCard`      | Server | Brewing method selector      |
| `MapView`         | Client | Leaflet interactive map      |
| `WhatsAppButton`  | Client | Deep link to WhatsApp        |
| `FlavorNotes`     | Server | Tag display for coffee notes |
| `RoastLevelBadge` | Server | Light/Medium/Dark indicator  |
| `CustomCursor`    | Client | Dot + ring animated cursor   |

---

## 6. Scope Reminder

### ✅ In Scope

1. Landing Page (hero video, featured products, brand story, CTA)
2. Product Showcase (catalog from Sanity, WA direct order)
3. Brewing Guide (V60, AeroPress, French Press — magazine layout)
4. Location Finder (Leaflet map, 3 branches)
5. Sanity CMS Studio at `/studio`
6. Awwwards-level GSAP animations
7. Responsive Design (mobile-first)
8. WhatsApp integration (direct link, no cart)

### ❌ Out of Scope

1. Shopping cart & checkout
2. User authentication
3. Payment gateway
4. Blog / article system
5. Multi-language
6. Email newsletter
7. Analytics tracking (GA)

---

## 7. Key Risks

| Risk                     | Impact | Mitigation                                  |
| :----------------------- | :----- | :------------------------------------------ |
| GSAP complexity → slip   | High   | Core animations first, polish later         |
| Video → poor mobile perf | High   | Static image fallback on mobile             |
| Scope creep              | High   | Strict Out of Scope list                    |
| GSAP Club plugins (paid) | Medium | Manual SplitText, Lenis over ScrollSmoother |

---

## 8. Milestones

| Phase       | Milestone                          | Target     |
| :---------- | :--------------------------------- | :--------- |
| ✅ Planning | Project Charter                    | 2026-02-20 |
| ✅ Design   | Design System + Wireframes + Anims | 2026-02-20 |
| 🔜 Dev      | Landing Page + Hero                | 2026-02-21 |
| 🔜 Dev      | Products + Brewing + Locations     | 2026-02-21 |
| 🔜 Dev      | Animation polish + Responsive      | 2026-02-22 |
| 🔜 Launch   | Deploy to Vercel                   | 2026-02-22 |

---

## 9. Source Documents

| #   | Document                 | Phase    | Path                                                    |
| :-- | :----------------------- | :------- | :------------------------------------------------------ |
| 1   | Planning Tier Assessment | Planning | `Planning/TheBeanTheory/01_planning_tier_assessment.md` |
| 2   | Project Charter          | Planning | `Planning/TheBeanTheory/01_project_charter.md`          |
| 3   | Design Tier Assessment   | Design   | `Design/TheBeanTheory/02_design_tier_assessment.md`     |
| 4   | ADR-001: Architecture    | Design   | `Design/TheBeanTheory/ADR-001_architecture.md`          |
| 5   | ADR-002: Sanity CMS      | Design   | `Design/TheBeanTheory/ADR-002_sanity_cms.md`            |
| 6   | UI/UX Design System      | Design   | `Design/TheBeanTheory/02_ui_ux_design.md`               |
| 7   | Animation Specs          | Design   | `Design/TheBeanTheory/02_animation_specs.md`            |
| 8   | Wireframe: Home          | Design   | `Design/TheBeanTheory/wireframes/home.md`               |
| 9   | Wireframe: Products      | Design   | `Design/TheBeanTheory/wireframes/products.md`           |
| 10  | Wireframe: Brewing Guide | Design   | `Design/TheBeanTheory/wireframes/brewing-guide.md`      |
| 11  | Wireframe: Locations     | Design   | `Design/TheBeanTheory/wireframes/locations.md`          |

---

## ✅ Design Phase Handoff Checklist

| #   | Item                         | Status |
| :-- | :--------------------------- | :----- |
| 1   | Project Charter              | ✅     |
| 2   | Architecture Decision (ADR)  | ✅     |
| 3   | CMS Decision (ADR-002)       | ✅     |
| 4   | Design Tokens (colors, type) | ✅     |
| 5   | Component Inventory          | ✅     |
| 6   | Wireframes (4 screens)       | ✅     |
| 7   | Animation Specifications     | ✅     |
| 8   | Mobile Strategy              | ✅     |
| 9   | Accessibility Checklist      | ✅     |
| 10  | Scope (In/Out)               | ✅     |
| 11  | Risk Register                | ✅     |
| 12  | Design Blueprint (this doc)  | ✅     |

---

## 🚀 Ready for Development Phase

```
Next: /development-tier-assessment → /setup-dev-environment → /scaffold-pages
```
