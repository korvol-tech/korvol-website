'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 91, 219, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 91, 219, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-korvol-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-korvol-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-korvol-blue/10 border border-korvol-blue/20 text-korvol-blue-light text-sm font-medium">
              Web Automation Experts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-korvol-text-secondary bg-clip-text text-transparent">
              Automate.
            </span>{' '}
            <span className="bg-gradient-to-r from-korvol-blue to-korvol-blue-light bg-clip-text text-transparent">
              Scale.
            </span>{' '}
            <span className="bg-gradient-to-r from-korvol-yellow to-korvol-yellow-light bg-clip-text text-transparent">
              Succeed.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl text-korvol-text-secondary mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          >
            We build custom web automation, data extraction, and AI-powered solutions that help growing businesses work smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Hire Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
              View Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="mt-12 md:mt-16 pt-8 border-t border-korvol-bg-tertiary"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">20+</p>
                <p className="text-korvol-text-tertiary text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                <p className="text-korvol-text-tertiary text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">24h</p>
                <p className="text-korvol-text-tertiary text-sm">Response Time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
