# Wireframe: Landing Page (Home)

**Screen:** Home / Landing Page
**Priority:** P0 (Primary entry point)
**URL:** `/`
**Fidelity:** Mid-Fi (ASCII)

---

## Desktop Layout (≥1024px)

### Section 1: Hero (Full Viewport)

```
+================================================================+
|                                                                  |
|  [Logo]  Home  Products  Brewing Guide  Locations   [WhatsApp]  |  ← Navbar (transparent, absolute)
|                                                                  |
+================================================================+
|                                                                  |
|             ┌─────────────────────────────────────┐              |
|             │                                     │              |
|             │        🎥 VIDEO BACKGROUND          │              |  ← Full viewport cinematic video
|             │        (hero.mp4 autoplay)           │              |     Dark overlay 60% opacity
|             │                                     │              |
|             │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │              |
|             │                                     │              |
|             │     THE BEAN                         │              |  ← Playfair Display, --fs-display
|             │         THEORY                       │              |     White text, GSAP fade-in 1.2s
|             │                                     │              |
|             │   "Where every cup tells a story"    │              |  ← DM Sans, --fs-body-lg
|             │                                     │              |
|             │        [Explore Our Beans ↓]         │              |  ← Button: primary, scroll to next
|             │                                     │              |
|             │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │              |
|             │                                     │              |
|             └─────────────────────────────────────┘              |
|                                                                  |
|                        ↓ scroll indicator                        |  ← Animated bounce arrow
|                                                                  |
+==================================================================+
```

### Section 2: Featured Products (3 Cards)

```
+==================================================================+
|                                                                    |
|   bg: --clr-cream                                                  |
|                                                                    |
|                    ── Our Selection ──                              |  ← DM Mono, caption, --clr-stone
|             Handpicked Single Origins                              |  ← Playfair Display, --fs-h2
|                                                                    |
|   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐  |
|   │  ┌─────────────┐ │ │  ┌─────────────┐ │ │  ┌─────────────┐ │  |
|   │  │             │ │ │  │             │ │ │  │             │ │  |
|   │  │   [IMAGE]   │ │ │  │   [IMAGE]   │ │ │  │   [IMAGE]   │ │  |  ← Product photos from Sanity
|   │  │   300x400   │ │ │  │   300x400   │ │ │  │   300x400   │ │  |     aspect-ratio: 3/4
|   │  │             │ │ │  │             │ │ │  │             │ │  |
|   │  └─────────────┘ │ │  └─────────────┘ │ │  └─────────────┘ │  |
|   │                  │ │                  │ │                  │  |
|   │  Gayo Mountain   │ │  Toraja Sapan    │ │  Flores Bajawa   │  |  ← --fs-h4, Playfair Display
|   │  Aceh, Sumatra   │ │  Sulawesi        │ │  NTT             │  |  ← --fs-body-sm, --clr-stone
|   │                  │ │                  │ │                  │  |
|   │  [Medium] [Natural]│ │  [Dark] [Washed] │ │  [Light] [Honey] │  |  ← Badge components
|   │                  │ │                  │ │                  │  |
|   │  Rp 85.000       │ │  Rp 92.000       │ │  Rp 78.000       │  |  ← --fs-h5, --clr-charcoal
|   │                  │ │                  │ │                  │  |
|   │  [Order via WA ↗]│ │  [Order via WA ↗]│ │  [Order via WA ↗]│  |  ← WhatsAppButton (green accent)
|   │                  │ │                  │ │                  │  |
|   └──────────────────┘ └──────────────────┘ └──────────────────┘  |
|                                                                    |
|                        GSAP: stagger reveal 0.15s each             |
|                                                                    |
|                    [View All Products →]                           |  ← Button: outline, link to /products
|                                                                    |
+====================================================================+
```

### Section 3: Brand Story

```
+====================================================================+
|                                                                      |
|   bg: --clr-off-white                                                |
|                                                                      |
|   ┌────────────────────────┐  ┌─────────────────────────────────┐   |
|   │                        │  │                                 │   |
|   │                        │  │  ── Our Story ──                │   |  ← DM Mono, caption
|   │                        │  │                                 │   |
|   │      [IMAGE]           │  │  From Bean to                   │   |  ← Playfair Display, --fs-h2
|   │      Roastery/         │  │  Your Cup                       │   |
|   │      Barista           │  │                                 │   |
|   │      Photo             │  │  We source the finest beans     │   |  ← DM Sans, --fs-body-lg
|   │      (parallax)        │  │  from across the Indonesian     │   |
|   │                        │  │  archipelago, roasting each     │   |
|   │                        │  │  batch with precision and       │   |
|   │                        │  │  passion.                       │   |
|   │                        │  │                                 │   |
|   │                        │  │  [Learn More →]                 │   |  ← Button: ghost
|   │                        │  │                                 │   |
|   └────────────────────────┘  └─────────────────────────────────┘   |
|                                                                      |
|   50% width                    50% width                             |
|                                                                      |
|   GSAP: parallax on scroll     GSAP: fade-in from right             |
|                                                                      |
+======================================================================+
```

### Section 4: CTA Banner

```
+======================================================================+
|                                                                        |
|   bg: --clr-matte-black (full-width)                                   |
|                                                                        |
|     ┌──────────────────────────────────────────────────────────────┐   |
|     │                                                              │   |
|     │   Ready to discover your                                     │   |  ← Playfair, --fs-h3, white
|     │   perfect cup?                                               │   |
|     │                                                              │   |
|     │   [Order via WhatsApp ↗]         [Visit Our Store →]         │   |  ← 2 CTAs side-by-side
|     │   (primary, green)               (outline, white border)     │   |
|     │                                                              │   |
|     └──────────────────────────────────────────────────────────────┘   |
|                                                                        |
+========================================================================+
```

