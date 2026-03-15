# The Bean Theory — Animation & Interaction Specs (Awwwards Level)

**Phase:** 02 (Design) | **Date:** 2026-02-20 | **Level:** ⭐ Awwwards-grade

---

## Design Philosophy

> **"Every scroll should reward the user."**
>
> Inspired by Awwwards SOTD winners like Coffee Collective, Caffè Design,
> and Felix Roasting Co — our website is not just browsed, it's _experienced_.

---

## 1. Global Interactions

### 1.1 Custom Cursor

```
┌──────────────────────────────────────────────────┐
│                                                    │
│   Default: ● Small dot (8px, --clr-charcoal)       │
│   + ○ Outer ring (32px, 1px border, follows slow)  │
│                                                    │
│   Hover link:   ● dot expands to 48px              │
│                 + labeltext "View" / "Order"       │
│                                                    │
│   Hover image:  ○ ring expands to 80px             │
│                 + text "Explore"                   │
│                                                    │
│   Drag/scroll:  ● stretches vertically             │
│                                                    │
└──────────────────────────────────────────────────┘

Tech: GSAP .quickTo() for smooth follow
      mix-blend-mode: difference (inverts on dark/light bg)
      Hide on mobile (touch = no cursor)
```

### 1.2 Smooth Scrolling (Lenis)

```
Config:
  duration:     1.2
  easing:       (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  orientation:  vertical
  smoothWheel:  true
  smoothTouch:  false  ← preserve native mobile scroll
```

### 1.3 Magnetic Elements

```
Triggers: Navbar links, CTA buttons, social icons

Behavior:
  Mouse enters 100px radius → element subtly attracts toward cursor
  Mouse leaves → element springs back with elastic ease

  ┌─────────────────┐        ┌─────────────────┐
  │                 │        │    ↗ [Button]    │
  │     [Button]    │   →→   │      moved 8px   │
  │                 │        │      toward mouse │
  └─────────────────┘        └─────────────────┘
       Normal                    Mouse nearby

Tech: addEventListener "mousemove" + GSAP .to()
      maxMovement: 8px (buttons), 4px (nav links)
      ease: "power3.out"
      duration: 0.3
```

### 1.4 Page Transitions

```
Route Change Flow:

  Current Page                  New Page
  ┌──────────┐                 ┌──────────┐
  │          │                 │          │
  │  Content │  ──→ Wipe ──→  │  Content │
  │  fades   │   curtain       │  reveals │
  │  out     │   from bottom   │  up      │
  │          │                 │          │
  └──────────┘                 └──────────┘

Steps:
  1. Trigger exit: content fades to 0 opacity (0.3s)
  2. Curtain: solid --clr-matte-black div slides up (0.5s)
  3. Route change happens (hidden behind curtain)
  4. Curtain slides away downward (0.5s)
  5. New content reveals with stagger animations

Tech: GSAP timeline + Next.js router events
      Curtain: position fixed, z-index 999, clip-path: inset()
```

---

## 2. Text Animations

### 2.1 Split Text — Character Reveal

```
"THE BEAN THEORY"

Step 1 (hidden):   _ _ _   _ _ _ _   _ _ _ _ _ _
Step 2 (reveal):   T H E   B E A N   T H E O R Y
                   ↑ ↑ ↑   ↑ ↑ ↑ ↑   ↑ ↑ ↑ ↑ ↑ ↑
                   stagger 0.03s each character

Effect: Each char starts from:
  - y: 100% (below baseline)
  - opacity: 0
  - rotateX: -90deg

Animates to:
  - y: 0
  - opacity: 1
  - rotateX: 0deg

Wrapper: overflow: hidden (clips the reveal)

Tech: SplitText (GSAP plugin) or manual span wrapping
      Trigger: Page load (hero) or ScrollTrigger (sections)
      Duration: 0.8s total with stagger
      Ease: "power4.out"
```

### 2.2 Line-by-Line Reveal

```
"We source the finest beans     ─── Line 1 slides up (0s delay)
 from across the Indonesian    ─── Line 2 slides up (0.1s delay)
 archipelago."                 ─── Line 3 slides up (0.2s delay)

Each line:
  from: { y: "100%", opacity: 0 }
  to:   { y: "0%", opacity: 1 }

Wrapper: overflow: hidden per line
Trigger: ScrollTrigger (start: "top 80%")
```

### 2.3 Horizontal Scroll Text (Marquee)

```
Location: Between sections (visual separator)

─────────────────────────────────────────────────────────
  SINGLE ORIGIN • HAND ROASTED • SPECIALTY COFFEE • SINGLE ORIGIN • HAND ROASTED •
─────────────────────────────────────────────────────────

  Direction: Right to left (infinite loop)
  Speed: Accelerates on scroll (scroll velocity * 2)
  Font: Playfair Display, --fs-display, --clr-stone (low opacity)

  Tech: GSAP .to() with repeat: -1
        ScrollTrigger velocity modifier for speed variation
```

---

## 3. Scroll-Driven Animations

