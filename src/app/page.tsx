import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  )
}
