# Korvol Website - Design & Styling Specification

## Brand Identity

**Brand Personality:** Professional, Technical, Trustworthy, Modern, Approachable

**Design Philosophy:** Dark, sleek, and premium feel with strategic pops of color. The design should convey technical expertise while remaining accessible to non-technical business owners.

---

## Color Palette

### Primary Colors (from existing Korvol branding)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Background Primary** | `#0a0a0f` | Main page background |
| **Background Secondary** | `#0f0f18` | Card backgrounds, sections |
| **Background Tertiary** | `#1a1a2e` | Hover states, subtle borders |

### Accent Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Korvol Blue** | `#3b5bdb` | Primary buttons, links, icons |
| **Korvol Blue Light** | `#5c7cfa` | Hover states, highlights |
| **Korvol Yellow** | `#fbbf24` | Secondary accent, highlights, important CTAs |
| **Korvol Yellow Light** | `#fcd34d` | Hover states for yellow elements |

### Text Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Text Primary** | `#ffffff` | Headlines, primary text |
| **Text Secondary** | `#a0aec0` | Body text, descriptions |
| **Text Tertiary** | `#718096` | Captions, muted text |

### Gradient

```css
/* Primary gradient for special elements */
background: linear-gradient(135deg, #3b5bdb 0%, #5c7cfa 100%);

/* Subtle background gradient */
background: linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%);
```

---

## Typography

### Font Family

**Primary Font:** Inter (Google Fonts)
- Clean, modern, highly readable
- Excellent for both headings and body text
- Good international character support

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Hero) | 64px / 4rem | 40px / 2.5rem | 700 | 1.1 |
| H2 (Section) | 48px / 3rem | 32px / 2rem | 700 | 1.2 |
| H3 (Card Title) | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.3 |
| H4 (Subtitle) | 20px / 1.25rem | 18px / 1.125rem | 600 | 1.4 |
| Body Large | 18px / 1.125rem | 16px / 1rem | 400 | 1.6 |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 400 | 1.5 |

### Tailwind Classes

```html
<!-- H1 Hero -->
<h1 class="text-4xl md:text-6xl font-bold leading-tight">

<!-- H2 Section -->
<h2 class="text-2xl md:text-4xl font-bold leading-snug">

<!-- H3 Card Title -->
<h3 class="text-xl md:text-2xl font-semibold">

<!-- Body -->
<p class="text-base text-korvol-text-secondary leading-relaxed">

<!-- Small/Caption -->
<span class="text-sm text-korvol-text-tertiary">
```

---

## Spacing System

Use Tailwind's default spacing scale. Key spacings:

| Name | Value | Usage |
|------|-------|-------|
| Section Padding | `py-20` (80px) | Between major sections |
| Container Padding | `px-4 md:px-8` | Side padding |
| Card Padding | `p-6 md:p-8` | Inside cards |
| Gap (Grid) | `gap-6 md:gap-8` | Between grid items |
| Stack | `space-y-4` | Vertical spacing in content |

### Container

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

---

## Component Styles

### Buttons

**Primary Button (Blue)**
```html
<button class="
  bg-korvol-blue 
  hover:bg-korvol-blue-light 
  text-white 
  font-semibold 
  px-6 py-3 
  rounded-lg 
  transition-all 
  duration-200
  hover:shadow-lg
  hover:shadow-korvol-blue/25
">
  Hire Us
</button>
```

**Secondary Button (Yellow/Gold)**
```html
<button class="
  bg-korvol-yellow 
  hover:bg-korvol-yellow-light 
  text-korvol-bg-primary 
  font-semibold 
  px-6 py-3 
  rounded-lg 
  transition-all 
  duration-200
">
  Get a Quote
</button>
```

**Outline Button**
```html
<button class="
  border-2 
  border-korvol-blue 
  text-korvol-blue 
  hover:bg-korvol-blue 
  hover:text-white 
  font-semibold 
  px-6 py-3 
  rounded-lg 
  transition-all 
  duration-200
">
  Learn More
</button>
```

### Cards

**Service Card**
```html
<div class="
  bg-korvol-bg-secondary 
  rounded-xl 
  p-6 
  border 
  border-korvol-bg-tertiary
  hover:border-korvol-blue/50
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-xl
  hover:shadow-korvol-blue/10
">
  <!-- Icon -->
  <div class="w-12 h-12 bg-korvol-blue/10 rounded-lg flex items-center justify-center mb-4">
    <Icon class="w-6 h-6 text-korvol-blue" />
  </div>
  <!-- Content -->
  <h3 class="text-xl font-semibold text-white mb-2">Service Title</h3>
  <p class="text-korvol-text-secondary">Description text...</p>
</div>
```

