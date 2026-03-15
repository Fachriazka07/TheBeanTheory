# Development Tier Assessment

**Project:** The Bean Theory — Specialty Coffee E-Commerce Website
**Date:** 2026-02-20
**Assessed By:** AI-Agent
**Tier:** 🥇 Tier 1 — Solo Developer

---

## Inherited From

| Source               | Value                      |
| :------------------- | :------------------------- |
| Planning Tier        | Tier 1: Solo Developer     |
| Design Tier          | Tier 1: Solo Developer     |
| **Development Tier** | **Tier 1: Solo Developer** |
| Adjustment           | No                         |

**Rationale:** Solo developer, fun project, no team, no budget, no governance needed. Tier remains consistent across all phases.

---

## Project Context

| Factor      | Value                            |
| :---------- | :------------------------------- |
| Framework   | Next.js 15 (App Router)          |
| CMS         | Sanity v3 (embedded studio)      |
| Backend API | ❌ None (Sanity handles data)    |
| Database    | ❌ None (Sanity handles storage) |
| Auth        | ❌ None (no user accounts)       |
| Animation   | GSAP 3.12 + Lenis                |
| Styling     | Vanilla CSS + Design Tokens      |
| Deployment  | Vercel                           |
| Timeline    | 2 days                           |

---

## Applicable Rules

| ID  | Rule                    | Status        | Adaptation                                           |
| :-- | :---------------------- | :------------ | :--------------------------------------------------- |
| R77 | Static Type Checking    | ✅ Required   | TypeScript strict mode                               |
| R78 | Linter Required         | ✅ Required   | ESLint (Next.js config)                              |
| R84 | Formatter Required      | ✅ Required   | Prettier                                             |
| R87 | Pre-commit Hooks        | ⚡ Optional   | Husky + lint-staged (nice-to-have for 2-day project) |
| R79 | Input Validation        | ⚡ Simplified | Sanity handles content validation                    |
| R80 | ORM Required            | ⚡ N/A        | No database — Sanity SDK instead                     |
| R81 | Migration Only          | ⚡ N/A        | No database — Sanity schema evolution                |
| R82 | Unit Test Required      | ⚡ Simplified | Minimal tests for critical paths only                |
| R85 | Layered Architecture    | ⚡ Simplified | Components → Sanity queries (2-layer)                |
| R86 | Client vs Server State  | ✅ Required   | Server Components (Sanity) + Client (GSAP/Lenis)     |
| R90 | Server-First            | ✅ Required   | Next.js Server Components default                    |
| R35 | Secrets Never Hardcoded | ✅ Required   | Sanity project ID in `.env.local`                    |
| R36 | Environment Separation  | ⚡ Simplified | `.env.local` + `.env.production`                     |
| R22 | Design Tokens           | ✅ Required   | CSS custom properties from design system             |
| R21 | Mobile-First            | ✅ Required   | Progressive enhancement                              |

---

## Applicable Workflows (Tier 1 Solo — Adapted)

### Phase 1: Foundation

| #   | Workflow                  | Impact | Status  | Notes                                    |
| :-- | :------------------------ | :----- | :------ | :--------------------------------------- |
| 1   | `/setup-dev-environment`  | 100    | 🔜 Next | ESLint + Prettier + TypeScript strict    |
| 2   | `/setup-frontend-project` | 98     | 🔜      | Next.js 15 + Sanity init                 |
| 3   | `/setup-ui-component`     | 84     | 🔜      | Custom components (no lib — per ADR-001) |

### Phase 2: Core Implementation

| #   | Workflow                      | Impact | Status | Notes                             |
| :-- | :---------------------------- | :----- | :----- | :-------------------------------- |
| 4   | `/scaffold-pages`             | 92     | 🔜     | 4 pages + layouts from wireframes |
| 5   | Component Implementation      | 90     | 🔜     | 17 components from inventory      |
| 6   | Sanity Schema + Studio        | 88     | 🔜     | 3 schemas from ADR-002            |
| 7   | GSAP Animation Implementation | 85     | 🔜     | From animation_specs.md           |

### Phase 3: Polish & Deploy

| #   | Workflow          | Impact | Status | Notes                 |
| :-- | :---------------- | :----- | :----- | :-------------------- |
| 8   | Responsive QA     | 80     | 🔜     | Mobile-first testing  |
| 9   | Performance audit | 75     | 🔜     | LCP < 2.5s, CLS < 0.1 |
| 10  | Deploy to Vercel  | 70     | 🔜     | Production deployment |

### ⚡ Skipped Workflows (Not Applicable)

| Workflow                  | Reason                                   |
| :------------------------ | :--------------------------------------- |
| `/setup-backend-project`  | No backend — Sanity handles everything   |
| `/setup-database`         | No database — content in Sanity          |
| `/setup-auth`             | No authentication required               |
| `/create-api-endpoint`    | No custom API — Sanity GROQ queries only |
| `/create-migration`       | No database — Sanity schema evolution    |
| `/setup-state-management` | Minimal client state — no Zustand needed |
| `/code-review`            | Solo project — self-review only          |
| `/setup-testing`          | Simplified — visual testing in browser   |

---

## Implementation Order

```
/setup-dev-environment          ← ESLint, Prettier, TypeScript
        ↓
/setup-frontend-project         ← Next.js 15 + Sanity init
        ↓
/scaffold-pages                 ← 4 routes + layouts
        ↓
Sanity Schemas                  ← product, brewingGuide, location
        ↓
Components (Layout → UI → Features)
        ↓
GSAP Animations                 ← cursor, split text, parallax, etc.
        ↓
Responsive + Performance
        ↓
Deploy to Vercel                ← 🚀
```

---

## Next Step

```
Run: /setup-dev-environment (Impact Score: 100)
```

> Research shows 70% defect detection from linting alone.
> TypeScript adds 15-38% bug reduction (Microsoft, Airbnb studies).
