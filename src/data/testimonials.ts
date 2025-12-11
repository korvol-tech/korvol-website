import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Founder & CEO',
    company: 'DataFlow Analytics',
    quote:
      'Korvol transformed how we collect market data. What used to take our team days now happens automatically overnight. Their attention to detail and proactive communication made the whole process seamless.',
    avatar: '/images/placeholder/testimonial-1.jpg',
    featured: true,
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    role: 'Head of Operations',
    company: 'GrowthStack',
    quote:
      'We needed a complex automation that could handle multiple platforms and edge cases. Korvol not only delivered but anticipated problems before they happened. True experts.',
    avatar: '/images/placeholder/testimonial-2.jpg',
    featured: true,
  },
  {
    id: '3',
    name: 'Michael Thompson',
    role: 'CTO',
    company: 'RetailEdge',
    quote:
      "The price monitoring system Korvol built has been running flawlessly for 8 months. It's become critical infrastructure for our business. Highly recommended.",
    avatar: '/images/placeholder/testimonial-3.jpg',
    featured: true,
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'VP of Sales',
    company: 'ConnectB2B',
    quote:
      'Our lead generation used to be hit or miss. Now we have a consistent pipeline of qualified prospects. The ROI on this project was incredible.',
    avatar: '/images/placeholder/testimonial-4.jpg',
    featured: true,
  },
]

export const getFeaturedTestimonials = () => testimonials.filter((t) => t.featured)
