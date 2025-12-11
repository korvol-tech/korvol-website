# Korvol Website - Architecture Specification

## Project Structure

```
korvol-website/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── careers/
│   │   │   └── page.tsx          # Careers page
│   │   ├── case-studies/
│   │   │   └── page.tsx          # Case studies listing (optional)
│   │   └── globals.css           # Global styles
│   │
│   ├── components/               # Reusable components
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── TrustedBy.tsx
│   │   │
│   │   ├── ui/                   # UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── SectionHeading.tsx
│   │   │
│   │   ├── forms/                # Form components
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── shared/               # Shared components
│   │       ├── ServiceCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── CaseStudyCard.tsx
│   │       ├── Icon.tsx
│   │       └── AnimatedSection.tsx
│   │
│   ├── data/                     # Content data (CMS-ready)
│   │   ├── services.ts           # Services content
│   │   ├── testimonials.ts       # Testimonials content
│   │   ├── caseStudies.ts        # Case studies content
│   │   ├── navigation.ts         # Navigation items
│   │   ├── company.ts            # Company info
│   │   └── careers.ts            # Careers page content
│   │
│   ├── lib/                      # Utility functions
│   │   ├── utils.ts              # General utilities
│   │   ├── animations.ts         # Framer Motion variants
│   │   └── metadata.ts           # SEO metadata helpers
│   │
│   ├── types/                    # TypeScript types
│   │   ├── index.ts              # Barrel export
│   │   ├── service.ts
│   │   ├── testimonial.ts
│   │   ├── caseStudy.ts
│   │   └── navigation.ts
│   │
│   └── hooks/                    # Custom React hooks
│       ├── useScrollPosition.ts
│       └── useMediaQuery.ts
│
├── public/
│   ├── images/
│   │   ├── logo.svg              # Korvol logo
│   │   ├── logo-icon.svg         # Icon-only logo
│   │   ├── og-image.png          # Open Graph image
│   │   └── placeholder/          # Placeholder images
│   │       ├── case-study-1.jpg
│   │       ├── case-study-2.jpg
│   │       ├── testimonial-1.jpg
│   │       └── ...
│   └── favicon.ico
│
├── .env.local                    # Environment variables
├── .env.example                  # Example env file
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Data Layer Architecture

### Philosophy: CMS-Ready from Day One

All content is stored in TypeScript files under `src/data/`. This provides:

1. **Type safety** - Content is typed, catching errors at build time
2. **Easy editing** - Non-dev team members can edit with guidance
3. **CMS migration** - Structure mirrors what a CMS would provide
4. **No runtime overhead** - Content is bundled at build time

### Data File Patterns

**`src/data/services.ts`**
```typescript
import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-scraping',
    slug: 'web-scraping',
    title: 'Web Scraping & Data Extraction',
    shortDescription: 'Extract valuable data from any website at scale.',
    description: 'Full description here...',
    icon: 'Database',
    category: 'automation',
    benefits: [
      'Custom scrapers for any website',
      'Handle anti-bot measures',
      'Scheduled automated runs',
    ],
    featured: true,
  },
  // ... more services
]

// Helper functions
export const getFeaturedServices = () => services.filter(s => s.featured)
export const getServicesByCategory = (cat: string) => services.filter(s => s.category === cat)
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
```

**`src/data/testimonials.ts`**
```typescript
import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CTO',
    company: 'TechStartup Inc',
    quote: 'Korvol transformed our data collection process...',
    avatar: '/images/placeholder/testimonial-1.jpg',
    featured: true,
  },
  // ... more testimonials
]
```

**`src/data/company.ts`**
```typescript
export const company = {
  name: 'Korvol Technologies Private Limited',
  shortName: 'Korvol',
  tagline: 'Automate. Scale. Succeed.',
  description: 'Your partner for web automation, data solutions, and custom development.',
  email: 'contact@korvol.com',
  phone: '+91 XXXXXXXXXX', // Add if desired
  location: 'India',
  social: {
    linkedin: 'https://linkedin.com/company/korvol',
    twitter: 'https://twitter.com/korvol',
    github: 'https://github.com/korvol', // if applicable
  },
  foundedYear: 2023,
  jobsUrl: 'https://jobs.korvol.com',
}
```

---

## Type Definitions

**`src/types/service.ts`**
```typescript
export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string // Lucide icon name
  category: 'automation' | 'development' | 'data'
  benefits: string[]
  featured: boolean
}
```

**`src/types/testimonial.ts`**
```typescript
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  featured: boolean
}
```

**`src/types/caseStudy.ts`**
```typescript
export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
  featured: boolean
}
```

---

## Component Architecture

### Component Hierarchy

```
Layout (Header + Footer)
└── Page
    └── Sections (Hero, Services, etc.)
        └── UI Components (Cards, Buttons)
            └── Base Elements (styled HTML)
