import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { company } from '@/data/company'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} - Web Automation & Data Solutions for Growing Businesses`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    'web automation',
    'web scraping',
    'data extraction',
    'browser automation',
    'AI chatbot',
    'chrome extension development',
    'lead generation',
    'custom automation',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://korvol.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: company.name,
    title: `${company.shortName} - ${company.tagline}`,
    description: company.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.shortName} - ${company.tagline}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
