import { Metadata } from 'next'
import { ServicesPageContent } from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web scraping, browser automation, AI chatbots, Chrome extensions, lead generation, and custom development services tailored for your business.',
  openGraph: {
    title: 'Services | Korvol',
    description:
      'Web scraping, browser automation, AI chatbots, Chrome extensions, lead generation, and custom development services tailored for your business.',
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
