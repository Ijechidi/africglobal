import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AfricGlobal - Connect Exporters and Investors',
  description: 'Connect exporters and investors in agriculture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <div className="flex flex-col">
        <Navbar />
        <body className={` ${inter.className} mt-16`}>{children}</body>
        <Footer />
      </div>
    </html>
  )
}
