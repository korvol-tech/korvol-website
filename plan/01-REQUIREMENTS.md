# Korvol Website - Requirements Specification

## Business Context

**Company:** Korvol Technologies Private Limited  
**Industry:** Web Automation Consultancy  
**Target Market:** Startups and SMBs  
**Primary Goal:** Customer acquisition and professional brand presence

---

## Pages Required

### 1. Landing Page (`/`)
The main conversion-focused homepage.

**Sections (in order):**

1. **Hero Section**
   - Catchy headline with tagline
   - Subheadline explaining value proposition
   - Primary CTA: "Hire Us" or "Get a Free Consultation"
   - Secondary CTA: "View Our Services"
   - Optional: Subtle animated background or illustration

2. **Trusted By / Social Proof Bar**
   - Logos of clients (placeholder for now)
   - Or text: "Trusted by 20+ businesses worldwide"

3. **Services Overview**
   - 6-8 service cards with icons
   - Brief description for each
   - Link to full services page

4. **Why Choose Korvol**
   - 3-4 key differentiators
   - Icon + title + description format
   - Examples: "Dedicated Support", "Custom Solutions", "Fast Delivery", "Transparent Pricing"

5. **How It Works**
   - 3-4 step process
   - Visual timeline or numbered cards
   - Steps: Discovery → Solution Design → Development → Delivery & Support

6. **Case Studies Preview**
   - 2-3 featured case studies
   - Card format with image, title, brief result
   - "View All Case Studies" link

7. **Testimonials**
   - Carousel or grid of 3-4 testimonials
   - Photo, name, company, quote

8. **CTA Section**
   - Strong closing call-to-action
   - "Ready to automate your business?"
   - Contact form or link to contact page

9. **Footer**
   - Navigation links
   - Contact info
   - Social links
   - Copyright

---

### 2. Services Page (`/services`)
Detailed breakdown of all services offered.

**Service Categories:**

**Automation Services:**
- Web Scraping & Data Extraction
- Browser Automation (Playwright)
- Social Media Automation
- Custom Automation Pipelines
- Workflow Automation

**Development Services:**
- Web Application Development
- Website Development
- Chrome/Browser Extensions
- AI Chatbot Development
- API Development & Integration

**Data Services:**
- Lead Generation
- Data Analytics Dashboards
- Data Processing & Transformation
- Competitive Intelligence

**Each service card should include:**
- Icon
- Service name
- Description (2-3 sentences)
- Key benefits (3 bullet points)
- "Get a Quote" CTA

---

### 3. Contact Page (`/contact`)

**Elements:**
- Page headline: "Let's Build Something Great Together"
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Company Name (optional)
  - Service Interested In (dropdown)
  - Project Budget Range (dropdown, optional)
  - Message (required)
  - Submit button
- Direct contact information:
  - Email address
  - Phone number (if desired)
  - Location (city/country)
- Response time expectation: "We typically respond within 24 hours"
- Optional: Embedded calendar for booking (placeholder for now)

---

### 4. Careers Page (`/careers`)

**Sections:**

1. **Hero**
   - "Join the Korvol Team"
   - Brief intro about company culture

2. **Why Work With Us**
   - Remote-first culture
   - Work on diverse, challenging projects
   - Learn and grow with real client work
   - Flexible hours
   - Direct mentorship
   - Competitive compensation

3. **What We Look For**
   - Problem solvers
   - Self-starters
   - Comfortable with AI tools
   - Continuous learners

4. **Current Openings CTA**
   - "View Open Positions"
   - Button links to jobs.korvol.com (external)
   - Style as prominent CTA

5. **No Suitable Role?**
   - "Send us your resume anyway"
   - Link to contact or email

---

## Global Components

### Header/Navigation
- Korvol logo (links to home)
- Navigation items: Services, Case Studies, Careers, Contact
- Primary CTA button: "Hire Us" or "Get Started"
- Mobile hamburger menu

### Footer
- Logo
- Quick links: Home, Services, Case Studies, Careers, Contact
- Contact info: Email, Phone (optional), Location
- Social links: LinkedIn, Twitter/X, GitHub (if applicable)
- Copyright: © 2024 Korvol Technologies Private Limited

---

## Functional Requirements

### Forms
- Contact form validation (client-side)
- Form submission handling (can be static initially, wire up later)
- Success/error states
- Loading state during submission

### Navigation
- Smooth scroll for anchor links
- Active state for current page
- Mobile-responsive menu

### Animations
- Page transitions
- Scroll-triggered animations for sections
- Hover effects on cards and buttons
- Subtle background animations (optional)

### SEO
- Proper meta tags per page
- Open Graph tags for social sharing
- Structured data (Organization schema)
- Sitemap generation
- robots.txt

### Performance
- Image optimization
- Lazy loading for below-fold content
- Code splitting
- Lighthouse score > 90

### Analytics
- Vercel Analytics integration
- Track page views
- Track CTA clicks (optional enhancement)

---

## Content Requirements

### Messaging Tone
- Professional but approachable
- Technical credibility without jargon overload
- Action-oriented (verbs like "automate", "scale", "build")
- Confident but not arrogant

### Tagline Options (choose one or suggest better)
- "Automate. Scale. Succeed."
- "Your Automation, Our Expertise"
- "We Build, You Grow"
- "Automation that Delivers"
- "Where Code Meets Business"

### Key Phrases to Include
- "Hire Us"
- "For your automation and data needs"
- "Custom solutions for growing businesses"
- "Let us handle the complexity"
- "Focus on your business, we'll handle the tech"

---

## Placeholder Content Needed

1. **Case Studies (3)**
   - Title, industry, challenge, solution, results
   - Placeholder images

2. **Testimonials (4)**
   - Name, company, role, quote, photo placeholder

3. **Client Logos (6)**
   - Generic placeholder or "Company 1", "Company 2" etc.

---

## Out of Scope (for now)

- Blog
- Client portal
- Actual form submission backend
- CMS integration
- Multi-language support
- Dark/light mode toggle (always dark)
