# Wireframe: Product Showcase

**Screen:** Product Showcase
**Priority:** P0 (Primary revenue page)
**URL:** `/products`
**Fidelity:** Mid-Fi (ASCII)

---

## Desktop Layout (≥1024px)

### Page Header

```
+====================================================================+
|                                                                      |
|  [Logo]  Home  Products  Brewing Guide  Locations   [WhatsApp]      |  ← Navbar (solid bg)
|                                                                      |
+====================================================================+
|                                                                      |
|   bg: --clr-cream                                                    |
|   padding-top: --space-16                                            |
|                                                                      |
|                    ── Coffee Beans ──                                 |  ← DM Mono, --clr-stone
|              Our Single Origin                                       |  ← Playfair Display, --fs-h1
|              Collection                                              |
|                                                                      |
|   Sourced directly from the finest farms across                      |  ← DM Sans, --fs-body-lg
|   the Indonesian archipelago.                                        |     --clr-stone, max-w: 640px
|                                                                      |
+======================================================================+
```

### Filter Bar (Optional — for future)

```
+======================================================================+
|                                                                        |
|   [All] [Light] [Medium] [Dark]          Sort: [Newest ▼]             |  ← Filter tabs (RoastLevel)
|                                                                        |
|   ─────────────────────────────────────────────────────────────────   |
|                                                                        |
+========================================================================+
```

### Product Grid (Ideal State)

```
+========================================================================+
|                                                                          |
|   ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐  |
|   │  ┌────────────────┐ │  │  ┌────────────────┐ │  │  ┌────────────────┐ │  |
|   │  │                │ │  │  │                │ │  │  │                │ │  |
|   │  │   [PRODUCT     │ │  │  │   [PRODUCT     │ │  │  │   [PRODUCT     │ │  |
|   │  │    IMAGE]      │ │  │  │    IMAGE]      │ │  │  │    IMAGE]      │ │  |
|   │  │   aspect: 3/4  │ │  │  │   aspect: 3/4  │ │  │  │   aspect: 3/4  │ │  |
|   │  │                │ │  │  │                │ │  │  │                │ │  |
|   │  │  ┌──────────┐  │ │  │  │  ┌──────────┐  │ │  │  │               │ │  |
|   │  │  │ READY ✓  │  │ │  │  │  │ SOLD OUT │  │ │  │  │  ┌──────────┐ │ │  |
|   │  │  └──────────┘  │ │  │  │  └──────────┘  │ │  │  │  │ READY ✓  │ │ │  |
|   │  └────────────────┘ │  │  └────────────────┘ │  │  │  └──────────┘ │ │  |
|   │                     │  │                     │  │  └────────────────┘ │  |
|   │  Gayo Mountain      │  │  Toraja Sapan       │  │                     │  |
|   │  Aceh, Sumatra      │  │  Sulawesi           │  │  Flores Bajawa      │  |
|   │                     │  │                     │  │  NTT                 │  |
|   │  [Medium] [Natural] │  │  [Dark] [Washed]    │  │  [Light] [Honey]    │  |
|   │                     │  │                     │  │                     │  |
|   │  🫘 Berry, Choco    │  │  🫘 Spicy, Tobacco  │  │  🫘 Citrus, Floral  │  |  ← FlavorNotes
|   │                     │  │                     │  │                     │  |
|   │  ───────────────── │  │  ───────────────── │  │  ───────────────── │  |
|   │                     │  │                     │  │                     │  |
|   │  Rp 85.000          │  │  Rp 92.000          │  │  Rp 78.000          │  |
|   │                     │  │                     │  │                     │  |
|   │  [Order via WA ↗]   │  │  [Sold Out]  ← gray │  │  [Order via WA ↗]   │  |
|   │                     │  │  & disabled          │  │                     │  |
|   └─────────────────────┘  └─────────────────────┘  └─────────────────────┘  |
|                                                                          |
|   (3-column grid, gap: --space-6)                                        |
|   (Cards repeat for full catalog)                                        |
|                                                                          |
+========================================================================+
```

### Product Card — Hover State (Desktop)

```
┌─────────────────────┐      ┌─────────────────────┐
│  ┌────────────────┐ │      │  ┌────────────────┐ │
│  │                │ │      │  │   transform:    │ │
│  │   [IMAGE]      │ │  →→  │  │   scale(1.05)  │ │  ← Zoom on hover
│  │                │ │      │  │                │ │
│  └────────────────┘ │      │  └────────────────┘ │
│  shadow: none       │      │  shadow: --shadow-md │  ← Elevate
│                     │      │                     │
│  Gayo Mountain      │      │  Gayo Mountain      │
│  ...                │      │  ...                │
└─────────────────────┘      └─────────────────────┘
    Normal                       :hover
```

