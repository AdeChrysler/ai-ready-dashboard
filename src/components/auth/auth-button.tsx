'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '@/components/ui/button'

export function AuthButton() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <Button disabled>Loading...</Button>
  }

  if (user) {
    return (
      <Button variant="outline" asChild>
        <a href="/api/auth/logout">Logout</a>
      </Button>
    )
  }

  return (
    <Button variant="default" asChild>
      <a href="/api/auth/login">Login with Google</a>
    </Button>
  )
}
