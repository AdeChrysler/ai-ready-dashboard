'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient',
        className
      )}
    >
      {children}
    </span>
  )
}
