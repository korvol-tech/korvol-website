import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/caseStudies'
import { CaseStudyDetailContent } from './CaseStudyDetailContent'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
    openGraph: {
      title: `${caseStudy.title} | Korvol Case Study`,
      description: caseStudy.challenge,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetailContent caseStudy={caseStudy} />
}
