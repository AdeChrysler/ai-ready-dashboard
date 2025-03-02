import Balancer from 'react-wrap-balancer'

import Icons from '@/components/icons'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Next.js',
    description: 'App dir, Routing, Layouts, Loading UI and API routes.',
    icon: Icons.nextJs,
  },
  {
    title: 'React 18',
    description: 'Server and Client Components. Use hook.',
    icon: Icons.react,
  },
  {
    title: 'Prisma',
    description: 'ORM using Prisma.',
    icon: Icons.prisma,
  },
  {
    title: 'Shadcn UI',
    description:
      'Re-usable UI components built using Radix UI and Tailwind CSS.',
    icon: Icons.shadcn,
  },
  {
    title: 'Tailwind CSS',
    description: 'Components styling using Tailwind CSS.',
    icon: Icons.tailwindCss,
  },
  {
    title: 'Jest',
    description:
      'Delightful JavaScript Testing Framework with a focus on simplicity.',
    icon: Icons.jest,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Pakai AI Agent{' '}
            <span className="text-blue-400">Untuk Bisnis anda</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hemat Waktu dan Biaya CS Sampai Puluhan Juta
          </p>
        </div>
      </div>
    </section>
  )
}
