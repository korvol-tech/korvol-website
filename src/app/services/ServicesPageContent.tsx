'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { CTASection } from '@/components/sections/CTASection'
import { serviceCategories, getServicesByCategory } from '@/data/services'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'

export function ServicesPageContent() {
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-korvol-text-secondary leading-relaxed">
              Comprehensive solutions for automation, development, and data. We build custom tools that help your business work smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => {
        const categoryServices = getServicesByCategory(category.id as 'automation' | 'development' | 'data')

        return (
          <section
            key={category.id}
            className={`py-16 md:py-20 ${
              categoryIndex % 2 === 0 ? 'bg-korvol-bg-secondary' : 'bg-korvol-bg-primary'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading title={category.label} />

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12"
              >
                {categoryServices.map((service) => (
                  <motion.div key={service.id} variants={staggerItem}>
                    <ServiceCard service={service} showBenefits />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
