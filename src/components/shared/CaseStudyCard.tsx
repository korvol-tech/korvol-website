'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CaseStudy } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  className?: string
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={cn(
          'bg-korvol-bg-secondary rounded-xl overflow-hidden border border-korvol-bg-tertiary hover:border-korvol-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-korvol-blue/10 h-full flex flex-col group cursor-pointer',
          className
        )}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-korvol-bg-secondary/80 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <Badge variant="blue" className="self-start mb-3">
            {caseStudy.industry}
          </Badge>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-korvol-blue-light transition-colors">
            {caseStudy.title}
          </h3>

          <p className="text-korvol-text-secondary mb-4 text-sm flex-grow line-clamp-2">
            {caseStudy.challenge}
          </p>

          <div className="space-y-2 mb-4">
            {caseStudy.results.slice(0, 2).map((result, index) => (
              <div
                key={index}
                className="text-sm text-korvol-yellow flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-korvol-yellow rounded-full" />
                {result}
              </div>
            ))}
          </div>

          <div className="flex items-center text-korvol-blue font-medium text-sm group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
