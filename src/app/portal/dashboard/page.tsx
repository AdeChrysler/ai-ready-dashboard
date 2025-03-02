'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  const { user } = useUser()

  return (
    <div className="space-y-8 mt-20">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-2 text-gray-400">
          Here's what's happening with your AI agents today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-medium text-gray-200">Total Interactions</h3>
          <p className="mt-2 text-3xl font-bold text-white">12,345</p>
          <p className="mt-1 text-sm text-gray-400">+15% from last month</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-medium text-gray-200">Active Users</h3>
          <p className="mt-2 text-3xl font-bold text-white">1,234</p>
          <p className="mt-1 text-sm text-gray-400">+5% from last month</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-medium text-gray-200">Response Time</h3>
          <p className="mt-2 text-3xl font-bold text-white">1.2s</p>
          <p className="mt-1 text-sm text-gray-400">-0.3s from last month</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-medium text-gray-200">Success Rate</h3>
          <p className="mt-2 text-3xl font-bold text-white">98.5%</p>
          <p className="mt-1 text-sm text-gray-400">+2% from last month</p>
        </Card>
      </div>
    </div>
  )
}