**Testimonial Card**
```html
<div class="
  bg-korvol-bg-secondary 
  rounded-xl 
  p-8 
  border 
  border-korvol-bg-tertiary
">
  <!-- Quote -->
  <p class="text-korvol-text-secondary italic mb-6">"Quote text..."</p>
  <!-- Author -->
  <div class="flex items-center gap-4">
    <img class="w-12 h-12 rounded-full" />
    <div>
      <p class="font-semibold text-white">Name</p>
      <p class="text-sm text-korvol-text-tertiary">Role, Company</p>
    </div>
  </div>
</div>
```

### Navigation

```html
<nav class="
  fixed top-0 left-0 right-0 
  bg-korvol-bg-primary/80 
  backdrop-blur-md 
  border-b border-korvol-bg-tertiary
  z-50
">
  <!-- Nav content -->
</nav>
```

### Form Inputs

```html
<input class="
  w-full 
  bg-korvol-bg-secondary 
  border border-korvol-bg-tertiary 
  rounded-lg 
  px-4 py-3 
  text-white 
  placeholder-korvol-text-tertiary
  focus:border-korvol-blue 
  focus:ring-2 
  focus:ring-korvol-blue/20
  outline-none
  transition-all
  duration-200
" />
```

---

## Animations

### Framer Motion Variants

**Fade In Up (for sections)**
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}
```

**Stagger Children (for grids)**
```typescript
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}
```

**Scale on Hover (for cards)**
```typescript
const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 }
}
```

**Scroll-triggered Animation**
```typescript
// Use whileInView for scroll animations
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
```

### CSS Animations (Tailwind)

```html
<!-- Subtle pulse for CTAs -->
<button class="animate-pulse-slow">

<!-- Fade in -->
<div class="animate-fade-in">

<!-- Slide up -->
<div class="animate-slide-up">
```

### Animation Guidelines

1. **Subtlety is key** - Animations should enhance, not distract
2. **Performance** - Use `transform` and `opacity` only (GPU accelerated)
3. **Duration** - Keep between 200ms-500ms
4. **Easing** - Use `ease-out` for entrances, `ease-in-out` for hover states
5. **Once** - Most scroll animations should only play once
6. **Reduce motion** - Respect `prefers-reduced-motion`

---

## Icons

Using **Lucide React** for consistent, clean icons.

### Commonly Used Icons

```typescript
import {
  // Services
  Bot,           // Chatbots
  Code2,         // Development
  Database,      // Data
  Globe,         // Web
  Puzzle,        // Extensions
  Workflow,      // Automation
  
  // UI
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  
  // Social
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react'
```

### Icon Sizing

| Context | Size | Tailwind Class |
|---------|------|----------------|
| Small (inline) | 16px | `w-4 h-4` |
| Default | 24px | `w-6 h-6` |
| Medium | 32px | `w-8 h-8` |
| Large (feature) | 48px | `w-12 h-12` |

---

## Responsive Breakpoints

Using Tailwind defaults:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

Always write mobile styles first, then add responsive modifiers:

```html
<!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Shadows

```css
/* Card shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Elevated shadow (hover) */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Glow effect (blue) */
box-shadow: 0 0 30px rgba(59, 91, 219, 0.3);
```

Tailwind classes:
```html
<div class="shadow-lg shadow-korvol-blue/10">
```

---

## Special Effects

### Gradient Text

```html
<span class="
  bg-gradient-to-r 
  from-korvol-blue 
  to-korvol-blue-light 
  bg-clip-text 
  text-transparent
">
  Highlighted Text
</span>
```

### Subtle Grid Background (optional for hero)

```css
.hero-grid {
  background-image: 
    linear-gradient(rgba(59, 91, 219, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 91, 219, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

### Glassmorphism (for nav)

```html
<nav class="bg-korvol-bg-primary/80 backdrop-blur-md">
```

---

## Do's and Don'ts

### Do ✅
- Use ample whitespace
- Keep text readable (good contrast)
- Use animations sparingly
- Maintain visual hierarchy
- Use consistent border radius (rounded-lg or rounded-xl)

### Don't ❌
- Use pure white (#ffffff) for large areas
- Overuse animations
- Mix different border radius styles
- Use gradients everywhere
- Forget mobile responsiveness