```

### Component Patterns

**1. Section Components**

Each section is self-contained with its own data fetching:

```typescript
// src/components/sections/ServicesOverview.tsx
'use client'

import { motion } from 'framer-motion'
import { getFeaturedServices } from '@/data/services'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function ServicesOverview() {
  const services = getFeaturedServices()
  
  return (
    <section className="py-20 bg-korvol-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services"
          subtitle="Comprehensive solutions for your automation needs"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map(service => (
            <motion.div key={service.id} variants={staggerItem}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**2. Reusable UI Components**

```typescript
// src/components/ui/Button.tsx
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'font-semibold rounded-lg transition-all duration-200',
          // Size variants
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          // Color variants
          {
            'bg-korvol-blue hover:bg-korvol-blue-light text-white': variant === 'primary',
            'bg-korvol-yellow hover:bg-korvol-yellow-light text-korvol-bg-primary': variant === 'secondary',
            'border-2 border-korvol-blue text-korvol-blue hover:bg-korvol-blue hover:text-white': variant === 'outline',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
```

**3. Animated Section Wrapper**

```typescript
// src/components/shared/AnimatedSection.tsx
'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ 
  children, 
  delay = 0,
  ...props 
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
```

---

## Animation Library

**`src/lib/animations.ts`**
```typescript
import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// Default transition
export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // ease-out
}
```

---

## Utility Functions

**`src/lib/utils.ts`**
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}
```

> Note: Install clsx and tailwind-merge: `npm install clsx tailwind-merge`

---

## SEO & Metadata

**`src/lib/metadata.ts`**
```typescript
import { Metadata } from 'next'
import { company } from '@/data/company'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korvol.com'

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const fullTitle = title 
    ? `${title} | ${company.shortName}` 
    : `${company.shortName} - ${company.tagline}`
  
  const fullDescription = description || company.description

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `${siteUrl}${path}`,
      siteName: company.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
```

**Usage in page:**
```typescript
// src/app/services/page.tsx
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Services',
  description: 'Web automation, scraping, chatbots, and custom development services.',
  path: '/services',
})
```

---

## Future CMS Integration (Phase 2)

When ready to integrate Sanity.io:

### Changes Required

1. **Add Sanity packages:**
   ```bash
   npm install @sanity/client @sanity/image-url next-sanity
   ```

2. **Create Sanity client:**
   ```typescript
   // src/lib/sanity.ts
   import { createClient } from '@sanity/client'
   
   export const client = createClient({
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
     dataset: 'production',
     useCdn: true,
     apiVersion: '2024-01-01',
   })
   ```

3. **Create query functions:**
   ```typescript
   // src/lib/queries.ts
   export async function getServices() {
     return client.fetch(`*[_type == "service"] | order(order asc)`)
   }
   ```

4. **Update data imports:**
   ```typescript
   // Before (hardcoded)
   import { services } from '@/data/services'
   
   // After (from CMS)
   const services = await getServices()
   ```

### Content Types to Move to CMS

1. **Services** - If descriptions change frequently
2. **Testimonials** - As you collect more
3. **Case Studies** - New ones added over time
4. **Team Members** - If you add a team page

### What Stays Hardcoded

1. Navigation structure
2. Company core info (name, tagline)
3. Page layouts
4. UI component styles

---

## Performance Considerations

1. **Images:** Use Next.js `Image` component with proper sizing
2. **Fonts:** Use `next/font` for optimal loading
3. **Animations:** Use `transform` and `opacity` only
4. **Code Splitting:** Next.js handles this automatically
5. **Dynamic Imports:** Use for heavy components

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
})
```

---

## Error Handling

Create error boundaries and 404 pages:

```typescript
// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-korvol-text-secondary mb-8">Page not found</p>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  )
}
```
