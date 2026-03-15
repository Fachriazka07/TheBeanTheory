# The Bean Theory — Project Charter

**Version:** 1.0 | **Date:** 2026-02-20 | **Status:** Draft
**Project ID:** PRJ-20260220 | **Phase:** 01 (MVP)

---

## Project Info

| Field             | Value                                       |
| :---------------- | :------------------------------------------ |
| Project Name      | The Bean Theory — E-Commerce Coffee Website |
| Project ID        | PRJ-20260220                                |
| Phase             | 01 — MVP                                    |
| Context           | Solo Developer (Tier 1)                     |
| Project Manager   | Fachri (Solo)                               |
| Methodology       | Kanban (flexible, no ceremony)              |
| Start Date        | 2026-02-20                                  |
| Target Completion | 2026-02-22 (2 hari)                         |

---

## Purpose & Justification

Membangun website e-commerce premium untuk **The Bean Theory**, sebuah Specialty Coffee Roastery yang sudah memiliki 3 cabang. Website ini berfungsi sebagai:

1. **Digital storefront** — menampilkan katalog biji kopi specialty dengan tombol direct order via WhatsApp
2. **Brand showcase** — membangun kesan premium, profesional, dan terpercaya secara online
3. **Education hub** — mengedukasi pelanggan tentang cara seduh kopi yang benar
4. **Location guide** — memudahkan pelanggan menemukan cabang terdekat

> **Ini adalah fun/personal project** untuk eksplorasi teknologi animasi (GSAP) dan web design premium.

---

## Objectives (SMART)

| #   | Objective                                      | Metric                     | Target           | Deadline   |
| :-- | :--------------------------------------------- | :------------------------- | :--------------- | :--------- |
| 1   | Build landing page with cinematic hero section | Page load + hero animation | Fully functional | 2026-02-21 |
| 2   | Create product showcase with WA integration    | Product cards + WA link    | Min 6 products   | 2026-02-21 |
| 3   | Build brewing guide page with magazine layout  | Guide pages rendered       | Min 3 methods    | 2026-02-22 |
| 4   | Implement location finder with interactive map | Map renders 3 locations    | 3 branches       | 2026-02-22 |
| 5   | Implement GSAP animations & smooth scrolling   | All animations working     | 60fps smooth     | 2026-02-22 |

**SMART Check:**

- [x] **S**pecific — Each objective targets a specific page/feature
- [x] **M**easurable — Metrics defined per objective
- [x] **A**chievable — 2 days for a solo frontend project with clear specs
- [x] **R**elevant — All aligned with brand showcase & digital storefront goals
- [x] **T**ime-bound — Deadline per objective

---

## Scope

### ✅ In Scope (Phase 01)

1. **Landing Page** — Hero section with cinematic video background, tagline, fade-in animations
2. **Product Showcase** — Katalog biji kopi (Origin, Notes, Roast Level, Process) + tombol Direct WA Order
3. **Brewing Guide** — Halaman edukasi cara seduh (V60, AeroPress, dll) dengan layout majalah digital
4. **Location Finder** — Map interaktif untuk 3 cabang
5. **GSAP Animations** — Smooth scroll (Lenis), scroll triggers, parallax, hover effects
6. **Responsive Design** — Mobile-first, desktop-optimized
7. **WhatsApp Integration** — Direct link ke WA untuk order (no cart system)

### ❌ Out of Scope (Phase 01)

1. **Shopping cart & checkout system** — Order via WA saja, bukan full e-commerce
2. **User authentication & accounts** — Tidak ada login/register
3. **Payment gateway integration** — Tidak ada pembayaran online
4. **Admin dashboard / CMS** — Content hardcoded, bukan dynamic
5. **Blog / artikel system** — Hanya brewing guide statis
6. **Multi-language support** — Bahasa Indonesia saja
7. **Backend API / database** — Fully static/frontend-only
8. **SEO optimization** — Basic meta tags saja
9. **Analytics tracking** — Tidak ada Google Analytics setup
10. **Email newsletter / subscription** — Tidak ada

---

## Tech Stack

| Category      | Technology                               | Rationale                  |
| :------------ | :--------------------------------------- | :------------------------- |
| Framework     | Vite + React (atau Next.js)              | Fast DX, modern tooling    |
| Language      | TypeScript                               | Type safety (Rule #77)     |
| Styling       | Vanilla CSS + CSS Variables              | Design tokens (Rule #22)   |
| Animation     | GSAP (GreenSock)                         | Premium, smooth animations |
| Smooth Scroll | Lenis                                    | Premium scroll feel        |
| Map           | Leaflet / Mapbox                         | Interactive location map   |
| Deployment    | Vercel / Netlify                         | Free tier, instant deploy  |
| Fonts         | Google Fonts (Inter / Outfit / Playfair) | Modern, premium typography |

---

## Milestones

| Phase       | Milestone                                 | Target Date | Owner  |
| :---------- | :---------------------------------------- | :---------- | :----- |
| Planning    | ✅ Project Charter approved               | 2026-02-20  | Fachri |
| Design      | Design system & wireframes defined        | 2026-02-20  | Fachri |
| Development | Landing page + Hero section complete      | 2026-02-21  | Fachri |
| Development | Product Showcase + Brewing Guide complete | 2026-02-21  | Fachri |
| Development | Location Finder + Final polish            | 2026-02-22  | Fachri |
| Launch      | Deploy to production                      | 2026-02-22  | Fachri |

---

## Budget

| Category          | Estimated          |
| :---------------- | :----------------- |
| Development       | Rp 0               |
| Infrastructure    | Rp 0               |
| Domain (optional) | ~Rp 150K/tahun     |
| **TOTAL**         | **Rp 0 — Rp 150K** |

> Fun project — no financial investment required. Free-tier hosting (Vercel/Netlify).

---

## Key Risks

| #   | Risk                                       | Impact | Probability | Mitigation                                          |
| :-- | :----------------------------------------- | :----- | :---------- | :-------------------------------------------------- |
| 1   | GSAP complexity → timeline slip            | High   | Medium      | Prioritize core animations first, polish later      |
| 2   | Video background → poor mobile performance | High   | Medium      | Fallback to static image on mobile, lazy load video |
| 3   | Scope creep → adding cart/backend features | High   | Low         | Strict adherence to Out of Scope list               |
| 4   | Map API quota limits on free tier          | Low    | Low         | Use Leaflet (free) or static map fallback           |

---

## Approval

| Role            | Name   | Date       | Status     |
| :-------------- | :----- | :--------- | :--------- |
| Project Manager | Fachri | 2026-02-20 | ⏳ Pending |
