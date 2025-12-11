import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'automated-lead-generation-b2b-saas',
    title: 'Automated Lead Generation for B2B SaaS',
    client: 'GrowthTech Solutions',
    industry: 'B2B Software',
    challenge:
      'The sales team was spending over 20 hours per week on manual prospecting—searching LinkedIn, company websites, and databases to find potential customers. This left little time for actual selling and was limiting their growth potential.',
    solution:
      'We built a custom lead generation pipeline that automatically discovers, qualifies, and enriches prospect data matching their ideal customer profile.',
    solutionDetails: [
      'Developed custom web scrapers to extract company and contact data from multiple sources',
      'Built an enrichment pipeline to validate emails and append company information',
      'Created scoring algorithms to prioritize leads based on ICP fit',
      'Integrated directly with their CRM for seamless handoff to sales team',
      'Set up automated daily runs with deduplication and quality checks',
    ],
    results: [
      '500+ qualified leads delivered per week',
      '80% reduction in manual prospecting time',
      '3x increase in sales pipeline value',
      'Sales team now focuses 100% on closing deals',
    ],
    technologies: ['Python', 'Playwright', 'PostgreSQL', 'AWS Lambda', 'Salesforce API'],
    duration: '4 weeks',
    image: '/images/case-studies/lead-generation.svg',
    featured: true,
  },
  {
    id: '2',
    slug: 'ecommerce-price-monitoring',
    title: 'E-commerce Price Monitoring System',
    client: 'RetailMax',
    industry: 'E-commerce / Retail',
    challenge:
      'As an online retailer competing in a fast-moving market, they needed to track competitor pricing across 50,000+ products in real-time. Manual price checks were impossible at this scale, and they were losing margins by being slow to react to market changes.',
    solution:
      'We developed a distributed price monitoring system that tracks competitor prices 24/7 and automatically triggers repricing rules.',
    solutionDetails: [
      'Built a scalable scraping infrastructure to monitor 50,000+ products across 15 competitor sites',
      'Implemented smart scheduling to prioritize high-value and fast-moving products',
      'Created a real-time alerting system for significant price changes',
      'Developed an admin dashboard for price history visualization and trend analysis',
      'Integrated with their e-commerce platform for automated price adjustments',
    ],
    results: [
      'Real-time monitoring of 50,000+ products',
      'Price updates detected within 15 minutes',
      '15% improvement in margin retention',
      '$200K+ annual savings from competitive pricing',
    ],
    technologies: ['Node.js', 'Playwright', 'Redis', 'PostgreSQL', 'React Dashboard', 'AWS'],
    duration: '6 weeks',
    image: '/images/case-studies/price-monitoring.svg',
    featured: true,
  },
  {
    id: '3',
    slug: 'ai-customer-support-chatbot',
    title: 'AI Customer Support Chatbot',
    client: 'MedConnect',
    industry: 'Healthcare Tech',
    challenge:
      'Their support team was overwhelmed with repetitive queries—password resets, appointment scheduling, basic product questions. Response times were suffering, customer satisfaction was dropping, and hiring more agents wasn\'t scalable.',
    solution:
      'We built an intelligent AI chatbot that handles routine queries automatically while seamlessly escalating complex issues to human agents.',
    solutionDetails: [
      'Trained the chatbot on their knowledge base, FAQs, and historical support tickets',
      'Implemented natural language understanding to accurately interpret customer intent',
      'Built integration with their appointment scheduling and user management systems',
      'Created smart escalation rules that route complex queries to the right specialist',
      'Developed analytics dashboard to track resolution rates and identify knowledge gaps',
    ],
    results: [
      '70% of queries resolved without human intervention',
      'Average response time reduced from 4 hours to 30 seconds',
      '40% reduction in support costs',
      'Customer satisfaction score improved by 25%',
    ],
    technologies: ['OpenAI GPT-4', 'LangChain', 'Next.js', 'PostgreSQL', 'Twilio', 'Intercom API'],
    duration: '5 weeks',
    image: '/images/case-studies/ai-chatbot.svg',
    featured: true,
  },
]

export const getFeaturedCaseStudies = () => caseStudies.filter((cs) => cs.featured)

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((cs) => cs.slug === slug)

export const getAllCaseStudySlugs = () => caseStudies.map((cs) => cs.slug)
