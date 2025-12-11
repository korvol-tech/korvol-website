'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { caseStudies } from '@/data/caseStudies'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { CTASection } from '@/components/sections/CTASection'

export function CaseStudiesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-korvol-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-korvol-text-secondary leading-relaxed">
              Real projects, real results. See how we&apos;ve helped businesses automate their workflows and scale their operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-20 bg-korvol-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8 md:space-y-12"
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.id}
                variants={staggerItem}
                className="bg-korvol-bg-primary rounded-2xl overflow-hidden border border-korvol-bg-tertiary hover:border-korvol-blue/30 transition-all group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-korvol-bg-primary/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Badge variant="blue" className="self-start mb-4">
                      {caseStudy.industry}
                    </Badge>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-korvol-blue-light transition-colors">
                      {caseStudy.title}
                    </h2>

                    <p className="text-korvol-text-secondary mb-6 leading-relaxed">
                      {caseStudy.challenge.slice(0, 150)}...
                    </p>

                    {/* Results Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-korvol-yellow rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-korvol-text-secondary">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center text-korvol-blue hover:text-korvol-blue-light font-medium transition-colors group/link"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
