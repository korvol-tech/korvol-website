export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  category: 'automation' | 'development' | 'data'
  benefits: string[]
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  featured: boolean
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  solutionDetails: string[]
  results: string[]
  technologies: string[]
  duration: string
  image: string
  featured: boolean
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface CareerBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  service: string
  budget?: string
  message: string
}
