'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'bordered'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-korvol-bg-secondary rounded-xl p-6 md:p-8',
          {
            'border border-korvol-bg-tertiary': variant === 'default',
            'border border-korvol-bg-tertiary hover:border-korvol-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-korvol-blue/10':
              variant === 'hover',
            'border-2 border-korvol-bg-tertiary': variant === 'bordered',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
