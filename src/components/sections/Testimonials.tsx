'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { getFeaturedTestimonials } from '@/data/testimonials'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Testimonials() {
  const testimonials = getFeaturedTestimonials()

  return (
    <section className="py-16 md:py-24 bg-korvol-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
