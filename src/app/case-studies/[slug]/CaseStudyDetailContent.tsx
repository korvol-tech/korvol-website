'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Building2, Check, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CaseStudy } from '@/types'
import { caseStudies } from '@/data/caseStudies'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

interface Props {
  caseStudy: CaseStudy
}

export function CaseStudyDetailContent({ caseStudy }: Props) {
  // Get other case studies for "More Case Studies" section
  const otherCaseStudies = caseStudies.filter((cs) => cs.id !== caseStudy.id).slice(0, 2)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-korvol-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center text-korvol-text-secondary hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>

            {/* Badge */}
            <Badge variant="blue" className="mb-4">
              {caseStudy.industry}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-korvol-text-secondary">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-korvol-blue" />
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-korvol-blue" />
                <span>{caseStudy.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12 md:pb-16 bg-korvol-bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-korvol-bg-primary/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-korvol-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-12 md:space-y-16"
          >
            {/* Challenge */}
            <motion.div variants={staggerItem}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Challenge
              </h2>
              <p className="text-korvol-text-secondary leading-relaxed text-lg">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div variants={staggerItem}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Solution
              </h2>
              <p className="text-korvol-text-secondary leading-relaxed text-lg mb-6">
                {caseStudy.solution}
              </p>

              <div className="bg-korvol-bg-primary rounded-xl p-6 border border-korvol-bg-tertiary">
                <h3 className="text-lg font-semibold text-white mb-4">What We Built</h3>
                <ul className="space-y-3">
                  {caseStudy.solutionDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-korvol-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-korvol-blue" />
                      </div>
                      <span className="text-korvol-text-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div variants={staggerItem}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-korvol-bg-primary rounded-xl p-6 border border-korvol-bg-tertiary"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-3 h-3 bg-korvol-yellow rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-white font-medium">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={staggerItem}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-korvol-bg-primary rounded-lg text-korvol-text-secondary border border-korvol-bg-tertiary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-korvol-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Similar Results?
            </h2>
            <p className="text-korvol-text-secondary mb-8 text-lg">
              Let&apos;s discuss how we can help automate and scale your business.
            </p>
            <Button href="/contact" size="lg">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* More Case Studies */}
      {otherCaseStudies.length > 0 && (
        <section className="py-16 md:py-20 bg-korvol-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              More Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-studies/${cs.slug}`}
                  className="bg-korvol-bg-primary rounded-xl p-6 border border-korvol-bg-tertiary hover:border-korvol-blue/30 transition-all group"
                >
                  <Badge variant="blue" className="mb-3">
                    {cs.industry}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-korvol-blue-light transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-korvol-text-secondary text-sm mb-4 line-clamp-2">
                    {cs.challenge}
                  </p>
                  <span className="inline-flex items-center text-korvol-blue text-sm font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
