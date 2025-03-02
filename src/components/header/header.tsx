import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Fitur', href: '#fitur' },
  { name: 'Harga', href: '#harga' },
  { name: 'Enterprise', href: '#enterprise' },
  { name: 'Dokumentasi', href: '#dokumentasi' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cekat.ai/assets/logo-white-8c1d9b8d.svg"
              alt="Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex ml-10 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LoginButton />
        </div>
      </nav>
    </header>
  )
}
