'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-korvol-blue focus:ring-offset-2 focus:ring-offset-korvol-bg-primary disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
      },
      {
        'bg-korvol-blue hover:bg-korvol-blue-light text-white hover:shadow-lg hover:shadow-korvol-blue/25':
          variant === 'primary',
        'bg-korvol-yellow hover:bg-korvol-yellow-light text-korvol-bg-primary':
          variant === 'secondary',
        'border-2 border-korvol-blue text-korvol-blue hover:bg-korvol-blue hover:text-white':
          variant === 'outline',
        'text-korvol-text-secondary hover:text-white hover:bg-korvol-bg-tertiary':
          variant === 'ghost',
      },
      className
    )

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
