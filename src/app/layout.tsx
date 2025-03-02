import '../global.css'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Auth0Provider, ThemeProvider } from '@/components/providers'
import AuthProvider from '@/components/auth/auth-provider'
import { cn } from '@/lib/utils'

const fontSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fontSans.variable}>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Auth0Provider>
              <UserProvider>
                <div
                  className={cn(
                    'fixed h-screen w-full bg-gradient-to-br from-background to-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-slate-900',
                  )}
                />
                <Header />
                <main className={cn('relative z-10')}>{children}</main>
                <Footer />
                <Analytics />
              </UserProvider>
            </Auth0Provider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
