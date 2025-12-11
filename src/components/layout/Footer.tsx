'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { footerNavItems } from '@/data/navigation'
import { company } from '@/data/company'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-korvol-bg-secondary border-t border-korvol-bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-korvol-text-secondary max-w-md mb-6">
              {company.description}
            </p>
            <div className="flex gap-4">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-korvol-bg-tertiary rounded-lg flex items-center justify-center text-korvol-text-secondary hover:text-white hover:bg-korvol-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-korvol-bg-tertiary rounded-lg flex items-center justify-center text-korvol-text-secondary hover:text-white hover:bg-korvol-blue transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={company.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-korvol-bg-tertiary rounded-lg flex items-center justify-center text-korvol-text-secondary hover:text-white hover:bg-korvol-blue transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-korvol-text-secondary hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-korvol-text-secondary hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-korvol-text-secondary">
                <MapPin className="w-4 h-4" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-korvol-bg-tertiary flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-korvol-text-tertiary text-sm">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="text-korvol-text-tertiary text-sm">
            {company.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
