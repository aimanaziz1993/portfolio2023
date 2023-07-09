import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Aiman's Portfolio 2023`,
  description: 'Fullstack engineer',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
