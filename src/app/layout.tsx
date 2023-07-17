import './midnight.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import head from 'next/head'

const robo = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crystal Abyss Music',
  description: 'crystal abyss music',
  keywords: [
    'crystal abyss music',
    'Ben donahue',
    'Benjamin Donahue',
    'music', 'composer',
  ],
  authors: [{ name: 'Benjamin Donahue' }]

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={robo.className}>{children}</body>
    </html>
  )
}

