'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Testimonial } from '@/types'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-korvol-bg-secondary rounded-xl p-8 border border-korvol-bg-tertiary h-full flex flex-col',
        className
      )}
    >
      <Quote className="w-8 h-8 text-korvol-blue mb-4" />

      <p className="text-korvol-text-secondary italic mb-6 flex-grow leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-korvol-bg-tertiary flex items-center justify-center text-korvol-blue font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-korvol-text-tertiary">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
