# Wireframe: Location Finder

**Screen:** Location Finder
**Priority:** P1 (Local discovery page)
**URL:** `/locations`
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
|                    ── Visit Us ──                                     |  ← DM Mono, --clr-stone
|              Find Our Locations                                      |  ← Playfair Display, --fs-h1
|                                                                      |
|   Drop by one of our roasteries to experience                        |  ← DM Sans, --fs-body-lg
|   specialty coffee at its finest.                                    |
|                                                                      |
+======================================================================+
```

### Map + Branch Cards (Split Layout)

```
+======================================================================+
|                                                                        |
|   ┌──────────────────────────────────────────┐  ┌──────────────────┐  |
|   │                                          │  │                  │  |
|   │           🗺️ INTERACTIVE MAP             │  │  Our Branches    │  |  ← --fs-h3
|   │           (Leaflet / react-leaflet)      │  │                  │  |
|   │                                          │  │  ┌──────────────┐│  |
|   │                                          │  │  │              ││  |
|   │        📍                                │  │  │  📍 TBT      ││  |
|   │            📍                            │  │  │  Sudirman    ││  |  ← Active: highlighted
|   │                    📍                    │  │  │              ││  |     border-left: roast
|   │                                          │  │  │  Jl. Sudirman││  |
|   │        [+] [-]  ← zoom controls         │  │  │  No. 123...  ││  |
|   │                                          │  │  │              ││  |
|   │                                          │  │  │  🕐 08:00 -  ││  |
|   │   ┌────────────────────────────┐         │  │  │     22:00    ││  |
|   │   │  📍 TBT Sudirman          │         │  │  │              ││  |
|   │   │  Jl. Sudirman No. 123     │ ← popup │  │  │ [Directions↗]││  |  ← Opens Google Maps
|   │   │  🕐 08:00 - 22:00         │         │  │  │              ││  |
|   │   │  [Directions ↗]           │         │  │  └──────────────┘│  |
|   │   └────────────────────────────┘         │  │                  │  |
|   │                                          │  │  ┌──────────────┐│  |
|   │                                          │  │  │              ││  |
|   │   height: 500px                          │  │  │  📍 TBT      ││  |
|   │                                          │  │  │  Kemang      ││  |
|   └──────────────────────────────────────────┘  │  │              ││  |
|                                                  │  │  Jl. Kemang ││  |
|   60% width                                      │  │  Raya No.45 ││  |
|                                                  │  │              ││  |
|                                                  │  │  🕐 09:00 -  ││  |
|                                                  │  │     23:00    ││  |
|                                                  │  │              ││  |
|                                                  │  │ [Directions↗]││  |
|                                                  │  │              ││  |
|                                                  │  └──────────────┘│  |
|                                                  │                  │  |
|                                                  │  ┌──────────────┐│  |
|                                                  │  │              ││  |
|                                                  │  │  📍 TBT      ││  |
|                                                  │  │  BSD          ││  |
|                                                  │  │              ││  |
|                                                  │  │  Jl. BSD     ││  |
|                                                  │  │  Green No.7  ││  |
|                                                  │  │              ││  |
|                                                  │  │  🕐 08:00 -  ││  |
|                                                  │  │     21:00    ││  |
|                                                  │  │              ││  |
|                                                  │  │ [Directions↗]││  |
|                                                  │  │              ││  |
|                                                  │  └──────────────┘│  |
|                                                  │                  │  |
|                                                  │  40% width       │  |
|                                                  └──────────────────┘  |
|                                                                        |
+========================================================================+
```

---

## Mobile Layout (≤768px)

```
+================================+
|  [☰]   THE BEAN THEORY   [WA] |
+================================+
|                                |
|   ── Visit Us ──               |
|   Find Our Locations           |
|                                |
|   Drop by one of our           |
|   roasteries to experience     |
|   specialty coffee.            |
|                                |
|================================|
|                                |
|   ┌──────────────────────────┐ |
|   │                          │ |
|   │  🗺️ INTERACTIVE MAP     │ |  ← Full width, 300px height
|   │                          │ |
|   │    📍  📍                │ |
|   │              📍          │ |
|   │                          │ |
|   │  [+][-]                  │ |
|   │                          │ |
|   └──────────────────────────┘ |
|                                |
|   Our Branches                 |
|                                |
|   ┌──────────────────────────┐ |
|   │  📍 TBT Sudirman        │ |  ← Full-width cards, stacked
|   │  Jl. Sudirman No. 123   │ |
|   │  🕐 08:00 - 22:00       │ |
|   │  [Directions ↗]         │ |
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  📍 TBT Kemang          │ |
|   │  Jl. Kemang Raya No. 45 │ |
|   │  🕐 09:00 - 23:00       │ |
|   │  [Directions ↗]         │ |
|   └──────────────────────────┘ |
|                                |
|   ┌──────────────────────────┐ |
|   │  📍 TBT BSD             │ |
|   │  Jl. BSD Green Office 7 │ |
|   │  🕐 08:00 - 21:00       │ |
|   │  [Directions ↗]         │ |
|   └──────────────────────────┘ |
|                                |
+================================+
```

---

## States

### Loading State

```
+======================================================================+
|                                                                       |
|   ┌──────────────────────────────────────┐  ┌──────────────────┐     |
|   │                                      │  │                  │     |
|   │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓ │     |
|   │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  ▓▓▓▓▓▓        │     |
|   │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  ▓▓▓▓▓▓▓▓▓▓    │     |
|   │  ← Map skeleton (gray block)        │  │  ▓▓▓▓▓▓▓▓      │     |
|   │                                      │  │                  │     |
|   └──────────────────────────────────────┘  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓ │     |
|                                              │  ▓▓▓▓▓▓        │     |
|                                              │  ▓▓▓▓▓▓▓▓▓▓    │     |
|                                              └──────────────────┘     |
+======================================================================+
```

### Error State (Map Fails to Load)

```
+======================================================================+
|                                                                       |
|   ⚠️ Map could not be loaded                                        |
|                                                                       |
|   Our Branches                                                        |
|                                                                       |
|   ┌──────────────────────────────────────────────────────────────┐   |
|   │  📍 TBT Sudirman                                            │   |
|   │  Jl. Jenderal Sudirman No. 123, Jakarta Selatan 12190      │   |  ← Full address shown
|   │  🕐 08:00 - 22:00                                           │   |     when map fails
|   │  [Open in Google Maps ↗]                                    │   |
|   └──────────────────────────────────────────────────────────────┘   |
|                                                                       |
|   ┌──────────────────────────────────────────────────────────────┐   |
|   │  📍 TBT Kemang                                              │   |
|   │  Jl. Kemang Raya No. 45, Jakarta Selatan 12730             │   |
|   │  🕐 09:00 - 23:00                                           │   |
|   │  [Open in Google Maps ↗]                                    │   |
|   └──────────────────────────────────────────────────────────────┘   |
|                                                                       |
|   (Cards become primary UI — map is optional enhancement)             |
|                                                                       |
+======================================================================+
```

---

## Interactions

| #   | Trigger                  | Action                                        |
| :-- | :----------------------- | :-------------------------------------------- |
| 1   | Click map marker         | Show popup with branch name + address + hours |
| 2   | Click branch card        | Map pans + zooms to that branch marker        |
| 3   | Click "Directions"       | Opens Google Maps in new tab                  |
| 4   | Hover branch card (desk) | Subtle highlight, corresponding marker pulses |
| 5   | Card stagger reveal      | GSAP ScrollTrigger on branch cards            |
