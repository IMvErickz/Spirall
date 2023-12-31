import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LayoutProvider } from '@/components/Layout/LayoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spirall',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='w-screen h-screen flex'>
          <LayoutProvider />
          <div className='w-full h-full flex'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
