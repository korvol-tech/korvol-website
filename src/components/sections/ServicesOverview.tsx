'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Button } from '@/components/ui/Button'
import { getFeaturedServices } from '@/data/services'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function ServicesOverview() {
  const services = getFeaturedServices()

  return (
    <section className="py-16 md:py-24 bg-korvol-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Build"
          subtitle="End-to-end solutions for your automation and data needs"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <ServiceCard service={service} />
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
          <Button href="/services" variant="outline">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
