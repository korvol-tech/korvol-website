'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Code, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, staggerItem } from '@/lib/animations'

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    description:
      'We learn about your business, challenges, and goals to understand exactly what you need.',
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Solution Design',
    description:
      'Our team designs a custom solution architecture and presents a clear project plan.',
  },
  {
    id: 3,
    icon: Code,
    title: 'Development',
    description:
      'We build your solution with regular check-ins and updates throughout the process.',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Delivery & Support',
    description:
      'Launch your solution with confidence, backed by our ongoing support and maintenance.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-korvol-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="From idea to implementation in four simple steps"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 md:mt-16"
        >
          {/* Mobile: Vertical Timeline */}
          <div className="space-y-8 md:hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={staggerItem}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-korvol-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-korvol-bg-tertiary mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-korvol-blue text-sm font-medium">
                    Step {step.id}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-korvol-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Grid */}
          <div className="hidden md:grid grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-korvol-bg-tertiary" />

            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={staggerItem}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-korvol-blue rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-korvol-blue text-sm font-medium">
                  Step {step.id}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 mt-1">
                  {step.title}
                </h3>
                <p className="text-korvol-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
