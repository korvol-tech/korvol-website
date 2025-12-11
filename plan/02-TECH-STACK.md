# Korvol Website - Tech Stack Specification

## Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x (App Router) | React framework with SSR/SSG |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 11.x | Animations |
| React | 19.x | UI library (bundled with Next.js) |

---

## Dependencies

### Production Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "@vercel/analytics": "^1.1.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

---

## Project Initialization

```bash
# Create Next.js project with all recommended settings
npx create-next-app@latest korvol-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# Navigate to project
cd korvol-website

# Install additional dependencies
npm install framer-motion lucide-react @vercel/analytics

# Verify installation
npm run dev
```

---

## Configuration Files

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Korvol Brand Colors
        korvol: {
          bg: {
            primary: '#0a0a0f',      // Main background (near black)
            secondary: '#0f0f18',    // Card/section backgrounds
            tertiary: '#1a1a2e',     // Hover states, borders
          },
          blue: {
            DEFAULT: '#3b5bdb',      // Primary blue
            light: '#5c7cfa',        // Light blue accents
            dark: '#2b4bc8',         // Dark blue for hover
          },
          yellow: {
            DEFAULT: '#fbbf24',      // Primary yellow/gold accent
            light: '#fcd34d',        // Light yellow
            dark: '#d97706',         // Dark yellow for hover
          },
          text: {
            primary: '#ffffff',       // Primary text
            secondary: '#a0aec0',     // Secondary/muted text
            tertiary: '#718096',      // Tertiary/disabled text
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add domains for external images if needed
    formats: ['image/avif', 'image/webp'],
  },
  // Enable if you want static export
  // output: 'export',
}

module.exports = nextConfig
```

### `tsconfig.json` (auto-generated, but ensure these paths)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/data/*": ["./src/data/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

---

## Environment Variables

Create `.env.local` for local development:

```env
# Site URL (for SEO/OG tags)
NEXT_PUBLIC_SITE_URL=https://korvol.com

# Contact form endpoint (add later)
# NEXT_PUBLIC_FORM_ENDPOINT=

# Analytics (Vercel Analytics is automatic, but if using others)
# NEXT_PUBLIC_GA_ID=
```

Create `.env.example` for documentation:

```env
NEXT_PUBLIC_SITE_URL=https://korvol.com
```

---

## Vercel Configuration

### `vercel.json` (optional, for custom settings)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Scripts

Add these to `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit"
  }
}
```

---

## Deployment

### Vercel Deployment Steps

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel auto-detects Next.js
4. Set environment variables in Vercel dashboard
5. Deploy

### Domain Setup

1. Add custom domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL is automatic

---

## Analytics Setup

In `src/app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Font Setup

Using Inter from Google Fonts (Next.js optimized):

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

---

## VS Code Settings (optional)

Create `.vscode/settings.json`:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## Future Integrations (Not Now)

These will be added in Phase 2:

- **Sanity.io CMS**: For case studies, testimonials
- **Resend/SendGrid**: For contact form emails
- **Cal.com**: For consultation booking
- **Notion API**: For lead capture to Notion database