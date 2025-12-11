import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-korvol-bg-primary px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-korvol-blue to-korvol-blue-light bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-korvol-text-secondary mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
          <Button href="/contact" variant="outline" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
