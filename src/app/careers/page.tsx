import { Metadata } from 'next'
import { CareersPageContent } from './CareersPageContent'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Korvol and work on cutting-edge automation projects. Remote-first culture, direct mentorship, and growth opportunities.',
  openGraph: {
    title: 'Careers | Join the Korvol Team',
    description:
      'Join Korvol and work on cutting-edge automation projects. Remote-first culture, direct mentorship, and growth opportunities.',
  },
}

export default function CareersPage() {
  return <CareersPageContent />
}