### 3.1 Hero Section — Cinematic Entry

```
Timeline (0s → 2.5s from page load):

  T=0.0s  │  Video starts playing (autoplay, muted)
          │  Dark overlay at 80% opacity
          │
  T=0.3s  │  Overlay eases from 80% → 50%
          │
  T=0.5s  │  Brand name characters begin split-reveal
          │  "THE BEAN THEORY" (stagger 0.03s)
          │
  T=1.2s  │  Tagline line-reveal
          │  "Where every cup tells a story"
          │
  T=1.8s  │  CTA button fades in + scales from 0.8 → 1
          │
  T=2.2s  │  Scroll indicator bounces in
          │

  On Scroll (Hero → Section 2):
  ─────────────────────────────
  │  Video scales from 1 → 1.1 (slow zoom)
  │  Overlay darkens from 50% → 70%
  │  Text y-position shifts up (parallax: -30%)
  │  Opacity decreases to 0
  │
  Result: Content "sinks" as user scrolls away ← cinematic exit
```

### 3.2 Image Reveal with Clip-Path

```
Product images and brand story images use clip-path reveal:

  Before scroll:
  ┌──────────────────┐
  │                  │
  │   (hidden)       │  clip-path: inset(100% 0 0 0)
  │                  │  ← clipped from bottom
  │                  │
  └──────────────────┘

  During scroll (ScrollTrigger scrub):
  ┌──────────────────┐
  │                  │
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │  clip-path: inset(40% 0 0 0)
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │  ← progressively revealing
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │
  └──────────────────┘

  After scroll:
  ┌──────────────────┐
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │  clip-path: inset(0 0 0 0)
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │  ← fully visible
  │   ▓▓▓▓▓▓▓▓▓▓▓▓  │
  └──────────────────┘

  + Simultaneous: image scale from 1.2 → 1 (ken burns zoom-out)

Tech: GSAP ScrollTrigger scrub: 1
      clip-path: inset(y% 0 0 0)
      Ease: "none" (scroll-driven)
```

### 3.3 Horizontal Scroll Section (Products)

```
Instead of a simple grid, featured products scroll HORIZONTALLY:

  ┌════════════════════════════════════════════════┐
  │                                                │
  │  "Our Selection"  (pinned title, left side)    │
  │                                                │
  │  ┌────────┐  ┌────────┐  ┌────────┐          │
  │  │        │  │        │  │        │   →→→     │  User scrolls vertically
  │  │ Bean 1 │  │ Bean 2 │  │ Bean 3 │   →→→     │  Cards move horizontally
  │  │        │  │        │  │        │   →→→     │
  │  └────────┘  └────────┘  └────────┘          │
  │                                                │
  │  ◯ ● ◯   progress dots                        │
  │                                                │
  └════════════════════════════════════════════════┘

  Vertical scroll → horizontal movement
  Section is PINNED while cards scroll through
  Each card slightly rotates (±2deg) for dynamic feel
  Progress dots update as cards pass center

Tech: ScrollTrigger pin: true
      x: -(totalWidth - viewportWidth)
      scrub: 1
      snap: 1 / (numCards - 1)  ← snaps to nearest card
```

### 3.4 Parallax Depth Layers

```
Brand Story section — multiple depth layers:

  Layer 3 (far):   bg texture/pattern    — moves at 10% scroll speed
  Layer 2 (mid):   large image           — moves at 30% scroll speed
  Layer 1 (near):  text content          — moves at 60% scroll speed
  Layer 0 (fixed): section background    — fixed (0%)

  Result: 3D depth illusion as user scrolls

  Tech: ScrollTrigger per layer with different y multipliers
```

### 3.5 Counter Animation (Stats Section — Optional)

```
If adding a stats strip between sections:

  ┌──────────────────────────────────────────────────┐
  │                                                    │
  │    12+          3            100%                   │
  │   Origins     Branches     Specialty Grade         │
  │                                                    │
  └──────────────────────────────────────────────────┘

  Numbers count up from 0 → final value
  Triggered by ScrollTrigger (start: "top 80%")
  Duration: 2s, ease: "power2.out"
  Format: numbers are DM Mono, --fs-display
```

---

## 4. Component-Level Interactions

### 4.1 Product Card (Enhanced)

```
Default State:
  ┌─────────────────┐
  │                 │
  │   [IMAGE]       │
  │                 │
  │  Gayo Mountain  │
  │  Rp 85.000      │
  └─────────────────┘

Hover State (Desktop):
  ┌─────────────────┐
  │   ↕ image       │ ← Image translates Y -10px
  │   scales 1.05   │ ← Smooth zoom
  │   [IMAGE]       │
  │ ┌─────────────┐ │
  │ │ Berry       │ │ ← Flavor notes slide up
  │ │ Chocolate   │ │    from below (clip-path reveal)
  │ │ Caramel     │ │
  │ └─────────────┘ │
  │  Gayo Mountain  │
  │  Rp 85.000      │
  │  ═══════════════│ ← Bottom border animates in
  │  [Order WA ↗]   │ ← Button background fills L→R
  └─────────────────┘
  shadow: --shadow-lg

Tech: GSAP timeline per card
      mouseenter → play forward
      mouseleave → play reverse
      Duration: 0.4s
```

