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
  authors: [{ name: 'Benjamin Donahue' }],
  colorScheme: 'dark',
  creator: 'Benjamin Donahue',

}

function GetYear() {
  return new Date().getFullYear()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robo.className}>{children}
        <p className='mb-4 justify-center flex'>Copyright Benjamin Donahue 2023{GetYear() !== 2023 ? -GetYear() : null}</p>
      </body>

    </html>
  )
}

