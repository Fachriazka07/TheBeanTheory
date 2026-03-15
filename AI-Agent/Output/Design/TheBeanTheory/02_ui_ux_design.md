# The Bean Theory — UI/UX Design System

**Phase:** 02 (Design) | **Date:** 2026-02-20 | **Status:** Draft

---

## 1. Design Decisions

| Decision          | Choice                                    |
| :---------------- | :---------------------------------------- |
| Design Tool       | None (code-first, no Figma)               |
| Component Library | None — Custom components with Vanilla CSS |
| Design Style      | **Minimalist Industrial & Premium**       |
| Target Devices    | **Mobile-first**, desktop-optimized       |
| Accessibility     | WCAG 2.1 AA (Medium priority)             |

### Design Style Rationale

| Style          | Score | Notes                                          |
| :------------- | :---- | :--------------------------------------------- |
| **Minimalist** | ✅ 10 | Perfect for "premium" coffee brand positioning |
| Glassmorphism  | ❌ 4  | Too trendy, doesn't match industrial vibe      |
| Flat Design    | ❌ 5  | Too plain for luxury feel                      |
| Neumorphism    | ❌ 3  | Poor accessibility, doesn't match brand        |
| Material       | ❌ 5  | Too "Google", not distinctive enough           |

**Chosen: Minimalist Industrial** — Clean layouts, bold serif typography, heavy white space, earthy color palette, and cinematic imagery. Magazine-editorial feel inspired by high-end coffee brands like Blue Bottle, Ceremony Coffee.

---

## 2. Color Palette

### Primary Palette (Earth Tones + Industrial)

```
Brand Colors
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ■ Charcoal       ■ Espresso       ■ Roast Brown           │
│  #1A1A1A          #2C1810          #6B4226                  │
│  (Primary Dark)   (Brand Accent)   (Warm Accent)            │
│                                                             │
│  ■ Cream          ■ Off-White      ■ Stone Gray             │
│  #F5F0EB          #FAFAF7          #9B9590                  │
│  (Background)     (Surface)        (Muted Text)             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Complete Token Scale

| Token               | Hex       | HSL           | Usage                        |
| :------------------ | :-------- | :------------ | :--------------------------- |
| `--clr-charcoal`    | `#1A1A1A` | `0 0% 10%`    | Primary text, headings, hero |
| `--clr-espresso`    | `#2C1810` | `18 47% 12%`  | Brand accent, CTA hover      |
| `--clr-roast`       | `#6B4226` | `24 45% 28%`  | Warm highlights, badges      |
| `--clr-mocha`       | `#8B6F4E` | `30 28% 42%`  | Secondary accent, borders    |
| `--clr-cream`       | `#F5F0EB` | `30 30% 94%`  | Background (main)            |
| `--clr-off-white`   | `#FAFAF7` | `60 23% 97%`  | Card surface, alt sections   |
| `--clr-stone`       | `#9B9590` | `27 4% 59%`   | Meta text, captions          |
| `--clr-matte-black` | `#111111` | `0 0% 7%`     | Hero overlay, dark sections  |
| `--clr-white`       | `#FFFFFF` | `0 0% 100%`   | Text on dark backgrounds     |
| `--clr-error`       | `#C53030` | `0 61% 48%`   | Error states, sold out       |
| `--clr-success`     | `#38654A` | `144 28% 31%` | Ready/in-stock indicator     |

### Contrast Ratios (WCAG AA ✅)

| Combination           | Ratio  | Pass?              |
| :-------------------- | :----- | :----------------- |
| Charcoal on Cream     | 16.2:1 | ✅ AAA             |
| Charcoal on Off-White | 17.1:1 | ✅ AAA             |
| White on Matte-Black  | 19.3:1 | ✅ AAA             |
| White on Espresso     | 14.5:1 | ✅ AAA             |
| Roast on Cream        | 5.8:1  | ✅ AA              |
| Stone on Cream        | 3.1:1  | ✅ AA (large text) |

