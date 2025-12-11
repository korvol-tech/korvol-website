'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { company } from '@/data/company'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: company.location,
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
  },
]

export function ContactPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-korvol-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something Great
            </h1>
            <p className="text-lg md:text-xl text-korvol-text-secondary leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-korvol-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 lg:col-span-1"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 bg-korvol-bg-secondary rounded-xl border border-korvol-bg-tertiary"
                >
                  <div className="w-12 h-12 bg-korvol-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-korvol-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-korvol-text-tertiary mb-1">{info.title}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-korvol-blue transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Additional Info Card */}
              <motion.div
                variants={staggerItem}
                className="p-6 bg-korvol-bg-secondary rounded-xl border border-korvol-bg-tertiary"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Prefer to schedule a call?
                </h3>
                <p className="text-korvol-text-secondary text-sm mb-4">
                  We&apos;re happy to hop on a quick call to discuss your project needs.
                </p>
                <p className="text-korvol-text-tertiary text-sm">
                  Calendar booking coming soon...
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-korvol-bg-secondary rounded-xl p-6 md:p-8 border border-korvol-bg-tertiary">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
