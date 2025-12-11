'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      {/* Stylized K Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            className="fill-korvol-blue"
          />
          {/* K Shape */}
          <path
            d="M12 10V30M12 20L24 10M12 20L24 30"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showText && (
        <span className="text-2xl font-bold text-white tracking-tight">
          KORVOL
        </span>
      )}
    </Link>
  )
}
