# Korvol Technologies Website - Master Build Plan

## Project Overview

Build a professional, conversion-focused website for **Korvol Technologies Private Limited**, a web automation consultancy specializing in browser automation, data scraping, AI chatbots, Chrome extensions, and custom web development.

**Primary Goal:** Customer acquisition through professional brand portrayal and clear service communication.

**Target Audience:** Startups and small-to-mid businesses (SMBs) looking for automation and data solutions.

---

## Documentation Structure

This project is documented across multiple specification files:

| File | Purpose |
|------|---------|
| `00-MASTER-PLAN.md` | This file - overall roadmap and consolidation |
| `01-REQUIREMENTS.md` | Functional requirements, pages, features |
| `02-TECH-STACK.md` | Technologies, dependencies, configurations |
| `03-DESIGN-STYLING.md` | Colors, typography, animations, UI patterns |
| `04-ARCHITECTURE.md` | Project structure, data layer, CMS-ready patterns |
| `05-CONTENT.md` | Copy, messaging, placeholder content |

---

## Build Phases

### Phase 1: Foundation (Steps 1-3)
**Goal:** Project setup with all configurations

1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS with custom color palette
3. Set up Framer Motion and icon libraries
4. Create base layout components (Header, Footer, Layout)
5. Configure Vercel Analytics

### Phase 2: Core Pages (Steps 4-7)
**Goal:** Build all main pages with hardcoded content

4. Build Landing Page (Hero, Services Overview, Why Us, CTA sections)
5. Build Services Page (detailed service cards with descriptions)
6. Build Contact Page (form + contact info)
7. Build Careers Page (benefits + redirect to jobs.korvol.com)

### Phase 3: Trust Elements (Steps 8-9)
**Goal:** Add social proof sections

8. Add Case Studies section (placeholder content)
9. Add Testimonials section (placeholder content)

### Phase 4: Polish & Deploy (Steps 10-12)
**Goal:** Final touches and launch

10. Add animations and micro-interactions
11. SEO optimization (meta tags, OG images, sitemap)
12. Deploy to Vercel

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CMS | Hardcoded now, Sanity.io later | Speed to launch, content still being finalized |
| Styling | Tailwind CSS | Rapid development, consistent design system |
| Animations | Framer Motion | Professional, performant animations |
| Hosting | Vercel | Seamless Next.js integration, free tier |
| Analytics | Vercel Analytics | Built-in, privacy-friendly |
| Icons | Lucide React | Clean, consistent, tree-shakeable |

---

## Success Criteria

- [ ] Website loads in under 3 seconds
- [ ] Lighthouse score > 90 for all metrics
- [ ] All CTAs lead to contact form or consultation booking
- [ ] Mobile-responsive across all breakpoints
- [ ] Smooth animations that don't impact performance
- [ ] Clear value proposition visible above the fold
- [ ] Easy content updates via centralized data files

---

## File Reading Order for Claude Code

When building, read the specification files in this order:

```
1. 00-MASTER-PLAN.md (this file) - Understand the big picture
2. 01-REQUIREMENTS.md - What to build
3. 02-TECH-STACK.md - How to set it up
4. 03-DESIGN-STYLING.md - How it should look
5. 04-ARCHITECTURE.md - How to structure code
6. 05-CONTENT.md - What content to use
```

---

## Commands to Start

```bash
# Create project
npx create-next-app@latest korvol-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd korvol-website

# Install dependencies
npm install framer-motion lucide-react @vercel/analytics

# Start development
npm run dev
```

---

## Important Notes

1. **No blog for now** - May add later with Sanity.io integration
2. **Contact form** - Build the UI, backend integration comes later
3. **Careers page** - Should prominently link to jobs.korvol.com
4. **Color accuracy** - Match the existing Korvol brand exactly (see Design doc)
5. **Content tone** - Professional but approachable, technical but accessible

---

## Post-Launch Roadmap (Not in scope now)

- Sanity.io CMS integration for case studies & testimonials
- Blog section for SEO/content marketing
- Client portal / project status page
- Automated lead capture with Notion integration
- A/B testing for conversion optimization
