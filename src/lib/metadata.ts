import { Metadata } from 'next'
import { company } from '@/data/company'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korvol.com'

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const fullTitle = title
    ? `${title} | ${company.shortName}`
    : `${company.shortName} - ${company.tagline}`

  const fullDescription = description || company.description

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `${siteUrl}${path}`,
      siteName: company.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
