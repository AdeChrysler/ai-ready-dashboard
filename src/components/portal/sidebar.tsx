'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/portal/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Conversations',
    href: '/portal/conversations',
    icon: MessageSquare,
  },
  {
    name: 'Team',
    href: '/portal/team',
    icon: Users,
  },
  {
    name: 'Settings',
    href: '/portal/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800">
      <div className="flex flex-col h-full mt-20">

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-2 py-2 text-sm font-medium rounded-lg',
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              U
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">User Name</p>
              <p className="text-xs text-gray-400">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