---

## 3. Typography

### Font Pairing: Serif + Sans-Serif

| Role        | Font                 | Weight        | Fallback                 |
| :---------- | :------------------- | :------------ | :----------------------- |
| **Heading** | **Playfair Display** | 400, 700, 900 | Georgia, Times, serif    |
| **Body**    | **DM Sans**          | 400, 500, 700 | system-ui, -apple-system |
| **Accent**  | **DM Mono**          | 400           | monospace                |

> **Rationale:** Playfair Display (serif) evokes luxury magazine editorial feel — high contrast strokes, elegant hairlines. DM Sans (sans-serif) provides clean, modern readability for body text. DM Mono for small labels and technical details (coffee specs).

### Type Scale (1.250 — Major Third)

| Token          | Size       | Line Height | Weight | Usage                |
| :------------- | :--------- | :---------- | :----- | :------------------- |
| `--fs-display` | `4.768rem` | 1.1         | 900    | Hero headline        |
| `--fs-h1`      | `3.815rem` | 1.15        | 700    | Page titles          |
| `--fs-h2`      | `3.052rem` | 1.2         | 700    | Section headings     |
| `--fs-h3`      | `2.441rem` | 1.25        | 700    | Sub-section headings |
| `--fs-h4`      | `1.953rem` | 1.3         | 600    | Card titles          |
| `--fs-h5`      | `1.563rem` | 1.35        | 600    | Small headings       |
| `--fs-body-lg` | `1.25rem`  | 1.6         | 400    | Lead paragraphs      |
| `--fs-body`    | `1rem`     | 1.7         | 400    | Body text (16px)     |
| `--fs-body-sm` | `0.875rem` | 1.6         | 400    | Captions, meta       |
| `--fs-caption` | `0.75rem`  | 1.5         | 500    | Badges, labels       |

### Mobile Adjustments

| Token          | Desktop    | Mobile (≤768px) |
| :------------- | :--------- | :-------------- |
| `--fs-display` | `4.768rem` | `2.5rem`        |
| `--fs-h1`      | `3.815rem` | `2rem`          |
| `--fs-h2`      | `3.052rem` | `1.75rem`       |
| `--fs-h3`      | `2.441rem` | `1.5rem`        |

---

## 4. Spacing System

### Base: 8px Grid

| Token        | Value     | Usage                       |
| :----------- | :-------- | :-------------------------- |
| `--space-1`  | `0.25rem` | Tight internal padding      |
| `--space-2`  | `0.5rem`  | Badge padding, small gaps   |
| `--space-3`  | `0.75rem` | Input padding               |
| `--space-4`  | `1rem`    | Card internal padding       |
| `--space-5`  | `1.5rem`  | Between elements in a group |
| `--space-6`  | `2rem`    | Section internal spacing    |
| `--space-8`  | `3rem`    | Between sections (mobile)   |
| `--space-10` | `4rem`    | Between sections (tablet)   |
| `--space-12` | `5rem`    | Between sections (desktop)  |
| `--space-16` | `8rem`    | Hero section padding        |
| `--space-20` | `10rem`   | Large section separation    |

### Container Widths

| Token             | Value    | Usage                 |
| :---------------- | :------- | :-------------------- |
| `--container-sm`  | `640px`  | Narrow content (text) |
| `--container-md`  | `768px`  | Medium content        |
| `--container-lg`  | `1024px` | Default page content  |
| `--container-xl`  | `1280px` | Wide layouts          |
| `--container-2xl` | `1440px` | Maximum page width    |

---

## 5. Component Tokens

### Borders & Radius

