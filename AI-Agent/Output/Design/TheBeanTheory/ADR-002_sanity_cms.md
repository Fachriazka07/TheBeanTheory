# ADR-002: CMS Selection — Sanity Headless CMS

## Status: Accepted | Date: 2026-02-20

---

## Context

The Bean Theory requires a content management system to manage:

- **Products** — Coffee bean catalog (origin, notes, roast level, price, WA link)
- **Brewing Guides** — Educational content with step-by-step instructions
- **Locations** — Branch information with coordinates for interactive map

Previously, the project used hardcoded static data files (`data/*.ts`). User decided to switch to a proper CMS for content flexibility.

---

## Decision

We will use **Sanity v3** as the headless CMS, with **embedded Sanity Studio** running as a Next.js route at `/studio`.

### Why Sanity (not Strapi, Contentful, etc.)?

| CMS        | Pros                             | Cons                          | Verdict   |
| :--------- | :------------------------------- | :---------------------------- | :-------- |
| **Sanity** | Free tier, embedded studio, GROQ | Sanity-specific schema syntax | ✅ Chosen |
| Contentful | Mature, great docs               | Limited free tier (5 users)   | ❌        |
| Strapi     | Self-hosted, open-source         | Need hosting, more setup      | ❌        |
| WordPress  | Huge ecosystem                   | Overkill, PHP backend         | ❌        |

**Key reasons for Sanity:**

1. **Free tier = perfect for fun project** (100K API CDN requests/mo, 10GB bandwidth)
2. **Embedded Studio** — No separate dashboard deployment needed
3. **GROQ** — Powerful query language, more flexible than REST
4. **Real-time** — Instant content updates, live preview
5. **Sanity Image CDN** — Built-in image transformations (crop, resize, format)

---

## CMS Content Architecture

### Schema 1: `product` (Biji Kopi Catalog)

| Field Name   | Type            | Description                                | Required |
| :----------- | :-------------- | :----------------------------------------- | :------- |
| `title`      | `string`        | Nama beans (e.g., "Gayo Mountain")         | ✅       |
| `slug`       | `slug`          | URL unik (auto-generated dari title)       | ✅       |
| `image`      | `image`         | Foto produk (+ alt text untuk SEO)         | ✅       |
| `origin`     | `string`        | Daerah asal kopi                           | ✅       |
| `roastLevel` | `string` (list) | Options: Light, Light-Medium, Medium, Dark | ✅       |
| `process`    | `string`        | Contoh: Natural, Washed, Anaerobic         | ✅       |
| `notes`      | `array<string>` | Flavor notes (e.g., Berry, Chocolate)      | ✅       |
| `price`      | `number`        | Harga (display only, bukan checkout)       | ✅       |
| `isReady`    | `boolean`       | Switcher "Ready" atau "Sold Out"           | ✅       |
| `waLink`     | `url`           | Link WA dengan template text untuk order   | ✅       |

### Schema 2: `brewingGuide` (Halaman Edukasi)

| Field Name     | Type            | Description                              | Required |
| :------------- | :-------------- | :--------------------------------------- | :------- |
| `methodName`   | `string`        | Nama alat (V60, AeroPress, French Press) | ✅       |
| `icon`         | `image`         | Icon/illustration alat seduh             | ✅       |
| `difficulty`   | `string` (list) | Options: Easy, Medium, Hard              | ✅       |
| `instructions` | `blockContent`  | Portable Text (teks + gambar langkah)    | ✅       |
| `videoUrl`     | `url`           | Link video cara seduh                    | ❌       |

### Schema 3: `location` (Cabang Cafe)

| Field Name     | Type       | Description                          | Required |
| :------------- | :--------- | :----------------------------------- | :------- |
| `branchName`   | `string`   | Nama cabang (e.g., "TBT - Sudirman") | ✅       |
| `address`      | `text`     | Alamat lengkap                       | ✅       |
| `coordinates`  | `geopoint` | Latitude & Longitude untuk map       | ✅       |
| `openingHours` | `string`   | Jam operasional                      | ✅       |

---

## Sanity Schema Code Preview

```typescript
// sanity/schemas/product.ts
import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Kopi",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Foto Produk",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "origin", title: "Origin", type: "string" }),
    defineField({
      name: "roastLevel",
      title: "Roast Level",
      type: "string",
      options: { list: ["Light", "Light-Medium", "Medium", "Dark"] },
    }),
    defineField({ name: "process", title: "Process", type: "string" }),
    defineField({
      name: "notes",
      title: "Flavor Notes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "price", title: "Harga", type: "number" }),
    defineField({
      name: "isReady",
      title: "Ready Stock?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "waLink", title: "WhatsApp Link", type: "url" }),
  ],
});
```

---

## Consequences

### ✅ Positive

- Content editable without code deployments
- Structured content model with validation
- Image CDN with automatic optimization
- Real-time preview in Sanity Studio
- Type-safe queries with GROQ

### ⚠️ Tradeoffs

- Sanity-specific schema learning curve
- External dependency (Sanity cloud) — but free tier is generous
- Need Sanity account setup before development
