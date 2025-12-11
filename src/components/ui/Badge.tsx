'use client'

import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'blue' | 'yellow'
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        {
          'bg-korvol-bg-tertiary text-korvol-text-secondary': variant === 'default',
          'bg-korvol-blue/20 text-korvol-blue-light': variant === 'blue',
          'bg-korvol-yellow/20 text-korvol-yellow': variant === 'yellow',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