---

## Mobile Layout (≤768px)

```
+================================+
|  [☰]   THE BEAN THEORY   [WA] |
+================================+
|                                |
|   padding-top: --space-10      |
|                                |
|   ── Coffee Beans ──           |
|   Our Single Origin            |
|   Collection                   |
|                                |
|   Sourced directly from the    |
|   finest farms across the      |
|   Indonesian archipelago.      |
|                                |
|   [All] [Light] [Medium] [Dark]|  ← Horizontal scroll tabs
|                                |
|   ┌──────────────────────────┐ |
|   │  [PRODUCT IMAGE]        │ |  ← Full width, single column
|   │  aspect: 4/3 (landscape)│ |
|   │         ┌──────────┐    │ |
|   │         │ READY ✓  │    │ |
|   │         └──────────┘    │ |
|   │                          │ |
|   │  Gayo Mountain           │ |
|   │  Aceh, Sumatra           │ |
|   │  [Medium] [Natural]      │ |
|   │  🫘 Berry, Choco         │ |
|   │                          │ |
|   │  Rp 85.000               │ |
|   │  [Order via WA ↗]        │ |  ← Full-width button
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  [PRODUCT IMAGE]        │ |
|   │  ...                     │ |
|   └──────────────────────────┘ |
|                                |
|   (Single column, stacked)     |
|                                |
+================================+
```

---

## States

### Loading State

```
+====================================================================+
|                                                                      |
|   ── Coffee Beans ──                                                 |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                             |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                  |
|                                                                      |
|   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                |
|   │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  ← Skeleton  |
|   │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │    6 cards   |
|   │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │               |
|   │ ▓▓▓▓       │  │ ▓▓▓▓       │  │ ▓▓▓▓       │               |
|   │ ▓▓▓▓▓▓▓▓   │  │ ▓▓▓▓▓▓▓▓   │  │ ▓▓▓▓▓▓▓▓   │               |
|   └─────────────┘  └─────────────┘  └─────────────┘                |
|                                                                      |
|   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                |
|   │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │  │ ▓▓▓▓▓▓▓▓▓▓ │               |
|   │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │  │ ▓▓▓▓▓▓     │               |
|   │ ▓▓▓▓       │  │ ▓▓▓▓       │  │ ▓▓▓▓       │               |
|   └─────────────┘  └─────────────┘  └─────────────┘                |
|                                                                      |
+======================================================================+
```

### Empty State

```
+====================================================================+
|                                                                      |
|                    ── Coffee Beans ──                                 |
|              Our Single Origin Collection                            |
|                                                                      |
|   ┌──────────────────────────────────────────────────────────────┐  |
|   │                                                              │  |
|   │                      ☕ (icon)                                │  |
|   │                                                              │  |
|   │           New beans are being roasted...                     │  |  ← Empty message
|   │           Check back soon for our latest                     │  |
|   │           single origin collection.                          │  |
|   │                                                              │  |
|   │                 [Follow us on IG ↗]                          │  |  ← CTA fallback
|   │                                                              │  |
|   └──────────────────────────────────────────────────────────────┘  |
|                                                                      |
+======================================================================+
```

### Error State

```
+====================================================================+
|                                                                      |
|   ┌──────────────────────────────────────────────────────────────┐  |
|   │                                                              │  |
|   │                      ⚠️ (icon)                               │  |
|   │                                                              │  |
|   │           Unable to load products                            │  |
|   │           Please check your connection                       │  |
|   │           and try again.                                     │  |
|   │                                                              │  |
|   │                    [Retry ↻]                                 │  |  ← Retry button
|   │                                                              │  |
|   └──────────────────────────────────────────────────────────────┘  |
|                                                                      |
+======================================================================+
```

---

## Interactions

| #   | Trigger              | Action                                        |
| :-- | :------------------- | :-------------------------------------------- |
| 1   | Page load            | Cards stagger-reveal with ScrollTrigger       |
| 2   | Hover card (desktop) | Image scale 1.05x, shadow elevate             |
| 3   | Click "Order via WA" | Opens WhatsApp deep link with product message |
| 4   | Click filter tab     | Filter products by roast level (client-side)  |
| 5   | Sold Out product     | WA button disabled, gray badge overlay        |
| 6   | Scroll into view     | Each row of cards stagger-reveals             |

## Content Specs

| Field        | Max Length | Truncation    |
| :----------- | :--------- | :------------ |
| Product Name | 30 chars   | Ellipsis      |
| Origin       | 40 chars   | Ellipsis      |
| Flavor Notes | 5 max tags | Hide overflow |
| Price        | Rp XXX.XXX | Number format |
