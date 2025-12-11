'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Mail, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { careerBenefits, whatWeLookFor } from '@/data/careers'
import { company } from '@/data/company'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export function CareersPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-korvol-bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-korvol-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-korvol-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Join the Korvol Team
            </h1>
            <p className="text-lg md:text-xl text-korvol-text-secondary leading-relaxed mb-8">
              Build cutting-edge automation solutions with us. At Korvol, you&apos;ll work on diverse, challenging projects for clients across industries.
            </p>
            <p className="text-korvol-text-secondary">
              We believe in learning by doing, direct mentorship, and building real solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-korvol-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Korvol?" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
          >
            {careerBenefits.map((benefit) => {
              const IconComponent = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>

              return (
                <motion.div
                  key={benefit.id}
                  variants={staggerItem}
                  className="bg-korvol-bg-primary rounded-xl p-6 border border-korvol-bg-tertiary"
                >
                  <div className="w-12 h-12 bg-korvol-blue/10 rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-korvol-blue" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-korvol-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 md:py-24 bg-korvol-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What We Look For
              </h2>
              <p className="text-korvol-text-secondary mb-8 leading-relaxed">
                We&apos;re not just looking for great developers—we&apos;re looking for people who can think critically, communicate clearly, and grow with us.
              </p>

              <ul className="space-y-4">
                {whatWeLookFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-korvol-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <LucideIcons.Check className="w-4 h-4 text-korvol-blue" />
                    </div>
                    <span className="text-korvol-text-secondary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-korvol-bg-secondary rounded-xl p-8 border border-korvol-bg-tertiary"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Our Tech Stack
              </h3>
              <p className="text-korvol-text-secondary mb-6">
                You&apos;ll work with modern tools and technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript',
                  'Next.js',
                  'React',
                  'Node.js',
                  'Playwright',
                  'Python',
                  'AI/LLM APIs',
                  'PostgreSQL',
                  'Redis',
                  'Docker',
                  'AWS',
                  'Vercel',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-korvol-bg-tertiary rounded-lg text-sm text-korvol-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-korvol-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              View Open Positions
            </h2>
            <p className="text-lg text-korvol-text-secondary mb-8 max-w-2xl mx-auto">
              Check out our current openings and find the perfect role for you.
            </p>

            <Button
              href={company.jobsUrl}
              external
              size="lg"
              className="mb-6"
            >
              Explore Careers
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>

            <div className="pt-8 border-t border-korvol-bg-tertiary">
              <p className="text-korvol-text-secondary mb-4">
                Don&apos;t see a perfect fit? Send us your resume anyway—we&apos;re always looking for talented people.
              </p>
              <a
                href={`mailto:${company.careersEmail}`}
                className="inline-flex items-center gap-2 text-korvol-blue hover:text-korvol-blue-light transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                {company.careersEmail}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