### 4.2 Navbar Morphing

```
State 1: Hero (scrollY < 100)
  ┌════════════════════════════════════════════════┐
  │  bg: transparent                               │
  │  text: white                                   │
  │  logo: white version                           │
  │  border: none                                  │
  │  backdrop-filter: none                         │
  └════════════════════════════════════════════════┘

  ↓ scroll (100px → 200px transition zone)

State 2: Solid (scrollY > 200)
  ┌════════════════════════════════════════════════┐
  │  bg: rgba(250, 250, 247, 0.9)                  │
  │  text: --clr-charcoal                          │
  │  logo: dark version                            │
  │  border-bottom: 1px solid rgba(0,0,0,0.05)     │
  │  backdrop-filter: blur(12px)                   │
  └════════════════════════════════════════════════┘

  Transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1)
  + Height shrinks from 80px → 64px
  + Logo scales from 1 → 0.85

  Additional: On scroll DOWN → navbar slides UP (hide)
              On scroll UP → navbar slides DOWN (show)
              ← Smart hide/show for more screen real estate
```

### 4.3 Button Micro-Interactions

```
Primary Button: [Order via WhatsApp ↗]

  Default:
  ┌──────────────────────────┐
  │   Order via WhatsApp ↗   │  bg: --clr-espresso
  └──────────────────────────┘  text: white

  Hover (fill-from-left):
  ┌──────────────────────────┐
  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  bg: wipe from left with --clr-roast
  └──────────────────────────┘  + arrow ↗ translateX(4px)

  Press:
  ┌──────────────────────────┐
  │   Order via WhatsApp ↗   │  scale(0.97)
  └──────────────────────────┘  duration: 0.1s

  Tech: GSAP or CSS pseudo-element :before with scaleX(0→1)
        transform-origin: left
```

### 4.4 Mobile Hamburger Menu

```
Trigger: Hamburger icon tap

  ┌══════════════════════════┐
  │                          │
  │  bg: --clr-matte-black   │ ← Full-screen overlay
  │  z-index: --z-overlay    │
  │                          │
  │     [✕ Close]            │
  │                          │
  │     Home                 │ ← Each link staggers in
  │                          │    from y: 40px, opacity: 0
  │     Products             │    delay: 0.1s between each
  │                          │
  │     Brewing Guide        │    Font: Playfair, --fs-h2
  │                          │
  │     Locations             │
  │                          │
  │                          │
  │  ─────────────────────── │
  │                          │
  │  [IG]  [TikTok]  [WA]   │ ← Social icons fade in last
  │                          │
  └══════════════════════════┘

  Entry: clip-path: circle() from hamburger position → full screen
         Duration: 0.6s, ease: "power4.inOut"

  Exit:  Reverse animation
```

---

## 5. Additional GSAP Plugins Required

| Plugin         | Usage                           | License |
| :------------- | :------------------------------ | :------ |
| ScrollTrigger  | Scroll-driven animations        | Free    |
| ScrollSmoother | Enhanced Lenis alternative      | Club    |
| SplitText      | Character/line text splitting   | Club    |
| Flip           | Layout transitions              | Free    |
| Observer       | Gesture/scroll direction detect | Free    |

> ⚠️ **Note:** SplitText and ScrollSmoother require GSAP Club (paid).
> **Alternative:** Use manual text splitting (wrap chars in spans) for SplitText.
> **Alternative:** Use Lenis instead of ScrollSmoother (free).

---

## 6. Performance Budget

| Metric                 | Target             | Strategy                         |
| :--------------------- | :----------------- | :------------------------------- |
| LCP                    | < 2.5s             | Preload hero video/image         |
| FID                    | < 100ms            | Defer non-critical GSAP          |
| CLS                    | < 0.1              | Reserve space for animations     |
| GSAP Timeline Count    | < 20 active        | Cleanup on route change          |
| Animations on Mobile   | Reduced set        | No parallax, no cursor, no hover |
| prefers-reduced-motion | Minimal animations | Respect OS setting               |

### Mobile Reduction Strategy

| Animation          | Desktop | Mobile           |
| :----------------- | :------ | :--------------- |
| Custom cursor      | ✅      | ❌ Hidden        |
| Parallax layers    | ✅      | ❌ Static        |
| Horizontal scroll  | ✅      | ❌ Vertical grid |
| Video hero         | ✅      | ❌ Static image  |
| Split text         | ✅      | ✅ Simpler       |
| Card hover effects | ✅      | ❌ Tap only      |
| Magnetic buttons   | ✅      | ❌ Normal        |
| Page transitions   | ✅      | ✅ Faster 0.3s   |
| Marquee text       | ✅      | ✅ Slower        |
| Clip-path reveals  | ✅      | ✅ Fade only     |
