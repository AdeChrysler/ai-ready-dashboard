'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LoginButton() {
  const { user, isLoading } = useUser()

  if (isLoading) return null

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/portal/dashboard"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Dashboard
        </Link>
        <Link
          href="/api/auth/logout"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Logout
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/api/auth/login"
        className="text-gray-300 hover:text-white transition-colors"
      >
        Log in
      </Link>
      <Button
        asChild
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Link href="/api/auth/login">
          Daftar Sekarang
        </Link>
      </Button>
    </div>
  )
}
