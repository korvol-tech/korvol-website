'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-korvol-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-korvol-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-korvol-yellow/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg md:text-xl text-korvol-text-secondary mb-8 md:mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you save time, reduce costs, and scale faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-korvol-text-tertiary text-sm mt-6">
            No commitment. Just a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