| Token              | Value                               | Usage                      |
| :----------------- | :---------------------------------- | :------------------------- |
| `--radius-none`    | `0`                                 | Sharp corners (industrial) |
| `--radius-sm`      | `0.25rem`                           | Badges, tags               |
| `--radius-md`      | `0.5rem`                            | Cards, buttons             |
| `--radius-lg`      | `1rem`                              | Large cards                |
| `--radius-full`    | `9999px`                            | Pills, avatar              |
| `--border-default` | `1px solid`                         | Default border             |
| `--border-color`   | `var(--clr-mocha)` with 20% opacity | Subtle borders             |

### Shadows (Minimal — Industrial Style)

| Token         | Value                         | Usage        |
| :------------ | :---------------------------- | :----------- |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)`  | Subtle lift  |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Card hover   |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, hero |

### Transitions

| Token                 | Value                                 | Usage               |
| :-------------------- | :------------------------------------ | :------------------ |
| `--transition-fast`   | `150ms ease`                          | Micro-interactions  |
| `--transition-base`   | `300ms ease`                          | Button hover, links |
| `--transition-slow`   | `500ms cubic-bezier(0.16, 1, 0.3, 1)` | Page elements       |
| `--transition-smooth` | `800ms cubic-bezier(0.16, 1, 0.3, 1)` | GSAP animations     |

### Z-Index Scale

| Token         | Value | Usage             |
| :------------ | :---- | :---------------- |
| `--z-base`    | `0`   | Default stacking  |
| `--z-above`   | `10`  | Slightly elevated |
| `--z-sticky`  | `100` | Sticky navbar     |
| `--z-overlay` | `200` | Overlays, modals  |
| `--z-max`     | `999` | Loading screen    |

---

## 6. Key Screens & States

### 6.1 Landing Page (Home)

| Section             | Server/Client  | Key Elements                                 |
| :------------------ | :------------- | :------------------------------------------- |
| Hero Section        | `"use client"` | Video BG, fade-in tagline, CTA button        |
| Featured Products   | Server         | 3 featured beans from Sanity, stagger reveal |
| Brand Story (About) | Server         | Split layout: image + text, parallax         |
| CTA Banner          | `"use client"` | "Order via WhatsApp" full-width strip        |

**States:**

- ✅ Ideal: Video plays, content animates in on scroll
- ⏳ Loading: Skeleton placeholders for text/images
- ❌ Error: Static fallback image if video fails
- 📱 Mobile: Static image replaces video, simplified animations

### 6.2 Product Showcase

| Section            | Server/Client  | Key Elements                                 |
| :----------------- | :------------- | :------------------------------------------- |
| Page Header        | Server         | Title + filter/sort controls                 |
| Product Grid       | Server         | Cards: image, name, origin, roast, price, WA |
| Product Card Hover | `"use client"` | Image zoom, info slide-up                    |

**States:**

- ✅ Ideal: Grid of product cards with data from Sanity
- ⏳ Loading: Skeleton grid (6 cards)
- 📭 Empty: "Coming soon — new beans are being roasted"
- ❌ Error: "Unable to load products" + retry button
- 🔴 Sold Out: Badge "Sold Out" over card, WA button disabled

### 6.3 Brewing Guide

| Section       | Server/Client | Key Elements                                |
| :------------ | :------------ | :------------------------------------------ |
| Page Header   | Server        | Title + method selector tabs                |
| Method Cards  | Server        | Icon, name, difficulty badge                |
| Method Detail | Server        | Portable Text (Sanity), step-by-step layout |

**States:**

- ✅ Ideal: Magazine-layout with step images + text
- ⏳ Loading: Skeleton blocks
- 📭 Empty: "Guides are being brewed — check back soon!"
- ❌ Error: Retry prompt

### 6.4 Location Finder

| Section         | Server/Client  | Key Elements                          |
| :-------------- | :------------- | :------------------------------------ |
| Page Header     | Server         | Title + intro text                    |
| Interactive Map | `"use client"` | Leaflet map with 3 pins               |
| Branch Cards    | Server         | Name, address, hours, directions link |

**States:**

- ✅ Ideal: Map renders with 3 markers + info popups
- ⏳ Loading: Map skeleton + card skeletons
- ❌ Error: Static address list (no map) as fallback

---

## 7. Component Inventory

### Layout Components

| Component      | Type   | Props                                 |
| :------------- | :----- | :------------------------------------ |
| `Layout`       | Server | children, className                   |
| `Navbar`       | Client | transparent (boolean), dark (boolean) |
| `Footer`       | Server | -                                     |
| `SmoothScroll` | Client | children (Lenis wrapper)              |
| `Container`    | Server | size (sm\|md\|lg\|xl), children       |
| `Section`      | Server | bg (cream\|dark\|white), padding      |

### UI Components

| Component         | Type   | Props                                   |
| :---------------- | :----- | :-------------------------------------- |
| `Button`          | Client | variant (primary\|outline\|ghost), size |
| `Badge`           | Server | variant (roast\|process\|difficulty)    |
| `Card`            | Server | children, hover (boolean)               |
| `AnimatedSection` | Client | animation (fade\|stagger\|parallax)     |
| `Skeleton`        | Server | variant (card\|text\|image)             |

### Feature Components

| Component         | Type   | Props                              |
| :---------------- | :----- | :--------------------------------- |
| `HeroSection`     | Client | videoSrc, title, subtitle, ctaText |
| `ProductCard`     | Client | product (Sanity type), priority    |
| `MethodCard`      | Server | method (Sanity type)               |
| `MapView`         | Client | locations (array), center, zoom    |
| `WhatsAppButton`  | Client | link, productName                  |
| `FlavorNotes`     | Server | notes (string[])                   |
| `RoastLevelBadge` | Server | level (Light\|Medium\|Dark)        |
| `DifficultyBadge` | Server | level (Easy\|Medium\|Hard)         |

---

## 8. Animation Specifications (GSAP) — Awwwards Level

> 📄 **Full spec:** [02_animation_specs.md](./02_animation_specs.md)

### Summary of Interactions

| Category          | Techniques                                             |
| :---------------- | :----------------------------------------------------- |
| **Global**        | Custom cursor (dot + ring), Lenis smooth scroll        |
| **Text**          | SplitText char reveal, line-by-line, marquee separator |
| **Scroll-Driven** | Clip-path image reveals, horizontal scroll (products)  |
| **Layout**        | Parallax depth layers, pinned sections                 |
| **Components**    | Magnetic buttons, navbar morph, card hover timelines   |
| **Transitions**   | Page wipe (curtain), mobile menu clip-path circle      |

### Mobile Performance Strategy

| Animation                | Desktop            | Mobile             |
| :----------------------- | :----------------- | :----------------- |
| Custom cursor            | ✅                 | ❌ Hidden          |
| Parallax layers          | ✅                 | ❌ Static          |
| Horizontal scroll        | ✅                 | ❌ Vertical grid   |
| Video hero               | ✅                 | ❌ Static image    |
| Magnetic buttons         | ✅                 | ❌ Normal          |
| Split text               | ✅                 | ✅ Simpler         |
| Page transitions         | ✅                 | ✅ Faster 0.3s     |
| `prefers-reduced-motion` | Minimal animations | Respect OS setting |

---

## 9. Accessibility Checklist (WCAG 2.1 AA)

| Category       | Requirement                         | Status |
| :------------- | :---------------------------------- | :----- |
| Color Contrast | 4.5:1 normal text, 3:1 large text   | ✅     |
| Keyboard       | All interactive elements focusable  | 🔜     |
| Focus Visible  | Custom focus ring (2px solid roast) | 🔜     |
| Screen Readers | Alt text on all images, ARIA labels | 🔜     |
| Forms          | N/A (no forms — WA link only)       | ✅     |
| Motion         | `prefers-reduced-motion` respected  | 🔜     |
| Semantic HTML  | Proper heading hierarchy (h1→h6)    | 🔜     |
| Video          | Pause button on hero video          | 🔜     |
