'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { redirect } from 'next/navigation'
import { Sidebar } from '@/components/portal/sidebar'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return null
  }

  if (!user) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <div className="pl-64">
        <div className="p-8">{children}</div>
      </div>
    </div>
  )
}
