# Wireframe: Brewing Guide

**Screen:** Brewing Guide
**Priority:** P1 (Educational / engagement page)
**URL:** `/brewing-guide`
**Fidelity:** Mid-Fi (ASCII)

---

## Desktop Layout (≥1024px)

### Page Header

```
+====================================================================+
|                                                                      |
|  [Logo]  Home  Products  Brewing Guide  Locations   [WhatsApp]      |
|                                                                      |
+====================================================================+
|                                                                      |
|   bg: --clr-cream                                                    |
|   padding-top: --space-16                                            |
|                                                                      |
|                    ── Learn to Brew ──                                |  ← DM Mono, --clr-stone
|              Brewing Guide                                           |  ← Playfair Display, --fs-h1
|                                                                      |
|   Master the art of coffee brewing with our                          |  ← DM Sans, --fs-body-lg
|   step-by-step guides for every method.                              |
|                                                                      |
+======================================================================+
```

### Method Selector (Card Grid)

```
+======================================================================+
|                                                                        |
|   bg: --clr-off-white                                                  |
|                                                                        |
|            Choose Your Brewing Method                                  |  ← --fs-h3
|                                                                        |
|   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               |
|   │              │  │              │  │              │               |
|   │   ☕ [ICON]  │  │   ☕ [ICON]  │  │   ☕ [ICON]  │               |
|   │              │  │              │  │              │               |
|   │    V60       │  │  AeroPress   │  │ French Press │               |  ← Playfair, --fs-h4
|   │              │  │              │  │              │               |
|   │  [Easy] 🟢   │  │  [Medium] 🟡 │  │  [Easy] 🟢   │               |  ← DifficultyBadge
|   │              │  │              │  │              │               |
|   │  Pour over   │  │  Pressure    │  │  Immersion   │               |  ← Short description
|   │  method      │  │  brew        │  │  brewing     │               |
|   │              │  │              │  │              │               |
|   └──────────────┘  └──────────────┘  └──────────────┘               |
|                                                                        |
|   (3-column grid, click to scroll to detail below)                     |
|                                                                        |
+========================================================================+
```

### Method Detail (Magazine Layout)

```
+========================================================================+
|                                                                          |
|   bg: --clr-cream                                                        |
|                                                                          |
|   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   |
|                                                                          |
|   ┌───────────────────────────────┐  ┌────────────────────────────┐     |
|   │                               │  │                            │     |
|   │                               │  │  ☕ [METHOD ICON]          │     |
|   │                               │  │                            │     |
|   │     [HERO IMAGE]              │  │  V60 Pour Over             │     |  ← Playfair, --fs-h2
|   │     Method in action          │  │                            │     |
|   │     (from Sanity)             │  │  [Easy] 🟢   5 min        │     |  ← Badge + duration
|   │                               │  │                            │     |
|   │                               │  │  The V60 is a cone-shaped  │     |  ← Portable Text from Sanity
|   │                               │  │  dripper that produces a   │     |
|   │                               │  │  clean, nuanced cup...     │     |
|   │                               │  │                            │     |
|   └───────────────────────────────┘  └────────────────────────────┘     |
|                                                                          |
|   60% image                          40% content                         |
|                                                                          |
|   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   |
|                                                                          |
|   Step-by-Step Instructions                                              |  ← --fs-h3
|                                                                          |
|   ┌────┐  ┌─────────────────────────────────────────────────────────┐   |
|   │ 01 │  │  Boil water to 93°C (200°F)                            │   |
|   │    │  │  Use a gooseneck kettle for optimal pour control.       │   |
|   └────┘  └─────────────────────────────────────────────────────────┘   |
|                                                                          |
|   ┌────┐  ┌─────────────────────────────────────────────────────────┐   |
|   │ 02 │  │  Rinse the paper filter with hot water                  │   |
|   │    │  │  This removes paper taste and preheats the dripper.     │   |
|   └────┘  └─────────────────────────────────────────────────────────┘   |
|                                                                          |
|   ┌────┐  ┌─────────────────────────────────────────────────────────┐   |
|   │ 03 │  │  Add 15g of medium-fine ground coffee                   │   |
|   │    │  │  Ratio: 1:15 (coffee to water)                          │   |
|   └────┘  └─────────────────────────────────────────────────────────┘   |
|                                                                          |
|   ┌────┐  ┌─────────────────────────────────────────────────────────┐   |
|   │ 04 │  │  Bloom with 30ml water for 30 seconds                   │   |
|   │    │  │  Pour in a spiral, let CO2 escape from the grounds.     │   |
|   └────┘  └─────────────────────────────────────────────────────────┘   |
|                                                                          |
|   ┌────┐  ┌─────────────────────────────────────────────────────────┐   |
|   │ 05 │  │  Pour remaining 195ml in 2-3 stages                     │   |
|   │    │  │  Total brew time: ~3 minutes. Enjoy!                     │   |
|   └────┘  └─────────────────────────────────────────────────────────┘   |
|                                                                          |
|   Step numbers: DM Mono, --fs-h3, --clr-roast                          |
|   Instructions: Portable Text rendered from Sanity                       |
|                                                                          |
|   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   |
|                                                                          |
|   🎬 Watch Video                                                        |  ← Optional video section
|   ┌──────────────────────────────────────────────────────────────────┐  |
|   │                                                                  │  |
|   │   [EMBEDDED VIDEO / YouTube Link]                                │  |
|   │   aspect-ratio: 16/9                                             │  |
|   │                                                                  │  |
|   └──────────────────────────────────────────────────────────────────┘  |
|                                                                          |
+========================================================================+
```

