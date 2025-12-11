'use client'

import { motion } from 'framer-motion'
import { Settings, Users, Layers, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, staggerItem } from '@/lib/animations'

const differentiators = [
  {
    id: 1,
    icon: Settings,
    title: 'Custom-Built Solutions',
    description:
      'No templates or one-size-fits-all approaches. Every solution is tailored to your specific business needs.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Direct communication with our team. No ticket queues or chatbot runarounds—real humans who understand your project.',
  },
  {
    id: 3,
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'We build for today and tomorrow. Our solutions grow with your business without costly rebuilds.',
  },
  {
    id: 4,
    icon: FileText,
    title: 'Transparent Process',
    description:
      "Clear timelines, honest pricing, and regular updates. You'll always know where your project stands.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-korvol-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Korvol?"
          subtitle="We're not just developers—we're your technical partners"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="text-center p-6"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-korvol-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-korvol-blue" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-korvol-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
