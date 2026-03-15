# Wireframes — The Bean Theory

**Phase:** 02 (Design) | **Date:** 2026-02-20 | **Fidelity:** Mid-Fi (ASCII)

---

## Screen Index

| Screen        | Priority | Status  | File                                   | Sections                                          |
| :------------ | :------- | :------ | :------------------------------------- | :------------------------------------------------ |
| Landing Page  | P0       | ✅ Done | [home.md](./home.md)                   | Hero (Video), Featured Products, Brand Story, CTA |
| Products      | P0       | ✅ Done | [products.md](./products.md)           | Header, Filter Bar, Product Grid (3-col)          |
| Brewing Guide | P1       | ✅ Done | [brewing-guide.md](./brewing-guide.md) | Header, Method Cards, Step-by-Step Detail, Video  |
| Locations     | P1       | ✅ Done | [locations.md](./locations.md)         | Header, Interactive Map (Leaflet), Branch Cards   |

---

## Global Patterns (All Screens)

### Navbar

- **Desktop:** Horizontal links + WA button, transparent on Home hero → solid on scroll
- **Mobile:** Hamburger menu + WA shortcut icon
- **Scroll behavior:** Transparent → solid bg after scrollY > 100px

### Footer

- 3-column layout: Brand info | Quick links | Social + Newsletter
- Dark bg (`--clr-charcoal`), white text

### States Coverage

All screens include: ✅ Ideal, ⏳ Loading (skeleton), ❌ Error (retry), 📭 Empty (CTA)

### Responsive Strategy

- **Mobile (≤768px):** Single column, stacked layouts, hamburger nav
- **Desktop (≥1024px):** Multi-column grids, split layouts, full interactions
- **Touch targets:** Minimum 44x44px on mobile
