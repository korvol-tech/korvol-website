'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({
  children,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