---

## Mobile Layout (≤768px)

```
+================================+
|  [☰]   THE BEAN THEORY   [WA] |
+================================+
|                                |
|   ── Learn to Brew ──          |
|   Brewing Guide                |
|                                |
|   Master the art of coffee     |
|   brewing with our guides.     |
|                                |
|================================|
|                                |
|   Choose Your Method           |
|                                |
|   ┌──────────────────────────┐ |
|   │  ☕ [ICON]               │ |  ← Horizontal scroll or
|   │  V60                     │ |     stacked full-width
|   │  [Easy] 🟢               │ |
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  ☕ [ICON]               │ |
|   │  AeroPress               │ |
|   │  [Medium] 🟡             │ |
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  ☕ [ICON]               │ |
|   │  French Press             │ |
|   │  [Easy] 🟢               │ |
|   └──────────────────────────┘ |
|                                |
|================================|
|                                |
|   [HERO IMAGE - Full Width]   |
|                                |
|   V60 Pour Over               |
|   [Easy] 🟢  5 min            |
|                                |
|   The V60 is a cone-shaped    |
|   dripper that produces...     |
|                                |
|   ── Steps ──                  |
|                                |
|   01 │ Boil water to 93°C     |
|      │ Use a gooseneck...      |
|                                |
|   02 │ Rinse the paper filter  |
|      │ This removes paper...   |
|                                |
|   03 │ Add 15g of ground       |
|      │ coffee. Ratio: 1:15     |
|                                |
|   04 │ Bloom with 30ml water   |
|      │ for 30 seconds          |
|                                |
|   05 │ Pour remaining 195ml    |
|      │ Total: ~3 minutes       |
|                                |
|   [🎬 Watch Video]             |
|                                |
+================================+
```

---

## States

### Loading State

```
+======================================================================+
|   ── Learn to Brew ──                                                 |
|   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                                |
|                                                                       |
|   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              |
|   │ ▓▓▓▓▓▓▓▓▓▓  │  │ ▓▓▓▓▓▓▓▓▓▓  │  │ ▓▓▓▓▓▓▓▓▓▓  │  ← Skeleton |
|   │ ▓▓▓▓▓▓      │  │ ▓▓▓▓▓▓      │  │ ▓▓▓▓▓▓      │              |
|   │ ▓▓▓▓        │  │ ▓▓▓▓        │  │ ▓▓▓▓        │              |
|   └──────────────┘  └──────────────┘  └──────────────┘              |
+======================================================================+
```

### Empty State

```
+======================================================================+
|                                                                       |
|                      ☕ (icon)                                        |
|                                                                       |
|             Guides are being brewed...                                |
|             Check back soon for our                                   |
|             step-by-step brewing methods!                             |
|                                                                       |
|                [Follow us on IG ↗]                                    |
|                                                                       |
+======================================================================+
```

### Error State

```
+======================================================================+
|                                                                       |
|                      ⚠️ (icon)                                       |
|                                                                       |
|             Unable to load brewing guides                             |
|             Please try again later.                                   |
|                                                                       |
|                    [Retry ↻]                                         |
|                                                                       |
+======================================================================+
```

---

## Interactions

| #   | Trigger             | Action                                 |
| :-- | :------------------ | :------------------------------------- |
| 1   | Click method card   | Smooth scroll to method detail section |
| 2   | Page load           | Method cards stagger-reveal            |
| 3   | Scroll into steps   | Each step fades in sequentially (GSAP) |
| 4   | Click "Watch Video" | Opens embedded video or external link  |
| 5   | Hover method card   | Subtle lift + shadow-md                |
