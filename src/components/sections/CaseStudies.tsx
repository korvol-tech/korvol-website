'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CaseStudyCard } from '@/components/shared/CaseStudyCard'
import { Button } from '@/components/ui/Button'
import { getFeaturedCaseStudies } from '@/data/caseStudies'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function CaseStudies() {
  const caseStudies = getFeaturedCaseStudies()

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-korvol-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Case Studies"
          subtitle="See how we've helped businesses automate and scale"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
        >
          {caseStudies.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={staggerItem}>
              <CaseStudyCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <Button href="/case-studies" variant="outline">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
