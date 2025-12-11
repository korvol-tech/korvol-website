'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Service } from '@/types'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: Service
  showBenefits?: boolean
  className?: string
}

export function ServiceCard({ service, showBenefits = false, className }: ServiceCardProps) {
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-korvol-bg-secondary rounded-xl p-6 border border-korvol-bg-tertiary hover:border-korvol-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-korvol-blue/10 h-full flex flex-col',
        className
      )}
    >
      <div className="w-12 h-12 bg-korvol-blue/10 rounded-lg flex items-center justify-center mb-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-korvol-blue" />}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>

      <p className="text-korvol-text-secondary mb-4 flex-grow">
        {showBenefits ? service.description : service.shortDescription}
      </p>

      {showBenefits && service.benefits.length > 0 && (
        <ul className="space-y-2 mb-6">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-korvol-text-secondary">
              <LucideIcons.Check className="w-4 h-4 text-korvol-blue mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      <Button href="/contact" variant="outline" size="sm" className="mt-auto w-full">
        Get a Quote
      </Button>
    </motion.div>
  )
}
