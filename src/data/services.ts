import { Service } from '@/types'

export const services: Service[] = [
  // Automation Services
  {
    id: 'web-scraping',
    slug: 'web-scraping',
    title: 'Web Scraping & Data Extraction',
    shortDescription: 'Extract valuable data from any website at scale.',
    description:
      'Extract valuable data from any website, at any scale. We build custom scrapers that handle complex sites, anti-bot measures, and deliver clean, structured data.',
    icon: 'Database',
    category: 'automation',
    benefits: [
      'Custom scrapers for any website structure',
      'Handle CAPTCHAs and anti-bot protections',
      'Scheduled automated data collection',
      'Clean, formatted output (JSON, CSV, database)',
    ],
    featured: true,
  },
  {
    id: 'browser-automation',
    slug: 'browser-automation',
    title: 'Browser Automation',
    shortDescription: 'Automate repetitive browser tasks with intelligent scripts.',
    description:
      'Automate repetitive browser tasks with intelligent scripts that work 24/7. From form filling to complex workflows, we make browsers work for you.',
    icon: 'Globe',
    category: 'automation',
    benefits: [
      'Automate any browser-based workflow',
      'Handle login, navigation, and interactions',
      'Error handling and retry logic',
      'Detailed logging and monitoring',
    ],
    featured: true,
  },
  {
    id: 'social-media-automation',
    slug: 'social-media-automation',
    title: 'Social Media Automation',
    shortDescription: 'Scale your social media presence with smart automation.',
    description:
      'Scale your social media presence with smart automation. Post scheduling, engagement tracking, and growth tools built specifically for your needs.',
    icon: 'Share2',
    category: 'automation',
    benefits: [
      'Cross-platform posting automation',
      'Engagement and growth tools',
      'Analytics and reporting',
      'Compliance with platform policies',
    ],
    featured: false,
  },
  {
    id: 'custom-automation',
    slug: 'custom-automation',
    title: 'Custom Automation Pipelines',
    shortDescription: 'Connect your tools and automate complex workflows end-to-end.',
    description:
      'Connect your tools and automate complex workflows end-to-end. We build custom pipelines that integrate multiple systems seamlessly.',
    icon: 'Workflow',
    category: 'automation',
    benefits: [
      'Connect any tools via APIs',
      'Complex multi-step workflows',
      'Error handling and notifications',
      'Scalable infrastructure',
    ],
    featured: false,
  },

  // Development Services
  {
    id: 'web-application',
    slug: 'web-application',
    title: 'Web Application Development',
    shortDescription: 'Full-stack web applications built with modern technologies.',
    description:
      'Full-stack web applications built with modern technologies. From MVPs to enterprise solutions, we build apps that perform.',
    icon: 'Layout',
    category: 'development',
    benefits: [
      'React, Next.js, Node.js expertise',
      'Responsive, accessible design',
      'API development and integration',
      'Cloud deployment and scaling',
    ],
    featured: true,
  },
  {
    id: 'chrome-extensions',
    slug: 'chrome-extensions',
    title: 'Chrome & Browser Extensions',
    shortDescription: 'Custom browser extensions that enhance productivity.',
    description:
      'Custom browser extensions that enhance productivity and integrate with your workflows. From simple utilities to complex tools.',
    icon: 'Puzzle',
    category: 'development',
    benefits: [
      'Chrome, Firefox, Edge support',
      'OAuth and API integrations',
      'Background processing',
      'Chrome Web Store deployment',
    ],
    featured: true,
  },
  {
    id: 'ai-chatbot',
    slug: 'ai-chatbot',
    title: 'AI Chatbot Development',
    shortDescription: 'Intelligent chatbots powered by modern AI.',
    description:
      'Intelligent chatbots powered by modern AI. Customer support, lead qualification, or custom conversational interfaces tailored to your needs.',
    icon: 'Bot',
    category: 'development',
    benefits: [
      'GPT-4 and Claude integration',
      'Custom training and fine-tuning',
      'Multi-channel deployment',
      'Analytics and conversation insights',
    ],
    featured: true,
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Fast, modern websites that convert.',
    description:
      'Fast, modern websites that convert. From landing pages to full marketing sites, built with performance and SEO in mind.',
    icon: 'Globe',
    category: 'development',
    benefits: [
      'Modern, responsive design',
      'SEO optimized',
      'Fast loading speeds',
      'Easy content management',
    ],
    featured: false,
  },

  // Data Services
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Build targeted lead lists from the web.',
    description:
      'Build targeted lead lists from the web. We find and compile prospect data that matches your ideal customer profile.',
    icon: 'Users',
    category: 'data',
    benefits: [
      'Custom search criteria',
      'Verified contact information',
      'CRM-ready formatting',
      'Ongoing lead feeds',
    ],
    featured: true,
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: 'Data Analytics Dashboards',
    shortDescription: 'Turn your data into insights with custom dashboards.',
    description:
      'Turn your data into insights with custom dashboards. Real-time visualization of the metrics that matter to your business.',
    icon: 'BarChart3',
    category: 'data',
    benefits: [
      'Custom KPI tracking',
      'Real-time data updates',
      'Multiple data source integration',
      'Mobile-friendly dashboards',
    ],
    featured: false,
  },
]

export const getFeaturedServices = () => services.filter((s) => s.featured)

export const getServicesByCategory = (category: Service['category']) =>
  services.filter((s) => s.category === category)

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)

export const serviceCategories = [
  { id: 'automation', label: 'Automation Services' },
  { id: 'development', label: 'Development Services' },
  { id: 'data', label: 'Data Services' },
] as const