### Section 5: Footer

```
+========================================================================+
|                                                                          |
|   bg: --clr-charcoal                                                     |
|                                                                          |
|   ┌──────────────────┐  ┌───────────────┐  ┌────────────────────────┐   |
|   │                  │  │               │  │                        │   |
|   │  THE BEAN        │  │  Quick Links  │  │   Follow Us            │   |
|   │  THEORY          │  │               │  │                        │   |
|   │                  │  │  Home         │  │   [IG] [TikTok] [WA]   │   |
|   │  Specialty       │  │  Products    │  │                        │   |
|   │  Coffee          │  │  Brewing     │  │   Newsletter            │   |
|   │  Roastery        │  │  Locations   │  │   [email@...         ] │   |
|   │                  │  │               │  │   [Subscribe]          │   |
|   └──────────────────┘  └───────────────┘  └────────────────────────┘   |
|                                                                          |
|   ───────────────────────────────────────────────────────────────────   |
|                                                                          |
|   © 2026 The Bean Theory. All rights reserved.                          |
|                                                                          |
+========================================================================+
```

---

## Mobile Layout (≤768px)

```
+================================+
|  [☰]   THE BEAN THEORY   [WA] |  ← Hamburger menu + WA shortcut
+================================+
|                                |
|   ┌──────────────────────────┐ |
|   │                          │ |
|   │   [STATIC IMAGE]        │ |  ← Static hero (no video on mobile)
|   │   (bg-image, dark        │ |
|   │    overlay)              │ |
|   │                          │ |
|   │   THE BEAN               │ |  ← --fs-display (mobile: 2.5rem)
|   │       THEORY             │ |
|   │                          │ |
|   │   "Where every cup       │ |
|   │    tells a story"        │ |
|   │                          │ |
|   │   [Explore Our Beans ↓]  │ |
|   │                          │ |
|   └──────────────────────────┘ |
|                                |
|   ── Our Selection ──          |
|   Handpicked Single Origins    |
|                                |
|   ┌──────────────────────────┐ |
|   │  [IMAGE - Full Width]    │ |  ← Single column, stacked
|   │  Gayo Mountain           │ |
|   │  Aceh · [Medium]         │ |
|   │  Rp 85.000               │ |
|   │  [Order via WA ↗]        │ |
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  [IMAGE - Full Width]    │ |  ← Swipeable on mobile (optional)
|   │  Toraja Sapan            │ |
|   │  Sulawesi · [Dark]       │ |
|   │  Rp 92.000               │ |
|   │  [Order via WA ↗]        │ |
|   └──────────────────────────┘ |
|                                |
|   [View All Products →]       |
|                                |
|================================|
|                                |
|   [BRAND STORY IMAGE]         |  ← Full width, stacked
|                                |
|   From Bean to Your Cup        |
|                                |
|   We source the finest...      |
|                                |
|   [Learn More →]               |
|                                |
|================================|
|                                |
|   bg: --clr-matte-black        |
|                                |
|   Ready to discover your       |
|   perfect cup?                 |
|                                |
|   [Order via WhatsApp ↗]       |  ← Full-width buttons, stacked
|   [Visit Our Store →]          |
|                                |
|================================|
|                                |
|   THE BEAN THEORY              |
|   Quick Links · Social         |
|                                |
|   © 2026 The Bean Theory       |
|                                |
+================================+
```

---

## States

### Loading State

```
+================================================================+
|  [Logo]  ▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓                 |
+================================================================+
|                                                                  |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← Hero skeleton |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                  |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                  |
|                                                                  |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                            |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                              |
|                                                                  |
|   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             |
|   │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  ← Cards   |
|   │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │             |
|   │ ▓▓▓▓       │  │ ▓▓▓▓       │  │ ▓▓▓▓       │             |
|   └─────────────┘  └─────────────┘  └─────────────┘             |
+==================================================================+
```

### Error State (Video Fail)

```
+================================================================+
|                                                                  |
|   ┌──────────────────────────────────────────────────────────┐  |
|   │                                                          │  |
|   │   [STATIC FALLBACK IMAGE]                                │  |
|   │   (coffee beans close-up)                                │  |
|   │                                                          │  |  ← Graceful fallback
|   │   THE BEAN THEORY                                        │  |     Same layout, static bg
|   │   "Where every cup tells a story"                        │  |
|   │                                                          │  |
|   │   [Explore Our Beans ↓]                                  │  |
|   │                                                          │  |
|   └──────────────────────────────────────────────────────────┘  |
+==================================================================+
```

---

## Interactions

| #   | Trigger                     | Action                                    |
| :-- | :-------------------------- | :---------------------------------------- |
| 1   | Scroll past hero            | Navbar transitions: transparent → solid   |
| 2   | Click "Explore Our Beans"   | Smooth scroll to Featured section         |
| 3   | Scroll into Featured        | Cards stagger-reveal with GSAP            |
| 4   | Hover ProductCard (desktop) | Image zoom 1.05x, shadow-md               |
| 5   | Click "Order via WA"        | Opens WhatsApp with pre-filled message    |
| 6   | Click "View All Products"   | Navigate to `/products`                   |
| 7   | Scroll into Brand Story     | Image parallax, text fade-in from right   |
| 8   | Click hamburger (mobile)    | Full-screen menu overlay, GSAP slide-down |
