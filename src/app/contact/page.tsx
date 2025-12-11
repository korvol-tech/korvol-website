import { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Korvol for your automation and development needs. Free consultation, 24-hour response time.',
  openGraph: {
    title: 'Contact Us | Korvol',
    description:
      'Get in touch with Korvol for your automation and development needs. Free consultation, 24-hour response time.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
