import Link from 'next/link'

import { siteConfig } from '@/data/app'
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <footer className={cn('relative z-10 w-full py-4', 'md:py-0')}>
      <div
        className={cn(
          'container flex flex-col items-center justify-between gap-4',
          'md:h-20',
          'md:flex-row',
        )}
      >
      </div>
    </footer>
  )
}

export default Footer
