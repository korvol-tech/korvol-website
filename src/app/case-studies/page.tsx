import { Metadata } from 'next'
import { CaseStudiesPageContent } from './CaseStudiesPageContent'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how Korvol has helped businesses automate workflows, extract data, and build custom solutions. Real results from real projects.',
  openGraph: {
    title: 'Case Studies | Korvol',
    description:
      'See how Korvol has helped businesses automate workflows, extract data, and build custom solutions. Real results from real projects.',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />
}
